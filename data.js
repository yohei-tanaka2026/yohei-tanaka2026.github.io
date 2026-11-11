/*
  業績データ（日本語ページと英語ページの両方がここを読みます）

  新しい業績を追加するときは、下の PUBLICATIONS に { ... } を1つ足すだけです。
  年度（4月〜翌3月）は date から自動で決まり、タブも自動で増えます。

  date     : "年-月"（例 "2026-09"）
  category : award（受賞） / journal（ジャーナル論文） / intl（国際学会）
             / domestic（国内学会） / thesis（学位論文） / other（その他）
  ja / en  : それぞれのページに表示する内容
             authors（著者）, title（タイトル）, venue（会議名・雑誌名など）
             en を省略すると英語ページでは ja がそのまま表示されます
  tag      : 任意。"依頼講演" などの印を付けたいとき { ja: "依頼講演", en: "Invited" }
*/

const CATEGORIES = [
  { key: "award",    ja: "受賞",           en: "Awards" },
  { key: "journal",  ja: "ジャーナル論文", en: "Journal Papers" },
  { key: "intl",     ja: "国際学会",       en: "International Conferences" },
  { key: "domestic", ja: "国内学会",       en: "Domestic Conferences" },
  { key: "thesis",   ja: "学位論文",       en: "Thesis" },
  { key: "other",    ja: "その他",         en: "Others" },
];

const PUBLICATIONS = [
  // ===== 2026年度（修士1年） =====
  {
    date: "2026-11",
    category: "domestic",
    ja: {
      authors: "田中鷹併, 馬場健一",
      title: "EONにおけるOSNRを用いた重畳伝送の特性評価",
      venue: "電子情報通信学会 フォトニックネットワーク研究会 (PN)",
    },
    en: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "Performance Evaluation of OSNR-Based Superposition Transmission in EON",
      venue: "IEICE Technical Committee on Photonic Network (PN) (in Japanese)",
    },
  },
  {
    date: "2026-10",
    category: "intl",
    ja: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "A Study on OSNR-Aware Superposition Path Provisioning in Elastic Optical Networks",
      venue: "Proceedings of 2026 International Symposium on Advanced Technology (ISAT-25)",
    },
  },
  {
    date: "2026-09",
    category: "domestic",
    ja: {
      authors: "田中鷹併, 馬場健一",
      title: "EONにおけるOSNRに基づく重畳伝送手法の一検討",
      venue: "電子情報通信学会 ソサイエティ大会 講演論文集, B-12-11",
    },
    en: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "A Study on OSNR-Aware Superposition Transmission Methods in Elastic Optical Network",
      venue: "Proceedings of the IEICE Society Conference, B-12-11 (in Japanese)",
    },
  },

  // ===== 2025年度（学部4年） =====
  {
    date: "2026-03",
    category: "domestic",
    ja: {
      authors: "田中鷹併, 馬場健一",
      title: "伝送距離による減衰量を考慮したEON重畳パス設定手法の基本評価",
      venue: "電子情報通信学会 総合大会 講演論文集, B-12-18",
    },
    en: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "Basic Evaluation of a Superimposed Path Establishment Method for Elastic Optical Networks Considering Attenuation Due to Transmission Distance",
      venue: "Proceedings of the IEICE General Conference, B-12-18 (in Japanese)",
    },
  },
  {
    date: "2026-03",
    category: "domestic",
    ja: {
      authors: "田中鷹併, 馬場健一",
      title: "減衰量差を考慮したEON重畳パス設定手法の検討",
      venue: "電子情報通信学会 技術研究報告 (PN2025-43), vol. 125, no. 372, pp. 7–12",
    },
    en: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "Attenuation-Difference-Aware Superposition Path Setting in EONs",
      venue: "IEICE Technical Report (PN2025-43), vol. 125, no. 372, pp. 7–12 (in Japanese)",
    },
  },
  {
    date: "2026-01",
    category: "intl",
    ja: {
      authors: "Yohei Tanaka and Ken-ichi Baba",
      title: "Basic Evaluation of Superposition Path Establishment Method based on Distance Decay in Elastic Optical Networks",
      venue: "Proceedings of 2025 International Symposium on Advanced Technology (ISAT-24)",
    },
  },
];
