
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'EN' | 'FR' | 'AR' | 'SW' | 'PT'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    about: "About",
    pillars: "Pillars",
    program: "Program",
    pastEvents: "Past Events",
    gallery: "Gallery",
    register: "Register",
    registerNow: "Register Now",
    conferenceName: "International Pan African Youth Conference 2026",
    heroSubtitle: "Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.",
    reimagining: "REIMAGINING",
    africas: "AFRICA'S",
    future: "FUTURE",
    visionTitle: "The Vision",
    visionHeadline: "Translating Potential Into Actionable Power",
    visionDescription: "The African Union Students' Platform (AUSP) is a continental community spanning over 46 African countries. With 70% of the continent under 30, this conference is the catalyst to translate youth energy into systemic change.",
    roleTitle: "Our Role",
    roleHeadline: "Empowering the Continental Voice",
    roleDescription: "AUSP represents over 100 million students. Our mission is built on three unbreakable pillars: Education, Connection, and Empowerment.",
    statsCountries: "Countries",
    statsDelegates: "Delegates",
    statsImpact: "Impact",
    pillarsHeadline: "CORE PILLARS OF TRANSFORMATION",
    pillar1Title: "Economic Inclusion",
    pillar1Desc: "Bridging the wealth gap and creating sustainable opportunities for youth-led ventures.",
    pillar2Title: "Digital Innovation",
    pillar2Desc: "Leveraging technology to solve continental challenges and drive digital sovereignty.",
    pillar3Title: "Climate Action",
    pillar3Desc: "Leading the green revolution and protecting Africa's natural heritage for future generations.",
  },
  FR: {
    about: "À propos",
    pillars: "Piliers",
    program: "Programme",
    pastEvents: "Événements passés",
    gallery: "Galerie",
    register: "S'inscrire",
    registerNow: "Inscrivez-vous maintenant",
    conferenceName: "Conférence Internationale de la Jeunesse Panafricaine 2026",
    heroSubtitle: "Unir la jeunesse panafricaine pour un continent juste, inclusif et durable. Ensemble vers 2063.",
    reimagining: "RÉIMAGINER",
    africas: "L'AVENIR DE L'AFRIQUE",
    future: "",
    visionTitle: "La Vision",
    visionHeadline: "Traduire le Potentiel en Pouvoir Actionnable",
    visionDescription: "La Plateforme des Étudiants de l'Union Africaine (AUSP) est une communauté continentale couvrant plus de 46 pays africains. Avec 70% du continent âgé de moins de 30 ans, cette conférence est le catalyseur pour traduire l'énergie de la jeunesse en changement systémique.",
    roleTitle: "Notre Rôle",
    roleHeadline: "Autonomiser la Voix Continentale",
    roleDescription: "L'AUSP représente plus de 100 millions d'étudiants. Notre mission repose sur trois piliers incassables : l'Éducation, la Connexion et l'Autonomisation.",
    statsCountries: "Pays",
    statsDelegates: "Délégués",
    statsImpact: "Impact",
    pillarsHeadline: "PILIERS CORE DE LA TRANSFORMATION",
    pillar1Title: "Inclusion Économique",
    pillar1Desc: "Combler l'écart de richesse et créer des opportunités durables pour les entreprises dirigées par des jeunes.",
    pillar2Title: "Innovation Numérique",
    pillar2Desc: "Tirer parti de la technologie pour résoudre les défis continentaux et stimuler la souveraineté numérique.",
    pillar3Title: "Action Climatique",
    pillar3Desc: "Mener la révolution verte et protéger le patrimoine naturel de l'Afrique pour les générations futures.",
  },
  AR: {
    about: "حول",
    pillars: "الأركان",
    program: "البرنامج",
    pastEvents: "الأحداث الماضية",
    gallery: "المعرض",
    register: "تسجيل",
    registerNow: "سجل الآن",
    conferenceName: "المؤتمر الدولي للشباب الأفريقي 2026",
    heroSubtitle: "توحيد الشباب الأفريقي من أجل قارة عادلة وشاملة ومستدامة. معاً نحو 2063.",
    reimagining: "إعادة تصور",
    africas: "مستقبل",
    future: "أفريقيا",
    visionTitle: "الرؤية",
    visionHeadline: "ترجمة الإمكانات إلى قوة عملية",
    visionDescription: "منصة طلاب الاتحاد الأفريقي (AUSP) هي مجتمع قاري يمتد لأكثر من 46 دولة أفريقية. مع وجود 70٪ من القارة تحت سن 30 ، يعد هذا المؤتمر هو المحفز لترجمة طاقة الشباب إلى تغيير جذري.",
    roleTitle: "دورنا",
    roleHeadline: "تمكين الصوت القاري",
    roleDescription: "تمثل AUSP أكثر من 100 مليون طالب. مهمتنا مبنية على ثلاث ركائز لا تقبل الكسر: التعليم ، والتواصل ، والتمكين.",
    statsCountries: "بلدان",
    statsDelegates: "المندوبين",
    statsImpact: "التأثير",
    pillarsHeadline: "الركائز الأساسية للتحول",
    pillar1Title: "الاشتمال الاقتصادي",
    pillar1Desc: "سد فجوة الثروة وخلق فرص مستدامة للمشاريع التي يقودها الشباب.",
    pillar2Title: "الابتكار الرقمي",
    pillar2Desc: "الاستفادة من التكنولوجيا لحل التحديات القارية ودفع السيادة الرقمية.",
    pillar3Title: "العمل المناخي",
    pillar3Desc: "قيادة الثورة الخضراء وحماية التراث الطبيعي لأفريقيا للأجيال القادمة.",
  },
  SW: {
    about: "Kuhusu",
    pillars: "Nguzo",
    program: "Programu",
    pastEvents: "Matukio ya Zamani",
    gallery: "Picha",
    register: "Jisajili",
    registerNow: "Jisajili Sasa",
    conferenceName: "Mkutano wa Kimataifa wa Vijana wa Pan African 2026",
    heroSubtitle: "Kuunganisha vijana wa Pan-African kwa bara la haki, jumuishi na endelevu. Pamoja kuelekea 2063.",
    reimagining: "KUWAZA UPYA",
    africas: "MUSTAKABALI WA",
    future: "AFRIKA",
    visionTitle: "Maono",
    visionHeadline: "Kubadilisha Uwezo Kuwa Nguvu Inayoweza Kutumika",
    visionDescription: "Jukwaa la Wanafunzi wa Umoja wa Afrika (AUSP) ni jumuiya ya bara inayojumuisha zaidi ya nchi 46 za Afrika. Huku 70% ya bara likiwa na umri wa chini ya miaka 30, mkutano huu ni kichocheo cha kubadilisha nishati ya vijana kuwa mabadiliko ya kimfumo.",
    roleTitle: "Wajibu Wetu",
    roleHeadline: "Kuwezesha Sauti ya Bara",
    roleDescription: "AUSP inawakilisha zaidi ya wanafunzi milioni 100. Dhamira yetu imejengwa juu ya nguzo tatu zisizoweza kuvunjika: Elimu, Uhusiano, na Uwezeshaji.",
    statsCountries: "Nchi",
    statsDelegates: "Wajumbe",
    statsImpact: "Athari",
    pillarsHeadline: "NGUZO KUU ZA MABADILIKO",
    pillar1Title: "Ujumuishaji wa Kiuchumi",
    pillar1Desc: "Kuziba pengo la utajiri na kutengeneza fursa endelevu kwa biashara zinazoongozwa na vijana.",
    pillar2Title: "Ubunifu wa Kidijitali",
    pillar2Desc: "Kutumia teknolojia kutatua changamoto za bara na kuendesha mamlaka ya kidijitali.",
    pillar3Title: "Hatua za Tabianchi",
    pillar3Desc: "Kuongoza mapinduzi ya kijani na kulinda urithi wa asili wa Afrika kwa vizazi vijavyo.",
  },
  PT: {
    about: "Sobre",
    pillars: "Pilares",
    program: "Programa",
    pastEvents: "Eventos Passados",
    gallery: "Galeria",
    register: "Registrar",
    registerNow: "Registre-se Agora",
    conferenceName: "Conferência Internacional da Juventude Pan-Africana 2026",
    heroSubtitle: "Unindo a juventude pan-africana por um continente justo, inclusivo e sustentável. Juntos rumo a 2063.",
    reimagining: "REIMAGINANDO",
    africas: "O FUTURO DA",
    future: "ÁFRICA",
    visionTitle: "A Visão",
    visionHeadline: "Traduzindo Potencial em Poder Acionável",
    visionDescription: "A Plataforma de Estudantes da União Africana (AUSP) é uma comunidade continental que abrange mais de 46 países africanos. Com 70% do continente com menos de 30 anos, esta conferência é o catalisador para traduzir a energia da juventude em mudança sistémica.",
    roleTitle: "Nosso Papel",
    roleHeadline: "Capacitando a Voz Continental",
    roleDescription: "A AUSP representa mais de 100 milhões de estudantes. Nossa missão baseia-se em três pilares inquebráveis: Educação, Conexão e Capacitação.",
    statsCountries: "Países",
    statsDelegates: "Delegados",
    statsImpact: "Impacto",
    pillarsHeadline: "PILARES CENTRAIS DE TRANSFORMAÇÃO",
    pillar1Title: "Inclusão Económica",
    pillar1Desc: "Superar o fosso de riqueza e criar oportunidades sustentáveis para empreendimentos liderados por jovens.",
    pillar2Title: "Inovação Digital",
    pillar2Desc: "Aproveitar a tecnologia para resolver desafios continentais e impulsionar a soberania digital.",
    pillar3Title: "Ação Climática",
    pillar3Desc: "Liderar a revolução verde e proteger o património natural de África para as gerações futuras.",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN')

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
