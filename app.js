// ── State ──────────────────────────────────────────────────────
let currentSection = "all";

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
      <div class="book-cover">
        <div class="book-cover-gradient" style="background: ${book.gradient}"></div>
        <span class="book-cover-icon">${book.icon}</span>
        <span class="book-cover-number">${book.id}</span>
      </div>
      <div class="book-info">
        <span class="book-tag ${book.section}">${SECTION_LABELS[book.section]}</span>
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
      </div>
    </div>
  `).join("");

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
          <div class="principle-name">${item.name}</div>
          <div class="principle-desc">${item.desc}</div>
        </div>
      `).join("");

      return `
        <div class="sub-section-label">${sub.label}</div>
        ${itemsHTML}
      `;
    }).join("");

    return `
      <div class="chapter" data-chapter="${ci}">
        <button class="chapter-toggle">
          <span class="chapter-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
          <span>${ch.title}</span>
        </button>
        <div class="chapter-content">
          <div class="chapter-body">
            ${ch.description ? `<div class="chapter-description">${ch.description}</div>` : ""}
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
      <h2>${book.title}</h2>
      ${book.subtitle ? `<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px">${book.subtitle}</div>` : ""}
      <div class="author">${book.author}</div>
      <span class="book-tag ${book.section}">${SECTION_LABELS[book.section]}</span>
    </div>

    <div class="detail-summary">
      <h3>Summary</h3>
      <p>${book.summary}</p>
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
