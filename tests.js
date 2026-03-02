/**
 * AI Library - Test Suite
 * Run with: node tests.js
 *
 * Tests cover:
 *   1. Books data integrity
 *   2. Section filtering logic
 *   3. sanitizeHTML() security function
 *   4. Cover URL validation logic
 */

"use strict";
const fs = require("fs");
const vm = require("vm");

// ── Load books.js without modifying it ─────────────────────────
// `const` doesn't attach to the vm context global, so we rewrite the
// declaration to a plain assignment so the context object captures it.
const booksCode = fs.readFileSync(__dirname + "/books.js", "utf8")
  .replace(/^\s*(const|let|var)\s+BOOKS\s*=/, "BOOKS =");
const booksCtx = {};
vm.runInNewContext(booksCode, booksCtx);
const BOOKS = booksCtx.BOOKS;

// ── Minimal test runner ─────────────────────────────────────────
let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${label}`);
    failed++;
  }
}

function section(title) {
  console.log(`\n── ${title} ──`);
}

// ── Replicate sanitizeHTML() from app.js ───────────────────────
function sanitizeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── Replicate URL validation logic from app.js ─────────────────
function isValidCoverUrl(url) {
  return !(!url || !url.startsWith("https://"));
}

// ── Replicate filtering logic from app.js ─────────────────────
const VALID_SECTIONS = ["leadership", "ai-trends", "product", "technical"];
function filterBooks(section) {
  return section === "all" ? BOOKS : BOOKS.filter(b => b.section === section);
}

// ══════════════════════════════════════════════════════════════
// 1. BOOKS DATA INTEGRITY
// ══════════════════════════════════════════════════════════════
section("Books Data Integrity");

assert(Array.isArray(BOOKS), "BOOKS is an array");
assert(BOOKS.length === 16, `BOOKS contains 16 entries (got ${BOOKS.length})`);

// Check all IDs are unique and in range 1-16
const ids = BOOKS.map(b => b.id);
const uniqueIds = new Set(ids);
assert(uniqueIds.size === 16, "All book IDs are unique");
assert(ids.every(id => id >= 1 && id <= 16), "All book IDs are in range 1–16");

// Required fields on every book
const requiredFields = ["id", "title", "author", "section", "icon", "gradient", "summary", "chapters"];
BOOKS.forEach(book => {
  requiredFields.forEach(field => {
    assert(
      book[field] !== undefined && book[field] !== null && book[field] !== "",
      `Book ${book.id} ("${book.title}") has non-empty field: ${field}`
    );
  });
});

// Sections are valid
BOOKS.forEach(book => {
  assert(
    VALID_SECTIONS.includes(book.section),
    `Book ${book.id} section "${book.section}" is a valid section`
  );
});

// Every book has at least 1 chapter
BOOKS.forEach(book => {
  assert(
    Array.isArray(book.chapters) && book.chapters.length >= 1,
    `Book ${book.id} has at least 1 chapter`
  );
});

// Every chapter has title and subsections
BOOKS.forEach(book => {
  book.chapters.forEach((ch, ci) => {
    assert(
      typeof ch.title === "string" && ch.title.length > 0,
      `Book ${book.id} chapter ${ci + 1} has a non-empty title`
    );
    assert(
      Array.isArray(ch.subsections) && ch.subsections.length >= 1,
      `Book ${book.id} chapter ${ci + 1} has at least 1 subsection`
    );

    // Every subsection has label and items
    ch.subsections.forEach((sub, si) => {
      assert(
        typeof sub.label === "string" && sub.label.length > 0,
        `Book ${book.id} ch${ci + 1} sub${si + 1} has a label`
      );
      assert(
        Array.isArray(sub.items) && sub.items.length >= 1,
        `Book ${book.id} ch${ci + 1} sub${si + 1} has at least 1 item`
      );

      // Every item has name and desc
      sub.items.forEach((item, ii) => {
        assert(
          typeof item.name === "string" && item.name.length > 0,
          `Book ${book.id} ch${ci + 1} sub${si + 1} item${ii + 1} has a name`
        );
        assert(
          typeof item.desc === "string" && item.desc.length > 0,
          `Book ${book.id} ch${ci + 1} sub${si + 1} item${ii + 1} has a desc`
        );
      });
    });
  });
});

// ══════════════════════════════════════════════════════════════
// 2. SECTION FILTERING LOGIC
// ══════════════════════════════════════════════════════════════
section("Section Filtering Logic");

assert(filterBooks("all").length === 16, 'filterBooks("all") returns all 16 books');

const leadershipBooks = filterBooks("leadership");
assert(leadershipBooks.length > 0, 'filterBooks("leadership") returns some books');
assert(leadershipBooks.every(b => b.section === "leadership"), 'filterBooks("leadership") returns only leadership books');

const aiBooks = filterBooks("ai-trends");
assert(aiBooks.length > 0, 'filterBooks("ai-trends") returns some books');
assert(aiBooks.every(b => b.section === "ai-trends"), 'filterBooks("ai-trends") returns only ai-trends books');

const productBooks = filterBooks("product");
assert(productBooks.length > 0, 'filterBooks("product") returns some books');
assert(productBooks.every(b => b.section === "product"), 'filterBooks("product") returns only product books');

const technicalBooks = filterBooks("technical");
assert(technicalBooks.length > 0, 'filterBooks("technical") returns some books');
assert(technicalBooks.every(b => b.section === "technical"), 'filterBooks("technical") returns only technical books');

// Book 16 (AI Engineering by Chip Huyen) is in the technical section
const book16 = BOOKS.find(b => b.id === 16);
assert(book16 !== undefined, "Book 16 (AI Engineering) exists");
assert(book16.title === "AI Engineering", `Book 16 title is "AI Engineering" (got "${book16?.title}")`);
assert(book16.section === "technical", `Book 16 is in "technical" section`);
assert(technicalBooks.some(b => b.id === 16), "Book 16 appears in technical filter results");

// All sections together account for all 16 books
const totalFiltered = VALID_SECTIONS.reduce((sum, s) => sum + filterBooks(s).length, 0);
assert(totalFiltered === 16, `All section filters together cover all 16 books (got ${totalFiltered})`);

// ══════════════════════════════════════════════════════════════
// 3. sanitizeHTML() SECURITY TESTS
// ══════════════════════════════════════════════════════════════
section("sanitizeHTML() Security");

assert(sanitizeHTML("<script>alert(1)</script>") === "&lt;script&gt;alert(1)&lt;/script&gt;", "Escapes < and >");
assert(sanitizeHTML('"><img src=x onerror=alert(1)>') === "&quot;&gt;&lt;img src=x onerror=alert(1)&gt;", "Escapes \" and < and >");
assert(sanitizeHTML("&") === "&amp;", "Escapes &");
assert(sanitizeHTML("'") === "&#39;", "Escapes single quote");
assert(sanitizeHTML("Normal text") === "Normal text", "Passes normal text unchanged");
assert(sanitizeHTML("Chip Huyen") === "Chip Huyen", "Author name with no special chars unchanged");
assert(sanitizeHTML("AI Engineering") === "AI Engineering", "Book title with no special chars unchanged");
assert(sanitizeHTML(42) === "42", "Coerces non-strings to string");
assert(sanitizeHTML("<b>Bold & 'quoted'</b>") === "&lt;b&gt;Bold &amp; &#39;quoted&#39;&lt;/b&gt;", "Handles multiple special chars in one string");

// ══════════════════════════════════════════════════════════════
// 4. COVER URL VALIDATION
// ══════════════════════════════════════════════════════════════
section("Cover URL Validation");

assert(isValidCoverUrl("https://books.google.com/cover.jpg"), "Accepts valid https:// URL");
assert(!isValidCoverUrl("http://books.google.com/cover.jpg"), "Rejects http:// URL");
assert(!isValidCoverUrl("javascript:alert(1)"), "Rejects javascript: URL");
assert(!isValidCoverUrl(null), "Rejects null");
assert(!isValidCoverUrl(""), "Rejects empty string");
assert(!isValidCoverUrl(undefined), "Rejects undefined");
assert(isValidCoverUrl("https://books.googleusercontent.com/thumbnail/v1/img.jpg"), "Accepts Google Books thumbnail URL");

// ══════════════════════════════════════════════════════════════
// RESULTS
// ══════════════════════════════════════════════════════════════
console.log(`\n══ Results: ${passed} passed, ${failed} failed ══\n`);
if (failed > 0) process.exit(1);
