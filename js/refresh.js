// Research refresh — verified September 12, 2026.
// This layer keeps time-sensitive hiring evidence separate from the stable company profiles in data.js.
const RESEARCH_VERIFIED = "Sep 12, 2026";

const refreshByCompany = {
  "Applied Medical": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Applied Medical's official recruiting path and Rancho Santa Margarita engineering focus. Machine-design/automation remains an excellent match for Lauren's mechanical + controls background; direct requisitions are time-sensitive, so use the careers page if the linked posting closes."
  },
  "Terumo BCT": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked current Lakewood recruiting. Engineer 2 – Mechanical remains strong evidence of local mechanical-development hiring, with adjacent manufacturing, human-factors and test/automation work relevant to Lauren."
  },
  "Huffman Engineering": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Huffman's official careers destination. Lauren's prior Huffman internship remains the strongest direct relationship in the dashboard; Project I&C / controls / automation is still the natural full-time conversation."
  },
  "Applied Control": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked official Applied Control recruiting. The Colorado process-control, systems, application-engineering and commissioning environment remains a direct match to Lauren's PLC, FAT/SAT, I/O and troubleshooting experience."
  },
  "DMC": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked DMC's official careers and early-career materials. Its documented history of bringing Mechanical Engineering graduates into Automation still makes Denver a high-priority conversation; ask specifically about the 2027 full-time cohort."
  },
  "Wunderlich-Malec": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked official careers and controls-engineering materials. The progression from drawings/I/O and PLC work into programming and commissioning continues to align especially well with Lauren's Huffman experience."
  },
  "United Launch Alliance": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked ULA recruiting. Summer 2027 Mechanical Engineering recruiting is active across Colorado and Vandenberg-area locations, confirming the 2027 campus cycle is underway. Lauren should ask when corresponding full-time Engineer 1 roles open."
  },
  "Lockheed Martin": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Lockheed Martin's official recruiting path. Early-career mechanical, test, manufacturing and systems/integration roles remain the right targets in Colorado and California; individual requisitions change frequently, so use the search page and booth for May 2027 openings."
  },
  "Jabil": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Jabil's San Jose recruiting path. Engineer I-level manufacturing/industrial work remains a credible Bay Area route for Lauren, especially where production equipment, automation, test and troubleshooting overlap. Re-search San Jose if the direct requisition has closed."
  },
  "Emerson": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Emerson's student/new-graduate recruiting destination. Entry-level engineering pathways remain active; Lauren's key task is identifying the business unit and Colorado/California role with the most hands-on automation, testing, commissioning and customer-system exposure."
  },
  "Blue Canyon Technologies": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Blue Canyon's official careers destination. Colorado spacecraft build, integration, manufacturing and test remain attractive hands-on paths; the booth should clarify which May 2027 B.S.-level mechanical roles are planned."
  },
  "Gates": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Gates' engineering recruiting path and Colorado product-engineering activity. Product, manufacturing, process and test remain the best role families for Lauren; direct postings should be treated as time-sensitive examples rather than permanent openings."
  },
  "Sierra Nevada Corporation": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked SNC's official careers destination. Colorado aerospace hardware, systems, manufacturing/integration and test remain strong targets, with the booth useful for identifying the specific 2027 B.S.-level pipeline."
  },
  "Paragon 28 / Zimmer Biomet": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked the Zimmer Biomet recruiting route following the Paragon 28 acquisition. Englewood orthopedic product development remains the key Colorado team to ask about for mechanical, manufacturing, quality/test and product-development opportunities."
  },
  "Milwaukee Tool": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Milwaukee Tool's early-talent recruiting path. Its recent-graduate engineering development environment remains attractive for hands-on product design, prototyping and test; geography is still the primary reason it ranks below Lauren's Colorado/California targets."
  }
};

companies.forEach(c => Object.assign(c, refreshByCompany[c.name] || {verified: RESEARCH_VERIFIED}));

// Day 1 ranking retains the Sep. 10 correction: Fervo has the strongest concrete
// new-graduate evidence; Black & Veatch remains useful local mechanical evidence but
// the previously cited Associate Mechanical posting should not be described as entry-level.
const day1Refresh = {
  "Fervo Energy": {
    rank: 1,
    verified: RESEARCH_VERIFIED,
    why: "The strongest current Day 1 hiring evidence. Fervo is building engineered geothermal systems and has a true early-career role that accepts Mechanical Engineering, plus controls-adjacent work. The main tradeoff is the field-heavy rotation.",
    evidence: "Rechecked Fervo's current early-career path: Completions Engineer – Entry Level is built for 0–2 years of experience, accepts Mechanical Engineering, and encourages new graduates. The role's 14/14 remote-field rotation remains an important lifestyle consideration.",
    question: "Your entry-level Completions Engineer path accepts mechanical engineers and new grads. What backgrounds make a mechanical graduate successful there, and are there parallel early-career opportunities on the controls or power-plant side?"
  },
  "M-E Engineers": {
    rank: 2,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked M-E Engineers' company/careers path. It remains a strong Colorado mechanical-building-systems option with distinctive sports and venue work; confirm May 2027 mechanical and commissioning hiring at the booth."
  },
  "Affiliated Engineers (AEI)": {
    rank: 3,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked AEI's recruiting materials. New-graduate hiring remains part of its talent model, and mechanical systems, commissioning and controls in healthcare/research facilities continue to be the most relevant paths for Lauren."
  },
  "Merrick & Company": {
    rank: 4,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Merrick's recruiting path. Mechanical and Instrumentation & Controls remain relevant Colorado categories; visible full-time mechanical examples skew more experienced, so the booth remains important for uncovering the May 2027 graduate pipeline."
  },
  "Black & Veatch": {
    rank: 5,
    verified: RESEARCH_VERIFIED,
    why: "Strong Colorado mechanical-infrastructure employer with local power-generation engineering work. The previously cited Associate Mechanical Engineer posting is useful evidence of the work itself, but it should not be treated as a new-grad posting.",
    evidence: "Rechecked the Greenwood Village power-generation evidence. The cited Associate Mechanical Engineer role is a midlevel example, not a new-grad opening. Ask specifically for true entry-level/May 2027 mechanical titles and recruiting timing.",
    question: "Your Greenwood Village power-generation group hires mechanical engineers. Which job titles should a May 2027 B.S. mechanical graduate watch for, and when do those openings usually post?"
  },
  "Swanson Rink": {
    rank: 6,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Swanson Rink's official careers destination. It remains a worthwhile Denver exploratory target for complex-facility mechanical work; ask directly whether 2027 entry-level mechanical hiring is planned."
  }
};

day1Top6.forEach(c => Object.assign(c, day1Refresh[c.name] || {verified: RESEARCH_VERIFIED}));
day1Top6.sort((a,b) => a.rank - b.rank);

tier2Companies.forEach(c => { c.verified = RESEARCH_VERIFIED; });
