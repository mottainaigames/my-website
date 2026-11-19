/**
 * SEO 用のメタ情報（title・description・canonical・hreflang・OGP）を言語ごとに整える。
 * site.js の描画処理のあとに読み込む（<script src="assets/js/seo.js" data-page="home"></script>）。
 * 言語は site.js と同じく ?lang=ja|en|zh で切り替える。日本語はパラメータなしのURLを正とする。
 */
(() => {
  const ORIGIN = "https://mottainaigames.com";
  const LANGS = ["ja", "en", "zh"];
  const HREFLANG = { ja: "ja", en: "en", zh: "zh-Hans" };
  const OG_LOCALE = { ja: "ja_JP", en: "en_US", zh: "zh_CN" };
  const SUFFIX = { ja: "｜Mottainai Games", en: " | Mottainai Games", zh: "｜Mottainai Games" };

  // 静的ページの文言（HTMLの<head>の日本語と同じ内容にそろえる）
  const PAGES = {
    home: {
      path: "/",
      ja: {
        title: "Mottainai Games｜『定時退社』などのボードゲーム",
        desc: "Mottainai Gamesは社会風刺や日常をテーマにしたボードゲームを企画・製造・販売しています。『定時退社』（累計販売数1万個突破）、『就職活動』、『情報漏洩』、『不労所得』を紹介します。"
      },
      en: {
        title: "Mottainai Games | Board games including CLOCK OUT!",
        desc: "Mottainai Games designs, manufactures and sells board games themed on social satire and everyday life, including CLOCK OUT! (over 10,000 copies sold)."
      },
      zh: {
        title: "Mottainai Games｜《准时下班》等原创桌游",
        desc: "Mottainai Games 策划、制造并销售以社会讽刺与日常生活为主题的桌游，包括《准时下班》（累计销量突破1万套）等作品。"
      }
    },
    games: {
      path: "/games",
      ja: {
        title: "ゲーム一覧",
        desc: "Mottainai Gamesのボードゲーム一覧。『定時退社』『就職活動』『情報漏洩』『不労所得』の内容・プレイ人数・時間・購入先を掲載しています。"
      },
      en: {
        title: "Games",
        desc: "All board games by Mottainai Games, with player counts, play time and where to buy."
      },
      zh: {
        title: "游戏列表",
        desc: "Mottainai Games 的全部桌游，包含游戏人数、时长及购买渠道。"
      }
    },
    news: {
      path: "/news",
      ja: {
        title: "お知らせ",
        desc: "Mottainai Gamesのお知らせ一覧。新作・販売開始、ゲームマーケットなどのイベント出展、エラッタの情報をお届けします。"
      },
      en: {
        title: "News",
        desc: "News from Mottainai Games: new releases, event appearances such as Game Market, and errata."
      },
      zh: {
        title: "资讯",
        desc: "Mottainai Games 的最新资讯：新品发售、Game Market 等展会参展信息及勘误。"
      }
    },
    about: {
      path: "/about",
      ja: {
        title: "会社概要",
        desc: "Mottainai Gamesの会社概要。事業内容・主な実績・販売チャネルなど、お取引先・取材向けの情報をまとめています。"
      },
      en: {
        title: "About",
        desc: "Company profile of Mottainai Games: business overview, achievements and sales channels for partners and media."
      },
      zh: {
        title: "公司概要",
        desc: "Mottainai Games 公司概要：业务内容、主要业绩及销售渠道等，供合作伙伴与媒体参考。"
      }
    },
    contact: {
      path: "/contact",
      ja: {
        title: "お問い合わせ",
        desc: "Mottainai Gamesへのお問い合わせはこちら。商品についてのご質問や、お取引・取材のご相談をフォームから受け付けています。"
      },
      en: {
        title: "Contact",
        desc: "Contact Mottainai Games about our products, business inquiries or media requests."
      },
      zh: {
        title: "联系我们",
        desc: "如有产品咨询、商务合作或媒体采访需求，请通过表单联系 Mottainai Games。"
      }
    }
  };

  const RULEBOOK_DESC = {
    ja: name => `ボードゲーム『${name}』のルールブック（Mottainai Games 公式）。`,
    en: name => `Official rulebook for the board game ${name} by Mottainai Games.`,
    zh: name => `Mottainai Games 官方桌游《${name}》规则书。`
  };

  function getLang() {
    const requested = (new URLSearchParams(location.search).get("lang") || "").toLowerCase();
    if (LANGS.includes(requested)) return requested;
    if (requested.startsWith("zh")) return "zh";
    if (requested.startsWith("en")) return "en";
    return "ja";
  }

  function buildUrl(path, params, lang) {
    const q = new URLSearchParams(params || {});
    if (lang && lang !== "ja") q.set("lang", lang);
    const s = q.toString();
    return `${ORIGIN}${path}${s ? `?${s}` : ""}`;
  }

  function upsertMeta(attr, key, content) {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function setLink(rel, href, hreflang) {
    const sel = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let el = document.head.querySelector(sel);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      if (hreflang) el.setAttribute("hreflang", hreflang);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  function setAlternates(path, params, langs) {
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    if (langs.length < 2) return;
    langs.forEach(l => setLink("alternate", buildUrl(path, params, l), HREFLANG[l]));
    setLink("alternate", buildUrl(path, params, "ja"), "x-default");
  }

  // 共通OGP画像（assets/images/ogp.png）の代替テキスト（言語別）
  const OGP_ALT = {
    ja: "Mottainai Gamesの社会風刺ボードゲーム『定時退社』『就職活動』『情報漏洩』『不労所得』のパッケージ",
    en: "Packages of Mottainai Games' satirical board games: CLOCK OUT!, Job Hunting, DATA LEAK and Passive Income",
    zh: "Mottainai Games 社会讽刺桌游《准时下班》《求职活动》《情报泄露》《被动收入》的包装"
  };
  const PACKAGE_ALT = {
    ja: name => `ボードゲーム『${name}』のパッケージ`,
    en: name => `Package of the board game ${name}`,
    zh: name => `桌游《${name}》的包装`
  };

  function apply({ path, params, lang, langs, title, desc, setTitle = true }) {
    const canonicalLang = langs.includes(lang) ? lang : "ja";
    const url = buildUrl(path, params, canonicalLang);
    if (setTitle && title) document.title = title;
    if (desc) upsertMeta("name", "description", desc);
    setLink("canonical", url);
    setAlternates(path, params, langs);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title || document.title);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:locale", OG_LOCALE[canonicalLang]);
    upsertMeta("property", "og:image:alt", OGP_ALT[lang] || OGP_ALT.ja);
    upsertMeta("name", "twitter:title", title || document.title);
    upsertMeta("name", "twitter:description", desc);
  }

  function clip(text, max) {
    const s = String(text || "").replace(/\s+/g, " ").trim();
    return s.length > max ? `${s.slice(0, max - 1)}…` : s;
  }

  function pick(obj, key, lang) {
    if (!obj) return "";
    if (lang !== "ja" && obj[`${key}_${lang}`]) return obj[`${key}_${lang}`];
    return obj[`${key}_ja`] || obj[key] || "";
  }

  async function fetchJson(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(path);
    return res.json();
  }

  // Cloudflare は存在しないファイルにも index.html を200で返すため、本文がHTMLかどうかで判定する
  async function markdownExists(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) return false;
      const text = await res.text();
      return !/^\s*<!doctype html/i.test(text);
    } catch (_) {
      return false;
    }
  }

  async function run(page) {
    const lang = getLang();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    if (PAGES[page]) {
      const p = PAGES[page];
      const title = page === "home" ? p[lang].title : `${p[lang].title}${SUFFIX[lang]}`;
      apply({ path: p.path, params: null, lang, langs: LANGS, title, desc: p[lang].desc });
      return;
    }

    if (page === "game" || page === "rulebook") {
      if (!id) return;
      const g = await fetchJson(`data/games/${encodeURIComponent(id)}.json`);
      const name = pick(g, "title", lang);
      const desc = page === "game"
        ? clip(`${pick(g, "catch", lang)}${lang === "en" ? ". " : "。"}${pick(g, "description", lang)}`, lang === "en" ? 160 : 120)
        : RULEBOOK_DESC[lang](name);
      // タイトルは site.js がデータ読込後に設定するので触らない
      apply({ path: `/${page}`, params: { id }, lang, langs: LANGS, title: `${name}${page === "rulebook" ? " " + { ja: "ルールブック", en: "Rulebook", zh: "规则书" }[lang] : ""}${SUFFIX[lang]}`, desc, setTitle: false });
      const img = Array.isArray(g.images) && g.images[0];
      if (img) {
        // 共通OGP（ogp.png・横長）を作品のパッケージ画像（正方形 1254×1254）に差し替え。
        // 正方形なのでカードは summary に戻し、サイズと代替テキストも合わせる
        upsertMeta("property", "og:image", `${ORIGIN}/${img}`);
        upsertMeta("property", "og:image:width", "1254");
        upsertMeta("property", "og:image:height", "1254");
        upsertMeta("property", "og:image:alt", PACKAGE_ALT[lang](name));
        upsertMeta("name", "twitter:image", `${ORIGIN}/${img}`);
        upsertMeta("name", "twitter:card", "summary");
      }
      return;
    }

    if (page === "news-detail") {
      if (!id) return;
      const index = await fetchJson("data/news/index.json");
      const item = (index.items || []).find(it => it.id === id && it.published !== false);
      if (!item) return;
      const checks = await Promise.all(LANGS.map(l => markdownExists(`data/news/${encodeURIComponent(id)}/${l}.md`)));
      const langs = LANGS.filter((_, i) => checks[i]);
      const shown = langs.includes(lang) ? lang : "ja";
      const headline = pick(item, "title", shown) || pick(item, "title", "ja");
      const desc = {
        ja: `${item.date} のお知らせ：${headline}（Mottainai Games）`,
        en: `News (${item.date}): ${headline} - Mottainai Games`,
        zh: `${item.date} 资讯：${headline}（Mottainai Games）`
      }[shown];
      apply({ path: "/news-detail", params: { id }, lang, langs: langs.length ? langs : ["ja"], title: `${headline}${SUFFIX[shown]}`, desc });
    }
  }

  const script = document.currentScript;
  const page = script && script.getAttribute("data-page");
  if (page) run(page).catch(() => {});
})();
