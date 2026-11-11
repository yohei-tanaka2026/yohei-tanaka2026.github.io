// 研究成果ページの表示処理（data.js のデータを年度ごとのタブにして表示する）
(function () {
  const lang = document.documentElement.lang === "en" ? "en" : "ja";
  const MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

  const text = {
    ja: { all: "すべて", fy: (y) => `${y}年度`, range: (y) => `${y}年4月 〜 ${y + 1}年3月`, count: (n) => `${n}件`, prev: "← 前の年度", next: "次の年度 →", empty: "まだ業績はありません。" },
    en: { all: "All", fy: (y) => `FY${y}`, range: (y) => `Apr. ${y} – Mar. ${y + 1}`, count: (n) => `${n} item${n === 1 ? "" : "s"}`, prev: "← Previous year", next: "Next year →", empty: "No items yet." },
  }[lang];

  // 年度：4月〜翌3月。1〜3月は前の年度に入る
  const fiscalYear = (date) => {
    const [y, m] = date.split("-").map(Number);
    return m >= 4 ? y : y - 1;
  };
  const formatDate = (date) => {
    const [y, m] = date.split("-").map(Number);
    return `${MONTHS[m - 1]} ${y}`;
  };
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const items = PUBLICATIONS.map((p) => ({ ...p, fy: fiscalYear(p.date), body: (lang === "en" && p.en) || p.ja }))
    .sort((a, b) => b.date.localeCompare(a.date));
  const years = [...new Set(items.map((p) => p.fy))].sort((a, b) => b - a);

  const tabsEl = document.getElementById("year-tabs");
  const contentEl = document.getElementById("year-content");

  function renderEntry(p) {
    const b = p.body;
    const tag = p.tag ? `<span class="tag">${escapeHtml(p.tag[lang] || p.tag.ja)}</span>` : "";
    const venue = p.category === "intl" || p.category === "journal" ? `<i>${escapeHtml(b.venue)}</i>` : escapeHtml(b.venue);
    return `<li>${tag}${escapeHtml(b.authors)}, "${escapeHtml(b.title)}," ${venue}, ${formatDate(p.date)}.</li>`;
  }

  function renderYear(fy) {
    const list = items.filter((p) => p.fy === fy);
    let html = `<section class="fy-section" id="fy${fy}">
      <h2>${text.fy(fy)} <span class="fy-range">${text.range(fy)}・${text.count(list.length)}</span></h2>`;
    for (const cat of CATEGORIES) {
      const inCat = list.filter((p) => p.category === cat.key);
      if (inCat.length) html += `<h3>${cat[lang]}</h3><ul class="pubs">${inCat.map(renderEntry).join("")}</ul>`;
    }
    return html + "</section>";
  }

  function show(key) {
    if (key !== "all" && !years.includes(Number(key))) key = String(years[0] ?? "all");

    tabsEl.querySelectorAll("button").forEach((btn) => {
      const active = btn.dataset.key === key;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active);
    });

    if (!years.length) {
      contentEl.innerHTML = `<p>${text.empty}</p>`;
      return;
    }
    if (key === "all") {
      contentEl.innerHTML = years.map(renderYear).join("<hr>");
    } else {
      const fy = Number(key);
      const i = years.indexOf(fy);
      const prev = years[i + 1]; // 古い年度
      const next = years[i - 1]; // 新しい年度
      contentEl.innerHTML = renderYear(fy) +
        `<nav class="fy-pager">
          ${prev !== undefined ? `<a href="#${prev}">${text.prev}</a>` : "<span></span>"}
          ${next !== undefined ? `<a href="#${next}">${text.next}</a>` : "<span></span>"}
        </nav>`;
    }
  }

  // タブを作る
  const keys = [...years.map(String), "all"];
  tabsEl.innerHTML = keys.map((k) =>
    `<button type="button" role="tab" data-key="${k}">${k === "all" ? text.all : text.fy(Number(k))}</button>`
  ).join("");
  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) location.hash = btn.dataset.key;
  });

  // URL の #2025 などで年度を開けるようにする（言語切替リンクにも引き継ぐ）
  const langLink = document.getElementById("lang-switch");
  function fromHash() {
    const key = decodeURIComponent(location.hash.slice(1)) || String(years[0] ?? "all");
    show(key);
    if (langLink) langLink.href = langLink.getAttribute("href").split("#")[0] + location.hash;
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
