export type UiLang = "en" | "id";

export const translations = {
  en: {
    nav: {
      home: "Home",
      workspace: "Workspace",
      features: "Features",
    },
    hero: {
      badge: "AI-Powered Code Explainer",
      title: "Understand Code ",
      titleAccent: "Smarter",
      desc: "Paste any code snippet and let AI break it down into clear, beginner-friendly explanations — step by step.",
      tryBtn: "Try It Now",
      learnMore: "Learn More",
      free: "Free to use",
      secure: "Secure & Private",
      instant: "Instant Results",
      exampleTitle: "example.py",
    },
    workspace: {
      title: "Code ",
      titleAccent: "Workspace",
      desc: "Paste your code, choose a language, and get a clear explanation in seconds.",
      placeholder: "// Paste your code here...",
      explainBtn: "Explain Code",
      analyzing: "Analyzing...",
      emptyError: "Please paste some code first.",
      serverError: "Server error — please try again.",
      aiExplanation: "AI Explanation",
      poweredBy: "Powered by ByteMind AI",
      copy: "Copy",
      copied: "Copied!",
      supports: "Supports 6 languages",
      targetLangLabel: "Explanation Language",
    },
    features: {
      title: "Why ",
      titleAccent: "ByteMind",
      desc: "Built for learners who want to truly understand what their code does.",
      items: [
        { title: "Instant Analysis", desc: "Get clear, structured explanations in seconds — no waiting around." },
        { title: "Secure & Private", desc: "Your code is never stored or shared. Privacy is our top priority." },
        { title: "Multi-Language", desc: "Python, JavaScript, Java, C++, HTML/CSS, and SQL — all supported." },
        { title: "Step-by-Step", desc: "Each explanation is broken down into numbered, easy-to-follow steps." },
        { title: "Beginner-Friendly", desc: "Written in plain language. No jargon, no confusion — just clarity." },
        { title: "Copy & Share", desc: "One-click copy. Paste explanations into your notes or share with friends." }
      ]
    },
    codeExplainer: {
      title: "Line-by-Line ",
      titleAccent: "Explainer",
      desc: "Paste any code and see each line explained in plain language — great for reading unfamiliar code.",
      placeholder: "// Paste your code here to explain it line by line...",
      explainBtn: "Explain",
      emptyError: "Please paste some code first.",
      lineCol: "Code",
      explanationCol: "Explanation",
      lineLabel: "Line",
    },
    footer: {
      desc: "AI-powered code explainer that helps beginners understand programming concepts with clear, step-by-step explanations.",
      quote: "“Understand Code Smarter”",
      quickLinks: "Quick Links",
      resources: "Resources",
      rights: "All rights reserved.",
      techStack: "Built with Next.js • Express.js • Tailwind CSS"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      workspace: "Workspace",
      features: "Fitur",
    },
    hero: {
      badge: "Penjelas Kode Berbasis AI",
      title: "Pahami Kode Lebih ",
      titleAccent: "Cerdas",
      desc: "Tempel cuplikan kode apa pun dan biarkan AI menjelaskannya secara ringkas, jelas, dan ramah pemula — langkah demi langkah.",
      tryBtn: "Coba Sekarang",
      learnMore: "Pelajari Lebih Lanjut",
      free: "Gratis digunakan",
      secure: "Aman & Privat",
      instant: "Hasil Instan",
      exampleTitle: "contoh.py",
    },
    workspace: {
      title: "Work",
      titleAccent: "Space",
      desc: "Tempel kode Anda, pilih bahasa pemrograman, dan dapatkan penjelasan jelas dalam hitungan detik.",
      placeholder: "// Tempel kode Anda di sini...",
      explainBtn: "Jelaskan Kode",
      analyzing: "Menganalisis...",
      emptyError: "Silakan tempel kode Anda terlebih dahulu.",
      serverError: "Kesalahan server — silakan coba lagi.",
      aiExplanation: "Penjelasan AI",
      poweredBy: "Didukung oleh ByteMind AI",
      copy: "Salin",
      copied: "Tersalin!",
      supports: "Mendukung 6 bahasa",
      targetLangLabel: "Bahasa Penjelasan",
    },
    features: {
      title: "Mengapa ",
      titleAccent: "ByteMind",
      desc: "Dirancang khusus bagi pelajar yang ingin benar-benar memahami apa yang dilakukan kode mereka.",
      items: [
        { title: "Analisis Instan", desc: "Dapatkan penjelasan yang jelas dan terstruktur dalam hitungan detik — tanpa menunggu lama." },
        { title: "Aman & Privat", desc: "Kode Anda tidak pernah disimpan atau dibagikan. Privasi adalah prioritas utama kami." },
        { title: "Multi-Bahasa", desc: "Python, JavaScript, Java, C++, HTML/CSS, dan SQL — semuanya didukung." },
        { title: "Langkah demi Langkah", desc: "Setiap penjelasan dipecah menjadi langkah-langkah bernomor yang mudah diikuti." },
        { title: "Ramah Pemula", desc: "Ditulis dengan bahasa yang sederhana. Tanpa istilah rumit, tanpa kebingungan — hanya kejelasan." },
        { title: "Salin & Bagikan", desc: "Salin dengan satu klik. Tempel penjelasan ke catatan Anda atau bagikan dengan teman." }
      ]
    },
    codeExplainer: {
      title: "Penjelasan ",
      titleAccent: "Per Baris",
      desc: "Tempel kode apa pun dan lihat setiap barisnya dijelaskan dalam bahasa yang mudah dipahami — cocok untuk membaca kode baru.",
      placeholder: "// Tempel kode Anda di sini untuk dijelaskan baris per baris...",
      explainBtn: "Jelaskan",
      emptyError: "Silakan tempel kode Anda terlebih dahulu.",
      lineCol: "Kode",
      explanationCol: "Penjelasan",
      lineLabel: "Baris",
    },
    footer: {
      desc: "Penjelas kode berbasis AI yang membantu pemula memahami konsep pemrograman dengan penjelasan langkah demi langkah yang jelas.",
      quote: "“Pahami Kode Lebih Cerdas”",
      quickLinks: "Tautan Pintas",
      resources: "Sumber Daya",
      rights: "Hak cipta dilindungi undang-undang.",
      techStack: "Dibuat dengan Next.js • Express.js • Tailwind CSS"
    }
  }
};
