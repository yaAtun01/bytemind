import { UiLang, translations } from "../utils/translations";

interface FooterProps {
  uiLang: UiLang;
}

export default function Footer({ uiLang }: FooterProps) {
  const year = new Date().getFullYear();
  const t = translations[uiLang].footer;

  const quickLinks = [
    { label: translations[uiLang].nav.home, href: "#hero" },
    { label: translations[uiLang].nav.workspace, href: "#workspace" },
    { label: translations[uiLang].nav.features, href: "#features" },
  ];

  const resources = [
    { label: "Documentation", href: "https://github.com/yaAtun01/bytemind/blob/main/README.md" },
    { label: "API Reference", href: "https://github.com/yaAtun01/bytemind/blob/main/server/server.js" },
    { label: "GitHub", href: "https://github.com/yaAtun01/bytemind" },
  ];

  return (
    <footer className="border-t border-border-light bg-bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" opacity="0.85" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-text-primary">
                Byte<span className="text-accent">Mind</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-4">
              {t.desc}
            </p>
            <p className="text-xs text-text-tertiary">
              {t.quote}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">{t.resources}</h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.label}>
                  
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            &copy; {year} ByteMind. {t.rights}
          </p>
          <p className="text-xs text-text-tertiary">
            {t.techStack}
          </p>
        </div>
      </div>
    </footer>
  );
}