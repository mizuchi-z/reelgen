"use client";

import { useState } from "react";

const TABS = ["Script", "Prompts", "Légende", "Hashtags"] as const;
type Tab = (typeof TABS)[number];

const CONTENT: Record<Tab, { lines: string[] }> = {
  Script: {
    lines: [
      "Clip 1 · 3s — Gros plan sur une main serrant le volant avec intensité, moteur qui rugit.",
      "Clip 2 · 2s — Voiture haute performance accélère sur route côtière niçoise, mer bleue en arrière-plan.",
      "Clip 3 · 3s — Détail ultra-rapproché du moteur en fonctionnement, turbo qui s'illumine.",
    ],
  },
  Prompts: {
    lines: [
      "Extreme close-up macro shot of male hand gripping leather racing steering wheel with intense passion. Cinematic color grading, shallow depth of field, 9:16 vertical format. High energy, adrenaline-fueled mood.",
    ],
  },
  Légende: {
    lines: [
      "LA PASSION AUTOMOBILE N'A PAS BESOIN DE PAROLES.",
      "Chez Les Légendes de Nice, chaque accélération est un moment de liberté, chaque virage une danse mécanique.",
    ],
  },
  Hashtags: {
    lines: [
      "#leslégendesdenice #automobilepassion #performancecar #viralreels #côteazur #carlife #luxurycar #carporn #nicecity #frenchcars",
    ],
  },
};

export function PreviewTabs() {
  const [active, setActive] = useState<Tab>("Script");

  return (
    <div className="bg-[#0D1826] border border-[rgba(0,180,216,0.2)] rounded-[8px] overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-[rgba(0,180,216,0.12)]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex-1 font-mono text-xs py-3 px-2 tracking-widest uppercase transition-colors ${
              active === tab
                ? "text-[#00B4D8] border-b-2 border-[#00B4D8] bg-[rgba(0,180,216,0.06)]"
                : "text-[#5A7089] hover:text-[#E8EFF6]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 min-h-[140px]">
        {active === "Script" && (
          <ul className="flex flex-col gap-3">
            {CONTENT.Script.lines.map((line, i) => (
              <li key={i} className="flex gap-3 font-sans text-sm text-[#E8EFF6] leading-relaxed">
                <span className="text-[#00B4D8] font-mono shrink-0">{`0${i + 1}`}</span>
                {line}
              </li>
            ))}
          </ul>
        )}
        {active === "Prompts" && (
          <div className="bg-[#111F30] rounded-[4px] p-4">
            <p className="font-mono text-xs text-[#E8EFF6] leading-relaxed">
              {CONTENT.Prompts.lines[0]}
            </p>
          </div>
        )}
        {active === "Légende" && (
          <div className="flex flex-col gap-2">
            {CONTENT.Légende.lines.map((line, i) => (
              <p
                key={i}
                className={`font-sans text-sm leading-relaxed ${
                  i === 0
                    ? "font-bold text-[#E8EFF6]"
                    : "text-[#5A7089]"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        )}
        {active === "Hashtags" && (
          <p className="font-mono text-xs text-[#00B4D8] leading-relaxed">
            {CONTENT.Hashtags.lines[0]}
          </p>
        )}
      </div>
    </div>
  );
}
