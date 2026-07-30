// Localization layer for the Palm Jebel Ali microsite.
// English stays at the root ("/"); Arabic and Russian are served under
// /ar and /ru. All UI/chrome strings live here; page CONTENT is translated
// separately in lib/content/i18n/**.

export const LOCALES = ["en", "ar", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

// Locales that get a URL prefix ("/ar", "/ru"). English is prefix-less.
export const PREFIXED_LOCALES = ["ar", "ru"] as const;

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localeName(locale: Locale): string {
  return { en: "English", ar: "العربية", ru: "Русский" }[locale];
}

// Prefix a base ("/…") path with the locale ("" for en, "/ar", "/ru").
export function localePath(locale: Locale, path: string): string {
  const p = path === "/" ? "" : path;
  return locale === "en" ? path : `/${locale}${p}`;
}

export interface UIStrings {
  nav: { home: string; residences: string; offplan: string; community: string; guides: string; buy: string };
  enquire: string;
  registerInterest: string;
  talkToTeam: string;
  whatsappUs: string;
  faqHeading: string;
  atAGlance: string;
  keepReading: string;
  call: string;
  whatsapp: string;
  from: string;
  view: string;
  footer: { residences: string; explore: string; guides: string; blurb: string; disclaimer: string };
}

export const UI: Record<Locale, UIStrings> = {
  en: {
    nav: { home: "Home", residences: "Residences", offplan: "Off-plan", community: "Community", guides: "Guides", buy: "Buy" },
    enquire: "Enquire",
    registerInterest: "Register your interest",
    talkToTeam: "Talk to our team",
    whatsappUs: "WhatsApp us",
    faqHeading: "Frequently asked questions",
    atAGlance: "At a glance",
    keepReading: "Keep reading",
    call: "Call",
    whatsapp: "WhatsApp",
    from: "From",
    view: "View",
    footer: {
      residences: "Residences",
      explore: "Explore",
      guides: "Guides",
      blurb: "An independent showcase for Nakheel’s Palm Jebel Ali, curated by a Dubai brokerage tracking release phases directly.",
      disclaimer: "Palm Jebel Ali is a master development by Nakheel. Renders shown are illustrative concept imagery and subject to change. This is an independent showcase, not affiliated with or endorsed by Nakheel.",
    },
  },
  ar: {
    nav: { home: "الرئيسية", residences: "المساكن", offplan: "على الخارطة", community: "المجتمع", guides: "الأدلة", buy: "شراء" },
    enquire: "استفسر",
    registerInterest: "سجّل اهتمامك",
    talkToTeam: "تحدث مع فريقنا",
    whatsappUs: "راسلنا عبر واتساب",
    faqHeading: "الأسئلة الشائعة",
    atAGlance: "لمحة سريعة",
    keepReading: "اقرأ المزيد",
    call: "اتصل",
    whatsapp: "واتساب",
    from: "ابتداءً من",
    view: "عرض",
    footer: {
      residences: "المساكن",
      explore: "استكشف",
      guides: "الأدلة",
      blurb: "منصة عرض مستقلة لمشروع نخلة جبل علي من نخيل، من إعداد وسيط عقاري في دبي يتابع مراحل الإطلاق مباشرةً.",
      disclaimer: "نخلة جبل علي مشروع تطوير رئيسي من نخيل. الصور المعروضة تمثيلية وقابلة للتغيير. هذه منصة عرض مستقلة غير تابعة لنخيل ولا معتمدة منها.",
    },
  },
  ru: {
    nav: { home: "Главная", residences: "Резиденции", offplan: "Офф-план", community: "Сообщество", guides: "Гиды", buy: "Купить" },
    enquire: "Запрос",
    registerInterest: "Оставить заявку",
    talkToTeam: "Связаться с командой",
    whatsappUs: "Написать в WhatsApp",
    faqHeading: "Частые вопросы",
    atAGlance: "Кратко",
    keepReading: "Читать далее",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    from: "От",
    view: "Смотреть",
    footer: {
      residences: "Резиденции",
      explore: "Обзор",
      guides: "Гиды",
      blurb: "Независимая витрина проекта Palm Jebel Ali от Nakheel, подготовленная дубайским брокером, который напрямую отслеживает этапы продаж.",
      disclaimer: "Palm Jebel Ali — мастер-проект компании Nakheel. Показанные рендеры являются концептуальными и могут измениться. Это независимая витрина, не аффилированная с Nakheel.",
    },
  },
};
