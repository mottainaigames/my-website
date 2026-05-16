window.MG = (() => {
  const GAME_INDEX_URL = "data/games/index.json";
  const ANNOUNCE_URL = "data/announcements.json";
  const EVENTS_URL = "data/events.json";
  const PLACEHOLDER = "assets/images/placeholder.svg";
  /** Googleフォーム「送信」→「<>」埋め込みの iframe用 src（…/viewform?embedded=true までのURL）。空のときは案内文のみ表示 */
  const CONTACT_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf2IdIZacgrHfva-No-JgaYwkyNLkptrJGaWBYlKTKvquL5Sg/viewform?embedded=true";
  const SUPPORTED_LANGS = ["ja", "en", "zh"];
  const HOME_I18N = {
    ja: {
      "brand.title": "Mottainai Games",
      "brand.subtitle": "ボードゲーム紹介",
      "nav.home": "Home",
      "nav.game": "Game",
      "nav.news": "News",
      "nav.contact": "お問い合わせ",
      "lang.ja": "日本語",
      "lang.en": "English",
      "lang.zh": "中文",
      "product.heading": "商品紹介 + サークル紹介",
      "product.lead": "制作中の作品と、Mottainai Gamesの活動内容を紹介します。",
      "intro.heading": "サークル紹介",
      "intro.body": "2022年に設立されたサークルです！<br>ボードゲームを製作しています！",
      "news.heading": "お知らせ",
      "news.lead": "最新の更新情報や公開情報を掲載します。",
      "events.heading": "出展・参加イベント",
      "events.lead": "これまでの活動実績と、今後の参加予定イベントです。",
      "events.historyHeading": "イベント出展・参加歴",
      "events.upcomingHeading": "参加予定",
      "links.heading": "リンク＆連絡先",
      "links.lead": "SNS・出展情報・お問い合わせ先はこちらです。",
      "links.x": "X（旧Twitter）",
      "links.gamemarket": "ゲームマーケット作品ページ",
      "links.mail": "メール",
      "games.pageTitle": "Mottainai Games - ゲーム一覧",
      "games.searchPlaceholder": "検索（タイトル・キャッチ・説明）",
      "games.filterAria": "検索と絞り込み",
      "games.clear": "クリア",
      "games.all": "すべて",
      "games.loadError": "読み込みエラー：data/games/ を確認してください。",
      "games.noResults": "該当する作品がありません。",
      "games.detail": "詳細を見る",
      "games.featurePrefix": "特徴",
      "games.resultCount": "表示：{shown} / {total}",
      "label.players": "人数",
      "label.time": "時間",
      "label.age": "年齢",
      "game.pageTitlePrefix": "Mottainai Games - ",
      "game.notFound": "Game not found",
      "game.loadError": "読み込みエラー",
      "game.basicInfo": "基本情報",
      "game.descriptionHeading": "ゲーム詳細",
      "game.linksHeading": "リンク",
      "game.rules": "説明書（PDF）",
      "game.video": "動画",
      "game.shop": "ストア",
      "game.channelsHeading": "販売チャネル",
      "game.backToListAria": "ゲーム一覧に戻る",
      "game.prevImageAria": "前の画像",
      "game.nextImageAria": "次の画像",
      "game.mainImageAlt": "ゲーム画像",
      "news.pageTitle": "Mottainai Games - News",
      "news.latestHeading": "最新のお知らせ",
      "news.latestLead": "最新3件を表示しています。",
      "news.archiveHeading": "お知らせ記事",
      "news.archiveLead": "過去のお知らせ一覧です。",
      "news.empty": "現在お知らせはありません。",
      "news.fallbackTitle": "お知らせ",
      "events.empty": "イベント情報は準備中です。",
      "events.more": "もっと見る",
      "events.close": "閉じる",
      "carousel.itemLabel": "{index}件目: {title}",
      "events.unnamed": "イベント名未設定",
      "events.statusJoin": "参加",
      "events.statusExhibit": "出展",
      "home.pageTitle": "Mottainai Games",
      "home.metaDescription": "自作ボードゲーム紹介サイト（Mottainai Games）",
      "fallback.gameTitle": "ゲーム",
      "home.gameCoverAlt": "{title}（ゲーム画像）",
      "a11y.nav": "ページ内ナビゲーション",
      "a11y.langTabs": "言語切替",
      "a11y.sectionProduct": "商品紹介とサークル紹介",
      "a11y.carousel": "作品カルーセル",
      "a11y.carouselPrev": "前の作品",
      "a11y.carouselNext": "次の作品",
      "a11y.carouselDots": "表示中の作品",
      "a11y.aboutHero": "サークル紹介",
      "a11y.newsSection": "お知らせ",
      "a11y.eventsSection": "出展・参加イベント",
      "a11y.linksSection": "リンクと連絡先",
      "a11y.circleLogo": "サークルロゴ",
      "a11y.heroLogo": "Mottainai Games ロゴ",
      "contact.pageTitle": "Mottainai Games - お問い合わせ",
      "contact.metaDescription": "Mottainai Games へのお問い合わせ",
      "contact.heading": "お問い合わせ",
      "contact.lead": "Googleフォームからお問い合わせください。",
      "contact.embedMissing": "お問い合わせフォームの表示設定が未完了です。公開まで少々お待ちください。",
      "contact.iframeTitle": "お問い合わせフォーム",
      "links.contact": "お問い合わせフォーム"
    },
    en: {
      "brand.title": "Mottainai Games",
      "brand.subtitle": "Board Game Studio",
      "nav.home": "Home",
      "nav.game": "Game",
      "nav.news": "News",
      "nav.contact": "Contact",
      "lang.ja": "Japanese",
      "lang.en": "English",
      "lang.zh": "Chinese",
      "product.heading": "Games + About Us",
      "product.lead": "Discover our board games and learn about Mottainai Games.",
      "intro.heading": "About Us",
      "intro.body": "Founded in 2022,<br>we design and publish original board games.",
      "news.heading": "News",
      "news.lead": "Latest updates, announcements, and release information.",
      "events.heading": "Events & Exhibitions",
      "events.lead": "Our event history and upcoming appearances.",
      "events.historyHeading": "Past Events",
      "events.upcomingHeading": "Upcoming",
      "links.heading": "Links & Contact",
      "links.lead": "Find our social links, booth page, and contact info.",
      "links.x": "X (formerly Twitter)",
      "links.gamemarket": "Game Market Booth Page",
      "links.mail": "Email",
      "games.pageTitle": "Mottainai Games - Games",
      "games.searchPlaceholder": "Search by title, tagline, or description",
      "games.filterAria": "Search and filters",
      "games.clear": "Clear",
      "games.all": "All",
      "games.loadError": "Load error: please check data/games/.",
      "games.noResults": "No games found.",
      "games.detail": "See details",
      "games.featurePrefix": "Feature",
      "games.resultCount": "{shown} of {total} shown",
      "label.players": "Players",
      "label.time": "Time",
      "label.age": "Age",
      "game.pageTitlePrefix": "Mottainai Games - ",
      "game.notFound": "Game not found",
      "game.loadError": "Load error",
      "game.basicInfo": "Basic Info",
      "game.descriptionHeading": "Game Details",
      "game.linksHeading": "Links",
      "game.rules": "Rulebook (PDF)",
      "game.video": "Video",
      "game.shop": "Store",
      "game.channelsHeading": "Where to buy",
      "game.backToListAria": "Back to game list",
      "game.prevImageAria": "Previous image",
      "game.nextImageAria": "Next image",
      "game.mainImageAlt": "Game image",
      "news.pageTitle": "Mottainai Games - News",
      "news.latestHeading": "Latest News",
      "news.latestLead": "Showing the 3 most recent updates.",
      "news.archiveHeading": "News Archive",
      "news.archiveLead": "Browse previous announcements.",
      "news.empty": "No announcements yet.",
      "news.fallbackTitle": "News",
      "events.empty": "Event information will be posted soon.",
      "events.more": "Show more",
      "events.close": "Show less",
      "carousel.itemLabel": "Item {index}: {title}",
      "events.unnamed": "Untitled Event",
      "events.statusJoin": "Attending",
      "events.statusExhibit": "Exhibiting",
      "home.pageTitle": "Mottainai Games",
      "home.metaDescription": "Official site introducing original board games by Mottainai Games.",
      "fallback.gameTitle": "Game",
      "home.gameCoverAlt": "{title} (game image)",
      "a11y.nav": "Site navigation",
      "a11y.langTabs": "Language",
      "a11y.sectionProduct": "Games and about us",
      "a11y.carousel": "Games carousel",
      "a11y.carouselPrev": "Previous game",
      "a11y.carouselNext": "Next game",
      "a11y.carouselDots": "Carousel position",
      "a11y.aboutHero": "About us",
      "a11y.newsSection": "News",
      "a11y.eventsSection": "Events and exhibitions",
      "a11y.linksSection": "Links and contact",
      "a11y.circleLogo": "Circle logo",
      "a11y.heroLogo": "Mottainai Games logo",
      "contact.pageTitle": "Mottainai Games - Contact",
      "contact.metaDescription": "Contact Mottainai Games.",
      "contact.heading": "Contact",
      "contact.lead": "Please use the Google Form below.",
      "contact.embedMissing": "The contact form is not available yet. Please check back soon.",
      "contact.iframeTitle": "Contact form",
      "links.contact": "Contact form"
    },
    zh: {
      "brand.title": "Mottainai Games",
      "brand.subtitle": "桌游工作室",
      "nav.home": "首页",
      "nav.game": "游戏",
      "nav.news": "资讯",
      "nav.contact": "联系",
      "lang.ja": "日语",
      "lang.en": "英语",
      "lang.zh": "中文",
      "product.heading": "产品 + 关于我们",
      "product.lead": "了解我们的桌游作品与 Mottainai Games 的活动内容。",
      "intro.heading": "关于我们",
      "intro.body": "我们成立于 2022 年，<br>专注于原创桌游的设计与发行。",
      "news.heading": "最新资讯",
      "news.lead": "发布最新动态、公告与发售信息。",
      "events.heading": "参展与活动",
      "events.lead": "我们的参展记录与近期参加计划。",
      "events.historyHeading": "过往参展记录",
      "events.upcomingHeading": "即将参加",
      "links.heading": "链接与联系方式",
      "links.lead": "在这里查看社交媒体、展位页面与联系方式。",
      "links.x": "X（原 Twitter）",
      "links.gamemarket": "Game Market 展位页面",
      "links.mail": "邮箱",
      "games.pageTitle": "Mottainai Games - 游戏列表",
      "games.searchPlaceholder": "按标题、副标题或说明搜索",
      "games.filterAria": "搜索与筛选",
      "games.clear": "清除",
      "games.all": "全部",
      "games.loadError": "加载失败：请检查 data/games/。",
      "games.noResults": "没有符合条件的作品。",
      "games.detail": "查看详情",
      "games.featurePrefix": "特点",
      "games.resultCount": "显示 {shown} / {total}",
      "label.players": "人数",
      "label.time": "时间",
      "label.age": "年龄",
      "game.pageTitlePrefix": "Mottainai Games - ",
      "game.notFound": "未找到该游戏",
      "game.loadError": "加载失败",
      "game.basicInfo": "基本信息",
      "game.descriptionHeading": "游戏详情",
      "game.linksHeading": "相关链接",
      "game.rules": "说明书（PDF）",
      "game.video": "视频",
      "game.shop": "商店",
      "game.channelsHeading": "购买渠道",
      "game.backToListAria": "返回游戏列表",
      "game.prevImageAria": "上一张图片",
      "game.nextImageAria": "下一张图片",
      "game.mainImageAlt": "游戏图片",
      "news.pageTitle": "Mottainai Games - 资讯",
      "news.latestHeading": "最新资讯",
      "news.latestLead": "显示最近 3 条更新。",
      "news.archiveHeading": "资讯归档",
      "news.archiveLead": "查看过去发布的公告。",
      "news.empty": "暂无资讯。",
      "news.fallbackTitle": "资讯",
      "events.empty": "活动信息即将发布。",
      "events.more": "查看更多",
      "events.close": "收起",
      "carousel.itemLabel": "第 {index} 项：{title}",
      "events.unnamed": "未命名活动",
      "events.statusJoin": "参加",
      "events.statusExhibit": "参展",
      "home.pageTitle": "Mottainai Games",
      "home.metaDescription": "Mottainai Games 原创桌游介绍网站。",
      "fallback.gameTitle": "游戏",
      "home.gameCoverAlt": "{title}（游戏图片）",
      "a11y.nav": "站内导航",
      "a11y.langTabs": "语言切换",
      "a11y.sectionProduct": "作品与关于我们",
      "a11y.carousel": "作品轮播",
      "a11y.carouselPrev": "上一个作品",
      "a11y.carouselNext": "下一个作品",
      "a11y.carouselDots": "轮播位置",
      "a11y.aboutHero": "关于我们",
      "a11y.newsSection": "资讯",
      "a11y.eventsSection": "参展与活动",
      "a11y.linksSection": "链接与联系方式",
      "a11y.circleLogo": "社团标志",
      "a11y.heroLogo": "Mottainai Games 标志",
      "contact.pageTitle": "Mottainai Games - 联系",
      "contact.metaDescription": "联系 Mottainai Games。",
      "contact.heading": "联系",
      "contact.lead": "请通过下方的 Google 表单联系我们。",
      "contact.embedMissing": "联系表单尚未配置完成，请稍后再试。",
      "contact.iframeTitle": "联系表单",
      "links.contact": "联系表单"
    }
  };

  function t(lang, key, vars = {}){
    const dict = HOME_I18N[lang] || HOME_I18N.ja;
    let text = dict[key] || HOME_I18N.ja[key] || key;
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    });
    return text;
  }

  const TEXT_MAP = {
    en: {
      "定時退社": "Leave on Time",
      "就職活動": "Job Hunting",
      "情報漏洩": "Data Leak",
      "手軽に遊べる、戦略ババ抜き": "A quick strategic old-maid style card game",
      "手軽に遊べる、戦略神経衰弱": "A quick strategic memory game",
      "手軽に遊べる、戦略ダイスゲーム": "A quick strategic dice game",
      "手軽に遊べる戦略ババ抜き": "An easy-to-learn strategic old-maid style game",
      "内定を奪い合う”神経衰弱”": "A memory game where you compete for job offers",
      "特徴1（一覧に出す）": "Feature 1 (shown on list)",
      "ババ抜きのようにカードのペアを作る。カードにはさまざまな効果があるので、残業を押し付け合い、いち早くゲームから抜け出そう。\n最後に残業カード（ババ）を持っていた人の負けだ！また、残業カードが労基カードに見つかってしまっても負けてしまうよ！\n\n残業やパワハラはバレないようにしないとね！": "Make card pairs like in Old Maid. Cards have different effects, so push overtime onto others and escape from the game as fast as possible.\nWhoever ends with the overtime card (the Old Maid) loses. You also lose if the overtime card is caught by the labor-inspector card.\n\nTry not to let overtime or workplace harassment get exposed!",
      "「就職活動」は、神経衰弱のシステムを使って遊ぶお手軽就活生用カードゲームです。地雷カードである「ニートへの誘惑」を避け、「内定」を揃えることで勝利となる、心理戦・戦略型のゲームとなっています。": "\"Job Hunting\" is a lightweight card game for job seekers, based on a memory-game system. Avoid the trap card \"Temptation of NEET\" and collect \"Job Offer\" cards to win. It is a psychological and strategic game.",
      "ここにゲーム詳細説明を書きます（詳細ページ）。": "Game details will be shown here (detail page).",
      "ボードゲーム": "Board Game",
      "ゲームマーケット2026春に当選しました": "We have been selected for Game Market 2026 Spring",
      "ゲームマーケット２０２６春に当選しました！": "We have been selected for Game Market 2026 Spring!",
      "ゲームマーケット2022春": "Game Market 2022 Spring",
      "ゲームマーケット2022秋": "Game Market 2022 Autumn",
      "ゲームマーケット2023秋": "Game Market 2023 Autumn",
      "ゲームマーケット2024春": "Game Market 2024 Spring",
      "ゲームマーケット2024京都 in 京まふ": "Game Market 2024 Kyoto in KYOMAF",
      "ゲームマーケット2024秋": "Game Market 2024 Autumn",
      "ゲームマーケット2025春": "Game Market 2025 Spring",
      "ゲームマーケット2025秋": "Game Market 2025 Autumn",
      "ボドゲガレージ2025": "Boardgame Garage 2025",
      "さっぽろ卓ゲっと2026": "Sapporo Taku-Get 2026",
      "東京": "Tokyo",
      "大阪": "Osaka",
      "京都": "Kyoto",
      "ドイツ": "Germany",
      "北海道": "Hokkaido",
      "台湾": "Taiwan",
      "アメリカ": "USA"
    },
    zh: {
      "定時退社": "准时下班",
      "就職活動": "求职活动",
      "情報漏洩": "信息泄露",
      "手軽に遊べる、戦略ババ抜き": "轻松上手的策略型抽鬼牌游戏",
      "手軽に遊べる、戦略神経衰弱": "轻松上手的策略型记忆配对游戏",
      "手軽に遊べる、戦略ダイスゲーム": "轻松上手的策略型骰子游戏",
      "手軽に遊べる戦略ババ抜き": "轻松上手的策略型抽鬼牌",
      "内定を奪い合う”神経衰弱”": "争夺录用通知的“记忆配对”",
      "特徴1（一覧に出す）": "特点1（在列表显示）",
      "ババ抜きのようにカードのペアを作る。カードにはさまざまな効果があるので、残業を押し付け合い、いち早くゲームから抜け出そう。\n最後に残業カード（ババ）を持っていた人の負けだ！また、残業カードが労基カードに見つかってしまっても負けてしまうよ！\n\n残業やパワハラはバレないようにしないとね！": "像抽鬼牌一样配对卡牌。卡牌有各种效果，互相推卸加班，尽快从游戏中脱身吧。\n最后持有“加班卡（鬼牌）”的人会失败！另外，如果加班卡被“劳动监察卡”发现也会失败。\n\n加班和职场霸凌可千万别被发现！",
      "「就職活動」は、神経衰弱のシステムを使って遊ぶお手軽就活生用カードゲームです。地雷カードである「ニートへの誘惑」を避け、「内定」を揃えることで勝利となる、心理戦・戦略型のゲームとなっています。": "《求职活动》是一款采用记忆配对机制、适合轻松游玩的求职主题卡牌游戏。避开地雷卡“尼特诱惑”，凑齐“录用通知”即可获胜，是一款心理战与策略并重的游戏。",
      "ここにゲーム詳細説明を書きます（詳細ページ）。": "这里将显示游戏详细说明（详情页）。",
      "ボードゲーム": "桌上游戏",
      "ゲームマーケット2026春に当選しました": "我们已入选 Game Market 2026 春季展",
      "ゲームマーケット２０２６春に当選しました！": "我们已入选 Game Market 2026 春季展！",
      "ゲームマーケット2022春": "Game Market 2022 春",
      "ゲームマーケット2022秋": "Game Market 2022 秋",
      "ゲームマーケット2023秋": "Game Market 2023 秋",
      "ゲームマーケット2024春": "Game Market 2024 春",
      "ゲームマーケット2024京都 in 京まふ": "Game Market 2024 京都 in 京まふ",
      "ゲームマーケット2024秋": "Game Market 2024 秋",
      "ゲームマーケット2025春": "Game Market 2025 春",
      "ゲームマーケット2025秋": "Game Market 2025 秋",
      "ボドゲガレージ2025": "桌游车库 2025",
      "さっぽろ卓ゲっと2026": "札幌桌游展 2026",
      "東京": "东京",
      "大阪": "大阪",
      "京都": "京都",
      "ドイツ": "德国",
      "北海道": "北海道",
      "台湾": "台湾",
      "アメリカ": "美国"
    }
  };

  function localizeText(value, lang){
    if(!nonEmpty(value) || lang === "ja") return value;
    return TEXT_MAP[lang]?.[value] || value;
  }

  function pickLocalizedField(source, key, lang){
    if(!source) return "";
    const direct = source[`${key}_${lang}`];
    if(nonEmpty(direct)) return direct.trim();
    const i18nA = source[`${key}_i18n`];
    if(i18nA && nonEmpty(i18nA[lang])) return i18nA[lang].trim();
    const i18nB = source[`${key}I18n`];
    if(i18nB && nonEmpty(i18nB[lang])) return i18nB[lang].trim();
    const base = source[key];
    return nonEmpty(base) ? base.trim() : "";
  }

  function localizePlayers(value, lang){
    if(!nonEmpty(value)) return value;
    if(lang === "en") return value.replace(/人/g, " players");
    return value;
  }

  function localizeTime(value, lang){
    if(!nonEmpty(value)) return value;
    if(lang === "en") return value.replace(/分/g, " min");
    if(lang === "zh") return value.replace(/分/g, "分钟");
    return value;
  }

  function localizeAge(value, lang){
    if(!nonEmpty(value)) return value;
    if(lang === "en") return value.replace(/歳\+/g, "+");
    if(lang === "zh") return value.replace(/歳\+/g, "岁+");
    return value;
  }

  /** ゲームJSONの channels（販売チャネル名のみ・リンクは links に記載） */
  function resolvedChannelLabels(game, lang){
    const arr = Array.isArray(game?.channels) ? game.channels : [];
    return arr.map(ch => {
      let label = "";
      if(lang === "ja"){
        label = nonEmpty(ch?.label) ? ch.label.trim() : "";
      }else{
        label = pickLocalizedField(ch, "label", lang);
        if(!nonEmpty(label) && nonEmpty(ch?.label)) label = ch.label.trim();
      }
      return label;
    }).filter(nonEmpty);
  }

  function localizeGame(game, lang){
    if(!game || lang === "ja") return game;
    const title = pickLocalizedField(game, "title", lang);
    const catchCopy = pickLocalizedField(game, "catch", lang);
    const feature1 = pickLocalizedField(game, "feature1", lang);
    const description = pickLocalizedField(game, "description", lang);
    const localizedTags = Array.isArray(game[`tags_${lang}`])
      ? game[`tags_${lang}`]
      : (Array.isArray(game.tags) ? game.tags.map(tag => localizeText(tag, lang)) : game.tags);
    return {
      ...game,
      title: localizeText(title, lang),
      catch: localizeText(catchCopy, lang),
      feature1: localizeText(feature1, lang),
      description: localizeText(description, lang),
      players: localizePlayers(game.players, lang),
      time: localizeTime(game.time, lang),
      age: localizeAge(game.age, lang),
      tags: localizedTags
    };
  }

  async function loadJSON(url){
    const res = await fetch(url, { cache: "no-store" });
    if(!res.ok) throw new Error(`Failed: ${url}`);
    return await res.json();
  }

  async function loadGameIds(){
    const idx = await loadJSON(GAME_INDEX_URL);
    return Array.isArray(idx.games) ? idx.games : [];
  }

  async function loadGame(id){
    return await loadJSON(`data/games/${id}.json`);
  }

async function loadAllGames(){
  const ids = await loadGameIds();
  const results = await Promise.allSettled(ids.map(loadGame));
  return results
    .filter(r => r.status === "fulfilled")
    .map(r => r.value);
}

  function el(tag, attrs = {}, children = []){
    const n = document.createElement(tag);
    for(const [k,v] of Object.entries(attrs)){
      if(k === "class") n.className = v;
      else if(k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if(v !== null && v !== undefined) n.setAttribute(k, v);
    }
    for(const c of children){
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return n;
  }

  function nonEmpty(v){
    return typeof v === "string" && v.trim().length > 0;
  }

  function getLang(){
    const params = new URLSearchParams(location.search);
    const requested = (params.get("lang") || "").toLowerCase();
    if(SUPPORTED_LANGS.includes(requested)) return requested;
    if(requested.startsWith("zh")) return "zh";
    if(requested.startsWith("en")) return "en";
    if(requested.startsWith("ja")) return "ja";
    return "ja";
  }

  function setParamInUrl(base, key, value){
    const url = new URL(base, location.href);
    url.searchParams.set(key, value);
    if(url.pathname.endsWith("index.html")){
      url.hash = "";
    }
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function applyHomeI18n(lang){
    const dict = HOME_I18N[lang] || HOME_I18N.ja;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      if(dict[key]) node.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(node => {
      const key = node.getAttribute("data-i18n-html");
      if(dict[key]) node.innerHTML = dict[key];
    });

    document.querySelectorAll(".langTabs a[data-lang]").forEach(a => {
      const tabLang = a.getAttribute("data-lang");
      const url = new URL(location.href);
      url.searchParams.set("lang", tabLang);
      a.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
      if(tabLang === lang) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    const keepLangLinks = document.querySelectorAll('a[href="index.html"], a[href="games.html"], a[href="news.html"], a[href="contact.html"]');
    keepLangLinks.forEach(a => {
      const href = a.getAttribute("href");
      if(!href) return;
      if(href.startsWith("#")){
        a.setAttribute("href", `index.html?lang=${lang}${href}`);
      }else{
        a.setAttribute("href", setParamInUrl(href, "lang", lang));
      }
    });
  }

  function applyCommonHeaderState(lang){
    document.documentElement.setAttribute("lang", lang);
    const dict = HOME_I18N[lang] || HOME_I18N.ja;

    const current = new URL(location.href);
    const path = current.pathname.split("/").pop() || "index.html";
    const id = current.searchParams.get("id");

    const brandLink = document.querySelector(".brandLink");
    if(brandLink){
      brandLink.setAttribute("href", `index.html?lang=${lang}`);
    }

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      if(dict[key]) node.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
      const key = node.getAttribute("data-i18n-placeholder");
      if(dict[key]) node.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(node => {
      const key = node.getAttribute("data-i18n-aria-label");
      if(dict[key]) node.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(node => {
      const key = node.getAttribute("data-i18n-alt");
      if(dict[key]) node.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(node => {
      const key = node.getAttribute("data-i18n-title");
      if(dict[key]) node.setAttribute("title", dict[key]);
    });

    document.querySelectorAll(".langTabs a[data-lang]").forEach(a => {
      const tabLang = a.getAttribute("data-lang");
      const url = new URL(current.href);
      url.searchParams.set("lang", tabLang);
      if(path === "game.html" && id){
        url.searchParams.set("id", id);
      }
      a.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
      if(tabLang === lang) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    document.querySelectorAll('a[data-keep-lang="true"]').forEach(a => {
      const href = a.getAttribute("href");
      if(!href) return;
      const url = new URL(href, location.href);
      url.searchParams.set("lang", lang);
      if(url.pathname.endsWith("game.html") && id){
        url.searchParams.set("id", id);
      }
      a.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
    });
  }

  function normalizeAnnouncements(payload, lang){
    const items = Array.isArray(payload?.items) ? payload.items : [];
    return items
      .map((it, idx) => {
        const titleRaw = pickLocalizedField(it, "title", lang);
        const textRaw = pickLocalizedField(it, "text", lang);
        return {
          id: nonEmpty(it?.id) ? it.id.trim() : `news-${idx + 1}`,
          date: nonEmpty(it?.date) ? it.date.trim() : "",
          title: localizeText(nonEmpty(titleRaw) ? titleRaw : (nonEmpty(textRaw) ? textRaw : t(lang, "news.fallbackTitle")), lang),
          text: localizeText(textRaw, lang),
          detailPath: nonEmpty(it?.detailPath) ? it.detailPath.trim() : ""
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  function renderNewsSimpleList(target, items, lang){
    if(!target) return;
    target.innerHTML = "";
    if(items.length === 0){
      target.appendChild(el("li", {}, [t(lang, "news.empty")]));
      return;
    }
    items.forEach(it => {
      const sep = lang === "en" ? ": " : "：";
      const line = `${it.date ? it.date + sep : ""}${it.title}`;
      target.appendChild(el("li", {}, [line]));
    });
  }

  function renderNewsCards(target, items, lang){
    if(!target) return;
    target.innerHTML = "";
    if(items.length === 0){
      target.appendChild(el("li", { class:"newsCard" }, [t(lang, "news.empty")]));
      return;
    }
    items.forEach(it => {
      const titleNode = it.detailPath
        ? el("a", { class:"newsTitle", href:it.detailPath }, [it.title])
        : el("span", { class:"newsTitle" }, [it.title]);
      target.appendChild(el("li", { class:"newsCard", id:it.id }, [
        el("div", { class:"newsDate" }, [it.date || "----/--/--"]),
        titleNode,
        nonEmpty(it.text) ? el("p", { class:"newsText muted" }, [it.text]) : el("span", {})
      ]));
    });
  }

  function renderNewsArchive(target, items, lang){
    if(!target) return;
    target.innerHTML = "";
    if(items.length === 0){
      target.appendChild(el("li", { class:"newsArchiveItem muted" }, [t(lang, "news.empty")]));
      return;
    }
    items.forEach(it => {
      const titleNode = it.detailPath
        ? el("a", { class:"newsArchiveLink", href:it.detailPath }, [it.title])
        : el("span", { class:"newsArchiveLink" }, [it.title]);
      target.appendChild(el("li", { class:"newsArchiveItem", id:`archive-${it.id}` }, [
        el("span", { class:"newsArchiveDate" }, [it.date || "----/--/--"]),
        titleNode
      ]));
    });
  }

  async function renderHomeCarousel(lang){
    const section = document.getElementById("homeCarouselSection");
    const track = document.getElementById("homeCarouselTrack");
    const dots = document.getElementById("homeCarouselDots");
    const prev = document.getElementById("homeCarouselPrev");
    const next = document.getElementById("homeCarouselNext");
    const frame = document.getElementById("homeCarousel");
    if(!section || !track || !dots || !prev || !next || !frame) return;

    let games = [];
    try{
      games = (await loadAllGames())
        .filter(g => g && g.id)
        .map(g => localizeGame(g, lang));
    }catch(_){
      section.style.display = "none";
      return;
    }

    if(games.length === 0){
      section.style.display = "none";
      return;
    }

    function gameHref(id){
      const url = new URL("game.html", location.href);
      url.searchParams.set("id", id);
      url.searchParams.set("lang", lang);
      return `${url.pathname}${url.search}`;
    }

    let cycleWidth = 0;
    let stepWidth = 0;
    let offset = 0;
    let running = true;
    let lastTs = 0;
    const speedPxPerSec = 36;
    const dotButtons = [];

    function buildTrack(){
      track.innerHTML = "";
      const repeatCount = 3;
      for(let i = 0; i < repeatCount; i++){
        games.forEach(g => {
          const item = el("div", { class:"homeCarouselItem" }, [
            el("a", { class:"homeCarouselLink", href:gameHref(g.id) }, [
              el("img", { class:"homeCarouselImage", src:firstImage(g), alt:t(lang, "home.gameCoverAlt", { title: g.title || t(lang, "fallback.gameTitle") }) }),
              el("span", { class:"homeCarouselTitle" }, [g.title || "Untitled"])
            ])
          ]);
          track.appendChild(item);
        });
      }
    }

    function measure(){
      const first = track.querySelector(".homeCarouselItem");
      if(!first) return;
      stepWidth = first.getBoundingClientRect().width + 12;
      cycleWidth = stepWidth * games.length;
      while(offset >= cycleWidth) offset -= cycleWidth;
      while(offset < 0) offset += cycleWidth;
    }

    function visibleCount(){
      if(window.matchMedia("(max-width:640px)").matches) return 1;
      if(window.matchMedia("(max-width:900px)").matches) return 2;
      return 3;
    }

    function activeIndex(){
      if(stepWidth <= 0 || games.length === 0) return 0;
      const center = (offset / stepWidth) + (visibleCount() - 1) / 2;
      return ((Math.round(center) % games.length) + games.length) % games.length;
    }

    function updateDots(){
      const active = activeIndex();
      dotButtons.forEach((btn, i) => {
        if(i === active) btn.classList.add("is-active");
        else btn.classList.remove("is-active");
      });
    }

    function renderOffset(){
      track.style.transform = `translateX(${-offset}px)`;
      prev.disabled = games.length <= 1;
      next.disabled = games.length <= 1;
      updateDots();
    }

    function tick(ts){
      if(!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      if(running && cycleWidth > 0){
        offset += speedPxPerSec * dt;
        if(offset >= cycleWidth) offset -= cycleWidth;
        renderOffset();
      }
      requestAnimationFrame(tick);
    }

    function moveBy(step){
      if(stepWidth <= 0) return;
      offset += step * stepWidth;
      while(offset >= cycleWidth) offset -= cycleWidth;
      while(offset < 0) offset += cycleWidth;
      renderOffset();
    }

    buildTrack();
    dots.innerHTML = "";
    games.forEach((g, i) => {
      const btn = el("button", {
        class:"homeCarouselDot",
        type:"button",
        "aria-label":t(lang, "carousel.itemLabel", { index: i + 1, title: g.title || "Untitled" }),
        onclick: () => {
          const target = i - (visibleCount() - 1) / 2;
          offset = ((target * stepWidth) % cycleWidth + cycleWidth) % cycleWidth;
          renderOffset();
        }
      });
      dotButtons.push(btn);
      dots.appendChild(btn);
    });
    measure();
    renderOffset();

    prev.addEventListener("click", () => moveBy(-1));
    next.addEventListener("click", () => moveBy(1));
    frame.addEventListener("mouseenter", () => { running = false; });
    frame.addEventListener("mouseleave", () => { running = true; });
    frame.addEventListener("focusin", () => { running = false; });
    frame.addEventListener("focusout", () => { running = true; });
    window.addEventListener("resize", () => {
      measure();
      renderOffset();
    });

    requestAnimationFrame(tick);
  }

  function renderEventList(target, items, options = {}){
    if(!target) return;
    const next = target.nextElementSibling;
    if(next && next.classList && next.classList.contains("eventsToggle")) next.remove();
    target.innerHTML = "";
    const initialVisible = Math.max(0, options.initialVisible ?? 0);
    const lang = options.lang || "ja";
    if(!Array.isArray(items) || items.length === 0){
      target.appendChild(el("li", { class:"eventsItem" }, [t(lang, "events.empty")]));
      return;
    }

    const visibleItems = initialVisible > 0 ? items.slice(0, initialVisible) : items;
    items.forEach(item => {
      const statusJa = item.status === "参加" ? "参加" : "出展";
      const status = statusJa === "参加"
        ? t(lang, "events.statusJoin")
        : t(lang, "events.statusExhibit");
      const eventName = pickLocalizedField(item, "name", lang);
      const location = pickLocalizedField(item, "location", lang);
      const statusClass = statusJa === "参加" ? "status-join" : "status-exhibit";
      const li = el("li", { class:"eventsItem" }, [
        el("div", { class:"eventsMain" }, [
          el("span", { class:"eventName" }, [localizeText(eventName, lang) || t(lang, "events.unnamed")]),
          el("div", { class:"eventMeta" }, [
            el("span", { class:`eventBadge ${statusClass}` }, [status]),
            location ? el("span", { class:"eventBadge" }, [localizeText(location, lang)]) : null
          ].filter(Boolean))
        ])
      ]);
      const isInitiallyHidden = initialVisible > 0 && target.childElementCount >= visibleItems.length;
      if(isInitiallyHidden) li.hidden = true;
      target.appendChild(li);
    });

    if(items.length > visibleItems.length){
      let expanded = false;
      target.classList.add("is-collapsed");
      const btn = el("button", {
        type: "button",
        class: "eventsToggle"
      }, [t(lang, "events.more")]);
      btn.addEventListener("click", () => {
        expanded = !expanded;
        target.querySelectorAll(".eventsItem").forEach((node, idx) => {
          if(idx >= visibleItems.length) node.hidden = !expanded;
        });
        if(expanded){
          target.classList.remove("is-collapsed");
          btn.textContent = t(lang, "events.close");
        }else{
          target.classList.add("is-collapsed");
          btn.textContent = t(lang, "events.more");
        }
      });
      target.insertAdjacentElement("afterend", btn);
    }else{
      target.classList.remove("is-collapsed");
    }
  }

  async function renderEvents(lang){
    const historyList = document.getElementById("eventsHistoryList");
    const upcomingList = document.getElementById("eventsUpcomingList");
    const section = document.getElementById("eventsSection");
    if(!historyList || !upcomingList || !section) return;

    try{
      const data = await loadJSON(EVENTS_URL);
      renderEventList(historyList, data.history, { initialVisible: 5, lang });
      renderEventList(upcomingList, data.upcoming, { initialVisible: 2, lang });
    }catch(_){
      section.style.display = "none";
    }
  }

  async function renderNewsPage(){
    const lang = getLang();
    applyCommonHeaderState(lang);
    document.title = t(lang, "news.pageTitle");

    const latest = document.getElementById("latestNewsList");
    const archive = document.getElementById("archiveNewsList");
    if(!latest || !archive) return;

    try{
      const normalized = normalizeAnnouncements(await loadJSON(ANNOUNCE_URL), lang);
      renderNewsCards(latest, normalized.slice(0, 3), lang);
      renderNewsArchive(archive, normalized.slice(3), lang);
    }catch(_){
      renderNewsCards(latest, [], lang);
      renderNewsArchive(archive, [], lang);
    }
  }

  function firstImage(game){
    return (Array.isArray(game.images) && game.images.length) ? game.images[0] : PLACEHOLDER;
  }

  function badgeIf(label, value){
    if(!nonEmpty(value)) return null;
    return el("span", { class:"badge" }, [`${label}：${value}`]);
  }


 // games.html：一覧（検索＆タグ絞り込み対応）
async function renderGamesList(){
  const lang = getLang();
  applyCommonHeaderState(lang);
  document.title = t(lang, "games.pageTitle");

  const grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

  let games = [];
  try {
    games = (await loadAllGames()).map(g => localizeGame(g, lang));
  } catch(e){
    grid.appendChild(el("div", { class:"card" }, [t(lang, "games.loadError")]));
    return;
  }

  // ---- フィルタUIを挿入----
  const parent = grid.parentElement || grid;
  let bar = document.getElementById("filterBar");
  if(!bar){
    bar = el("div", { id:"filterBar", class:"card filterBar", role:"region", "aria-label":t(lang, "games.filterAria") }, []);
    parent.insertBefore(bar, grid);
  }
  bar.innerHTML = "";

  const selected = new Set();

  const input = el("input", {
    id:"searchInput",
    type:"search",
    placeholder:t(lang, "games.searchPlaceholder")
  });

  const clearBtn = el("button", {
    type:"button",
    class:"btn",
    onclick: () => { input.value = ""; selected.clear(); update(); }
  }, [t(lang, "games.clear")]);

  const tagWrap = el("div", { class:"tagWrap" }, []);
  const allTags = [...new Set(
    games.flatMap(g => Array.isArray(g.tags) ? g.tags : [])
  )].filter(t => typeof t === "string" && t.trim().length > 0);

  const allBtn = el("button", {
    type:"button",
    class:"btn tagBtn",
    "aria-pressed":"true",
    onclick: () => { selected.clear(); update(); }
  }, [t(lang, "games.all")]);
  allBtn.dataset.tag = "__all__";
  tagWrap.appendChild(allBtn);

  for(const t of allTags){
    const btn = el("button", {
      type:"button",
      class:"btn tagBtn",
      "aria-pressed":"false",
      onclick: () => {
        if(selected.has(t)) selected.delete(t);
        else selected.add(t);
        update();
      }
    }, [t]);
    btn.dataset.tag = t;
    tagWrap.appendChild(btn);
  }

  const count = el("span", { class:"muted small", id:"resultCount" }, [""]);

  bar.appendChild(input);
  bar.appendChild(clearBtn);
  bar.appendChild(tagWrap);
  bar.appendChild(count);

  input.addEventListener("input", () => update());

  // ---- 絞り込みロジック ----
  function matchQuery(g, q){
    if(!q) return true;
    const s = (v)=> (typeof v === "string" ? v : "");
    const hay = (s(g.title) + " " + s(g.catch) + " " + s(g.feature1) + " " + s(g.description)).toLowerCase();
    return hay.includes(q);
  }

  function matchTags(g){
    if(selected.size === 0) return true; // 何も選ばれてない＝全部表示
    const tags = Array.isArray(g.tags) ? g.tags : [];
    return tags.some(t => selected.has(t)); // OR条件（どれか一致）
  }

  function updateTagButtons(){
    allBtn.setAttribute("aria-pressed", selected.size === 0 ? "true" : "false");
    tagWrap.querySelectorAll("button[data-tag]").forEach(btn => {
      const t = btn.dataset.tag;
      if(t === "__all__") return;
      btn.setAttribute("aria-pressed", selected.has(t) ? "true" : "false");
    });
  }

  function renderCards(list){
    grid.innerHTML = "";
    if(list.length === 0){
      grid.appendChild(el("div", { class:"card" }, [t(lang, "games.noResults")]));
      return;
    }

    for(const g of list){
      const tagBadges = (Array.isArray(g.tags) ? g.tags : []).slice(0, 3)
        .map(t => el("span", { class:"badge" }, [t]));

      const card = el("div", { class:"gameCard", role:"listitem" }, [
        el("img", { class:"cover", src:firstImage(g), alt:t(lang, "home.gameCoverAlt", { title: g.title || t(lang, "fallback.gameTitle") }) }),
        el("div", {}, [
          el("h2", { class:"gameTitle" }, [g.title || "Untitled"]),
          nonEmpty(g.catch) ? el("p", { class:"muted small" }, [g.catch]) : el("span", {}),
          el("div", { class:"metaRow" }, [
            badgeIf(t(lang, "label.players"), g.players),
            badgeIf(t(lang, "label.time"), g.time),
            ...tagBadges
          ].filter(Boolean)),
          nonEmpty(g.feature1) ? el("p", { class:"featureOne" }, [`${t(lang, "games.featurePrefix")}：${g.feature1}`]) : el("span", {})
        ]),
        el("a", { class:"cardBtn", href:`game.html?id=${encodeURIComponent(g.id)}&lang=${lang}` }, [t(lang, "games.detail")])
      ]);

      grid.appendChild(card);
    }
  }

  function update(){
    const q = input.value.trim().toLowerCase();
    const filtered = games
      .filter(g => g && g.id)
      .filter(g => matchQuery(g, q) && matchTags(g));

    updateTagButtons();
    count.textContent = t(lang, "games.resultCount", { shown: filtered.length, total: games.length });
    renderCards(filtered);
  }

  update();
}

  // index.html：トップ
  async function renderHome(){
    const lang = getLang();
    applyCommonHeaderState(lang);
    applyHomeI18n(lang);
    document.title = t(lang, "home.pageTitle");
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) metaDesc.setAttribute("content", t(lang, "home.metaDescription"));
    await renderHomeCarousel(lang);
    await renderEvents(lang);

    // お知らせ：空なら非表示
    const newsSection = document.getElementById("newsSection");
    const newsList = document.getElementById("newsList");
    if(newsSection && newsList){
      try{
        const items = normalizeAnnouncements(await loadJSON(ANNOUNCE_URL), lang);
        if(items.length === 0){
          newsSection.style.display = "none";
        }else{
          newsSection.style.display = "";
          renderNewsSimpleList(newsList, items.slice(0, 3), lang);
        }
      }catch(_){
        newsSection.style.display = "none";
      }
    }

  }

  // game.html：詳細
  function setLinkBtn(id, url){
    const btn = document.getElementById(id);
    if(!btn) return;
    if(!nonEmpty(url)){ btn.style.display = "none"; return; }
    btn.style.display = "inline-block";
    btn.href = url.trim();
  }

  async function renderGame(){
    const lang = getLang();
    applyCommonHeaderState(lang);

    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if(!id){
      document.getElementById("gameTitle").textContent = t(lang, "game.notFound");
      return;
    }

    let g;
    try { g = localizeGame(await loadGame(id), lang); }
    catch(_){
      document.getElementById("gameTitle").textContent = t(lang, "game.loadError");
      return;
    }

    document.title = `${t(lang, "game.pageTitlePrefix")}${g.title || "Game"}`;
    document.getElementById("gameTitle").textContent = g.title || "";
    document.getElementById("gameCatch").textContent = g.catch || "";

    const backBtn = document.querySelector(".closeBtn");
    if(backBtn){
      backBtn.setAttribute("href", `games.html?lang=${lang}`);
      backBtn.setAttribute("aria-label", t(lang, "game.backToListAria"));
    }
    const labelMap = [
      ["game.basicInfo", document.querySelector("[data-i18n='game.basicInfo']")],
      ["game.descriptionHeading", document.querySelector("[data-i18n='game.descriptionHeading']")],
      ["game.linksHeading", document.querySelector("[data-i18n='game.linksHeading']")],
      ["label.players", document.querySelector("[data-i18n='label.players']")],
      ["label.time", document.querySelector("[data-i18n='label.time']")],
      ["label.age", document.querySelector("[data-i18n='label.age']")],
      ["game.rules", document.querySelector("[data-i18n='game.rules']")],
      ["game.video", document.querySelector("[data-i18n='game.video']")],
      ["game.shop", document.querySelector("[data-i18n='game.shop']")]
    ];
    labelMap.forEach(([key, node]) => {
      if(node) node.textContent = t(lang, key);
    });

    // 基本情報：無い項目は非表示
    const rows = [
      ["playersRow", g.players],
      ["timeRow", g.time],
      ["ageRow", g.age],
    ];
    rows.forEach(([rowId, value]) => {
      const row = document.getElementById(rowId);
      if(!row) return;
      if(nonEmpty(value)) row.querySelector("dd").textContent = value;
      else row.style.display = "none";
    });

    const desc = document.getElementById("description");
    if(desc){
      if(nonEmpty(g.description)) desc.textContent = g.description;
      else desc.style.display = "none";
    }

    // リンク（無いものは非表示）
    setLinkBtn("rulesBtn", g.links?.rulesPdf);
    setLinkBtn("shopBtn", g.links?.shopUrl);
    setLinkBtn("videoBtn", g.links?.videoUrl);

    const channelsBlock = document.getElementById("channelsBlock");
    const channelsText = document.getElementById("channelsText");
    if(channelsBlock && channelsText){
      const labels = resolvedChannelLabels(g, lang);
      if(labels.length > 0){
        const sep = lang === "ja" ? "、" : ", ";
        channelsText.textContent = labels.join(sep);
        channelsBlock.hidden = false;
      }else{
        channelsText.textContent = "";
        channelsBlock.hidden = true;
      }
    }

    // 画像切替（左右ボタン）
    const images = (Array.isArray(g.images) && g.images.length) ? g.images : [PLACEHOLDER];
    const main = document.getElementById("mainImage");
    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");

    let i = 0;
    function show(){
      main.src = images[i];
      if(prev) prev.disabled = images.length <= 1;
      if(next) next.disabled = images.length <= 1;
    }
    if(prev) prev.addEventListener("click", () => { i = (i - 1 + images.length) % images.length; show(); });
    if(next) next.addEventListener("click", () => { i = (i + 1) % images.length; show(); });

    show();
  }

  function renderContactPage(){
    const lang = getLang();
    applyCommonHeaderState(lang);
    document.title = t(lang, "contact.pageTitle");
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) metaDesc.setAttribute("content", t(lang, "contact.metaDescription"));

    const frame = document.getElementById("googleFormFrame");
    const missing = document.getElementById("contactEmbedMissing");
    if(!frame || !missing) return;
    if(nonEmpty(CONTACT_FORM_EMBED_URL)){
      frame.src = CONTACT_FORM_EMBED_URL.trim();
      frame.removeAttribute("hidden");
      missing.hidden = true;
    }else{
      frame.removeAttribute("src");
      frame.setAttribute("hidden", "");
      missing.hidden = false;
    }
  }

  return { renderGamesList, renderHome, renderGame, renderNewsPage, renderContactPage };
})();
