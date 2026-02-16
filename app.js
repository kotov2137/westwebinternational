// West Web International — landing demo (EN/PL/UA)
// Pure JS (no build tools). Buttons work, language switches, forms show a demo success toast.

const FORM_ENDPOINT = "https://formspree.io/f/mvzbanke";
const STORAGE_KEY = "wwi_lang";
const DEFAULT_LANG = "en";

/** @type {Record<string, Record<string,string>>} */
const COPY = {
  en: {
    badge: "Web development • Design • SEO • Support",
    hero_title: "Professional websites built to sell.",
    hero_lead: "We deliver fast, secure, and conversion-focused sites for businesses worldwide. Based in Poland — serving clients globally.",
    cta_short: "Get a quote",
    cta_primary: "Get a consultation",
    cta_secondary: "See our work",
    stat_1: "First clickable prototype",
    stat_2: "Performance score targets",
    stat_3: "Monitoring & support options",
    panel_title: "Quick request",
    panel_hint: "Tell us what you need — we reply within 24 hours.",
    f_name: "Name",
    f_email: "E-mail",
    f_company: "Company",
    f_goal: "Goal",
    f_budget: "Budget",
    f_scope: "Scope",
    f_msg: "Message",
    goal_pick: "Pick one…",
    goal_1: "Corporate website",
    goal_2: "Online store",
    goal_3: "Landing page",
    goal_4: "Portal / system",
    chip_1: "Corporate websites",
    chip_2: "E-commerce",
    chip_3: "Landing pages",
    chip_4: "Portals & integrations",
    chip_5: "Security & compliance",
    about_title: "About West Web International",
    about_sub: "A global web studio with a Poland-based core. We build websites that look strict, feel premium, and work reliably.",
    about_card1_title: "What you get",
    about_b1: "Clean, professional UI with strong information architecture",
    about_b2: "Fast loading, SEO-ready structure, and analytics setup",
    about_b3: "Mobile-first responsiveness and accessibility basics",
    about_b4: "Maintainable code & documentation for future upgrades",
    about_card2_title: "How we work",
    step_1_t: "Brief → structure",
    step_1_d: "We clarify goals, pages, and required functionality.",
    step_2_t: "Prototype → design",
    step_2_d: "Clickable draft first, then strict visual system.",
    step_3_t: "Build → launch",
    step_3_d: "Development, QA, deployment, and handover.",
    step_4_t: "Support → growth",
    step_4_d: "Updates, content, SEO, and performance monitoring.",
    services_title: "Services",
    services_sub: "Choose a clear scope, get a clear delivery. No “magic” — just engineering and measurable outcomes.",
    svc_1_t: "Custom development",
    svc_1_d: "From strict business sites to complex dashboards and portals.",
    svc_2_t: "E-commerce",
    svc_2_d: "Catalog, payments, delivery rules, CRM, and product SEO.",
    svc_3_t: "SEO & performance",
    svc_3_d: "Core Web Vitals, structured data, and technical SEO.",
    svc_4_t: "Support & maintenance",
    svc_4_d: "Monthly updates, backups, monitoring, and fixes.",
    svc_5_t: "Functional blocks",
    svc_5_b1: "Multilingual content (EN/PL/UA)",
    svc_5_b2: "Forms + email integrations",
    svc_5_b3: "Blog / news / CMS-ready structure",
    svc_5_b4: "Booking, payments, and subscriptions",
    svc_5_b5: "GDPR-friendly contact workflows",
    svc_6_t: "Quality checklist",
    svc_6_b1: "Responsive on mobile / tablet / desktop",
    svc_6_b2: "Semantic HTML + basic accessibility",
    svc_6_b3: "Optimized assets & caching hints",
    svc_6_b4: "Security headers recommendations",
    svc_6_b5: "Clean code & handover notes",
    svc_7_t: "Optional add-ons",
    svc_7_b1: "Brand identity & logo refresh",
    svc_7_b2: "Copywriting (EN/PL/UA)",
    svc_7_b3: "Google Business Profile & local SEO",
    svc_7_b4: "Ads landing pages & analytics funnels",
    svc_7_b5: "Security hardening & pentest guidance",
    work_title: "Selected work",
    work_sub: "Placeholders for your portfolio. Replace these cards with real projects later — design stays strict and clean.",
    work_a_tag: "Business",
    work_a_t: "Corporate website",
    work_a_d: "Structured pages, strong typography, fast performance.",
    work_a_m: "UI • SEO • Analytics",
    work_b_tag: "E-commerce",
    work_b_t: "Online store",
    work_b_d: "Catalog, filters, checkout — ready for scale.",
    work_b_m: "Shop • CRM • Payments",
    work_c_tag: "Landing",
    work_c_t: "Conversion landing",
    work_c_d: "Clear offer, A/B-ready structure, lead capture.",
    work_c_m: "CRO • Copy • Forms",
    details: "Details",
    pricing_title: "Pricing models",
    pricing_sub: "Transparent options. Final price depends on scope, pages, and integrations.",
    p1_t: "Starter",
    p1_n: "For a strict business presence",
    p1_b1: "Up to 5 pages",
    p1_b2: "Multilingual (EN/PL/UA)",
    p1_b3: "Basic SEO setup",
    p1_b4: "Contact forms",
    p2_t: "Business",
    p2_n: "For teams that need features",
    p2_b1: "Up to 12 pages + blog",
    p2_b2: "Advanced UI components",
    p2_b3: "Analytics + events",
    p2_b4: "Performance targets",
    p3_t: "Custom",
    p3_val: "On request",
    p3_n: "Portals, systems, integrations",
    p3_b1: "E-commerce / portals",
    p3_b2: "CRM / ERP integrations",
    p3_b3: "Security hardening",
    p3_b4: "Long-term maintenance",
    choose: "Choose",
    best: "Best value",
    faq_title: "FAQ",
    faq_sub: "Short answers. No poetry.",
    q1: "How fast can you deliver?",
    a1: "First clickable prototype in 48–96 hours for most projects. Full delivery depends on scope and client feedback speed.",
    q2: "Do you provide hosting?",
    a2: "We can set up hosting and deployment or work with your provider. We also offer monitoring and backups.",
    q3: "What about SEO?",
    a3: "Every build includes technical SEO basics (structure, metadata, performance). Ongoing SEO is available as a monthly service.",
    q4: "Can you upgrade an existing website?",
    a4: "Yes. We can redesign, refactor, improve performance, add new blocks, and migrate to a modern stack.",
    contact_title: "Contact",
    contact_sub: "Send a request — we respond with a plan and estimate.",
    contact_card_t: "Direct channels",
    phone: "Phone",
    location: "Location",
    location_v: "Poland (Kielce) — worldwide delivery",
    hours: "Hours",
    hours_v: "Mon–Fri, 09:00–18:00 CET",
    notice_t: "Demo note",
    notice_d: "Forms can send real messages via Formspree. Paste your Formspree endpoint into app.js (FORM_ENDPOINT).",
    budget_pick: "Pick one…",
    sc_1: "Website",
    sc_2: "SEO",
    sc_3: "Maintenance",
    sc_4: "Landing/Ads",
    send: "Send",
    fine: "By sending this form, you agree to be contacted about your request. No spam.",
    footer_note: "Professional web development • Worldwide",
    to_top: "Back to top",
    close: "Close",
    lang_label: "Language",
    toast_sent: "Request sent. We’ll contact you soon.",
    toast_error: "Please fill all required fields correctly."
  },
  pl: {
    badge: "Tworzenie stron • Design • SEO • Wsparcie",
    hero_title: "Profesjonalne strony, które sprzedają.",
    hero_lead: "Tworzymy szybkie, bezpieczne i nastawione na konwersję strony dla firm na całym świecie. Rdzeń zespołu w Polsce — realizacje globalnie.",
    cta_short: "Wycena",
    cta_primary: "Umów konsultację",
    cta_secondary: "Zobacz realizacje",
    stat_1: "Pierwszy klikalny prototyp",
    stat_2: "Cele wydajności (score)",
    stat_3: "Opcje monitoringu i wsparcia",
    panel_title: "Szybkie zapytanie",
    panel_hint: "Opisz potrzebę — odpowiemy w 24 godziny.",
    f_name: "Imię",
    f_email: "E-mail",
    f_company: "Firma",
    f_goal: "Cel",
    f_budget: "Budżet",
    f_scope: "Zakres",
    f_msg: "Wiadomość",
    goal_pick: "Wybierz…",
    goal_1: "Strona firmowa",
    goal_2: "Sklep online",
    goal_3: "Landing page",
    goal_4: "Portal / system",
    chip_1: "Strony firmowe",
    chip_2: "E-commerce",
    chip_3: "Landing pages",
    chip_4: "Portale i integracje",
    chip_5: "Bezpieczeństwo i zgodność",
    about_title: "O West Web International",
    about_sub: "Globalne studio webowe z bazą w Polsce. Budujemy strony, które wyglądają profesjonalnie i działają niezawodnie.",
    about_card1_title: "Co dostajesz",
    about_b1: "Czysty, profesjonalny UI i dobra architektura informacji",
    about_b2: "Szybkie ładowanie, SEO-ready struktura i analityka",
    about_b3: "Responsywność mobile-first i podstawy dostępności",
    about_b4: "Utrzymywalny kod i dokumentacja na przyszłość",
    about_card2_title: "Jak pracujemy",
    step_1_t: "Brief → struktura",
    step_1_d: "Ustalamy cele, podstrony i funkcje.",
    step_2_t: "Prototyp → design",
    step_2_d: "Najpierw klikalny szkic, potem spójny system wizualny.",
    step_3_t: "Budowa → start",
    step_3_d: "Development, QA, wdrożenie i przekazanie.",
    step_4_t: "Wsparcie → rozwój",
    step_4_d: "Aktualizacje, treści, SEO i monitoring.",
    services_title: "Usługi",
    services_sub: "Jasny zakres, jasny efekt. Bez bajek — tylko inżynieria i mierzalne wyniki.",
    svc_1_t: "Dedykowany development",
    svc_1_d: "Od stron firmowych po panele i portale.",
    svc_2_t: "E-commerce",
    svc_2_d: "Katalog, płatności, dostawy, CRM i SEO produktów.",
    svc_3_t: "SEO i wydajność",
    svc_3_d: "Core Web Vitals, dane strukturalne, SEO techniczne.",
    svc_4_t: "Wsparcie i utrzymanie",
    svc_4_d: "Miesięczne aktualizacje, kopie, monitoring i poprawki.",
    svc_5_t: "Bloki funkcjonalne",
    svc_5_b1: "Wielojęzyczność (EN/PL/UA)",
    svc_5_b2: "Formularze + integracje e-mail",
    svc_5_b3: "Blog / aktualności / struktura pod CMS",
    svc_5_b4: "Rezerwacje, płatności i subskrypcje",
    svc_5_b5: "Kontakt zgodny z GDPR",
    svc_6_t: "Checklista jakości",
    svc_6_b1: "Responsywność: mobile / tablet / desktop",
    svc_6_b2: "Semantyczny HTML + podstawy dostępności",
    svc_6_b3: "Optymalizacja zasobów i cache",
    svc_6_b4: "Rekomendacje nagłówków bezpieczeństwa",
    svc_6_b5: "Czysty kod i notatki przekazania",
    svc_7_t: "Dodatki",
    svc_7_b1: "Identyfikacja wizualna i odświeżenie logo",
    svc_7_b2: "Copywriting (EN/PL/UA)",
    svc_7_b3: "Google Business Profile i local SEO",
    svc_7_b4: "Landingi pod reklamy i lejek analityki",
    svc_7_b5: "Hardening i wskazówki pentestu",
    work_title: "Wybrane realizacje",
    work_sub: "Miejsca na Twoje portfolio. Podmień karty na realne projekty — design zostaje strict i czysty.",
    work_a_tag: "Biznes",
    work_a_t: "Strona firmowa",
    work_a_d: "Struktura, typografia, szybka praca.",
    work_a_m: "UI • SEO • Analityka",
    work_b_tag: "E-commerce",
    work_b_t: "Sklep online",
    work_b_d: "Katalog, filtry, checkout — gotowe na skalę.",
    work_b_m: "Sklep • CRM • Płatności",
    work_c_tag: "Landing",
    work_c_t: "Landing konwersyjny",
    work_c_d: "Jasna oferta, struktura pod A/B, leady.",
    work_c_m: "CRO • Copy • Formularze",
    details: "Szczegóły",
    pricing_title: "Modele cenowe",
    pricing_sub: "Transparentnie. Ostateczna cena zależy od zakresu, liczby stron i integracji.",
    p1_t: "Start",
    p1_n: "Dla obecności biznesowej",
    p1_b1: "Do 5 podstron",
    p1_b2: "Wielojęzyczność (EN/PL/UA)",
    p1_b3: "Podstawowe SEO",
    p1_b4: "Formularze kontaktowe",
    p2_t: "Biznes",
    p2_n: "Dla zespołów i funkcji",
    p2_b1: "Do 12 stron + blog",
    p2_b2: "Zaawansowane komponenty UI",
    p2_b3: "Analityka + zdarzenia",
    p2_b4: "Cele wydajności",
    p3_t: "Custom",
    p3_val: "Na zapytanie",
    p3_n: "Portale, systemy, integracje",
    p3_b1: "E-commerce / portale",
    p3_b2: "Integracje CRM / ERP",
    p3_b3: "Wzmocnienie bezpieczeństwa",
    p3_b4: "Długie utrzymanie",
    choose: "Wybierz",
    best: "Najlepsza opcja",
    faq_title: "FAQ",
    faq_sub: "Krótko i konkretnie.",
    q1: "Jak szybko dostarczacie?",
    a1: "Pierwszy klikalny prototyp w 48–96 godzin dla większości projektów. Pełna realizacja zależy od zakresu i tempa feedbacku.",
    q2: "Czy oferujecie hosting?",
    a2: "Możemy wdrożyć hosting/deployment lub pracować na Twoim dostawcy. Dostępne są też monitoring i backupy.",
    q3: "A SEO?",
    a3: "Każdy projekt ma podstawy SEO technicznego (struktura, meta, wydajność). SEO ciągłe jest jako usługa miesięczna.",
    q4: "Czy modernizujecie istniejące strony?",
    a4: "Tak. Redesign, refaktor, poprawa wydajności, nowe bloki i migracja na nowoczesny stack.",
    contact_title: "Kontakt",
    contact_sub: "Wyślij zapytanie — odezwiemy się z planem i wyceną.",
    contact_card_t: "Kanały bezpośrednie",
    phone: "Telefon",
    location: "Lokalizacja",
    location_v: "Polska (Kielce) — realizacje globalnie",
    hours: "Godziny",
    hours_v: "Pn–Pt, 09:00–18:00 CET",
    notice_t: "Uwaga",
    notice_d: "Formularze mogą wysyłać realne wiadomości przez Formspree. Wklej swój endpoint w app.js (FORM_ENDPOINT).",
    budget_pick: "Wybierz…",
    sc_1: "Strona",
    sc_2: "SEO",
    sc_3: "Utrzymanie",
    sc_4: "Landing/Reklamy",
    send: "Wyślij",
    fine: "Wysyłając formularz, zgadzasz się na kontakt w sprawie zapytania. Bez spamu.",
    footer_note: "Profesjonalny web development • Globalnie",
    to_top: "Do góry",
    close: "Zamknij",
    lang_label: "Język",
    toast_sent: "Wysłano. Skontaktujemy się wkrótce.",
    toast_error: "Uzupełnij poprawnie wymagane pola."
  },
  ua: {
    badge: "Веброзробка • Дизайн • SEO • Підтримка",
    hero_title: "Професійні сайти, які продають.",
    hero_lead: "Робимо швидкі, безпечні й орієнтовані на конверсію сайти для бізнесу по всьому світу. База в Польщі — робота глобально.",
    cta_short: "Отримати кошторис",
    cta_primary: "Отримати консультацію",
    cta_secondary: "Подивитись роботи",
    stat_1: "Перший клікабельний прототип",
    stat_2: "Цілі продуктивності (score)",
    stat_3: "Опції моніторингу та підтримки",
    panel_title: "Швидка заявка",
    panel_hint: "Опишіть потребу — відповімо протягом 24 годин.",
    f_name: "Імʼя",
    f_email: "E-mail",
    f_company: "Компанія",
    f_goal: "Ціль",
    f_budget: "Бюджет",
    f_scope: "Обсяг",
    f_msg: "Повідомлення",
    goal_pick: "Оберіть…",
    goal_1: "Корпоративний сайт",
    goal_2: "Інтернет-магазин",
    goal_3: "Лендінг",
    goal_4: "Портал / система",
    chip_1: "Корпоративні сайти",
    chip_2: "E-commerce",
    chip_3: "Лендінги",
    chip_4: "Портали та інтеграції",
    chip_5: "Безпека та відповідність",
    about_title: "Про West Web International",
    about_sub: "Міжнародна веб-студія з базою в Польщі. Робимо сайти, які виглядають строго, преміально й працюють надійно.",
    about_card1_title: "Що ви отримуєте",
    about_b1: "Чистий професійний UI та сильну структуру інформації",
    about_b2: "Швидке завантаження, SEO-готову архітектуру й аналітику",
    about_b3: "Mobile-first адаптивність та базову доступність",
    about_b4: "Підтримуваний код і документацію для розвитку",
    about_card2_title: "Як ми працюємо",
    step_1_t: "Бриф → структура",
    step_1_d: "Уточнюємо цілі, сторінки та потрібний функціонал.",
    step_2_t: "Прототип → дизайн",
    step_2_d: "Спочатку клікабельний макет, потім строгий візуальний стиль.",
    step_3_t: "Розробка → запуск",
    step_3_d: "Dev, QA, деплой і передача проєкту.",
    step_4_t: "Підтримка → ріст",
    step_4_d: "Оновлення, контент, SEO та моніторинг.",
    services_title: "Послуги",
    services_sub: "Чіткий обсяг — чіткий результат. Без казок — лише інженерія та вимірюваний ефект.",
    svc_1_t: "Кастомна розробка",
    svc_1_d: "Від бізнес-сайтів до кабінетів і порталів.",
    svc_2_t: "E-commerce",
    svc_2_d: "Каталог, оплати, доставка, CRM та SEO товарів.",
    svc_3_t: "SEO та швидкість",
    svc_3_d: "Core Web Vitals, структуровані дані та технічне SEO.",
    svc_4_t: "Підтримка та супровід",
    svc_4_d: "Щомісячні оновлення, бекапи, моніторинг і фікси.",
    svc_5_t: "Функціональні блоки",
    svc_5_b1: "Багатомовність (EN/PL/UA)",
    svc_5_b2: "Форми + email-інтеграції",
    svc_5_b3: "Блог / новини / структура під CMS",
    svc_5_b4: "Бронювання, оплати й підписки",
    svc_5_b5: "GDPR-дружні процеси контакту",
    svc_6_t: "Чекліст якості",
    svc_6_b1: "Адаптивність: мобайл / планшет / десктоп",
    svc_6_b2: "Семантичний HTML + базова доступність",
    svc_6_b3: "Оптимізація ресурсів і кешування",
    svc_6_b4: "Рекомендації щодо security headers",
    svc_6_b5: "Чистий код і нотатки передачі",
    svc_7_t: "Додатково",
    svc_7_b1: "Айдентика та оновлення логотипу",
    svc_7_b2: "Копірайтинг (EN/PL/UA)",
    svc_7_b3: "Google Business Profile та local SEO",
    svc_7_b4: "Лендінги під рекламу й аналітика воронки",
    svc_7_b5: "Зміцнення безпеки та поради щодо тестів",
    work_title: "Вибрані роботи",
    work_sub: "Заглушки під портфоліо. Заміниш на реальні кейси — дизайн залишиться строгим і чистим.",
    work_a_tag: "Бізнес",
    work_a_t: "Корпоративний сайт",
    work_a_d: "Структура сторінок, типографіка, висока швидкість.",
    work_a_m: "UI • SEO • Аналітика",
    work_b_tag: "E-commerce",
    work_b_t: "Інтернет-магазин",
    work_b_d: "Каталог, фільтри, checkout — готово масштабуватись.",
    work_b_m: "Магазин • CRM • Платежі",
    work_c_tag: "Лендінг",
    work_c_t: "Конверсійний лендінг",
    work_c_d: "Чітка пропозиція, структура під A/B, збір лідів.",
    work_c_m: "CRO • Тексти • Форми",
    details: "Деталі",
    pricing_title: "Моделі ціноутворення",
    pricing_sub: "Прозоро. Фінальна ціна залежить від обсягу, сторінок та інтеграцій.",
    p1_t: "Старт",
    p1_n: "Для бізнес-присутності",
    p1_b1: "До 5 сторінок",
    p1_b2: "Багатомовність (EN/PL/UA)",
    p1_b3: "Базове SEO",
    p1_b4: "Контактні форми",
    p2_t: "Бізнес",
    p2_n: "Для команд і функцій",
    p2_b1: "До 12 сторінок + блог",
    p2_b2: "Розширені UI-компоненти",
    p2_b3: "Аналітика + події",
    p2_b4: "Цілі продуктивності",
    p3_t: "Кастом",
    p3_val: "За запитом",
    p3_n: "Портали, системи, інтеграції",
    p3_b1: "E-commerce / портали",
    p3_b2: "Інтеграції CRM / ERP",
    p3_b3: "Зміцнення безпеки",
    p3_b4: "Довгостроковий супровід",
    choose: "Обрати",
    best: "Найкраще",
    faq_title: "FAQ",
    faq_sub: "Коротко і по суті.",
    q1: "Як швидко ви робите?",
    a1: "Перший клікабельний прототип — за 48–96 годин для більшості проєктів. Повний термін залежить від обсягу та швидкості фідбеку.",
    q2: "Чи даєте хостинг?",
    a2: "Можемо налаштувати хостинг і деплой або працювати з вашим провайдером. Також є моніторинг і бекапи.",
    q3: "А SEO?",
    a3: "Кожна розробка містить базове технічне SEO (структура, мета, швидкість). Довгострокове SEO — як щомісячна послуга.",
    q4: "Можете оновити існуючий сайт?",
    a4: "Так. Редизайн, рефакторинг, швидкість, нові блоки та міграція на сучасний стек.",
    contact_title: "Контакти",
    contact_sub: "Надішліть запит — відповімо з планом та оцінкою.",
    contact_card_t: "Прямі канали",
    phone: "Телефон",
    location: "Локація",
    location_v: "Польща (Кельце) — робота по світу",
    hours: "Години",
    hours_v: "Пн–Пт, 09:00–18:00 CET",
    notice_t: "Примітка демо",
    notice_d: "Форми можуть надсилати реальні повідомлення через Formspree. Вставте свій endpoint у app.js (FORM_ENDPOINT).",
    budget_pick: "Оберіть…",
    sc_1: "Сайт",
    sc_2: "SEO",
    sc_3: "Супровід",
    sc_4: "Лендінг/Реклама",
    send: "Надіслати",
    fine: "Надсилаючи форму, ви погоджуєтесь на контакт щодо запиту. Без спаму.",
    footer_note: "Професійна веброзробка • По світу",
    to_top: "Нагору",
    close: "Закрити",
    lang_label: "Мова",
    toast_sent: "Надіслано. Ми зв’яжемось найближчим часом.",
    toast_error: "Заповніть коректно обов’язкові поля."
  }
};

// =============================
// Form sending (Formspree)
// =============================
// 1) Create a form at https://formspree.io and copy your endpoint URL.
// 2) Paste it below (same endpoint can be used for both forms).
// Example: "https://formspree.io/f/XXXXXXXX"

const state = { lang: DEFAULT_LANG };

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function setLang(lang){
  if(!COPY[lang]) lang = DEFAULT_LANG;
  state.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang === "ua" ? "uk" : lang;

  $all(".lang__btn").forEach(btn=>{
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  $all("[data-i18n]").forEach(node=>{
    const key = node.dataset.i18n;
    const val = COPY[lang][key];
    if(typeof val === "string") node.textContent = val;
  });

  // nav labels
  const navMap = {
    en: { about:"About", services:"Services", work:"Work", pricing:"Pricing", contact:"Contact" },
    pl: { about:"O nas", services:"Usługi", work:"Realizacje", pricing:"Cennik", contact:"Kontakt" },
    ua: { about:"Про нас", services:"Послуги", work:"Роботи", pricing:"Ціни", contact:"Контакти" },
  };
  const labels = navMap[lang] || navMap.en;
  $all('a[data-scroll][href="#about"]').forEach(a=>a.textContent = labels.about);
  $all('a[data-scroll][href="#services"]').forEach(a=>a.textContent = labels.services);
  $all('a[data-scroll][href="#work"]').forEach(a=>a.textContent = labels.work);
  $all('a[data-scroll][href="#pricing"]').forEach(a=>a.textContent = labels.pricing);
  $all('a[data-scroll][href="#contact"]').forEach(a=>a.textContent = labels.contact);

  const titleMap = {
    en: "West Web International — Professional Websites on Demand",
    pl: "West Web International — Profesjonalne strony na zamówienie",
    ua: "West Web International — Професійні сайти на замовлення",
  };
  document.title = titleMap[lang] || titleMap.en;
}

function scrollToHash(hash){
  const el = document.querySelector(hash);
  if(!el) return;
  el.scrollIntoView({behavior:"smooth", block:"start"});
}

function setupScroll(){
  document.addEventListener("click", (e)=>{
    const a = e.target.closest("a[data-scroll]");
    if(a){
      const href = a.getAttribute("href") || "";
      if(href.startsWith("#")){
        e.preventDefault();
        closeMobile();
        scrollToHash(href);
        history.replaceState(null, "", href);
      }
    }
    const b = e.target.closest("[data-scroll-btn]");
    if(b){
      const target = b.getAttribute("data-scroll-btn");
      if(target){
        closeMobile();
        scrollToHash(target);
      }
    }
  });
}

function toast(msg, kind="ok"){
  const t = $("#toast");
  if(!t) return;
  t.textContent = msg;
  t.hidden = false;
  t.style.borderColor = kind === "ok" ? "rgba(127,178,255,.35)" : "rgba(255,140,140,.35)";
  t.style.background = kind === "ok" ? "rgba(12,32,60,.92)" : "rgba(60,12,12,.90)";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(()=>{ t.hidden = true; }, 2600);
}

function validateEmail(s){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s||"").trim());
}

function serializeForm(form){
  const fd = new FormData(form);
  const obj = {};
  for(const [k,v] of fd.entries()){
    if(obj[k]){
      if(Array.isArray(obj[k])) obj[k].push(v);
      else obj[k] = [obj[k], v];
    } else obj[k] = v;
  }
  return obj;
}

function setupForms(){
  const bind = (form)=>{
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const requiredOk = [...form.querySelectorAll("[required]")].every((el)=>{
        if(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement){
          if(el.type === "email") return validateEmail(el.value);
          return Boolean(el.value && String(el.value).trim().length);
        }
        return true;
      });
      if(!requiredOk){
        toast(COPY[state.lang].toast_error, "err");
        return;
      }
      // If FORM_ENDPOINT is not configured, keep demo behavior and warn in console.
      if(!FORM_ENDPOINT || !/^https:\/\/formspree\.io\/f\//.test(FORM_ENDPOINT)){
        const data = serializeForm(form);
        console.warn("[WWI] FORM_ENDPOINT is not set. Configure it in app.js to enable real sending.");
        console.log("[WWI DEMO] submit:", {form: form.id, lang: state.lang, data});
        form.reset();
        toast(COPY[state.lang].toast_sent, "ok");
        return;
      }

      // Real sending via Formspree
      const fd = new FormData(form);
      fd.append("_subject", `West Web International — ${form.id} (${state.lang.toUpperCase()})`);
      fd.append("_source", window.location.href);
      fd.append("_lang", state.lang);
      fd.append("_form", form.id);

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { "Accept": "application/json" }
      }).then(async (res)=>{
        if(res.ok){
          form.reset();
          toast(COPY[state.lang].toast_sent, "ok");
          return;
        }
        // Try to read JSON error from Formspree
        let errText = "";
        try{
          const j = await res.json();
          errText = j?.errors?.map(e=>e.message).join("; ") || "";
        }catch(_){/* ignore */}
        console.error("[WWI] Formspree error", res.status, errText);
        toast(COPY[state.lang].toast_error, "err");
      }).catch((err)=>{
        console.error("[WWI] Formspree network error", err);
        toast(COPY[state.lang].toast_error, "err");
      });
    });
  };
  const q = $("#quickForm"); if(q) bind(q);
  const c = $("#contactForm"); if(c) bind(c);
}

function setupModal(){
  const modal = $("#modal");
  const title = $("#modalTitle");
  const text = $("#modalText");

  const details = {
    a: {
      en: { t:"Corporate website", d:"Typical scope: 5–12 pages, strict typography, SEO structure, analytics, and admin-ready content." },
      pl: { t:"Strona firmowa", d:"Typowy zakres: 5–12 podstron, typografia, SEO, analityka i treści gotowe pod admin." },
      ua: { t:"Корпоративний сайт", d:"Типовий обсяг: 5–12 сторінок, типографіка, SEO, аналітика та контент." }
    },
    b: {
      en: { t:"Online store", d:"Typical scope: catalog + filters, checkout, payments, delivery rules, and CRM integration." },
      pl: { t:"Sklep online", d:"Typowy zakres: katalog + filtry, checkout, płatności, dostawy i integracje CRM." },
      ua: { t:"Інтернет-магазин", d:"Типовий обсяг: каталог + фільтри, checkout, оплати, доставка та інтеграції CRM." }
    },
    c: {
      en: { t:"Conversion landing", d:"Typical scope: offer + proof + FAQ + form, analytics events, A/B-ready structure." },
      pl: { t:"Landing konwersyjny", d:"Typowy zakres: oferta + dowody + FAQ + formularz, zdarzenia analityki, struktura pod A/B." },
      ua: { t:"Конверсійний лендінг", d:"Типовий обсяг: офер + докази + FAQ + форма, події аналітики, структура під A/B." }
    }
  };

  const open = (key)=>{
    if(!modal) return;
    const item = details[key]?.[state.lang] || details[key]?.en;
    if(title) title.textContent = item?.t || "—";
    if(text) text.textContent = item?.d || "—";
    modal.hidden = false;
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  };
  const close = ()=>{
    if(!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  };

  document.addEventListener("click",(e)=>{
    const ob = e.target.closest("[data-open-modal]");
    if(ob){ open(ob.getAttribute("data-open-modal")); return; }
    if(e.target.closest("[data-close-modal]")){ close(); return; }
  });
  document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") close(); });
}

function setupAccordionIcons(){
  $all(".acc").forEach(d=>{
    d.addEventListener("toggle", ()=>{
      const icon = d.querySelector(".acc__icon");
      if(icon) icon.textContent = d.open ? "×" : "+";
    });
  });
}

function openMobile(){
  const burger = $("#burger");
  const mobile = $("#mobile");
  if(!burger || !mobile) return;
  burger.setAttribute("aria-expanded","true");
  mobile.hidden = false;
}
function closeMobile(){
  const burger = $("#burger");
  const mobile = $("#mobile");
  if(!burger || !mobile) return;
  burger.setAttribute("aria-expanded","false");
  mobile.hidden = true;
}
function setupMobile(){
  const burger = $("#burger");
  const mobile = $("#mobile");
  if(!burger || !mobile) return;

  burger.addEventListener("click", ()=>{
    const expanded = burger.getAttribute("aria-expanded")==="true";
    expanded ? closeMobile() : openMobile();
  });

  document.addEventListener("click",(e)=>{
    if(mobile.hidden) return;
    const inMenu = e.target.closest("#mobile");
    const inBurger = e.target.closest("#burger");
    if(!inMenu && !inBurger) closeMobile();
  });

  window.addEventListener("resize", ()=>{
    if(window.innerWidth > 980) closeMobile();
  });
}

function setupLanguage(){
  const saved = localStorage.getItem(STORAGE_KEY);
  setLang(saved && COPY[saved] ? saved : DEFAULT_LANG);

  document.addEventListener("click",(e)=>{
    const btn = e.target.closest(".lang__btn");
    if(btn) setLang(btn.dataset.lang);
  });
}

function run(){
  setupLanguage();
  setupScroll();
  setupForms();
  setupModal();
  setupAccordionIcons();
  setupMobile();
}
run();
