(function () {
  "use strict";

  const CLASS_LABEL = {
    felony: "Felony",
    misdemeanor: "Misdemeanor",
    infraction: "Infraction",
  };

  const state = {
    query: "",
    category: "all",
    selected: new Set(), // set of code strings
    detailCode: null,
  };

  // ---------------- DOM refs ----------------
  const $ = (id) => document.getElementById(id);
  const catList = $("catList");
  const entryList = $("entryList");
  const emptyState = $("emptyState");
  const resultTitle = $("resultTitle");
  const resultCount = $("resultCount");
  const searchInput = $("searchInput");
  function updateSearchClear() {
    searchClear.classList.toggle("show", state.query.length > 0);
  }

  const citationPad = $("citationPad");
  const citationItems = $("citationItems");
  const citationEmpty = $("citationEmpty");
  const citationCount = $("citationCount");
  const totalTime = $("totalTime");
  const totalFine = $("totalFine");
  const citationToggle = $("citationToggle");
  const citationClose = $("citationClose");
  const scrim = $("scrim");
  const resetBtn = $("resetBtn");

  const modal = $("detailModal");
  const modalClose = $("modalClose");
  const modalCode = $("modalCode");
  const modalName = $("modalName");
  const modalClass = $("modalClass");
  const modalTitle = $("modalTitle");
  const modalDesc = $("modalDesc");
  const modalTime = $("modalTime");
  const modalFine = $("modalFine");
  const modalAdd = $("modalAdd");

  // ---------------- helpers ----------------
  function fmtMoney(n) {
    return "$" + Number(n).toLocaleString("en-US");
  }

  function fmtTime(min) {
    if (min <= 0) return "—";
    if (min < 60) return min + " menit";
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m ? `${h} jam ${m} menit` : `${h} jam`;
  }

  function byId(code) {
    return PENAL_CODES.find((c) => c.code === code);
  }

  // ---------------- sidebar ----------------
  function renderSidebar() {
    const counts = { all: PENAL_CODES.length };
    CATEGORIES.forEach((c) => (counts[c.id] = 0));
    PENAL_CODES.forEach((c) => (counts[c.title] = (counts[c.title] || 0) + 1));

    const items = [{ id: "all", label: "Semua Kategori" }, ...CATEGORIES];

    catList.innerHTML = items
      .map(
        (c) => `
      <li class="cat-item ${state.category === c.id ? "active" : ""}" data-cat="${c.id}">
        <span>${c.label}</span>
        <span class="cat-count">${counts[c.id] || 0}</span>
      </li>`
      )
      .join("");

    catList.querySelectorAll(".cat-item").forEach((el) => {
      el.addEventListener("click", () => {
        state.category = el.dataset.cat;
        renderSidebar();
        renderList();
      });
    });
  }

  // ---------------- main list ----------------
  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    return PENAL_CODES.filter((c) => {
      if (state.category !== "all" && c.title !== state.category) return false;
      if (!q) return true;
      return (
        c.code.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        (c.desc || "").toLowerCase().includes(q)
      );
    });
  }

  function renderList() {
    const filtered = getFiltered();
    const catLabel =
      state.category === "all"
        ? "Semua Pasal"
        : CATEGORIES.find((c) => c.id === state.category)?.label || "";

    resultTitle.textContent = catLabel;
    resultCount.textContent = `${filtered.length} pasal`;

    emptyState.hidden = filtered.length !== 0;
    entryList.hidden = filtered.length === 0;

    entryList.innerHTML = filtered
      .map((c) => {
        const selected = state.selected.has(c.code);
        return `
        <div class="entry-row ${selected ? "selected" : ""}" data-code="${c.code}">
          <span class="entry-code">${c.code}</span>
          <span class="entry-name">${c.name}</span>
          <span class="badge badge-${c.class}">${CLASS_LABEL[c.class]}</span>
          <span class="entry-time">${fmtTime(c.time)}</span>
          <span class="entry-fine">${fmtMoney(c.fine)}</span>
        </div>`;
      })
      .join("");

    entryList.querySelectorAll(".entry-row").forEach((el) => {
      el.addEventListener("click", () => openDetail(el.dataset.code));
    });
  }

  // ---------------- citation pad ----------------
  function renderCitation() {
    const codes = Array.from(state.selected);
    citationCount.textContent = codes.length;
    citationEmpty.style.display = codes.length ? "none" : "block";

    const rows = codes
      .map((code) => byId(code))
      .filter(Boolean)
      .map(
        (c) => `
      <div class="citation-item" data-code="${c.code}">
        <div class="citation-item-main">
          <div class="citation-item-code">${c.code}</div>
          <div class="citation-item-name">${c.name}</div>
          <div class="citation-item-sub">${fmtTime(c.time)} · ${fmtMoney(c.fine)}</div>
        </div>
        <button class="citation-item-remove" data-remove="${c.code}" aria-label="Hapus">✕</button>
      </div>`
      )
      .join("");

    citationItems.innerHTML = rows + `<div class="citation-empty" id="citationEmpty" style="display:${codes.length ? "none" : "block"}">Belum ada pasal dipilih.<br>Ketuk sebuah pasal untuk menambahkannya.</div>`;

    citationItems.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        state.selected.delete(btn.dataset.remove);
        renderCitation();
        renderList();
      });
    });

    let tTime = 0;
    let tFine = 0;
    codes.forEach((code) => {
      const c = byId(code);
      if (!c) return;
      tTime += c.time;
      tFine += c.fine;
    });

    totalTime.textContent = fmtTime(tTime);
    totalFine.textContent = fmtMoney(tFine);
  }

  function toggleSelect(code) {
    if (state.selected.has(code)) state.selected.delete(code);
    else state.selected.add(code);
    renderCitation();
    renderList();
  }

  // ---------------- detail modal ----------------
  function openDetail(code) {
    const c = byId(code);
    if (!c) return;
    state.detailCode = code;

    modalCode.textContent = c.code;
    modalName.textContent = c.name;
    modalClass.textContent = CLASS_LABEL[c.class];
    modalClass.className = "badge badge-" + c.class;
    modalTitle.textContent = CATEGORIES.find((cat) => cat.id === c.title)?.label || "";
    modalDesc.textContent = c.desc || "Tidak ada deskripsi tambahan untuk pasal ini.";
    modalTime.textContent = fmtTime(c.time);
    modalFine.textContent = fmtMoney(c.fine);
    modalAdd.textContent = state.selected.has(code) ? "Hapus dari Kutipan" : "Tambah ke Kutipan";

    modal.hidden = false;
  }

  function closeDetail() {
    modal.hidden = true;
    state.detailCode = null;
  }

  modalClose.addEventListener("click", closeDetail);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeDetail();
  });

  modalAdd.addEventListener("click", () => {
    if (!state.detailCode) return;
    toggleSelect(state.detailCode);
    modalAdd.textContent = state.selected.has(state.detailCode)
      ? "Hapus dari Kutipan"
      : "Tambah ke Kutipan";
  });

 // ---------------- search ----------------
  searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderList();
    updateSearchClear();
  });
 
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    renderList();
    updateSearchClear();
    searchInput.focus();
  });

  // ---------------- citation pad open/close (mobile) ----------------
  function openPad() {
    citationPad.classList.add("open");
    scrim.classList.add("show");
  }
  function closePad() {
    citationPad.classList.remove("open");
    scrim.classList.remove("show");
  }
  citationToggle.addEventListener("click", openPad);
  citationClose.addEventListener("click", closePad);
  scrim.addEventListener("click", closePad);

  resetBtn.addEventListener("click", () => {
    state.selected.clear();
    renderCitation();
    renderList();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!modal.hidden) closeDetail();
      else closePad();
    }
  });

  // ---------------- init ----------------
  renderSidebar();
  renderList();
  renderCitation();
  updateSearchClear();
})();
