// ページ下部に最終更新日を表示する
// GitHub Pages ではサイトを更新（アップロード）した日時が自動で入ります
(function () {
  const d = new Date(document.lastModified);
  if (isNaN(d)) return;
  const en = document.documentElement.lang === "en";
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
  const MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.textContent = en ? `Last updated: ${MONTHS[m - 1]} ${day}, ${y}` : `最終更新日：${y}年${m}月${day}日`;
  document.body.appendChild(footer);
})();
