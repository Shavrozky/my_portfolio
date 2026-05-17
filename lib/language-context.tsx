"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "id" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
};

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navTestimonials: "Testimonials",
    navContact: "Contact",
    navCta: "Let's Talk",
    aboutDescription: "I build AI-powered products that connect advanced technology with practical operational needs.",
    aboutP1: "I design and build AI-powered products that bridge advanced technology with real operational needs.",
    aboutP2: "My work spans computer vision systems, LLM-powered assistants, safety response platforms, and fullstack applications. Through projects like MLenz, MIA, and Mzone, I focus on transforming visual data, internal knowledge, and operational events into actionable insight for field teams, especially in industrial and mining environments.",
    aboutP3: "For me, a good AI system is not only impressive in a demo. It must also be reliable, understandable, integrated with workflows, and able to support real work processes.",
    photoCaption: "Building practical AI systems for mining, safety, and operational intelligence.",
    projectsDescription: "Selected products focused on computer vision, LLM workflows, operational monitoring, and real-world industrial impact.",
    detailButton: "View Details",
    liveDemo: "Live Demo",
    recommendationsButton: "Show all recommendations",
    recommendationsLess: "Show fewer recommendations",
    contactDescription: "Reach out for AI products, operational tools, fullstack apps, automation, or deployment-focused collaboration.",
  },
  id: {
    navHome: "Beranda",
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Project",
    navExperience: "Pengalaman",
    navEducation: "Pendidikan",
    navTestimonials: "Testimoni",
    navContact: "Kontak",
    navCta: "Hubungi Saya",
    aboutDescription: "Saya membangun produk AI yang menghubungkan teknologi dengan kebutuhan operasional nyata.",
    aboutP1: "Saya merancang dan membangun produk berbasis AI yang menghubungkan teknologi dengan kebutuhan operasional nyata.",
    aboutP2: "Pekerjaan saya mencakup sistem computer vision, asisten berbasis LLM, platform keselamatan kerja, dan aplikasi fullstack. Melalui project seperti MLenz, MIA, dan Mzone, saya berfokus mengubah data visual, pengetahuan internal, dan kejadian operasional menjadi insight yang dapat digunakan oleh tim di lapangan, khususnya pada lingkungan industri dan pertambangan.",
    aboutP3: "Bagi saya, sistem AI yang baik bukan hanya terlihat canggih dalam demo, tetapi juga harus andal, mudah dipahami, terintegrasi dengan workflow, dan mampu membantu proses kerja nyata.",
    photoCaption: "Membangun sistem AI praktis untuk pertambangan, keselamatan, dan operational intelligence.",
    projectsDescription: "Produk pilihan yang berfokus pada computer vision, workflow LLM, monitoring operasional, dan dampak nyata di lingkungan industri.",
    detailButton: "Lihat Detail",
    liveDemo: "Live Demo",
    recommendationsButton: "Tampilkan semua rekomendasi",
    recommendationsLess: "Tampilkan lebih sedikit",
    contactDescription: "Hubungi saya untuk produk AI, tools operasional, aplikasi fullstack, automation, atau kolaborasi deployment.",
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "id" || savedLanguage === "en") {
      queueMicrotask(() => setLanguageState(savedLanguage));
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: keyof typeof translations.en) => translations[language][key],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
