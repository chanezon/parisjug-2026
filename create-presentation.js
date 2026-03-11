const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Patrick Chanezon";
pres.title = "The Transformation of the Developer Role with AI Agents";

// --- Color Palette: Deep tech midnight with teal accent ---
const C = {
  darkBg: "0F172A",
  midBg: "1E293B",
  cardBg: "F8FAFC",
  white: "FFFFFF",
  offWhite: "F1F5F9",
  accent: "0891B2",
  accentLight: "22D3EE",
  coral: "F97316",
  textDark: "1E293B",
  textMid: "475569",
  textLight: "E2E8F0",
  sectionBg: "0C4A6E",
  quoteBg: "FFF7ED",
  quoteAccent: "EA580C",
};

const imgDir = path.resolve(__dirname, "images");
const img = (name) => path.join(imgDir, name);

// Helper: section divider slide
function addSectionSlide(title, subtitle) {
  const s = pres.addSlide();
  s.background = { color: C.sectionBg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.0, w: 0.08, h: 1.6, fill: { color: C.accentLight } });
  s.addText(title, {
    x: 1.1, y: 2.0, w: 8, h: 1.0,
    fontSize: 36, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  if (subtitle) {
    s.addText(subtitle, {
      x: 1.1, y: 3.1, w: 8, h: 0.6,
      fontSize: 16, fontFace: "Calibri", color: C.textLight, italic: true, margin: 0,
    });
  }
}

// ============================================================
// SLIDE 1: TITLE
// ============================================================
{
  const s = pres.addSlide();
  s.addImage({ path: img("jug-paris-cover.png"), x: 0, y: 0, w: 10, h: 5.625, sizing: { type: "cover", w: 10, h: 5.625 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.2, w: 10, h: 2.425, fill: { color: "000000", transparency: 45 } });
  s.addText("The Transformation of the Developer Role\nwith AI Agents", {
    x: 0.5, y: 3.3, w: 9, h: 1.2,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, align: "left", margin: 0,
  });
  s.addText("Patrick Chanezon, VP Developer Relations, Microsoft\nDr Alexis Lecluze, Médecin généraliste", {
    x: 0.5, y: 4.6, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Calibri", color: C.textLight, align: "left", margin: 0,
  });
  s.addText("Paris JUG — March 10, 2026", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.accentLight, align: "left", margin: 0,
  });
}

// ============================================================
// SLIDE 2: SPEAKER — Patrick Chanezon
// ============================================================
{
  const s = pres.addSlide();
  s.addImage({ path: img("chanezon-1-slider.png"), x: 0, y: 0, w: 10, h: 5.625, sizing: { type: "cover", w: 10, h: 5.625 } });
}

// ============================================================
// SLIDE 3: AGENDA
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addText("Agenda", {
    x: 0.7, y: 0.4, w: 8, h: 0.7,
    fontSize: 36, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.15, w: 2.0, h: 0.04, fill: { color: C.accent } });

  const items = [
    { num: "01", title: "A Doctor Using AI to Code", desc: "Non-developer AI adoption in medicine" },
    { num: "02", title: "Developers Become Managers of AI Agents", desc: "The transformation of the developer role" },
    { num: "03", title: "Impact on Early Career Developers", desc: "Canaries in the coal mine & preceptorship" },
    { num: "04", title: "AI Fatigue", desc: "The hidden cost of AI-assisted productivity" },
  ];

  items.forEach((item, i) => {
    const yBase = 1.6 + i * 0.95;
    s.addText(item.num, {
      x: 0.7, y: yBase, w: 0.6, h: 0.45,
      fontSize: 22, fontFace: "Calibri", color: C.accent, bold: true, margin: 0,
    });
    s.addText(item.title, {
      x: 1.4, y: yBase, w: 7.5, h: 0.4,
      fontSize: 18, fontFace: "Calibri", color: C.white, bold: true, margin: 0,
    });
    s.addText(item.desc, {
      x: 1.4, y: yBase + 0.38, w: 7.5, h: 0.35,
      fontSize: 13, fontFace: "Calibri", color: C.textMid, margin: 0,
    });
  });
}

// ============================================================
// SLIDE 4: "Teaching an old dog new tricks"
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addText("Teaching an old dog new tricks", {
    x: 0.7, y: 0.4, w: 5, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  // linkedin-dog.jpg is 800x824 (ratio 0.97, nearly square) — size to fit height, center horizontally
  const dogH = 3.8; const dogW = dogH * 0.97; const dogX = (10 - dogW) / 2;
  s.addImage({ path: img("linkedin-dog.jpg"), x: dogX, y: 1.4, w: dogW, h: dogH });
}

// ============================================================
// SECTION: A Doctor Using AI
// ============================================================
addSectionSlide("A Doctor Using AI to Code", "Non-developers adopting AI agents in their practice");

// ============================================================
// SLIDE 5: Dr. Alexis Lecluze — Bio
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("Dr Alexis Lecluze", {
    x: 0.7, y: 0.4, w: 8, h: 0.6,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Médecin généraliste — Rennes, France", {
    x: 0.7, y: 1.0, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: C.textMid, margin: 0,
  });

  const bioItems = [
    "Practicing physician who codes his own tools with AI",
    "Active collaborator at Doctolib on AI agent projects",
    "16h/month contract integrating AI into healthcare workflows",
    "Uses RAG for real-time bibliographic research during consultations",
    "Built custom widgets and applications using \"vibe coding\"",
  ];

  s.addText(
    bioItems.map((item, i) => ({
      text: item,
      options: { bullet: true, breakLine: i < bioItems.length - 1, fontSize: 15, color: C.textLight },
    })),
    { x: 0.7, y: 1.7, w: 8.5, h: 2.5, fontFace: "Calibri", paraSpaceAfter: 8 }
  );

  s.addText([
    { text: "Cabinet: ", options: { bold: true, color: C.textLight } },
    { text: "doctolib.fr/medecin-generaliste/rennes/alexis-lecluze-rennes", options: { color: C.accent, hyperlink: { url: "https://www.doctolib.fr/medecin-generaliste/rennes/alexis-lecluze-rennes" } } },
  ], { x: 0.7, y: 4.5, w: 8.5, h: 0.4, fontSize: 12, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 6: Doctor Using AI to Code — Examples
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("A Doctor Using AI to Code", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  // Left column: cards
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.8, h: 1.0, fill: { color: C.midBg } });
  s.addText([
    { text: "Vibe Code Widget", options: { bold: true, fontSize: 16, breakLine: true, color: C.accentLight } },
    { text: "Custom widget for OVH subscription tracking — coded entirely with AI assistance", options: { fontSize: 13, color: C.textLight } },
  ], { x: 0.7, y: 1.3, w: 4.4, h: 0.8, fontFace: "Calibri", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.4, w: 4.8, h: 1.0, fill: { color: C.midBg } });
  s.addText([
    { text: "RAG During Consultations", options: { bold: true, fontSize: 16, breakLine: true, color: C.accentLight } },
    { text: "Real-time bibliographic research while seeing patients, powered by medicalement-geek.com", options: { fontSize: 13, color: C.textLight } },
  ], { x: 0.7, y: 2.5, w: 4.4, h: 0.8, fontFace: "Calibri", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.6, w: 4.8, h: 1.0, fill: { color: C.midBg } });
  s.addText([
    { text: "Doctolib AI Agent Projects", options: { bold: true, fontSize: 16, breakLine: true, color: C.accentLight } },
    { text: "Embedded in multiple Doctolib projects building AI agents for healthcare", options: { fontSize: 13, color: C.textLight } },
  ], { x: 0.7, y: 3.7, w: 4.4, h: 0.8, fontFace: "Calibri", margin: 0 });

  // alexis-vibe-code.png is 1120x1516 (ratio 0.74, portrait) — fit to height, right side
  const alexisH = 3.5; const alexisW = alexisH * 0.739; const alexisX = 5.6 + (4.0 - alexisW) / 2;
  s.addImage({ path: img("alexis-vibe-code.png"), x: alexisX, y: 1.2, w: alexisW, h: alexisH });

  s.addText([
    { text: "medicalement-geek.com", options: { color: C.accent, hyperlink: { url: "https://www.medicalement-geek.com" } } },
  ], { x: 0.7, y: 4.9, w: 4, h: 0.3, fontSize: 11, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 7: AI Scribes & Psychiatry Paper
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("AI Scribes & Psychiatric Documentation", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.1, w: 8.6, h: 2.2, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.1, w: 0.06, h: 2.2, fill: { color: C.coral } });

  s.addText([
    { text: "Key Findings from the Study (~20,000 outpatient visits):", options: { bold: true, fontSize: 15, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "AI scribes increased documentation of neuropsychiatric symptoms", options: { bullet: true, fontSize: 14, breakLine: true, color: C.textLight } },
    { text: "But were associated with lower likelihood of depression-related interventions", options: { bullet: true, fontSize: 14, breakLine: true, color: C.textLight } },
    { text: "Mixed evidence on clinician workload reduction", options: { bullet: true, fontSize: 14, breakLine: true, color: C.textLight } },
    { text: "Potential unintended side effects of automated documentation", options: { bullet: true, fontSize: 14, color: C.textLight } },
  ], { x: 1.0, y: 1.2, w: 8.0, h: 2.0, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });

  s.addText([
    { text: "Castro VM, McCoy TH, Verhaak P, et al. ", options: { italic: true, fontSize: 11, color: C.textMid } },
    { text: "\"Psychiatric Documentation and Management in Primary Care With Artificial Intelligence Scribe Use\"", options: { fontSize: 11, color: C.textLight } },
  ], { x: 0.7, y: 3.6, w: 8.6, h: 0.5, fontFace: "Calibri", margin: 0 });

  s.addText("Matched retrospective case-control design • Mass General & Brigham and Women's Hospital • Feb 2023–Feb 2025", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });
}

// ============================================================
// SECTION: Developers Become Managers
// ============================================================
addSectionSlide("Developers Become\nManagers of AI Agents", "From individual contributor to agent boss");

// ============================================================
// SLIDE: Karpathy Tweet (moved here — sets the stage)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("With AI Coding Agents getting better,\nthe role of Developer is changing now", {
    x: 0.7, y: 0.25, w: 8.5, h: 0.9,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 5.3, h: 3.5, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 0.06, h: 3.5, fill: { color: C.coral } });

  s.addText([
    { text: "TL;DR", options: { bold: true, fontSize: 16, breakLine: true, color: C.coral } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "\"LLM agent capabilities (Claude & Codex especially) have crossed some kind of threshold of coherence around December 2025 and caused a phase shift in software engineering.\n\nThe intelligence part suddenly feels quite a bit ahead of all the rest of it — integrations, the necessity for new organizational workflows, processes, diffusion more generally.\n\n2026 is going to be a high energy year as the industry metabolizes the new capability.\"", options: { italic: true, fontSize: 12, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "— Andrej Karpathy, Jan 26, 2026", options: { fontSize: 11, bold: true, color: C.textMid } },
  ], { x: 1.0, y: 1.4, w: 4.7, h: 3.3, fontFace: "Calibri", margin: 0, valign: "top" });

  const karpH = 3.0; const karpW = karpH * 1.118;
  s.addImage({ path: img("karpathy-x.png"), x: 6.2, y: 1.5, w: karpW, h: karpH });

  s.addText([
    { text: "x.com/karpathy/status/2015883857489522876", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://x.com/karpathy/status/2015883857489522876" } } },
  ], { x: 0.7, y: 5.0, w: 5, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE: AI Agent's rate of progress is accelerating (moved here)
// ============================================================
{
  const s = pres.addSlide();
  // star-wars-acceleration.jpg (1920x1080, 16:9) — full bleed background
  s.background = { path: img("star-wars-acceleration.jpg") };
  s.addText("AI Agent's rate of progress is accelerating", {
    x: 0.3, y: 0.15, w: 9.4, h: 0.5,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
}

// ============================================================
// SLIDE 8: AI Coding Agents — Adoption & Role Shift
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("AI Coding Agents Are Changing\nthe Developer Role", {
    x: 0.7, y: 0.3, w: 8.5, h: 0.9,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.25, w: 2.0, h: 0.04, fill: { color: C.accent } });

  // Left: Adoption stats
  s.addText([
    { text: "AI Coding Agent Adoption", options: { bold: true, fontSize: 16, breakLine: true, color: C.accentLight } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "64.8% of developers use AI coding agents weekly (StackOverflow 2025)", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "90% adoption rate (DORA & DX reports)", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "Agent mode in IDE, CLI agents, async cloud agents", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "GitHub Copilot, Cursor, Claude Code, Codex, Kiro...", options: { bullet: true, fontSize: 13, color: C.textLight } },
  ], { x: 0.7, y: 1.6, w: 4.3, h: 2.2, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });

  // Right: Role shift
  s.addText([
    { text: "The Role Shift", options: { bold: true, fontSize: 16, breakLine: true, color: C.accentLight } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "From IC producing all code → Manager of AI Agents", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "Collaborating in teams of humans AND agents", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "Every developer becomes an \"agent boss\"", options: { bullet: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "Expansion of \"developer\": PMs, designers, doctors now contribute code", options: { bullet: true, fontSize: 13, color: C.textLight } },
  ], { x: 5.3, y: 1.6, w: 4.3, h: 2.2, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });

  // Source link
  s.addText([
    { text: "blog.chanezon.com — DevRel Evolution with AI Agents", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://blog.chanezon.com/2025/11/07/devrel-evolution-with-ai-agents.html" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 8b: The Frontier Firm — 3 Phases
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("The Frontier Firm", {
    x: 0.7, y: 0.3, w: 8.5, h: 0.6,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  // frontier-firm-phases.png (500x185, ratio 2.70) — large, centered
  const ffW = 8.6; const ffH = ffW / 2.703;
  s.addImage({ path: img("frontier-firm-phases.png"), x: (10 - ffW) / 2, y: 1.4, w: ffW, h: ffH });

  s.addText([
    { text: "microsoft.com/worklab/work-trend-index/2025", options: { fontSize: 11, color: C.accent, hyperlink: { url: "https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born" } } },
  ], { x: 0.7, y: 5.0, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 8c: What Got You Here Won't Get You There
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("What Got You Here\nWon't Get You There", {
    x: 0.7, y: 0.3, w: 5.5, h: 0.9,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Marshall Goldsmith — and the parallel to managing AI agents", {
    x: 0.7, y: 1.15, w: 5.5, h: 0.3,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  // Quote box
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 5.5, h: 2.8, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 0.06, h: 2.8, fill: { color: C.coral } });
  s.addText([
    { text: "The book's thesis:", options: { bold: true, fontSize: 14, breakLine: true, color: C.coral } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Great technical skills helped you become a leader, but thriving as a manager requires a completely different skillset.", options: { fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "The parallel for developers:", options: { bold: true, fontSize: 14, breakLine: true, color: C.coral } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Coding skills made you a great developer, but managing AI agents requires new skills: delegating, evaluating quality at scale, creating context, and defining success criteria instead of writing every line yourself.", options: { fontSize: 13, color: C.textLight } },
  ], { x: 1.0, y: 1.8, w: 4.9, h: 2.6, fontFace: "Calibri", margin: 0, valign: "top" });

  // Book cover on the right — what-got-you-here.jpg (300x470, ratio 0.638)
  const wgyhH = 3.5; const wgyhW = wgyhH * 0.638;
  s.addImage({ path: img("what-got-you-here.jpg"), x: 6.8, y: 1.2, w: wgyhW, h: wgyhH });

  // Cybernetic Teammate reference
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 4.7, w: 8.6, h: 0.55, fill: { color: C.midBg } });
  s.addText([
    { text: "Dell'Acqua et al.: ", options: { bold: true, fontSize: 11, color: C.textLight } },
    { text: "\"The Cybernetic Teammate\" shows AI can elevate individual performance to levels comparable to traditional teams — AI adoption requires rethinking team structures.", options: { fontSize: 11, color: C.textMid } },
  ], { x: 0.9, y: 4.75, w: 8.2, h: 0.45, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 8d: Software G Forces — Kent Beck
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("Software G Forces", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Kent Beck, Usenix 2011 — \"The Effects of Acceleration\"", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 8.6, h: 1.5, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 0.06, h: 1.5, fill: { color: C.accent } });
  s.addText([
    { text: "\"What constitutes effective software engineering changes radically as deployment cycles shrink.\"", options: { italic: true, fontSize: 16, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Practices need to evolve from quarterly → monthly → weekly → daily → hourly cycles.", options: { fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "We are at a similar inflexion point today with AI Coding Agents.", options: { fontSize: 13, bold: true, color: C.accentLight } },
  ], { x: 1.0, y: 1.5, w: 8.0, h: 1.3, fontFace: "Calibri", margin: 0 });

  // Timeline of acceleration
  const cycles = ["Quarterly", "Monthly", "Weekly", "Daily", "Hourly", "AI Agents"];
  const colors = ["334155", "334155", "334155", "334155", "334155", C.accent];
  cycles.forEach((label, i) => {
    const xBase = 0.5 + i * 1.55;
    s.addShape(pres.shapes.RECTANGLE, { x: xBase, y: 3.3, w: 1.4, h: 0.7, fill: { color: colors[i] } });
    s.addText(label, {
      x: xBase, y: 3.3, w: 1.4, h: 0.7,
      fontSize: i === 5 ? 12 : 11, fontFace: "Calibri", color: C.white, bold: i === 5, align: "center", valign: "middle", margin: 0,
    });
    if (i < 5) {
      s.addText("→", { x: xBase + 1.35, y: 3.3, w: 0.25, h: 0.7, fontSize: 16, color: C.textMid, align: "center", valign: "middle", margin: 0 });
    }
  });

  // Bottom insight
  s.addText([
    { text: "The required changes extend across the whole software development lifecycle:\ncontext engineering, specification-driven development, agent composition, quality, deployment, cost management, operations.", options: { fontSize: 12, color: C.textLight } },
  ], { x: 0.7, y: 4.3, w: 8.6, h: 0.7, fontFace: "Calibri", margin: 0 });

  s.addText([
    { text: "usenix.org/conference/usenixatc11/software-g-forces", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://www.usenix.org/conference/usenixatc11/software-g-forces-effects-acceleration" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 9: New Skills for Agent Bosses (grid)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("New Skills for Agent Bosses", {
    x: 0.7, y: 0.3, w: 8.5, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 2.0, h: 0.04, fill: { color: C.accent } });

  const skills = [
    { title: "Context Engineering", desc: "AGENTS.md open format, Eleanor Berger's ruler — creating shared context for AI agent teams" },
    { title: "Specification-Driven Dev", desc: "Sean Grove: \"specs write once, run everywhere\". Den Delimarsky: GitHub Spec Kit" },
    { title: "Agent Team Composition", desc: "Nicholas Zakas: persona-based approach — PM, architect, implementer, reviewer agents" },
    { title: "Quality & Review", desc: "Pamela Fox on AI tests for Python. At scale: do you still read all generated code?" },
    { title: "Cost Management", desc: "Assessing how many agents, for what tasks, and making resource trade-offs" },
    { title: "Deployment & Ops", desc: "AI agents as cloud architecture experts; SRE Agents for operations and incident response" },
  ];

  skills.forEach((sk, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const xBase = 0.7 + col * 4.6;
    const yBase = 1.3 + row * 1.3;

    s.addShape(pres.shapes.RECTANGLE, { x: xBase, y: yBase, w: 4.2, h: 1.1, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: xBase, y: yBase, w: 0.06, h: 1.1, fill: { color: C.accent } });
    s.addText(sk.title, {
      x: xBase + 0.2, y: yBase + 0.1, w: 3.8, h: 0.35,
      fontSize: 14, fontFace: "Calibri", color: C.accentLight, bold: true, margin: 0,
    });
    s.addText(sk.desc, {
      x: xBase + 0.2, y: yBase + 0.5, w: 3.8, h: 0.5,
      fontSize: 11, fontFace: "Calibri", color: C.textLight, margin: 0,
    });
  });
}

// ============================================================
// SLIDE 9b: Specification-Driven Development — Deep Dive
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("Specification-Driven Development", {
    x: 0.7, y: 0.3, w: 8.5, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Raising the level of abstraction for AI agent communication", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 8.6, h: 1.3, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 0.06, h: 1.3, fill: { color: C.accent } });
  s.addText([
    { text: "Focus human work at the spec level, let agents create the code.", options: { italic: true, fontSize: 16, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Rather than writing code directly, developers write specifications, acceptance criteria, and architectural constraints — then AI agents generate, test, and iterate on implementations.", options: { fontSize: 13, color: C.textLight } },
  ], { x: 1.0, y: 1.5, w: 8.0, h: 1.1, fontFace: "Calibri", margin: 0 });

  const resources = [
    { who: "Sean Grove (OpenAI)", what: "\"The New Code: Specs Write Once, Run Everywhere\"" },
    { who: "Den Delimarsky (Microsoft)", what: "GitHub Spec Kit — structured specifications for agent workflows" },
    { who: "Patrick Debois (Devoxx)", what: "8 talks at Devoxx on SDD approaches, best overall perspective" },
  ];

  resources.forEach((r, i) => {
    const yBase = 3.0 + i * 0.7;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 8.6, h: 0.55, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 0.55, fill: { color: C.accentLight } });
    s.addText(r.who, {
      x: 1.0, y: yBase + 0.05, w: 2.5, h: 0.4,
      fontSize: 12, fontFace: "Calibri", color: C.accentLight, bold: true, margin: 0,
    });
    s.addText(r.what, {
      x: 3.5, y: yBase + 0.05, w: 5.5, h: 0.4,
      fontSize: 12, fontFace: "Calibri", color: C.textLight, margin: 0,
    });
  });
}

// ============================================================
// SLIDE 12: Knuth Quote
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.5, w: 5.5, h: 4.2, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.5, w: 0.06, h: 4.2, fill: { color: C.coral } });

  s.addText([
    { text: "\"Let us change our traditional attitude to the construction of programs:", options: { italic: true, fontSize: 17, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "Instead of imagining that our main task is to instruct a computer what to do,", options: { italic: true, fontSize: 17, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "let us concentrate rather on explaining to human beings what we want a computer to do.\"", options: { italic: true, fontSize: 17, bold: true, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 12 } },
    { text: "— Donald Knuth, Literate Programming (1984)", options: { fontSize: 13, bold: true, color: C.coral } },
  ], { x: 0.9, y: 0.7, w: 4.8, h: 3.8, fontFace: "Georgia", margin: 0, valign: "middle" });

  // knuth-book-cover.jpg (258x386, ratio 0.668) — preserve aspect ratio
  const knuthH = 4.0; const knuthW = knuthH * 0.668;
  s.addImage({ path: img("knuth-book-cover.jpg"), x: 6.8, y: 0.7, w: knuthW, h: knuthH });
}

// ============================================================
// SECTION: Impact on Early Career Developers
// ============================================================
addSectionSlide("Impact on Early Career\nDevelopers", "Canaries in the coal mine & the preceptorship model");

// ============================================================
// SLIDE 13: Canaries in the Coal Mine
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("Canaries in the Coal Mine?", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Brynjolfsson, Chandar & Chen — Stanford Digital Economy Lab", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  // Left column: two stat cards stacked
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 3.8, h: 1.5, fill: { color: C.midBg } });
  s.addText("13%", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.8,
    fontSize: 48, fontFace: "Georgia", color: C.coral, bold: true, align: "center", margin: 0,
  });
  s.addText("relative decline in employment\nfor early-career workers (ages 22-25)\nin most AI-exposed occupations", {
    x: 0.7, y: 2.1, w: 3.8, h: 0.7,
    fontSize: 10, fontFace: "Calibri", color: C.textLight, align: "center", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 3.1, w: 3.8, h: 1.3, fill: { color: C.midBg } });
  s.addText("20%", {
    x: 0.7, y: 3.1, w: 3.8, h: 0.8,
    fontSize: 48, fontFace: "Georgia", color: C.coral, bold: true, align: "center", margin: 0,
  });
  s.addText("decline from peak employment\nfor software developers specifically", {
    x: 0.7, y: 3.8, w: 3.8, h: 0.5,
    fontSize: 10, fontFace: "Calibri", color: C.textLight, align: "center", margin: 0,
  });

  // Right column: chart image — canaries-chart.png (607x352, ratio 1.724)
  const canW = 4.8; const canH = canW / 1.724;
  s.addImage({ path: img("canaries-chart.png"), x: 4.8, y: 1.5, w: canW, h: canH });

  s.addText([
    { text: "AI adoption disproportionately affects junior relative to senior workers — ", options: { fontSize: 10, color: C.textLight } },
    { text: "\"Generative AI as Seniority-Biased Technological Change\" (Lichtinger & Hosseini)", options: { fontSize: 10, color: C.textMid, italic: true } },
  ], { x: 0.7, y: 4.6, w: 8.6, h: 0.35, fontFace: "Calibri", margin: 0 });

  s.addText([
    { text: "Source: ", options: { fontSize: 10, color: C.textMid } },
    { text: "digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/" } } },
  ], { x: 0.7, y: 5.0, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 14: Preceptorship Program
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("Redefining the Software Engineering\nProfession for AI", {
    x: 0.7, y: 0.3, w: 8, h: 0.8,
    fontSize: 26, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Mark Russinovich & Scott Hanselman — Communications of the ACM, 2026", {
    x: 0.7, y: 1.05, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  const cards = [
    { title: "The Problem: AI Drag", desc: "Senior engineers get a productivity \"boost\" from AI. Early-in-career developers face \"AI drag\" — lacking judgment to verify and learn from AI outputs." },
    { title: "The Pipeline Threat", desc: "Economic incentive to hire more seniors and bypass junior roles risks \"hollowing out\" the talent pipeline for the next generation." },
    { title: "The Preceptorship Model", desc: "Senior engineers formally mentor small cohorts of EiC developers, with AI tools integrated as teaching workflow. AI provides \"Socratic coaching\" to surface reasoning." },
  ];

  cards.forEach((c, i) => {
    const yBase = 1.7 + i * 1.2;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 8.6, h: 1.0, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 1.0, fill: { color: C.accent } });
    s.addText(c.title, {
      x: 1.0, y: yBase + 0.08, w: 8.0, h: 0.3,
      fontSize: 15, fontFace: "Calibri", color: C.accent, bold: true, margin: 0,
    });
    s.addText(c.desc, {
      x: 1.0, y: yBase + 0.4, w: 8.0, h: 0.5,
      fontSize: 12, fontFace: "Calibri", color: C.textLight, margin: 0,
    });
  });

  s.addText([
    { text: "DOI: ", options: { fontSize: 10, color: C.textMid } },
    { text: "dl.acm.org/doi/abs/10.1145/3779312", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://dl.acm.org/doi/abs/10.1145/3779312" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SECTION: AI Fatigue
// ============================================================
addSectionSlide("AI Fatigue", "The hidden cost of AI-assisted productivity");

// ============================================================
// SLIDE 15: HBR — AI Doesn't Reduce Work
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("AI Doesn't Reduce Work\n— It Intensifies It", {
    x: 0.7, y: 0.3, w: 8, h: 0.9,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Aruna Ranganathan & Xingqi Maggie Ye — Harvard Business Review, Feb 2026", {
    x: 0.7, y: 1.15, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 5.5, h: 2.6, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 0.06, h: 2.6, fill: { color: C.coral } });

  s.addText([
    { text: "Study of 200 employees at a US tech company (April–December 2025):", options: { bold: true, fontSize: 14, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "\"AI introduced a new rhythm in which workers managed several active threads at once: manually writing code while AI generated an alternative version, running multiple agents in parallel, or reviving long-deferred tasks.\"", options: { italic: true, fontSize: 13, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "\"While this sense of having a 'partner' enabled a feeling of momentum, the reality was a continual switching of attention, frequent checking of AI outputs, and a growing number of open tasks.\"", options: { italic: true, fontSize: 13, color: C.textLight } },
  ], { x: 1.0, y: 1.8, w: 4.9, h: 2.4, fontFace: "Calibri", margin: 0, valign: "top" });

  // hbr-intensifies.jpg (1200x675, ratio 1.78) — right side
  const hbrIW = 3.2; const hbrIH = hbrIW / 1.778;
  s.addImage({ path: img("hbr-intensifies.jpg"), x: 6.4, y: 1.8, w: hbrIW, h: hbrIH });

  s.addText([
    { text: "hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it" } } },
  ], { x: 0.7, y: 5.0, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 16: Steve Yegge — The AI Vampire
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("The AI Vampire", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Steve Yegge — Medium, 2026", {
    x: 0.7, y: 0.85, w: 8, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  const points = [
    { title: "The Energy Vampire Metaphor", desc: "Even as productivity soars, developers feel persistently drained — like an energy vampire sucking your cognitive vitality" },
    { title: "Productivity Paradox", desc: "\"Why is everyone so tired even though we're getting so much done?\" — AI tools deliver massive output but amplify exhaustion" },
    { title: "Value Capture Misalignment", desc: "Who benefits from 10x productivity? Corporations capture economic value while individual workers have less autonomy, more expectations" },
    { title: "Reclaiming Humanity", desc: "The antidote: intentional disengagement. Close the laptop. Go for a walk. Foster activities that aren't easily automated." },
  ];

  points.forEach((p, i) => {
    const yBase = 1.4 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 8.6, h: 0.85, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 0.85, fill: { color: C.coral } });
    s.addText(p.title, {
      x: 1.0, y: yBase + 0.05, w: 8.0, h: 0.28,
      fontSize: 14, fontFace: "Calibri", color: C.coral, bold: true, margin: 0,
    });
    s.addText(p.desc, {
      x: 1.0, y: yBase + 0.35, w: 8.0, h: 0.45,
      fontSize: 11, fontFace: "Calibri", color: C.textLight, margin: 0,
    });
  });

  s.addText([
    { text: "steve-yegge.medium.com/the-ai-vampire-eda6e4f07163", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 17: Simon Willison Commentary
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("The Productivity Boost is Exhausting", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Simon Willison, Feb 2026", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 8.6, h: 3.0, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.4, w: 0.06, h: 3.0, fill: { color: C.accent } });

  s.addText([
    { text: "\"I'm frequently finding myself with work on two or three projects running parallel. I can get SO MUCH DONE, but after just an hour or two my mental energy for the day feels almost entirely depleted.\"", options: { italic: true, fontSize: 15, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 10 } },
    { text: "\"I've had conversations with people recently who are losing sleep because they're finding building yet another feature with 'just one more prompt' irresistible.\"", options: { italic: true, fontSize: 15, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 10 } },
    { text: "\"I think we've just disrupted decades of existing intuition about sustainable working practices.\"", options: { italic: true, fontSize: 15, bold: true, color: C.white } },
  ], { x: 1.0, y: 1.5, w: 8.0, h: 2.8, fontFace: "Georgia", margin: 0, valign: "top" });

  s.addText([
    { text: "simonwillison.net/2026/Feb/9/ai-intensifies-work/", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://simonwillison.net/2026/Feb/9/ai-intensifies-work/" } } },
  ], { x: 0.7, y: 5.0, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 18: AI Brain Fry — Diagnosis
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("When Using AI Leads to Brain Fry", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("The Diagnosis", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 16, fontFace: "Calibri", color: C.coral, bold: true, margin: 0,
  });
  s.addText("Bedard, Kropp, Hsu, Karaman, Hawes & Kellerman — HBR, March 2026", {
    x: 0.7, y: 1.1, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 5.5, h: 2.5, fill: { color: C.midBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.7, w: 0.06, h: 2.5, fill: { color: C.coral } });

  s.addText([
    { text: "Which functions report AI Brain Fry?", options: { bold: true, fontSize: 16, breakLine: true, color: C.white } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "\"Among workers who did not report AI brain fry, 25% showed active intent to leave.", options: { italic: true, fontSize: 14, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Among those who did report AI brain fry, that rose to 34%.", options: { italic: true, fontSize: 14, breakLine: true, color: C.textLight } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "This represents a 39% increase in active worker intent to leave among top users of AI.\"", options: { italic: true, fontSize: 14, bold: true, color: C.coral } },
  ], { x: 1.0, y: 1.8, w: 5.0, h: 2.3, fontFace: "Calibri", margin: 0, valign: "top" });

  // hbr-brain-fry.jpg (1920x1080, ratio 1.78) — right side
  const bfW = 3.4; const bfH = bfW / 1.778;
  s.addImage({ path: img("hbr-brain-fry.jpg"), x: 6.4, y: 1.8, w: bfW, h: bfH });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 4.4, w: 8.6, h: 0.7, fill: { color: C.midBg } });
  s.addText([
    { text: "Gas Town reference: ", options: { bold: true, fontSize: 12, color: C.textLight } },
    { text: "\"There's really too much going on for you to reasonably comprehend. I had a palpable sense of stress watching it. Gas Town was moving too fast for me.\"", options: { italic: true, fontSize: 12, color: C.textMid } },
  ], { x: 0.9, y: 4.45, w: 8.2, h: 0.6, fontFace: "Calibri", margin: 0 });

  s.addText([
    { text: "hbr.org/2026/03/when-using-ai-leads-to-brain-fry", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry" } } },
  ], { x: 0.7, y: 5.2, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 19: AI Brain Fry — Lessons for Leaders
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("When Using AI Leads to Brain Fry", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Lessons for Leaders", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 16, fontFace: "Calibri", color: C.coral, bold: true, margin: 0,
  });

  const lessons = [
    { title: "Build an AI Practice", desc: "Structure how AI is used to help avoid burnout — don't leave it to individual improvisation" },
    { title: "Distinguish Productivity from Intensity", desc: "Help organizations tell genuine productivity gains apart from unsustainable intensity" },
    { title: "Monitor Cognitive Load", desc: "AI removes natural speed limits that used to protect workers — the only limit left is cognitive endurance" },
    { title: "Retain Top AI Users", desc: "39% increase in intent to leave among those experiencing AI brain fry — retention is at stake" },
  ];

  lessons.forEach((l, i) => {
    const yBase = 1.4 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 8.6, h: 0.85, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 0.85, fill: { color: C.coral } });
    s.addText(l.title, {
      x: 1.0, y: yBase + 0.05, w: 8.0, h: 0.28,
      fontSize: 15, fontFace: "Calibri", color: C.coral, bold: true, margin: 0,
    });
    s.addText(l.desc, {
      x: 1.0, y: yBase + 0.38, w: 8.0, h: 0.4,
      fontSize: 12, fontFace: "Calibri", color: C.textLight, margin: 0,
    });
  });

  s.addText([
    { text: "hbr.org/2026/03/when-using-ai-leads-to-brain-fry", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 20: AI Fatigue — Diagnosis (Siddhant)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("AI Fatigue Is Real — The Diagnosis", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Siddhant Khare — siddhantkhare.com, 2026", {
    x: 0.7, y: 0.85, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.textMid, italic: true, margin: 0,
  });

  const diagnoses = [
    { title: "Jevons Paradox", quote: "\"When each task takes less time, you don't do fewer tasks. You do more tasks.\"" },
    { title: "Hidden Cost Shift", quote: "\"AI reduces the cost of production but increases the cost of coordination, review, and decision-making. And those costs fall entirely on the human.\"" },
    { title: "From Creator to Reviewer", quote: "\"I became a reviewer. A judge. A quality inspector on an assembly line that never stops.\"" },
    { title: "Nondeterminism Stress", quote: "\"You are collaborating with a probabilistic system, and your brain is wired for deterministic ones.\"" },
  ];

  diagnoses.forEach((d, i) => {
    const yBase = 1.3 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 5.8, h: 0.9, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 0.9, fill: { color: C.coral } });
    s.addText(d.title, {
      x: 1.0, y: yBase + 0.05, w: 3.0, h: 0.3,
      fontSize: 14, fontFace: "Calibri", color: C.coral, bold: true, margin: 0,
    });
    s.addText(d.quote, {
      x: 1.0, y: yBase + 0.35, w: 5.2, h: 0.5,
      fontSize: 12, fontFace: "Calibri", color: C.textLight, italic: true, margin: 0,
    });
  });

  // siddhant-reviewer.png (1536x1024, ratio 1.50) — right side illustration
  const sdRW = 2.8; const sdRH = sdRW / 1.5;
  s.addImage({ path: img("siddhant-reviewer.png"), x: 6.8, y: 1.6, w: sdRW, h: sdRH });

  s.addText([
    { text: "siddhantkhare.com/writing/ai-fatigue-is-real", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://siddhantkhare.com/writing/ai-fatigue-is-real" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 21: AI Fatigue — Practices (Siddhant)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("AI Fatigue — Practices to Avoid Burnout", {
    x: 0.7, y: 0.3, w: 8.5, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 2.0, h: 0.04, fill: { color: C.accent } });

  const practices = [
    { title: "The Three-Attempt Rule", quote: "\"If the AI doesn't get me to 70% usable in three prompts, I write it myself. No exceptions.\"" },
    { title: "Build on the Layer That Doesn't Churn", quote: "\"Tools come and go. The problems they solve don't.\" — Focus on durable problems, not trending frameworks." },
    { title: "Beware the Prompt Spiral", quote: "\"I call this the prompt spiral. It's the AI equivalent of yak shaving.\" — Time-box AI sessions." },
    { title: "Curate Your Information Diet", quote: "\"The ratio of signal to anxiety matters. If a feed is making you feel behind instead of informed, it's not serving you.\"" },
    { title: "Protect Your Cognitive Budget", quote: "\"With the understanding that I am not a machine and I don't need to keep pace with one.\"" },
  ];

  practices.forEach((p, i) => {
    const yBase = 1.2 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 6.6, h: 0.72, fill: { color: C.midBg } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: yBase, w: 0.06, h: 0.72, fill: { color: C.accent } });
    s.addText(p.title, {
      x: 1.0, y: yBase + 0.05, w: 3.5, h: 0.25,
      fontSize: 13, fontFace: "Calibri", color: C.accentLight, bold: true, margin: 0,
    });
    s.addText(p.quote, {
      x: 1.0, y: yBase + 0.32, w: 6.0, h: 0.35,
      fontSize: 11, fontFace: "Calibri", color: C.textLight, italic: true, margin: 0,
    });
  });

  // siddhant-stop.png (1536x1024, ratio 1.50) — right side
  const sdSW = 2.4; const sdSH = sdSW / 1.5;
  s.addImage({ path: img("siddhant-stop.png"), x: 7.3, y: 1.5, w: sdSW, h: sdSH });

  s.addText([
    { text: "siddhantkhare.com/writing/ai-fatigue-is-real", options: { fontSize: 10, color: C.accent, hyperlink: { url: "https://siddhantkhare.com/writing/ai-fatigue-is-real" } } },
  ], { x: 0.7, y: 5.1, w: 8, h: 0.3, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// SLIDE 22: References
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };

  s.addText("References", {
    x: 0.7, y: 0.3, w: 8, h: 0.6,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 0.95, w: 2.0, h: 0.04, fill: { color: C.accent } });

  const refs = [
    { label: "Blog: DevRel Evolution with AI Agents", url: "https://blog.chanezon.com/2025/11/07/devrel-evolution-with-ai-agents.html" },
    { label: "Microsoft Work Trend Index: The Frontier Firm", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/2025" },
    { label: "Kent Beck: Software G Forces (USENIX SREcon)", url: "https://www.usenix.org/conference/srecon25americas/presentation/beck" },
    { label: "Sean Grove: Spec-Driven Dev (AI Engineer Summit)", url: "https://www.youtube.com/watch?v=JGk_RF6HXGQ" },
    { label: "Karpathy on AI Coding Agents (X)", url: "https://x.com/karpathy/status/2015883857489522876" },
    { label: "Canaries in the Coal Mine? — Brynjolfsson et al.", url: "https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/" },
    { label: "Redefining the SW Engineering Profession — Russinovich & Hanselman (ACM)", url: "https://dl.acm.org/doi/abs/10.1145/3779312" },
    { label: "HBR: AI Doesn't Reduce Work — It Intensifies It", url: "https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it" },
    { label: "Steve Yegge: The AI Vampire", url: "https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163" },
    { label: "Simon Willison: AI Intensifies Work", url: "https://simonwillison.net/2026/Feb/9/ai-intensifies-work/" },
    { label: "HBR: When Using AI Leads to Brain Fry", url: "https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry" },
    { label: "Siddhant Khare: AI Fatigue Is Real", url: "https://siddhantkhare.com/writing/ai-fatigue-is-real" },
    { label: "Dr Alexis Lecluze — Doctolib", url: "https://www.doctolib.fr/medecin-generaliste/rennes/alexis-lecluze-rennes" },
    { label: "AI Scribes & Psychiatry (Castro et al.)", url: "https://jamanetwork.com/" },
  ];

  // Split into two columns for readability
  const leftRefs = refs.slice(0, 7);
  const rightRefs = refs.slice(7);

  s.addText(
    leftRefs.map(r => ([
      { text: r.label + "\n", options: { fontSize: 10, color: C.accent, bold: false, hyperlink: { url: r.url }, breakLine: true } },
    ])).flat(),
    { x: 0.7, y: 1.2, w: 4.5, h: 4.0, fontFace: "Calibri", margin: 0, valign: "top", paraSpaceAfter: 6 }
  );
  s.addText(
    rightRefs.map(r => ([
      { text: r.label + "\n", options: { fontSize: 10, color: C.accent, bold: false, hyperlink: { url: r.url }, breakLine: true } },
    ])).flat(),
    { x: 5.4, y: 1.2, w: 4.5, h: 4.0, fontFace: "Calibri", margin: 0, valign: "top", paraSpaceAfter: 6 }
  );
}

// ============================================================
// WRITE FILE
// ============================================================
const outputPath = path.resolve(__dirname, "parisjug-2026-ai-agents.pptx");
pres.writeFile({ fileName: outputPath }).then(() => {
  console.log("Presentation saved to: " + outputPath);
}).catch(err => {
  console.error("Error writing file:", err);
});
