// Research refresh — verified September 10, 2026.
// This layer keeps time-sensitive hiring evidence separate from the stable company profiles in data.js.
const RESEARCH_VERIFIED = "Sep 10, 2026";

const refreshByCompany = {
  "Applied Medical": {
    verified: RESEARCH_VERIFIED,
    evidence: "Official Applied Medical recruiting continues to show the Rancho Santa Margarita engineering organization and the Machine Design Engineer, Automation opportunity used in Lauren's prep. Treat the direct posting as time-sensitive and use the careers page if it closes."
  },
  "Terumo BCT": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified current Lakewood hiring includes Engineer 2 – Mechanical, posted Sep. 3, 2026. Terumo BCT also has adjacent manufacturing, human-factors and test/automation engineering activity."
  },
  "Huffman Engineering": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Huffman's official careers page remains the correct Colorado recruiting destination for Project I&C Engineer and related controls/automation opportunities."
  },
  "Applied Control": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official careers destination. Applied Control remains a strong Colorado controls/application-engineering match built around engineered process-control solutions, systems work and commissioning."
  },
  "DMC": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official DMC careers destination. DMC's documented campus-recruiting model has included full-time entry-level Mechanical Engineering graduates entering Automation; ask specifically about the Summer 2027 Denver cohort."
  },
  "Wunderlich-Malec": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official careers destination and current controls-engineering career materials. Its early-career guidance continues to align well with Lauren's Rockwell/PLC, drawings, I/O and commissioning exposure."
  },
  "United Launch Alliance": {
    verified: RESEARCH_VERIFIED,
    evidence: "2027 recruiting is active: ULA posted its Summer 2027 Mechanical Engineering internship Sep. 8, 2026 for Centennial, Pueblo, Vandenberg and other sites. Lauren should still ask specifically when full-time 2027 Engineer 1 mechanical roles open."
  },
  "Lockheed Martin": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official Lockheed Martin early-career recruiting destination. Mechanical early-career pathways remain relevant in Colorado and California; exact openings change frequently, so use the search page plus the booth to identify May 2027 roles."
  },
  "Jabil": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified San Jose remains a meaningful manufacturing/test pathway. The Industrial Engineer I evidence is a strong example of true early-career hiring; direct requisitions can close quickly, so re-search San Jose if the linked posting has moved."
  },
  "Emerson": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Emerson's students/new-graduates pathway remains the right entry point. The career-fair goal is to identify the business unit and Colorado/California role that best uses Lauren's controls and troubleshooting background."
  },
  "Blue Canyon Technologies": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official Blue Canyon careers destination. Colorado spacecraft build, integration, manufacturing and test remain the relevant target areas; ask the booth which May 2027 entry-level requisitions are expected."
  },
  "Gates": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Gates' official engineering careers destination and Colorado product-engineering activity. Product, manufacturing, process and test remain the best role families for Lauren to ask about."
  },
  "Sierra Nevada Corporation": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified SNC's official careers destination. The company remains a strong Colorado aerospace hardware/systems target, but the booth should clarify the specific 2027 B.S.-level mechanical pipeline."
  },
  "Paragon 28 / Zimmer Biomet": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Paragon 28 is part of Zimmer Biomet and recruiting routes through Zimmer Biomet. The Englewood orthopedic product-development organization remains the key local team to ask about."
  },
  "Milwaukee Tool": {
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Milwaukee Tool's graduates/interns recruiting destination. The Engineering Development Program remains the most relevant structured recent-graduate path; geography remains the main tradeoff."
  }
};

companies.forEach(c => Object.assign(c, refreshByCompany[c.name] || {verified: RESEARCH_VERIFIED}));

// Day 1 was re-ranked after the Sep. 10 refresh. Fervo now has the strongest concrete
// new-graduate evidence; Black & Veatch's cited Associate Mechanical posting is useful
// evidence of local mechanical work but should not be described as entry-level.
const day1Refresh = {
  "Fervo Energy": {
    rank: 1,
    verified: RESEARCH_VERIFIED,
    why: "The strongest current Day 1 hiring evidence. Fervo is building engineered geothermal systems and has a true early-career role that accepts Mechanical Engineering, plus controls-adjacent work. The main tradeoff is the field-heavy rotation.",
    evidence: "Verified current Completions Engineer – Entry Level: 0–2 years, Mechanical Engineering accepted, and new graduates encouraged to apply. The role uses a 14/14 remote-field rotation.",
    question: "Your current entry-level Completions Engineer role accepts mechanical engineers and encourages new grads. What backgrounds make a mechanical graduate successful in that role?"
  },
  "M-E Engineers": {
    rank: 2,
    verified: RESEARCH_VERIFIED,
    evidence: "Verified company research destination. M-E remains a strong Colorado mechanical-building-systems option with distinctive sports/venue work; use the booth to confirm May 2027 mechanical openings."
  },
  "Affiliated Engineers (AEI)": {
    rank: 3,
    verified: RESEARCH_VERIFIED,
    evidence: "Verified AEI's careers materials explicitly include new graduates. Mechanical systems, commissioning and controls in healthcare/research facilities remain the most relevant paths for Lauren."
  },
  "Merrick & Company": {
    rank: 4,
    verified: RESEARCH_VERIFIED,
    evidence: "Verified Merrick's official recruiting system and active 2027 campus pipeline. Mechanical and I&C categories are relevant, while currently visible full-time mechanical examples skew more experienced—making the booth important for uncovering new-grad timing."
  },
  "Black & Veatch": {
    rank: 5,
    verified: RESEARCH_VERIFIED,
    why: "Strong Colorado mechanical-infrastructure employer with local power-generation engineering work. The previously cited Associate Mechanical Engineer posting is useful evidence of the work itself, but it should not be treated as a new-grad posting.",
    evidence: "Correction from the prior dashboard: the Greenwood Village Associate Mechanical Engineer – Power Generation posting describes itself as midlevel. Use it as evidence of local mechanical work, and ask the booth about true entry-level/May 2027 roles.",
    question: "I saw that your Greenwood Village power-generation group hires mechanical engineers. Which roles or titles should a May 2027 B.S. mechanical graduate watch for?"
  },
  "Swanson Rink": {
    rank: 6,
    verified: RESEARCH_VERIFIED,
    evidence: "Verified official careers destination. Swanson Rink remains a worthwhile local exploratory target for complex-facility mechanical work; current visible entry-level hiring is stronger in other disciplines, so ask directly about 2027 mechanical needs."
  }
};

day1Top6.forEach(c => Object.assign(c, day1Refresh[c.name] || {verified: RESEARCH_VERIFIED}));
day1Top6.sort((a,b) => a.rank - b.rank);

tier2Companies.forEach(c => { c.verified = RESEARCH_VERIFIED; });
