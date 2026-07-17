import { LeadForm, type LeadFormCopy } from "./LeadForm";

type Lang = "uk" | "ru";

type SiteCopy = {
  langLabel: string;
  langSwitchLabel: string;
  nav: {
    advantages: string;
    directions: string;
    partners: string;
    faq: string;
  };
  headerCta: string;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    badges: string[];
  };
  proof: Array<{ value: string; label: string }>;
  intro: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Array<{ title: string; text: string }>;
  };
  directions: {
    eyebrow: string;
    title: string;
    text: string;
    panels: Array<{
      label: string;
      title: string;
      text: string;
      image: string;
      alt: string;
    }>;
  };
  partners: {
    eyebrow: string;
    title: string;
    text: string;
    types: Array<{ label: string; priority?: boolean }>;
    benefits: string[];
  };
  export: {
    eyebrow: string;
    title: string;
    text: string;
    mapCount: string;
    pins: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    text: string;
    steps: string[];
  };
  final: {
    eyebrow: string;
    title: string;
    text: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: string;
  form: LeadFormCopy;
};

const content: Record<Lang, SiteCopy> = {
  uk: {
    langLabel: "UA",
    langSwitchLabel: "RU",
    nav: {
      advantages: "Переваги",
      directions: "Напрями",
      partners: "Партнерам",
      faq: "FAQ",
    },
    headerCta: "Стати партнером",
    hero: {
      eyebrow: "B2B співпраця з українським брендом",
      title: "Станьте партнером VALESO",
      text:
        "Виробник та імпортер сантехніки й освітлення для оптових клієнтів, магазинів, дилерів, меблевих компаній, дизайнерів та забудовників.",
      primary: "Залишити B2B-заявку",
      secondary: "Подивитися переваги",
      badges: ["Фокус на опті", "Для магазинів", "Прайс і партнерство"],
    },
    proof: [
      { value: "2009", label: "рік заснування" },
      { value: "10 500+", label: "найменувань товарів" },
      { value: "22 000+", label: "партнерів B2B та B2C" },
      { value: "160", label: "спеціалістів у команді" },
    ],
    intro: {
      kicker: "Позиціонування",
      title: "VALESO - постачальник для оптовиків, магазинів і професійного ринку",
      paragraphs: [
        "Компанія поєднує власне виробництво кухонних мийок, імпорт сантехніки, широкий напрям освітлення, сучасну складську інфраструктуру та торгову команду з високим рівнем сервісу.",
        "Для B2B-клієнта це означає передбачуваність: актуальний асортимент, професійна консультація, швидке опрацювання заявки, персональні умови та підтримка після продажу.",
      ],
    },
    why: {
      eyebrow: "Чому VALESO",
      title: "Сильна база для стабільних продажів",
      text:
        "Факти з презентації, брендбука та відкритих розділів сайту VALESO зібрані в аргументи, які важливі саме для оптовиків і магазинів.",
      cards: [
        {
          title: "Власне виробництво",
          text:
            "Гранітні мийки VALESO створюються у Чернігові з контролем якості на кожному етапі.",
        },
        {
          title: "Асортимент для полиці",
          text:
            "Сантехніка, освітлення, мийки, змішувачі та аксесуари для роздрібних і оптових продажів.",
        },
        {
          title: "Стабільна наявність",
          text:
            "6000+ м² складів допомагають швидко закривати регулярні замовлення партнерів.",
        },
        {
          title: "Власна логістика",
          text:
            "Команда, склади та доставка працюють як єдина система, щоб партнери отримували товар за заявкою.",
        },
        {
          title: "Експортний досвід",
          text: "Українські мийки VALESO експортуються у 17 країн на 4 континентах.",
        },
        {
          title: "Гарантія якості",
          text:
            "На гранітні мийки діє офіційна гарантія 10 років, підтверджена виробничим контролем.",
        },
      ],
    },
    directions: {
      eyebrow: "Напрями",
      title: "Сантехніка та освітлення для різних каналів продажу",
      text:
        "Два ключові напрями допомагають партнерам формувати комплексні пропозиції для кухні, ванної, житлових і комерційних просторів.",
      panels: [
        {
          label: "Сантехніка",
          title: "Мийки, змішувачі та аксесуари",
          text:
            "Власне виробництво мийок зі штучного каменю, преміальний імпорт, 50+ моделей і 20 актуальних кольорів.",
          image: "/valeso-santekhnika.png",
          alt: "Презентаційний слайд VALESO про сантехніку",
        },
        {
          label: "Освітлення",
          title: "Від класичних люстр до LED-систем",
          text:
            "Асортимент для різних цінових категорій, трендові колекції, власна логістика і швидка поставка зі складу.",
          image: "/valeso-lighting.png",
          alt: "Презентаційний слайд VALESO про освітлення",
        },
      ],
    },
    partners: {
      eyebrow: "Для кого",
      title: "Пріоритет - оптовики та магазини, але форма відкрита для всіх партнерів",
      text:
        "Сайт веде різні аудиторії до однієї дії: стати партнером, отримати прайс або залишити оптовий запит.",
      types: [
        { label: "Оптові компанії", priority: true },
        { label: "Магазини сантехніки", priority: true },
        { label: "Магазини освітлення", priority: true },
        { label: "Інтернет-магазини", priority: true },
        { label: "Дилери та дистриб'ютори" },
        { label: "Меблеві виробництва" },
        { label: "Дизайн-студії" },
        { label: "Забудовники" },
      ],
      benefits: [
        "Персональні оптові умови",
        "Прайс і консультація по асортименту",
        "Сантехніка та освітлення в одному постачальнику",
        "Підтримка менеджера на всіх етапах",
        "Маркетингові матеріали для продажів",
        "Швидке опрацювання оптових запитів",
        "Прозора комунікація щодо наявності",
        "Гарантійна та післяпродажна підтримка",
      ],
    },
    export: {
      eyebrow: "Експорт",
      title: "17 країн на 4 континентах",
      text:
        "Мийки зі штучного каменю VALESO представлені на міжнародних ринках у Європі, Північній Америці, Азії та Африці. Для партнерів це додатковий доказ якості, попиту та виробничої зрілості бренду.",
      mapCount: "17 країн",
      pins: ["Канада", "Європа", "Африка", "Азія"],
    },
    process: {
      eyebrow: "Старт",
      title: "Як почати співпрацю",
      text:
        "Простий сценарій для оптових клієнтів і магазинів: мінімум зайвих кроків, максимум ясності для менеджера.",
      steps: [
        "Залиште заявку",
        "Отримайте консультацію",
        "Отримайте прайс або умови",
        "Зробіть перше замовлення",
        "Розвивайте продажі з VALESO",
      ],
    },
    final: {
      eyebrow: "Партнерство, прайс, опт",
      title: "Залиште заявку - менеджер напише у відповідь",
      text:
        "Форма збирає всі головні сценарії: стати партнером, отримати прайс і залишити оптовий запит. Дані будуть відправлятися в Telegram після підключення бота.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Питання перед заявкою",
      items: [
        {
          question: "Для кого створена ця сторінка?",
          answer:
            "Для оптових клієнтів, магазинів, дилерів, інтернет-магазинів, меблевих виробництв, дизайнерів, забудовників та компаній, яким потрібен стабільний постачальник сантехніки й освітлення.",
        },
        {
          question: "Чи можна отримати прайс?",
          answer:
            "Так. У формі можна одночасно обрати ціль: стати партнером, отримати прайс і залишити оптовий запит.",
        },
        {
          question: "Чи є індивідуальні умови для оптовиків і магазинів?",
          answer:
            "Так. Формат співпраці залежить від типу бізнесу, регіону, напрямку товарів та очікуваного обсягу закупівель.",
        },
        {
          question: "Куди потраплятимуть заявки?",
          answer:
            "Після підключення Telegram-бота всі заявки з сайту будуть приходити в обраний Telegram-чат.",
        },
      ],
    },
    footer:
      "B2B-сторінка співпраці VALESO з двома мовними версіями та формою для Telegram-заявок.",
    form: {
      headingLabel: "Форма для B2B-клієнтів",
      headingTitle: "Отримати пропозицію",
      fields: {
        name: "Ім'я",
        company: "Компанія",
        phone: "Телефон",
        email: "Email",
        city: "Місто",
        businessType: "Тип бізнесу",
        message: "Коментар",
      },
      placeholders: {
        name: "Ваше ім'я",
        company: "Назва компанії",
        phone: "+380",
        email: "email@company.com",
        city: "Київ, Львів, Чернігів...",
        businessType: "Оберіть тип",
        message: "Напрям, приблизний обсяг, формат співпраці або питання",
      },
      businessTypes: [
        "Оптова компанія",
        "Магазин сантехніки",
        "Магазин освітлення",
        "Інтернет-магазин",
        "Дилер",
        "Меблеве виробництво",
        "Дизайнер",
        "Забудовник",
        "Інше",
      ],
      goalLegend: "Що потрібно?",
      goals: ["Стати партнером", "Отримати прайс", "Оптовий запит"],
      interestLegend: "Що вас цікавить?",
      interests: ["Сантехніка", "Освітлення", "Обидва напрями"],
      submit: "Надіслати в Telegram",
      sending: "Надсилаємо...",
      note: "Заявка буде відправлятися в Telegram після підключення бота.",
      success: "Дякуємо. Заявка відправлена в Telegram.",
      demoSuccess:
        "Дякуємо. Заявка сформована. Для реальної відправки залишилось додати Telegram bot token і chat ID.",
      error: "Не вдалося надіслати заявку. Перевірте поля або спробуйте ще раз.",
    },
  },
  ru: {
    langLabel: "RU",
    langSwitchLabel: "UA",
    nav: {
      advantages: "Преимущества",
      directions: "Направления",
      partners: "Партнерам",
      faq: "FAQ",
    },
    headerCta: "Стать партнером",
    hero: {
      eyebrow: "B2B-сотрудничество с украинским брендом",
      title: "Станьте партнером VALESO",
      text:
        "Производитель и импортер сантехники и освещения для оптовых клиентов, магазинов, дилеров, мебельных компаний, дизайнеров и застройщиков.",
      primary: "Оставить B2B-заявку",
      secondary: "Посмотреть преимущества",
      badges: ["Фокус на опте", "Для магазинов", "Прайс и партнерство"],
    },
    proof: [
      { value: "2009", label: "год основания" },
      { value: "10 500+", label: "наименований товаров" },
      { value: "22 000+", label: "партнеров B2B и B2C" },
      { value: "160", label: "специалистов в команде" },
    ],
    intro: {
      kicker: "Позиционирование",
      title: "VALESO - поставщик для оптовиков, магазинов и профессионального рынка",
      paragraphs: [
        "Компания объединяет собственное производство кухонных моек, импорт сантехники, широкое направление освещения, современную складскую инфраструктуру и торговую команду с высоким уровнем сервиса.",
        "Для B2B-клиента это означает предсказуемость: актуальный ассортимент, профессиональная консультация, быстрая обработка заявки, персональные условия и поддержка после продажи.",
      ],
    },
    why: {
      eyebrow: "Почему VALESO",
      title: "Сильная база для стабильных продаж",
      text:
        "Факты из презентации, брендбука и открытых разделов сайта VALESO собраны в аргументы, важные именно для оптовиков и магазинов.",
      cards: [
        {
          title: "Собственное производство",
          text:
            "Гранитные мойки VALESO создаются в Чернигове с контролем качества на каждом этапе.",
        },
        {
          title: "Ассортимент для полки",
          text:
            "Сантехника, освещение, мойки, смесители и аксессуары для розничных и оптовых продаж.",
        },
        {
          title: "Стабильное наличие",
          text:
            "6000+ м² складов помогают быстро закрывать регулярные заказы партнеров.",
        },
        {
          title: "Собственная логистика",
          text:
            "Команда, склады и доставка работают как единая система, чтобы партнеры получали товар по заявке.",
        },
        {
          title: "Экспортный опыт",
          text: "Украинские мойки VALESO экспортируются в 17 стран на 4 континентах.",
        },
        {
          title: "Гарантия качества",
          text:
            "На гранитные мойки действует официальная гарантия 10 лет, подтвержденная производственным контролем.",
        },
      ],
    },
    directions: {
      eyebrow: "Направления",
      title: "Сантехника и освещение для разных каналов продаж",
      text:
        "Два ключевых направления помогают партнерам формировать комплексные предложения для кухни, ванной, жилых и коммерческих пространств.",
      panels: [
        {
          label: "Сантехника",
          title: "Мойки, смесители и аксессуары",
          text:
            "Собственное производство моек из искусственного камня, премиальный импорт, 50+ моделей и 20 актуальных цветов.",
          image: "/valeso-santekhnika.png",
          alt: "Презентационный слайд VALESO о сантехнике",
        },
        {
          label: "Освещение",
          title: "От классических люстр до LED-систем",
          text:
            "Ассортимент для разных ценовых категорий, трендовые коллекции, собственная логистика и быстрая поставка со склада.",
          image: "/valeso-lighting.png",
          alt: "Презентационный слайд VALESO об освещении",
        },
      ],
    },
    partners: {
      eyebrow: "Для кого",
      title: "Приоритет - оптовики и магазины, но форма открыта для всех партнеров",
      text:
        "Сайт ведет разные аудитории к одному действию: стать партнером, получить прайс или оставить оптовый запрос.",
      types: [
        { label: "Оптовые компании", priority: true },
        { label: "Магазины сантехники", priority: true },
        { label: "Магазины освещения", priority: true },
        { label: "Интернет-магазины", priority: true },
        { label: "Дилеры и дистрибьюторы" },
        { label: "Мебельные производства" },
        { label: "Дизайн-студии" },
        { label: "Застройщики" },
      ],
      benefits: [
        "Персональные оптовые условия",
        "Прайс и консультация по ассортименту",
        "Сантехника и освещение у одного поставщика",
        "Поддержка менеджера на всех этапах",
        "Маркетинговые материалы для продаж",
        "Быстрая обработка оптовых запросов",
        "Прозрачная коммуникация по наличию",
        "Гарантийная и послепродажная поддержка",
      ],
    },
    export: {
      eyebrow: "Экспорт",
      title: "17 стран на 4 континентах",
      text:
        "Мойки из искусственного камня VALESO представлены на международных рынках в Европе, Северной Америке, Азии и Африке. Для партнеров это дополнительное доказательство качества, спроса и производственной зрелости бренда.",
      mapCount: "17 стран",
      pins: ["Канада", "Европа", "Африка", "Азия"],
    },
    process: {
      eyebrow: "Старт",
      title: "Как начать сотрудничество",
      text:
        "Простой сценарий для оптовых клиентов и магазинов: минимум лишних шагов, максимум ясности для менеджера.",
      steps: [
        "Оставьте заявку",
        "Получите консультацию",
        "Получите прайс или условия",
        "Сделайте первый заказ",
        "Развивайте продажи с VALESO",
      ],
    },
    final: {
      eyebrow: "Партнерство, прайс, опт",
      title: "Оставьте заявку - менеджер ответит",
      text:
        "Форма собирает все главные сценарии: стать партнером, получить прайс и оставить оптовый запрос. Данные будут отправляться в Telegram после подключения бота.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Вопросы перед заявкой",
      items: [
        {
          question: "Для кого создана эта страница?",
          answer:
            "Для оптовых клиентов, магазинов, дилеров, интернет-магазинов, мебельных производств, дизайнеров, застройщиков и компаний, которым нужен стабильный поставщик сантехники и освещения.",
        },
        {
          question: "Можно ли получить прайс?",
          answer:
            "Да. В форме можно одновременно выбрать цель: стать партнером, получить прайс и оставить оптовый запрос.",
        },
        {
          question: "Есть ли индивидуальные условия для оптовиков и магазинов?",
          answer:
            "Да. Формат сотрудничества зависит от типа бизнеса, региона, направления товаров и ожидаемого объема закупок.",
        },
        {
          question: "Куда будут попадать заявки?",
          answer:
            "После подключения Telegram-бота все заявки с сайта будут приходить в выбранный Telegram-чат.",
        },
      ],
    },
    footer:
      "B2B-страница сотрудничества VALESO с двумя языковыми версиями и формой для Telegram-заявок.",
    form: {
      headingLabel: "Форма для B2B-клиентов",
      headingTitle: "Получить предложение",
      fields: {
        name: "Имя",
        company: "Компания",
        phone: "Телефон",
        email: "Email",
        city: "Город",
        businessType: "Тип бизнеса",
        message: "Комментарий",
      },
      placeholders: {
        name: "Ваше имя",
        company: "Название компании",
        phone: "+380",
        email: "email@company.com",
        city: "Киев, Львов, Чернигов...",
        businessType: "Выберите тип",
        message: "Направление, примерный объем, формат сотрудничества или вопрос",
      },
      businessTypes: [
        "Оптовая компания",
        "Магазин сантехники",
        "Магазин освещения",
        "Интернет-магазин",
        "Дилер",
        "Мебельное производство",
        "Дизайнер",
        "Застройщик",
        "Другое",
      ],
      goalLegend: "Что нужно?",
      goals: ["Стать партнером", "Получить прайс", "Оптовый запрос"],
      interestLegend: "Что вас интересует?",
      interests: ["Сантехника", "Освещение", "Оба направления"],
      submit: "Отправить в Telegram",
      sending: "Отправляем...",
      note: "Заявка будет отправляться в Telegram после подключения бота.",
      success: "Спасибо. Заявка отправлена в Telegram.",
      demoSuccess:
        "Спасибо. Заявка сформирована. Для реальной отправки осталось добавить Telegram bot token и chat ID.",
      error: "Не удалось отправить заявку. Проверьте поля или попробуйте еще раз.",
    },
  },
};

function BrandLogo() {
  return (
    <a className="brand-logo" href="#top" aria-label="VALESO">
      <span className="brand-symbol">VA</span>
      <span>VALESO</span>
    </a>
  );
}

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = searchParams ? await searchParams : {};
  const lang: Lang = getParamValue(params.lang) === "ru" ? "ru" : "uk";
  const copy = content[lang];
  const nextLang: Lang = lang === "ru" ? "uk" : "ru";

  return (
    <main id="top" lang={lang}>
      <header className="site-header" aria-label="Main navigation">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Page sections">
          <a href="#why">{copy.nav.advantages}</a>
          <a href="#directions">{copy.nav.directions}</a>
          <a href="#partners">{copy.nav.partners}</a>
          <a href="#faq">{copy.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <a className="language-switch" href={`/?lang=${nextLang}`} aria-label={copy.langSwitchLabel}>
            {copy.langSwitchLabel}
          </a>
          <a className="header-cta" href="#lead-form">
            {copy.headerCta}
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p className="hero-text">{copy.hero.text}</p>
            <div className="hero-actions">
              <a className="button primary" href="#lead-form">
                {copy.hero.primary}
              </a>
              <a className="button secondary" href="#why">
                {copy.hero.secondary}
              </a>
            </div>
            <div className="hero-badges" aria-label="Key facts">
              {copy.hero.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <LeadForm compact copy={copy.form} lang={lang} />
        </div>
      </section>

      <section className="proof-band" aria-label="VALESO facts">
        {copy.proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section intro-section">
        <div className="section-kicker">{copy.intro.kicker}</div>
        <div className="two-column">
          <div>
            <h2>{copy.intro.title}</h2>
          </div>
          <div className="intro-copy">
            {copy.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="why">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.why.eyebrow}</p>
            <h2>{copy.why.title}</h2>
          </div>
          <p>{copy.why.text}</p>
        </div>
        <div className="advantage-grid">
          {copy.why.cards.map((item) => (
            <article className="advantage-card" key={item.title}>
              <span className="card-line" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section directions-section" id="directions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.directions.eyebrow}</p>
            <h2>{copy.directions.title}</h2>
          </div>
          <p>{copy.directions.text}</p>
        </div>
        <div className="direction-grid">
          {copy.directions.panels.map((panel) => (
            <article className="direction-panel" key={panel.title}>
              <img src={panel.image} alt={panel.alt} />
              <div>
                <p className="panel-label">{panel.label}</p>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section partner-section" id="partners">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.partners.eyebrow}</p>
            <h2>{copy.partners.title}</h2>
          </div>
          <p>{copy.partners.text}</p>
        </div>
        <div className="partner-layout">
          <div className="partner-types">
            {copy.partners.types.map((type) => (
              <span className={type.priority ? "is-priority" : undefined} key={type.label}>
                {type.label}
              </span>
            ))}
          </div>
          <div className="benefit-list">
            {copy.partners.benefits.map((benefit) => (
              <div className="benefit-row" key={benefit}>
                <span aria-hidden="true" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section export-section">
        <div className="export-map" aria-hidden="true">
          <span className="pin canada">{copy.export.pins[0]}</span>
          <span className="pin europe">{copy.export.pins[1]}</span>
          <span className="pin africa">{copy.export.pins[2]}</span>
          <span className="pin asia">{copy.export.pins[3]}</span>
          <strong className="map-count">{copy.export.mapCount}</strong>
        </div>
        <div className="export-copy">
          <p className="eyebrow">{copy.export.eyebrow}</p>
          <h2>{copy.export.title}</h2>
          <p>{copy.export.text}</p>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.process.eyebrow}</p>
            <h2>{copy.process.title}</h2>
          </div>
          <p>{copy.process.text}</p>
        </div>
        <ol className="process-list">
          {copy.process.steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section final-form-section" id="lead-form">
        <div className="final-copy">
          <p className="eyebrow">{copy.final.eyebrow}</p>
          <h2>{copy.final.title}</h2>
          <p>{copy.final.text}</p>
          <div className="contact-strip">
            <a href="tel:+380504659018">050 465-90-18</a>
            <a href="tel:+380673258650">067 325-86-50</a>
            <a href="mailto:info@valeso.com.ua">info@valeso.com.ua</a>
          </div>
        </div>
        <LeadForm copy={copy.form} lang={lang} />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.faq.eyebrow}</p>
            <h2>{copy.faq.title}</h2>
          </div>
        </div>
        <div className="faq-list">
          {copy.faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <BrandLogo />
        <p>{copy.footer}</p>
      </footer>
    </main>
  );
}
