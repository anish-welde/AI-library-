// ── State ──────────────────────────────────────────────────────
let currentSection = "all";
const coverCache = {}; // bookId -> cover URL or null

// ── Security: HTML Sanitization ────────────────────────────────
function sanitizeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── Book Cover Fetching ─────────────────────────────────────────
async function fetchCover(book) {
  if (coverCache[book.id] !== undefined) return coverCache[book.id];
  try {
    const q = encodeURIComponent(`intitle:${book.title} inauthor:${book.author.split(",")[0]}`);
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=1&fields=items/volumeInfo/imageLinks`);
    const data = await res.json();
    const raw = data?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || null;
    // Use higher-res version and force HTTPS
    const url = raw ? raw.replace("http://", "https://").replace("zoom=1", "zoom=0").replace("&edge=curl", "") : null;
    coverCache[book.id] = url;
    return url;
  } catch {
    coverCache[book.id] = null;
    return null;
  }
}

function applyCoverToElement(el, url) {
  if (!url || !el || !url.startsWith("https://")) return;
  const img = document.createElement("img");
  img.src = url;
  img.alt = "";
  img.className = "cover-photo";
  img.onload = () => {
    el.querySelector(".book-cover-gradient")?.style.setProperty("opacity", "0");
    el.querySelector(".book-cover-icon")?.style.setProperty("display", "none");
    el.appendChild(img);
  };
}

async function loadCovers() {
  for (const book of BOOKS) {
    const url = await fetchCover(book);
    if (url) {
      const card = bookGrid.querySelector(`.book-card[data-id="${book.id}"] .book-cover`);
      applyCoverToElement(card, url);
    }
  }
}

// ── DOM References ─────────────────────────────────────────────
const libraryView = document.getElementById("library-view");
const bookView = document.getElementById("book-view");
const bookGrid = document.getElementById("book-grid");
const bookDetail = document.getElementById("book-detail");
const backBtn = document.getElementById("back-btn");
const sectionTabs = document.getElementById("section-tabs");

// ── Section Labels ─────────────────────────────────────────────
const SECTION_LABELS = {
  leadership: "Leadership",
  "ai-trends": "AI & Humanities",
  product: "Product Dev",
  technical: "AI Technical"
};

// ── Render Book Grid ───────────────────────────────────────────
function renderGrid(section) {
  const filtered = section === "all"
    ? BOOKS
    : BOOKS.filter(b => b.section === section);

  bookGrid.innerHTML = filtered.map(book => `
    <div class="book-card" data-id="${book.id}">
      <div class="book-cover" data-id="${book.id}">
        <div class="book-cover-gradient" style="background: ${book.gradient}"></div>
        <span class="book-cover-icon">${book.icon}</span>
        <span class="book-cover-number">${book.id}</span>
      </div>
      <div class="book-info">
        <span class="book-tag ${sanitizeHTML(book.section)}">${sanitizeHTML(SECTION_LABELS[book.section])}</span>
        <div class="book-title">${sanitizeHTML(book.title)}</div>
        <div class="book-author">${sanitizeHTML(book.author)}</div>
      </div>
    </div>
  `).join("");

  // Load real cover photos
  loadCovers();

  // Attach click handlers
  bookGrid.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      const book = BOOKS.find(b => b.id === id);
      if (book) openBook(book);
    });
  });
}

// ── Render Book Detail ─────────────────────────────────────────
function openBook(book) {
  const chaptersHTML = book.chapters.map((ch, ci) => {
    const subsectionsHTML = ch.subsections.map(sub => {
      const itemsHTML = sub.items.map(item => `
        <div class="principle">
          <div class="principle-name">${sanitizeHTML(item.name)}</div>
          <div class="principle-desc">${sanitizeHTML(item.desc)}</div>
        </div>
      `).join("");

      return `
        <div class="sub-section-label">${sanitizeHTML(sub.label)}</div>
        ${itemsHTML}
      `;
    }).join("");

    return `
      <div class="chapter" data-chapter="${ci}">
        <button class="chapter-toggle">
          <span class="chapter-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
          <span>${sanitizeHTML(ch.title)}</span>
        </button>
        <div class="chapter-content">
          <div class="chapter-body">
            ${ch.description ? `<div class="chapter-description">${sanitizeHTML(ch.description)}</div>` : ""}
            ${subsectionsHTML}
          </div>
        </div>
      </div>
    `;
  }).join("");

  bookDetail.innerHTML = `
    <div class="detail-cover">
      <div class="book-cover-gradient" style="background: ${book.gradient}"></div>
      <span class="book-cover-icon">${book.icon}</span>
    </div>
    <div class="detail-meta">
      <h2>${sanitizeHTML(book.title)}</h2>
      ${book.subtitle ? `<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px">${sanitizeHTML(book.subtitle)}</div>` : ""}
      <div class="author">${sanitizeHTML(book.author)}</div>
      <span class="book-tag ${sanitizeHTML(book.section)}">${sanitizeHTML(SECTION_LABELS[book.section])}</span>
    </div>

    <div class="detail-summary">
      <h3>Summary</h3>
      <p>${sanitizeHTML(book.summary)}</p>
    </div>

    <div class="placeholder">
      <div class="placeholder-icon">\u{1F4F7}</div>
      <div class="placeholder-text">Book cover image placeholder</div>
    </div>

    <div class="chapter-section-title">Chapters & Key Learnings</div>
    ${chaptersHTML}

    <div class="placeholder" style="margin-top:28px">
      <div class="placeholder-icon">\u{1F4DD}</div>
      <div class="placeholder-text">Personal notes & highlights coming soon</div>
    </div>

    <div class="placeholder">
      <div class="placeholder-icon">\u{2B50}</div>
      <div class="placeholder-text">Rating & reading progress coming soon</div>
    </div>
  `;

  // Attach accordion handlers
  bookDetail.querySelectorAll(".chapter-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const chapter = toggle.closest(".chapter");
      chapter.classList.toggle("open");
    });
  });

  // Show book view with slide-in animation
  bookView.classList.remove("hidden");
  bookView.scrollTop = 0;

  // Apply cover photo to detail view
  const detailCoverEl = bookDetail.querySelector(".detail-cover");
  if (coverCache[book.id]) {
    applyCoverToElement(detailCoverEl, coverCache[book.id]);
  } else {
    fetchCover(book).then(url => applyCoverToElement(detailCoverEl, url));
  }
}

function closeBook() {
  bookView.classList.add("hidden");
}

// ── Tab Handling ───────────────────────────────────────────────
sectionTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;

  sectionTabs.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  currentSection = tab.dataset.section;
  renderGrid(currentSection);
});

// ── Back Button ───────────────────────────────────────────────
backBtn.addEventListener("click", closeBook);

// ── Handle browser back gesture ───────────────────────────────
window.addEventListener("popstate", () => {
  if (!bookView.classList.contains("hidden")) {
    closeBook();
  }
});

// ── Init ──────────────────────────────────────────────────────
renderGrid("all");
