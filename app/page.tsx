"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workspace from "./components/Workspace";
import CodeExplainer from "./components/CodeExplainer";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { UiLang } from "./utils/translations";

/**
 * ByteMind — Home page.
 * Assembles all sections into a cohesive single-page flow.
 */
export default function Home() {
  const [uiLang, setUiLang] = useState<UiLang>("id"); // Default to Indonesian since requested

  useEffect(() => {
    const stored = localStorage.getItem("bytemind-lang") as UiLang;
    if (stored === "en" || stored === "id") {
      setUiLang(stored);
    }
  }, []);

  const handleSetUiLang = (lang: UiLang) => {
    setUiLang(lang);
    localStorage.setItem("bytemind-lang", lang);
  };

  return (
    <>
      <Navbar uiLang={uiLang} setUiLang={handleSetUiLang} />
      <main className="flex-1">
        <Hero uiLang={uiLang} />
        <Workspace uiLang={uiLang} />
        <CodeExplainer uiLang={uiLang} />
        <Features uiLang={uiLang} />
      </main>
      <Footer uiLang={uiLang} />
    </>
  );
}
