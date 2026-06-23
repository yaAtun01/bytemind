"use client";

import { useState, useCallback } from "react";
import { UiLang, translations } from "../utils/translations";
import { explainCode, LineExplanation } from "../utils/explainCode";

interface CodeExplainerProps {
  uiLang: UiLang;
}

export default function CodeExplainer({ uiLang }: CodeExplainerProps) {
  const t = translations[uiLang].codeExplainer;

  const [code, setCode] = useState("");
  const [lines, setLines] = useState<LineExplanation[] | null>(null);
  const [error, setError] = useState("");

  const handleExplain = useCallback(() => {
    if (!code.trim()) {
      setError(t.emptyError);
      return;
    }
    setError("");
    setLines(explainCode(code, uiLang));
  }, [code, uiLang, t.emptyError]);

  const lineCount = Math.max(code.split("\n").length, 8);

  return (
    <section id="code-explainer" className="relative py-20 sm:py-28 mesh-gradient">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            {t.title}<span className="text-accent">{t.titleAccent}</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Input card */}
        <div className="glass-card p-5 sm:p-8 rounded-2xl max-w-4xl mx-auto">
          {/* Textarea with line-number gutter */}
          <div className="relative mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-bg-secondary/50 rounded-l-xl flex flex-col items-center pt-4 text-[11px] font-mono text-text-tertiary select-none pointer-events-none overflow-hidden">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i} className="leading-[1.7] h-[1.7em]">{i + 1}</span>
              ))}
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t.placeholder}
              spellCheck={false}
              rows={10}
              className="code-textarea w-full min-h-[220px] bg-bg-secondary border border-border-light rounded-xl pl-14 pr-4 py-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Explain button */}
          <button
            onClick={handleExplain}
            className="btn-glow w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            {t.explainBtn}
          </button>
        </div>

        {/* Split-view results */}
        {lines && (
          <div className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto mt-6 animate-fade-up">
            {/* Column headers */}
            <div className="grid grid-cols-[3rem_1fr_1fr] bg-bg-secondary/80 border-b border-border-light px-0 py-2.5 text-[11px] font-semibold text-text-tertiary uppercase tracking-wide select-none">
              <span className="text-center">#</span>
              <span className="pl-3 border-l border-border-light">{t.lineCol}</span>
              <span className="pl-4 border-l border-border-light">{t.explanationCol}</span>
            </div>

            {/* Rows — one per line */}
            <div className="divide-y divide-border-light/40">
              {lines.map(({ line, code: codeLine, explanation }) => (
                <div
                  key={line}
                  className="grid grid-cols-[3rem_1fr_1fr] group hover:bg-accent-soft/20 transition-colors"
                >
                  {/* Line number */}
                  <span className="flex items-start justify-center pt-3 pb-3 text-[11px] font-mono text-text-tertiary select-none shrink-0">
                    {line}
                  </span>

                  {/* Code cell */}
                  <div className="border-l border-border-light/50 px-3 py-3 overflow-x-auto">
                    <pre className="text-xs font-mono text-text-primary leading-relaxed whitespace-pre">
                      {codeLine || " "}
                    </pre>
                  </div>

                  {/* Explanation cell */}
                  <div className="border-l border-border-light/50 px-4 py-3">
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
