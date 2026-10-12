export type Lang = "en" | "no" | "bn";

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  long: string;
  includes: string[];
  price: string;
};

export type FaqItem = { q: string; a: string };
export type AmbitionItem = { title: string; text: string };
export type ProcessStep = { number: string; title: string; description: string };

export type Dictionary = {
  nav: { home: string; services: string; about: string; contact: string };
  hero: {
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustedBy: string;
  };
  services: { eyebrow: string; heading: string; sub: string; cta: string; items: ServiceItem[] };
  process: { eyebrow: string; heading: string; steps: ProcessStep[] };
  whyus: {
    eyebrow: string;
    heading: string;
    sub: string;
    getLabel: string;
    skipLabel: string;
    get: string[];
    skip: string[];
  };
  faq: { eyebrow: string; heading: string; items: FaqItem[] };
  about: {
    eyebrow: string;
    heading: string;
    intro: string;
    ambitionHeading: string;
    ambition: AmbitionItem[];
    cta: string;
    founderRole: string;
    photoAlt: string;
    servicesHeading: string;
    servicesCta: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    labels: { phone: string; address: string };
    form: {
      heading: string;
      name: string;
      email: string;
      company: string;
      optional: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    rights: string;
    backToTop: string;
    clientsHeading: string;
    contactHeading: string;
    address: string;
    servicesHeading: string;
  };
  servicePage: {
    allServices: string;
    includesHeading: string;
    priceLabel: string;
    priceNote: string;
    contactCta: string;
    orCall: string;
    otherServices: string;
  };
};

const en: Dictionary = {
  nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
  hero: {
    headline: "Accessible software and applied AI, built by the engineer who answers the phone.",
    sub: "VevKraft is an accessibility and applied-AI software consultancy for Norwegian SMEs — accessible web and application development, AI-driven data processing, and the ongoing engineering support a part-time need doesn't justify hiring for.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See what I do",
    trustedBy: "Trusted by",
  },
  services: {
    eyebrow: "Services",
    heading: "One engineer. Full-stack accountability.",
    sub: "Everything a growing SME needs from a digital partner, without the overhead of hiring, managing or coordinating an agency.",
    cta: "See details",
    items: [
      {
        slug: "accessible-web-development",
        title: "Accessible web development",
        short: "Websites and web applications with accessibility built in from the start — plus audits and fixes for the sites you already run.",
        long: "Accessibility is built into markup, components and keyboard behaviour from the first commit, not retrofitted before launch. Every project ships tested against WCAG 2.0 level AA — the standard the Equality and Anti-Discrimination Act sets for public-facing Norwegian digital services, regardless of company size. For sites you already run, I audit against the real success criteria and assistive-technology behaviour, fix what fails, then retest and document conformance rather than just claim it — a method that comes out of my master's thesis research in digital accessibility, done in association with Simula.",
        includes: [
          "New websites and web applications built to WCAG 2.0 AA",
          "Accessible markup, components and keyboard behaviour from the first commit",
          "Accessibility audits of existing sites and applications",
          "Remediation, retesting and documented conformance",
          "One engineer from the first conversation through to launch",
        ],
        price: "Accessible websites from NOK 8,990 (3–5 pages) or NOK 17,990 (5–10 pages with custom design). Larger sites and web applications from NOK 44,990. Accessibility audits from NOK 4,990, with fixes at NOK 890/hour.",
      },
      {
        slug: "ai-image-processing",
        title: "AI and image processing",
        short: "Automated analysis of drone, thermal and inspection imagery, with the reporting built around it.",
        long: "Operational data — drone footage, thermal imagery, inspection photos — arrives faster than a small team can review it by hand. I build the ingestion, automated analysis and reporting pipeline that turns it into something a person can act on quickly, with the final judgement always left to a human. This is applied engineering on top of existing models, not research for its own sake.",
        includes: [
          "Ingestion of drone, thermal and inspection imagery",
          "Automated analysis built on proven, existing models",
          "Reports your team can act on quickly",
          "A human kept in the loop for final decisions",
          "A pilot first, then ongoing processing once it proves its value",
        ],
        price: "Pilot integrations from NOK 19,990. Ongoing processing and reporting from NOK 2,990 a month.",
      },
      {
        slug: "cloud-migration",
        title: "Cloud migration",
        short: "Moving servers, applications and data to the cloud — planned, tested and cost-controlled, with ongoing operations afterwards.",
        long: "Moving to the cloud should lower cost and risk, not add to them. I assess what you run today, plan the migration with clear rollback points, and move servers, applications and data across with minimal downtime — then right-size the setup so the monthly bill matches real usage. Afterwards I can keep everything maintained, monitored and secure under a monthly agreement, so you're never left with infrastructure no one on staff understands.",
        includes: [
          "Assessment of current systems, dependencies and costs",
          "A migration plan with tested rollback points",
          "Moving servers, applications and data with minimal downtime",
          "Right-sizing and ongoing cloud cost control",
          "Optional monthly operations: monitoring, security updates and maintenance",
        ],
        price: "Small migrations from NOK 9,990; larger setups quoted after a short assessment. Ongoing operations and maintenance from NOK 890 a month.",
      },
      {
        slug: "it-consultancy-training",
        title: "IT consultancy & training",
        short: "Independent advice on technology decisions, and practical training that keeps your team self-sufficient.",
        long: "Advice on technology decisions — architecture review, supplier and procurement proposals, cloud cost assessment — for organisations with no internal expertise to weigh them. Alongside it, practical accessibility training for client developers and content editors, so conformance survives the next release rather than only the one I audited.",
        includes: [
          "Architecture and system reviews",
          "Assessment of supplier and procurement proposals",
          "Cloud cost assessment",
          "Accessibility training for developers and content editors",
          "Hourly advice or fixed-scope reviews",
        ],
        price: "Advisory at NOK 890/hour, or a fixed-scope architecture review from NOK 7,990. Training workshops from NOK 4,990 per session.",
      },
      {
        slug: "hardware-lifecycle",
        title: "Hardware lifecycle engineering",
        short: "Benchmarking, secure erasure, rebuild and refurbishment — keeping equipment in service longer.",
        long: "Some businesses replace hardware on a fixed cycle rather than measured need. I benchmark and diagnose what's actually failing, securely erase and rebuild machines for redeployment, and refurbish retired equipment so it stays useful rather than becoming waste — cutting cost and embodied carbon together.",
        includes: [
          "Benchmarking and diagnosis of existing equipment",
          "Secure data erasure before reuse or disposal",
          "Rebuilds for redeployment within your organisation",
          "Refurbishment of retired equipment",
          "Lower hardware cost and less e-waste",
        ],
        price: "Assessment and secure erasure from NOK 290 per device. Rebuild and redeployment programmes quoted per fleet size.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "Three steps, one person accountable throughout.",
    steps: [
      {
        number: "01",
        title: "Discover & demonstrate",
        description: "A requirements conversation, on site where useful, often followed by a working demonstration before you commit to anything.",
      },
      {
        number: "02",
        title: "Build, with one point of contact",
        description: "The engineer who scoped it writes the code, sets the architecture and reviews it with you. No handoffs between sales, design and delivery.",
      },
      {
        number: "03",
        title: "Ship, retest, support",
        description: "Accessibility conformance is retested and documented after correction. Maintenance, cloud operations and further development continue under monthly agreement.",
      },
    ],
  },
  whyus: {
    eyebrow: "Why VevKraft",
    heading: "What working with VevKraft actually means.",
    sub: "No account managers, no bundled minimums, no separate vendor for every part of the stack. Just what changes when one accountable engineer does the work.",
    getLabel: "What you get",
    skipLabel: "What you skip",
    get: [
      "Direct access to the engineer who scopes, builds and ships the work",
      "Accessibility engineering grounded in master's-level research, not a plugin",
      "One relationship across software, applied AI and hardware",
      "Capacity sized to what you need this month, not a retainer minimum",
      "Someone who can be on site in Oslo when a problem needs to be seen",
    ],
    skip: [
      "Account managers relaying messages to the person actually coding",
      "Minimum engagement sizes built for enterprise budgets",
      "A separate supplier for the app, the audit and the hardware",
      "Employment overhead — salary, contributions, recruitment — for part-time need",
      "A support inbox with no one accountable in Norway",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions worth answering up front.",
    items: [
      {
        q: "Why work with one engineer instead of an agency?",
        a: "The engineer who scopes the work is the one who builds it, so decisions stay consistent from the first conversation through delivery and support — no handoffs, no account managers relaying messages. It also means a cost base that fits a part-time need, without agency overhead.",
      },
      {
        q: "What accessibility standard do you test against?",
        a: "WCAG 2.0 level AA, the standard required under Norway's Equality and Anti-Discrimination Act for public-facing websites, apps and self-service machines. Conformance is retested and documented after every correction, not just claimed.",
      },
      {
        q: "Do you only take on one-off projects?",
        a: "No — most engagements continue under a monthly agreement covering maintenance, cloud operations, performance and security updates, and further development, alongside project work.",
      },
      {
        q: "Do you work with clients outside Oslo?",
        a: "In-person work — requirements workshops, on-site testing, building inspections — is centred on Oslo. Software and AI development partnerships, like the one with Celestial Invention, work well at a distance too.",
      },
      {
        q: "Can you help with hardware, not just software?",
        a: "Yes. Hardware lifecycle engineering — benchmarking and diagnosis, secure data erasure, rebuild and redeployment, and refurbishment of retired machines — is part of the practice, drawing on the same systems knowledge as the software work.",
      },
      {
        q: "How does an engagement start?",
        a: "With a requirements conversation, often followed by a working demonstration before you commit to anything.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "An engineering practice built to last, not just a freelance listing.",
    intro: "VevKraft is an accessibility and applied-AI software consultancy based in Oslo, founded by Rizve Hasan — MSc in Informatics: Programming and System Architecture from the University of Oslo, with a thesis in digital accessibility carried out in association with Simula, and AWS Certified Cloud Practitioner. Today that's one engineer carrying every engagement personally; the practice is built to grow beyond that.",
    ambitionHeading: "Ambition, beyond the invoice",
    ambition: [
      {
        title: "Digital inclusion",
        text: "Every SME site brought into WCAG conformance is a service someone can now book, order from or apply through independently, who couldn't before. Building accessibility into a recognised local specialism reaches businesses too small to afford a dedicated specialist otherwise.",
      },
      {
        title: "Building local competence",
        text: "Structured training for client developers and content editors, and continued research collaboration with Norway's technology and accessibility community — skills and published methods that outlast any single engagement.",
      },
      {
        title: "Sustainable technology",
        text: "Hardware lifecycle work aimed at measurable results: lower energy use in the systems I build and host, and longer service life for equipment that would otherwise become waste.",
      },
      {
        title: "Growing in Norway",
        text: "As workload justifies it, the plan is to employ people and keep the work here — paying Norwegian tax, serving Norwegian clients, and building something that outlasts a single founder.",
      },
    ],
    cta: "Get in touch",
    founderRole: "Founder & CTO",
    photoAlt: "Portrait of Rizve Hasan",
    servicesHeading: "What I do",
    servicesCta: "Explore services",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Tell me what you're building.",
    sub: "Whether it's a new web application, an accessibility audit or ongoing engineering capacity — reach out directly. I respond personally, usually within one business day.",
    labels: { phone: "Phone", address: "Address" },
    form: {
      heading: "Send a message",
      name: "Name",
      email: "Email",
      company: "Company",
      optional: "optional",
      message: "What can I help with?",
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks — your message is on its way. I'll get back to you, usually within one business day.",
      error: "Something went wrong and the message wasn't sent. Please try again, or call me at",
    },
  },
  footer: { rights: "© {year} VEVKRAFT BY HASAN, Oslo, Norway.", backToTop: "Back to top",
    clientsHeading: "Clients",
    contactHeading: "Contact",
    address: "Oslo, Norway",
    servicesHeading: "Services",
  },
  servicePage: {
    allServices: "All services",
    includesHeading: "What's included",
    priceLabel: "Indicative price",
    priceNote: "Prices exclude VAT. Final price confirmed after a short scoping conversation.",
    contactCta: "Discuss this project",
    orCall: "Prefer to talk? Call",
    otherServices: "Other services",
  },
};

const no: Dictionary = {
  nav: { home: "Hjem", services: "Tjenester", about: "Om oss", contact: "Kontakt" },
  hero: {
    headline: "Tilgjengelig programvare og anvendt KI, bygget av ingeniøren som selv svarer på telefonen.",
    sub: "VevKraft er et konsulentselskap innen tilgjengelighet og anvendt KI for norske SMB-er — tilgjengelig web- og applikasjonsutvikling, KI-drevet databehandling, og løpende teknisk støtte som ikke rettferdiggjør en fast ansettelse.",
    ctaPrimary: "Start et prosjekt",
    ctaSecondary: "Se hva jeg gjør",
    trustedBy: "Tillit fra",
  },
  services: {
    eyebrow: "Tjenester",
    heading: "Én ingeniør. Fullt ansvar, hele veien.",
    sub: "Alt en voksende SMB trenger fra en digital partner, uten kostnadene ved å ansette, lede eller koordinere et byrå.",
    cta: "Se detaljer",
    items: [
      {
        slug: "accessible-web-development",
        title: "Tilgjengelig webutvikling",
        short: "Nettsider og webapplikasjoner med tilgjengelighet innebygd fra start — pluss revisjon og utbedring av nettstedene du allerede driver.",
        long: "Tilgjengelighet bygges inn i markup, komponenter og tastaturnavigasjon fra første commit, ikke som en etterhåndsjustering før lansering. Alle prosjekter testes mot WCAG 2.0 nivå AA — kravet likestillings- og diskrimineringsloven stiller til offentlig rettede digitale tjenester i Norge, uavhengig av virksomhetens størrelse. For nettsteder du allerede driver, reviderer jeg mot de faktiske suksesskriteriene og hvordan hjelpemiddelteknologi oppfører seg, retter det som svikter, og re-tester og dokumenterer samsvar i stedet for bare å hevde det — en metode som kommer fra masteroppgaven min innen digital tilgjengelighet, gjennomført i samarbeid med Simula.",
        includes: [
          "Nye nettsider og webapplikasjoner bygget etter WCAG 2.0 AA",
          "Tilgjengelig markup, komponenter og tastaturnavigasjon fra første commit",
          "Tilgjengelighetsrevisjon av eksisterende nettsteder og applikasjoner",
          "Utbedring, re-testing og dokumentert samsvar",
          "Én ingeniør fra første samtale til lansering",
        ],
        price: "Tilgjengelige nettsider fra NOK 8 990 (3–5 sider) eller NOK 17 990 (5–10 sider med skreddersydd design). Større nettsteder og webapplikasjoner fra NOK 44 990. Tilgjengelighetsrevisjon fra NOK 4 990, med utbedring til NOK 890 per time.",
      },
      {
        slug: "ai-image-processing",
        title: "KI og bildebehandling",
        short: "Automatisert analyse av drone-, termisk- og inspeksjonsbilder, med rapporteringen bygget rundt den.",
        long: "Driftsdata — dronefilmer, termiske bilder, inspeksjonsfoto — kommer inn raskere enn et lite team kan gå gjennom manuelt. Jeg bygger innhenting, automatisert analyse og rapportering som gjør dataene til noe man kan handle på raskt, med den endelige vurderingen alltid liggende hos et menneske. Dette er anvendt ingeniørarbeid på eksisterende modeller, ikke forskning for forskningens skyld.",
        includes: [
          "Innhenting av drone-, termisk- og inspeksjonsbilder",
          "Automatisert analyse bygget på velprøvde, eksisterende modeller",
          "Rapporter teamet ditt kan handle raskt på",
          "Et menneske tar alltid den endelige beslutningen",
          "Først en pilot, deretter løpende behandling når den har vist sin verdi",
        ],
        price: "Pilotintegrasjoner fra NOK 19 990. Løpende behandling og rapportering fra NOK 2 990 i måneden.",
      },
      {
        slug: "cloud-migration",
        title: "Skymigrering",
        short: "Flytting av servere, applikasjoner og data til skyen — planlagt, testet og kostnadskontrollert, med løpende drift etterpå.",
        long: "Å flytte til skyen bør senke kostnad og risiko, ikke øke dem. Jeg kartlegger hva du kjører i dag, planlegger migreringen med tydelige tilbakerullingspunkter, og flytter servere, applikasjoner og data over med minimal nedetid — og tilpasser deretter oppsettet slik at månedsregningen samsvarer med faktisk bruk. Etterpå kan jeg holde alt vedlikeholdt, overvåket og sikkert under en månedlig avtale, slik at du aldri sitter igjen med infrastruktur ingen i staben forstår.",
        includes: [
          "Kartlegging av dagens systemer, avhengigheter og kostnader",
          "En migreringsplan med testede tilbakerullingspunkter",
          "Flytting av servere, applikasjoner og data med minimal nedetid",
          "Riktig dimensjonering og løpende kostnadskontroll i skyen",
          "Valgfri månedlig drift: overvåking, sikkerhetsoppdateringer og vedlikehold",
        ],
        price: "Små migreringer fra NOK 9 990; større oppsett prises etter en kort kartlegging. Løpende drift og vedlikehold fra NOK 890 i måneden.",
      },
      {
        slug: "it-consultancy-training",
        title: "IT-rådgivning og opplæring",
        short: "Uavhengig rådgivning om teknologivalg, og praktisk opplæring som gjør teamet ditt selvstendig.",
        long: "Rådgivning om teknologivalg — arkitekturgjennomgang, leverandør- og innkjøpsforslag, kostnadsvurdering i skyen — for virksomheter uten intern kompetanse til å vurdere dem. I tillegg praktisk opplæring i tilgjengelighet for kundens utviklere og innholdsredaktører, slik at samsvaret overlever neste lansering, ikke bare den jeg reviderte.",
        includes: [
          "Gjennomgang av arkitektur og systemer",
          "Vurdering av leverandør- og innkjøpsforslag",
          "Kostnadsvurdering i skyen",
          "Opplæring i tilgjengelighet for utviklere og innholdsredaktører",
          "Rådgivning per time eller gjennomganger til fastpris",
        ],
        price: "Rådgivning til NOK 890 per time, eller en fastprisvurdering av arkitektur fra NOK 7 990. Opplæringsverksted fra NOK 4 990 per økt.",
      },
      {
        slug: "hardware-lifecycle",
        title: "Livssyklushåndtering av maskinvare",
        short: "Ytelsestesting, sikker sletting, ombygging og oppussing — utstyret holder lenger i drift.",
        long: "Enkelte virksomheter bytter ut maskinvare etter en fast syklus i stedet for reelt behov. Jeg tester og diagnostiserer hva som faktisk svikter, sletter og bygger om maskiner sikkert for videre bruk, og pusser opp utrangert utstyr slik at det forblir nyttig i stedet for å bli avfall — som kutter både kostnad og innebygd karbonavtrykk.",
        includes: [
          "Ytelsestesting og diagnostikk av eksisterende utstyr",
          "Sikker sletting av data før gjenbruk eller avhending",
          "Ombygging for ny bruk i virksomheten",
          "Oppussing av utrangert utstyr",
          "Lavere maskinvarekostnader og mindre EE-avfall",
        ],
        price: "Vurdering og sikker sletting fra NOK 290 per enhet. Program for ombygging og videre utplassering prises etter flåtestørrelse.",
      },
    ],
  },
  process: {
    eyebrow: "Slik jobber jeg",
    heading: "Tre steg, ett ansvarlig menneske hele veien.",
    steps: [
      {
        number: "01",
        title: "Kartlegging og demonstrasjon",
        description: "En kravsamtale, gjerne på stedet, ofte etterfulgt av en fungerende demonstrasjon før du forplikter deg til noe.",
      },
      {
        number: "02",
        title: "Bygging, med ett kontaktpunkt",
        description: "Ingeniøren som kartla oppdraget skriver koden, setter arkitekturen og går gjennom den med deg. Ingen overleveringer mellom salg, design og leveranse.",
      },
      {
        number: "03",
        title: "Lansering, re-testing, støtte",
        description: "Tilgjengelighetssamsvar re-testes og dokumenteres etter retting. Vedlikehold, skydrift og videre utvikling fortsetter under månedlig avtale.",
      },
    ],
  },
  whyus: {
    eyebrow: "Hvorfor VevKraft",
    heading: "Hva det faktisk betyr å jobbe med VevKraft.",
    sub: "Ingen kundekontakter som videreformidler beskjeder, ingen pakkede minstebeløp, ingen egen leverandør for hver del av stacken. Bare det som endrer seg når én ansvarlig ingeniør gjør jobben.",
    getLabel: "Dette får du",
    skipLabel: "Dette slipper du",
    get: [
      "Direkte tilgang til ingeniøren som kartlegger, bygger og leverer arbeidet",
      "Tilgjengelighetsarbeid forankret i forskning på masternivå, ikke en plugin",
      "Ett forhold på tvers av programvare, anvendt KI og maskinvare",
      "Kapasitet tilpasset det du faktisk trenger denne måneden, ikke et minstebeløp",
      "Noen som kan møte opp i Oslo når et problem må ses, ikke bare beskrives",
    ],
    skip: [
      "Kundekontakter som videreformidler beskjeder til den som faktisk koder",
      "Minste oppdragsstørrelser bygget for bedriftsbudsjetter",
      "Én leverandør for appen, en annen for revisjonen, en tredje for maskinvaren",
      "Ansettelseskostnader — lønn, arbeidsgiveravgift, rekruttering — for et deltidsbehov",
      "En supportinnboks uten noen med ansvar i Norge",
    ],
  },
  faq: {
    eyebrow: "Ofte stilte spørsmål",
    heading: "Spørsmål verdt å besvare på forhånd.",
    items: [
      {
        q: "Hvorfor jobbe med én ingeniør i stedet for et byrå?",
        a: "Ingeniøren som kartlegger oppdraget er den samme som bygger det, så beslutninger holder seg konsistente fra første samtale til levering og støtte — ingen overleveringer, ingen kundekontakter som videreformidler beskjeder. Det gir også en kostnadsbase som passer et deltidsbehov, uten byråpåslag.",
      },
      {
        q: "Hvilken tilgjengelighetsstandard tester du mot?",
        a: "WCAG 2.0 nivå AA, standarden likestillings- og diskrimineringsloven krever for offentlig rettede nettsteder, apper og selvbetjeningsautomater. Samsvar re-testes og dokumenteres etter hver retting, ikke bare påstås.",
      },
      {
        q: "Tar du bare enkeltstående prosjekter?",
        a: "Nei — de fleste oppdrag fortsetter under en månedlig avtale som dekker vedlikehold, skydrift, ytelses- og sikkerhetsoppdateringer, og videre utvikling, i tillegg til prosjektarbeid.",
      },
      {
        q: "Jobber du med kunder utenfor Oslo?",
        a: "Arbeid som krever fysisk tilstedeværelse — kravsamtaler, testing på stedet, bygningsinspeksjoner — er sentrert rundt Oslo. Programvare- og KI-utviklingssamarbeid, som det med Celestial Invention, fungerer godt også på avstand.",
      },
      {
        q: "Kan du hjelpe med maskinvare, ikke bare programvare?",
        a: "Ja. Livssyklushåndtering av maskinvare — ytelsestesting og diagnose, sikker sletting av data, ombygging og videre utplassering, samt oppussing av utrangert utstyr — er en del av praksisen, og bygger på den samme systemkunnskapen som programvarearbeidet.",
      },
      {
        q: "Hvordan starter et oppdrag?",
        a: "Med en kravsamtale, ofte etterfulgt av en fungerende demonstrasjon før du forplikter deg til noe.",
      },
    ],
  },
  about: {
    eyebrow: "Om oss",
    heading: "En ingeniørpraksis bygget for å vare, ikke bare et frilansoppdrag.",
    intro: "VevKraft er et konsulentselskap innen tilgjengelighet og anvendt KI med base i Oslo, grunnlagt av Rizve Hasan — master i informatikk: programmering og systemarkitektur fra Universitetet i Oslo, med en masteroppgave i digital tilgjengelighet gjennomført i samarbeid med Simula, og AWS Certified Cloud Practitioner. I dag er det én ingeniør som bærer hvert oppdrag personlig; praksisen er bygget for å vokse forbi det.",
    ambitionHeading: "Ambisjon, utover fakturaen",
    ambition: [
      {
        title: "Digital inkludering",
        text: "Hver SMB-nettside som bringes i samsvar med WCAG, er en tjeneste noen nå kan bestille, bruke eller søke gjennom på egen hånd, som de ikke kunne før. Å bygge tilgjengelighet til en anerkjent lokal spesialisering når virksomheter som ellers er for små til å ha råd til en dedikert spesialist.",
      },
      {
        title: "Bygge lokal kompetanse",
        text: "Strukturert opplæring for kundens utviklere og innholdsredaktører, og fortsatt forskningssamarbeid med det norske teknologi- og tilgjengelighetsmiljøet — kunnskap og publiserte metoder som lever videre lenge etter et enkelt oppdrag.",
      },
      {
        title: "Bærekraftig teknologi",
        text: "Arbeid med maskinvarens livssyklus rettet mot målbare resultater: lavere energibruk i systemene jeg bygger og drifter, og lengre levetid for utstyr som ellers ville blitt avfall.",
      },
      {
        title: "Vekst i Norge",
        text: "Etter hvert som arbeidsmengden tilsier det, er planen å ansette folk og holde arbeidet her — betale norsk skatt, betjene norske kunder, og bygge noe som lever videre utover én grunnlegger.",
      },
    ],
    cta: "Ta kontakt",
    founderRole: "Grunnlegger og CTO",
    photoAlt: "Portrett av Rizve Hasan",
    servicesHeading: "Hva jeg gjør",
    servicesCta: "Se tjenestene",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Fortell meg hva du bygger.",
    sub: "Enten det er en ny webapplikasjon, en tilgjengelighetsrevisjon eller løpende ingeniørkapasitet — ta direkte kontakt. Jeg svarer personlig, vanligvis innen én virkedag.",
    labels: { phone: "Telefon", address: "Adresse" },
    form: {
      heading: "Send en melding",
      name: "Navn",
      email: "E-post",
      company: "Bedrift",
      optional: "valgfritt",
      message: "Hva kan jeg hjelpe med?",
      submit: "Send melding",
      sending: "Sender…",
      success: "Takk — meldingen din er sendt. Jeg svarer deg, vanligvis innen én virkedag.",
      error: "Noe gikk galt, og meldingen ble ikke sendt. Prøv igjen, eller ring meg på",
    },
  },
  footer: { rights: "© {year} VEVKRAFT BY HASAN, Oslo, Norge.", backToTop: "Til toppen",
    clientsHeading: "Kunder",
    contactHeading: "Kontakt",
    address: "Oslo, Norge",
    servicesHeading: "Tjenester",
  },
  servicePage: {
    allServices: "Alle tjenester",
    includesHeading: "Dette er inkludert",
    priceLabel: "Veiledende pris",
    priceNote: "Prisene er eks. mva. Endelig pris bekreftes etter en kort avklaringssamtale.",
    contactCta: "Diskuter dette prosjektet",
    orCall: "Vil du heller snakke? Ring",
    otherServices: "Andre tjenester",
  },
};

const bn: Dictionary = {
  nav: { home: "হোম", services: "সেবাসমূহ", about: "পরিচিতি", contact: "যোগাযোগ" },
  hero: {
    headline: "অ্যাক্সেসিবল সফটওয়্যার ও প্রায়োগিক এআই, যিনি নিজেই ফোন ধরেন সেই ইঞ্জিনিয়ারের হাতে তৈরি।",
    sub: "ভেভক্রাফট নরওয়ের ছোট ও মাঝারি ব্যবসার জন্য অ্যাক্সেসিবিলিটি ও প্রায়োগিক এআই সফটওয়্যার কনসালটেন্সি — অ্যাক্সেসিবল ওয়েব ও অ্যাপ্লিকেশন ডেভেলপমেন্ট, এআই-চালিত ডেটা প্রসেসিং, এবং যে ধারাবাহিক প্রকৌশল সহায়তার জন্য পূর্ণকালীন নিয়োগের প্রয়োজন হয় না।",
    ctaPrimary: "একটি প্রজেক্ট শুরু করুন",
    ctaSecondary: "আমি কী করি দেখুন",
    trustedBy: "যাদের আস্থা পেয়েছি",
  },
  services: {
    eyebrow: "সেবাসমূহ",
    heading: "একজন ইঞ্জিনিয়ার। সম্পূর্ণ দায়বদ্ধতা।",
    sub: "একটি ক্রমবর্ধমান এসএমই-র জন্য একজন ডিজিটাল অংশীদারের কাছ থেকে প্রয়োজনীয় সবকিছু, এজেন্সি নিয়োগ, পরিচালনা বা সমন্বয়ের বাড়তি খরচ ছাড়াই।",
    cta: "বিস্তারিত দেখুন",
    items: [
      {
        slug: "accessible-web-development",
        title: "অ্যাক্সেসিবল ওয়েব ডেভেলপমেন্ট",
        short: "শুরু থেকেই অ্যাক্সেসিবিলিটি সংযুক্ত করে তৈরি ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন — সাথে আপনার বিদ্যমান সাইটের অডিট ও সংশোধন।",
        long: "প্রথম কমিট থেকেই মার্কআপ, কম্পোনেন্ট ও কীবোর্ড আচরণে অ্যাক্সেসিবিলিটি অন্তর্ভুক্ত করা হয়, লঞ্চের আগে শেষ মুহূর্তে যোগ করা হয় না। প্রতিটি প্রজেক্ট WCAG 2.0 লেভেল AA অনুযায়ী পরীক্ষিত হয় — নরওয়ের সমতা ও বৈষম্য-বিরোধী আইন অনুযায়ী জনসাধারণের জন্য তৈরি ডিজিটাল সেবার ক্ষেত্রে প্রতিষ্ঠানের আকার নির্বিশেষে এই মান প্রযোজ্য। আপনার বিদ্যমান সাইটের ক্ষেত্রে, আমি প্রকৃত সাফল্যের মানদণ্ড ও সহায়ক প্রযুক্তির আচরণ অনুযায়ী অডিট করি, ত্রুটি সংশোধন করি, তারপর কেবল দাবি না করে পুনঃপরীক্ষা ও নথিভুক্ত করি — এই পদ্ধতি এসেছে সিমুলার সহযোগিতায় সম্পন্ন ডিজিটাল অ্যাক্সেসিবিলিটি নিয়ে আমার মাস্টার্স থিসিসের গবেষণা থেকে।",
        includes: [
          "WCAG 2.0 AA অনুযায়ী নতুন ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন",
          "প্রথম কমিট থেকেই অ্যাক্সেসিবল মার্কআপ, কম্পোনেন্ট ও কীবোর্ড আচরণ",
          "বিদ্যমান সাইট ও অ্যাপ্লিকেশনের অ্যাক্সেসিবিলিটি অডিট",
          "সংশোধন, পুনঃপরীক্ষা ও নথিভুক্ত সম্মতি",
          "প্রথম আলোচনা থেকে লঞ্চ পর্যন্ত একজনই ইঞ্জিনিয়ার",
        ],
        price: "অ্যাক্সেসিবল ওয়েবসাইট NOK ৮,৯৯০ (৩–৫ পৃষ্ঠা) অথবা NOK ১৭,৯৯০ (কাস্টম ডিজাইনসহ ৫–১০ পৃষ্ঠা) থেকে। বড় সাইট ও ওয়েব অ্যাপ্লিকেশন NOK ৪৪,৯৯০ থেকে। অ্যাক্সেসিবিলিটি অডিট NOK ৪,৯৯০ থেকে, সংশোধন ঘণ্টাপ্রতি NOK ৮৯০।",
      },
      {
        slug: "ai-image-processing",
        title: "এআই ও ইমেজ প্রসেসিং",
        short: "ড্রোন, থার্মাল ও ইন্সপেকশন ছবির স্বয়ংক্রিয় বিশ্লেষণ, তার চারপাশে গড়া রিপোর্টিং সহ।",
        long: "অপারেশনাল ডেটা — ড্রোন ফুটেজ, থার্মাল ইমেজ, ইন্সপেকশন ছবি — একটি ছোট দল হাতে পর্যালোচনা করতে পারার চেয়ে দ্রুত আসে। আমি এমন ইনজেশন, স্বয়ংক্রিয় বিশ্লেষণ ও রিপোর্টিং পাইপলাইন তৈরি করি যা এটিকে এমন কিছুতে পরিণত করে যার উপর দ্রুত পদক্ষেপ নেওয়া যায়, চূড়ান্ত সিদ্ধান্ত সবসময় মানুষের হাতে রেখে। এটি বিদ্যমান মডেলের উপর প্রায়োগিক প্রকৌশল, নিজের স্বার্থে গবেষণা নয়।",
        includes: [
          "ড্রোন, থার্মাল ও ইন্সপেকশন ছবি সংগ্রহ",
          "প্রমাণিত, বিদ্যমান মডেলের উপর ভিত্তি করে স্বয়ংক্রিয় বিশ্লেষণ",
          "এমন রিপোর্ট যার উপর আপনার টিম দ্রুত পদক্ষেপ নিতে পারে",
          "চূড়ান্ত সিদ্ধান্তে সবসময় একজন মানুষ",
          "প্রথমে একটি পাইলট, কার্যকারিতা প্রমাণের পর চলমান প্রসেসিং",
        ],
        price: "পাইলট ইন্টিগ্রেশন NOK ১৯,৯৯০ থেকে। চলমান প্রসেসিং ও রিপোর্টিং মাসে NOK ২,৯৯০ থেকে।",
      },
      {
        slug: "cloud-migration",
        title: "ক্লাউড মাইগ্রেশন",
        short: "সার্ভার, অ্যাপ্লিকেশন ও ডেটা ক্লাউডে স্থানান্তর — পরিকল্পিত, পরীক্ষিত ও খরচ-নিয়ন্ত্রিত, পরবর্তীতে চলমান অপারেশন সহ।",
        long: "ক্লাউডে যাওয়া খরচ ও ঝুঁকি কমানোর জন্য, বাড়ানোর জন্য নয়। আমি আপনার বর্তমান সিস্টেম মূল্যায়ন করি, স্পষ্ট রোলব্যাক পয়েন্ট সহ মাইগ্রেশনের পরিকল্পনা করি, এবং ন্যূনতম ডাউনটাইমে সার্ভার, অ্যাপ্লিকেশন ও ডেটা স্থানান্তর করি — তারপর সেটআপ এমনভাবে সাজাই যাতে মাসিক বিল প্রকৃত ব্যবহারের সাথে মেলে। এরপর একটি মাসিক চুক্তির অধীনে সবকিছু রক্ষণাবেক্ষণ, পর্যবেক্ষণ ও সুরক্ষিত রাখতে পারি, যাতে আপনাকে কখনো এমন অবকাঠামো নিয়ে পড়ে থাকতে না হয় যা আপনার কর্মীদের কেউ বোঝেন না।",
        includes: [
          "বর্তমান সিস্টেম, নির্ভরতা ও খরচের মূল্যায়ন",
          "পরীক্ষিত রোলব্যাক পয়েন্ট সহ মাইগ্রেশন পরিকল্পনা",
          "ন্যূনতম ডাউনটাইমে সার্ভার, অ্যাপ্লিকেশন ও ডেটা স্থানান্তর",
          "সঠিক আকার নির্ধারণ ও চলমান ক্লাউড খরচ নিয়ন্ত্রণ",
          "ঐচ্ছিক মাসিক অপারেশন: পর্যবেক্ষণ, নিরাপত্তা আপডেট ও রক্ষণাবেক্ষণ",
        ],
        price: "ছোট মাইগ্রেশন NOK ৯,৯৯০ থেকে; বড় সেটআপের মূল্য সংক্ষিপ্ত মূল্যায়নের পর নির্ধারিত হয়। চলমান অপারেশন ও রক্ষণাবেক্ষণ মাসে NOK ৮৯০ থেকে।",
      },
      {
        slug: "it-consultancy-training",
        title: "আইটি কনসালটেন্সি ও প্রশিক্ষণ",
        short: "প্রযুক্তিগত সিদ্ধান্তে স্বাধীন পরামর্শ, এবং ব্যবহারিক প্রশিক্ষণ যা আপনার টিমকে স্বনির্ভর রাখে।",
        long: "যেসব প্রতিষ্ঠানের অভ্যন্তরীণ দক্ষতা নেই, তাদের জন্য প্রযুক্তিগত সিদ্ধান্ত সম্পর্কে পরামর্শ — আর্কিটেকচার রিভিউ, সরবরাহকারী ও প্রকিউরমেন্ট প্রস্তাব, ক্লাউড খরচ মূল্যায়ন। সাথে, ক্লায়েন্টের ডেভেলপার ও কনটেন্ট এডিটরদের জন্য ব্যবহারিক অ্যাক্সেসিবিলিটি প্রশিক্ষণ, যাতে সম্মতি শুধু যে সংস্করণ অডিট করা হয়েছে তাতেই নয়, পরবর্তী রিলিজেও টিকে থাকে।",
        includes: [
          "আর্কিটেকচার ও সিস্টেম রিভিউ",
          "সরবরাহকারী ও প্রকিউরমেন্ট প্রস্তাবের মূল্যায়ন",
          "ক্লাউড খরচ মূল্যায়ন",
          "ডেভেলপার ও কনটেন্ট এডিটরদের জন্য অ্যাক্সেসিবিলিটি প্রশিক্ষণ",
          "ঘণ্টাভিত্তিক পরামর্শ বা নির্দিষ্ট পরিধির রিভিউ",
        ],
        price: "পরামর্শ ঘণ্টাপ্রতি NOK ৮৯০, অথবা নির্দিষ্ট পরিধির আর্কিটেকচার রিভিউ NOK ৭,৯৯০ থেকে। প্রশিক্ষণ কর্মশালা প্রতি সেশন NOK ৪,৯৯০ থেকে।",
      },
      {
        slug: "hardware-lifecycle",
        title: "হার্ডওয়্যার লাইফসাইকেল ইঞ্জিনিয়ারিং",
        short: "বেঞ্চমার্কিং, নিরাপদ ইরেজার, রিবিল্ড ও পুনর্নির্মাণ — যন্ত্রপাতিকে আরও বেশি সময় সচল রাখা।",
        long: "কিছু ব্যবসা প্রকৃত প্রয়োজনের বদলে নির্দিষ্ট সময়ান্তরে হার্ডওয়্যার প্রতিস্থাপন করে। আমি বেঞ্চমার্ক ও নির্ণয় করি প্রকৃতপক্ষে কী নষ্ট হচ্ছে, নিরাপদে ডেটা মুছে যন্ত্র পুনর্নির্মাণ করি পুনরায় ব্যবহারের জন্য, এবং অবসরপ্রাপ্ত যন্ত্রপাতি সংস্কার করি যাতে তা বর্জ্যে পরিণত না হয়ে কাজে লাগে — খরচ ও কার্বন পদচিহ্ন দুটোই কমিয়ে।",
        includes: [
          "বিদ্যমান যন্ত্রপাতির বেঞ্চমার্কিং ও সমস্যা নির্ণয়",
          "পুনঃব্যবহার বা নিষ্পত্তির আগে নিরাপদ ডেটা ইরেজার",
          "প্রতিষ্ঠানের ভেতরে পুনরায় ব্যবহারের জন্য রিবিল্ড",
          "অবসরপ্রাপ্ত যন্ত্রপাতির সংস্কার",
          "কম হার্ডওয়্যার খরচ ও কম ই-বর্জ্য",
        ],
        price: "প্রতি ডিভাইসে মূল্যায়ন ও নিরাপদ ইরেজার NOK ২৯০ থেকে শুরু। রিবিল্ড ও পুনর্নিয়োগ প্রোগ্রাম বহরের আকার অনুযায়ী মূল্য নির্ধারিত।",
      },
    ],
  },
  process: {
    eyebrow: "কর্মপ্রণালী",
    heading: "তিনটি ধাপ, শুরু থেকে শেষ পর্যন্ত একজনই দায়বদ্ধ।",
    steps: [
      {
        number: "০১",
        title: "আবিষ্কার ও প্রদর্শন",
        description: "একটি প্রয়োজনীয়তা আলোচনা, উপযোগী হলে সরাসরি সাইটে, প্রায়ই একটি কার্যকরী প্রদর্শনী সহ — আপনি প্রতিশ্রুতিবদ্ধ হওয়ার আগে।",
      },
      {
        number: "০২",
        title: "নির্মাণ, একটিমাত্র যোগাযোগ বিন্দু দিয়ে",
        description: "যে ইঞ্জিনিয়ার কাজের পরিধি নির্ধারণ করেন তিনিই কোড লেখেন, স্থাপত্য ঠিক করেন এবং আপনার সাথে পর্যালোচনা করেন। বিক্রয়, ডিজাইন ও ডেলিভারির মধ্যে কোনো হস্তান্তর নেই।",
      },
      {
        number: "০৩",
        title: "প্রকাশ, পুনঃপরীক্ষা, সহায়তা",
        description: "সংশোধনের পর অ্যাক্সেসিবিলিটি সম্মতি পুনঃপরীক্ষিত ও নথিভুক্ত হয়। রক্ষণাবেক্ষণ, ক্লাউড অপারেশন ও পরবর্তী উন্নয়ন মাসিক চুক্তির অধীনে অব্যাহত থাকে।",
      },
    ],
  },
  whyus: {
    eyebrow: "কেন ভেভক্রাফট",
    heading: "ভেভক্রাফটের সাথে কাজ করার আসল মানে।",
    sub: "কোনো অ্যাকাউন্ট ম্যানেজার বার্তা পৌঁছে দিচ্ছে না, কোনো বান্ডিল করা ন্যূনতম বাজেট নেই, স্ট্যাকের প্রতিটি অংশের জন্য আলাদা সরবরাহকারী নেই। একজন দায়বদ্ধ ইঞ্জিনিয়ার কাজ করলে যা বদলায়, শুধু তাই।",
    getLabel: "যা আপনি পাচ্ছেন",
    skipLabel: "যা আপনি এড়িয়ে যাচ্ছেন",
    get: [
      "যিনি কাজের পরিধি নির্ধারণ করেন, নির্মাণ করেন ও ডেলিভার করেন — সেই ইঞ্জিনিয়ারের সরাসরি প্রবেশাধিকার",
      "মাস্টার্স-স্তরের গবেষণায় প্রোথিত অ্যাক্সেসিবিলিটি প্রকৌশল, কোনো প্লাগইন নয়",
      "সফটওয়্যার, প্রায়োগিক এআই ও হার্ডওয়্যার জুড়ে একটিই সম্পর্ক",
      "এই মাসে আপনার প্রকৃত প্রয়োজন অনুযায়ী সক্ষমতা, কোনো ন্যূনতম রিটেইনার নয়",
      "যিনি সমস্যাটা বর্ণনার বদলে সরাসরি দেখার জন্য অসলোতে উপস্থিত থাকতে পারেন",
    ],
    skip: [
      "যিনি আসলে কোড লেখেন তার কাছে বার্তা পৌঁছে দেওয়া অ্যাকাউন্ট ম্যানেজার",
      "এন্টারপ্রাইজ বাজেটের জন্য তৈরি ন্যূনতম কাজের আকার",
      "অ্যাপের জন্য একজন, অডিটের জন্য আরেকজন, হার্ডওয়্যারের জন্য তৃতীয় সরবরাহকারী",
      "খণ্ডকালীন প্রয়োজনের জন্য নিয়োগ খরচ — বেতন, নিয়োগকর্তার অবদান, নিয়োগ প্রক্রিয়া",
      "নরওয়েতে দায়বদ্ধ কেউ নেই এমন একটি সাপোর্ট ইনবক্স",
    ],
  },
  faq: {
    eyebrow: "সচরাচর জিজ্ঞাসা",
    heading: "যেসব প্রশ্নের উত্তর আগেই দেওয়া ভালো।",
    items: [
      {
        q: "একটি এজেন্সির বদলে একজন ইঞ্জিনিয়ারের সাথে কেন কাজ করবেন?",
        a: "যে ইঞ্জিনিয়ার কাজের পরিধি নির্ধারণ করেন তিনিই তা নির্মাণ করেন, তাই প্রথম আলোচনা থেকে ডেলিভারি ও সহায়তা পর্যন্ত সিদ্ধান্তগুলো সামঞ্জস্যপূর্ণ থাকে — কোনো হস্তান্তর নেই, বার্তা পৌঁছে দেওয়ার জন্য কোনো অ্যাকাউন্ট ম্যানেজার নেই। এটি এজেন্সি খরচ ছাড়াই খণ্ডকালীন প্রয়োজনের সাথে মানানসই একটি খরচ কাঠামোও দেয়।",
      },
      {
        q: "আপনি কোন অ্যাক্সেসিবিলিটি মানদণ্ডের বিরুদ্ধে পরীক্ষা করেন?",
        a: "WCAG 2.0 লেভেল AA, নরওয়ের সমতা ও বৈষম্য-বিরোধী আইন অনুযায়ী জনসাধারণের জন্য তৈরি ওয়েবসাইট, অ্যাপ ও সেলফ-সার্ভিস মেশিনের জন্য প্রয়োজনীয় মানদণ্ড। প্রতিটি সংশোধনের পর সম্মতি পুনঃপরীক্ষিত ও নথিভুক্ত হয়, শুধু দাবি করা হয় না।",
      },
      {
        q: "আপনি কি শুধু এককালীন প্রজেক্ট নেন?",
        a: "না — বেশিরভাগ কাজ প্রজেক্ট শেষে একটি মাসিক চুক্তির অধীনে চলতে থাকে, যাতে রক্ষণাবেক্ষণ, ক্লাউড অপারেশন, পারফরম্যান্স ও নিরাপত্তা আপডেট, এবং পরবর্তী উন্নয়ন অন্তর্ভুক্ত।",
      },
      {
        q: "আপনি কি অসলোর বাইরের ক্লায়েন্টদের সাথে কাজ করেন?",
        a: "সরাসরি উপস্থিতি প্রয়োজন এমন কাজ — প্রয়োজনীয়তা আলোচনা, সাইটে পরীক্ষা, বিল্ডিং ইন্সপেকশন — অসলো-কেন্দ্রিক। সফটওয়্যার ও এআই ডেভেলপমেন্ট পার্টনারশিপ, যেমন সেলেস্টিয়াল ইনভেনশনের সাথে, দূরত্ব থেকেও ভালোভাবে কাজ করে।",
      },
      {
        q: "আপনি কি শুধু সফটওয়্যার নয়, হার্ডওয়্যারেও সাহায্য করতে পারেন?",
        a: "হ্যাঁ। হার্ডওয়্যার লাইফসাইকেল ইঞ্জিনিয়ারিং — বেঞ্চমার্কিং ও নির্ণয়, নিরাপদ ডেটা ইরেজার, রিবিল্ড ও পুনর্নিয়োগ, এবং অবসরপ্রাপ্ত যন্ত্রপাতি সংস্কার — এই চর্চার একটি অংশ, যা সফটওয়্যার কাজের মতোই একই সিস্টেম জ্ঞানের উপর নির্ভরশীল।",
      },
      {
        q: "একটি কাজ কীভাবে শুরু হয়?",
        a: "একটি প্রয়োজনীয়তা আলোচনার মাধ্যমে, প্রায়ই একটি কার্যকরী প্রদর্শনী সহ, আপনি প্রতিশ্রুতিবদ্ধ হওয়ার আগে।",
      },
    ],
  },
  about: {
    eyebrow: "পরিচিতি",
    heading: "টিকে থাকার জন্য গড়া একটি প্রকৌশল প্রতিষ্ঠান, শুধু একটি ফ্রিল্যান্স তালিকা নয়।",
    intro: "ভেভক্রাফট অসলো-ভিত্তিক একটি অ্যাক্সেসিবিলিটি ও প্রায়োগিক এআই সফটওয়্যার কনসালটেন্সি, প্রতিষ্ঠা করেছেন রিজভী হাসান — অসলো বিশ্ববিদ্যালয় থেকে ইনফরমেটিক্সে মাস্টার্স: প্রোগ্রামিং ও সিস্টেম আর্কিটেকচার, সিমুলার সহযোগিতায় সম্পন্ন ডিজিটাল অ্যাক্সেসিবিলিটি নিয়ে থিসিস, এবং AWS সার্টিফায়েড ক্লাউড প্র্যাকটিশনার। আজ এটি একজন ইঞ্জিনিয়ার ব্যক্তিগতভাবে প্রতিটি কাজ পরিচালনা করছেন; প্রতিষ্ঠানটি এর চেয়ে বড় হয়ে ওঠার জন্য গড়া।",
    ambitionHeading: "উচ্চাকাঙ্ক্ষা, চালানের বাইরেও",
    ambition: [
      {
        title: "ডিজিটাল অন্তর্ভুক্তি",
        text: "WCAG সম্মত করা প্রতিটি এসএমই সাইট এমন একটি সেবা, যা আগে যা করতে পারতেন না, এখন কেউ স্বাধীনভাবে বুক করতে, অর্ডার দিতে বা আবেদন করতে পারেন। অ্যাক্সেসিবিলিটিকে একটি স্বীকৃত স্থানীয় বিশেষত্বে পরিণত করা মানে যেসব ব্যবসা একজন নিবেদিত বিশেষজ্ঞ রাখার সামর্থ্য রাখে না, তাদের কাছেও পৌঁছানো।",
      },
      {
        title: "স্থানীয় দক্ষতা গড়ে তোলা",
        text: "ক্লায়েন্টের ডেভেলপার ও কনটেন্ট এডিটরদের জন্য কাঠামোবদ্ধ প্রশিক্ষণ, এবং নরওয়ের প্রযুক্তি ও অ্যাক্সেসিবিলিটি সম্প্রদায়ের সাথে চলমান গবেষণা সহযোগিতা — এমন দক্ষতা ও প্রকাশিত পদ্ধতি যা যেকোনো একক কাজের চেয়ে দীর্ঘস্থায়ী।",
      },
      {
        title: "টেকসই প্রযুক্তি",
        text: "পরিমাপযোগ্য ফলাফলের দিকে লক্ষ্য রেখে হার্ডওয়্যার লাইফসাইকেল কাজ: আমি যে সিস্টেম তৈরি ও হোস্ট করি তাতে কম শক্তি ব্যবহার, এবং যন্ত্রপাতির দীর্ঘ সেবাজীবন যা অন্যথায় বর্জ্যে পরিণত হতো।",
      },
      {
        title: "নরওয়েতে বৃদ্ধি",
        text: "কাজের পরিমাণ যখন যৌক্তিক করে তুলবে, পরিকল্পনা হলো মানুষ নিয়োগ করা এবং এই কাজ এখানেই রাখা — নরওয়েজিয়ান কর প্রদান, নরওয়েজিয়ান ক্লায়েন্টদের সেবা, এবং এমন কিছু গড়ে তোলা যা একজন প্রতিষ্ঠাতার চেয়েও দীর্ঘস্থায়ী।",
      },
    ],
    cta: "যোগাযোগ করুন",
    founderRole: "প্রতিষ্ঠাতা ও সিটিও",
    photoAlt: "রিজভী হাসানের প্রতিকৃতি",
    servicesHeading: "আমি যা করি",
    servicesCta: "সেবাসমূহ দেখুন",
  },
  contact: {
    eyebrow: "যোগাযোগ",
    heading: "আপনি কী তৈরি করছেন, জানান।",
    sub: "নতুন ওয়েব অ্যাপ্লিকেশন হোক, অ্যাক্সেসিবিলিটি অডিট হোক বা ধারাবাহিক ইঞ্জিনিয়ারিং সক্ষমতা — সরাসরি যোগাযোগ করুন। আমি ব্যক্তিগতভাবে সাড়া দিই, সাধারণত এক কার্যদিবসের মধ্যে।",
    labels: { phone: "ফোন", address: "ঠিকানা" },
    form: {
      heading: "একটি বার্তা পাঠান",
      name: "নাম",
      email: "ইমেইল",
      company: "প্রতিষ্ঠান",
      optional: "ঐচ্ছিক",
      message: "আমি কীভাবে সাহায্য করতে পারি?",
      submit: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে…",
      success: "ধন্যবাদ — আপনার বার্তা পাঠানো হয়েছে। আমি সাধারণত এক কার্যদিবসের মধ্যে উত্তর দিই।",
      error: "কিছু একটা সমস্যা হয়েছে, বার্তাটি পাঠানো যায়নি। আবার চেষ্টা করুন, অথবা ফোন করুন:",
    },
  },
  footer: { rights: "© {year} VEVKRAFT BY HASAN, অসলো, নরওয়ে।", backToTop: "উপরে ফিরে যান",
    clientsHeading: "ক্লায়েন্ট",
    contactHeading: "যোগাযোগ",
    address: "অসলো, নরওয়ে",
    servicesHeading: "সেবাসমূহ",
  },
  servicePage: {
    allServices: "সব সেবা",
    includesHeading: "যা অন্তর্ভুক্ত",
    priceLabel: "আনুমানিক মূল্য",
    priceNote: "মূল্য ভ্যাট ছাড়া। সংক্ষিপ্ত আলোচনার পর চূড়ান্ত মূল্য নিশ্চিত করা হয়।",
    contactCta: "এই প্রজেক্ট নিয়ে আলোচনা করুন",
    orCall: "কথা বলতে চান? ফোন করুন",
    otherServices: "অন্যান্য সেবা",
  },
};

export const translations: Record<Lang, Dictionary> = { en, no, bn };
