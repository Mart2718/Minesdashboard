// Research refresh — verified September 14, 2026.
// This layer keeps time-sensitive hiring evidence separate from the stable company profiles in data.js.
const RESEARCH_VERIFIED = "Sep 14, 2026";

const refreshByCompany = {
  "Applied Medical": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Applied Medical's live Rancho Santa Margarita engineering openings. Controls & Automation Engineer – Electrical Design (14861), PLC Programmer – Automation Controls (14903), Design Engineer II (14653), R&D Design Engineer II (14108), and Product Development Engineer II (14964) confirm unusually strong current hiring across automation and mechanical product development. The R&D Design Engineer II posting allows up to three years of relevant experience, making it especially worth discussing for a 2027 graduate."
  },
  "Terumo BCT": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Terumo BCT's current global jobs list. Engineer 2 – Mechanical is still listed in Lakewood, CO (posted Sep. 3), alongside Firmware Engineer – Medical Devices, confirming active local medical-device engineering hiring."
  },
  "Huffman Engineering": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Huffman's official careers page. Colorado still lists Project I&C Engineer, Project Manager, Technician and Intern. Lauren's prior Huffman internship remains her strongest direct relationship and Project I&C / controls / automation remains the natural full-time conversation."
  },
  "Applied Control": {
    verified: RESEARCH_VERIFIED,
    evidence: "High-priority update: Applied Control is currently advertising an Application Engineer opening in Centennial, CO at roughly $70k–$100k. Its official careers and application-engineering pages emphasize younger-engineer responsibility, continuous learning, process automation, control valves, valve automation and control-system services. This is a direct match to Lauren's Huffman controls/FAT-SAT/I/O background and should be treated as an apply-now role."
  },
  "DMC": {
    verified: RESEARCH_VERIFIED,
    evidence: "Major update: DMC has a live Entry Level Automation Engineer posting specifically labeled Colorado School of Mines 2026 for candidates seeking a 2027 start. It accepts 0–3 years of experience, includes Denver among office choices, and has a Sep. 17, 2026 application deadline. This is one of Lauren's clearest apply-now opportunities."
  },
  "Wunderlich-Malec": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Wunderlich-Malec's official careers page. It continues to recruit for project-engineering opportunities across 37+ locations and emphasizes engineering, integration and automation work. The drawings/I/O/PLC-to-programming-and-commissioning path remains highly aligned with Lauren's Huffman experience; use the open-positions search for the exact 2027 location fit."
  },
  "United Launch Alliance": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked ULA today. Summer 2027 Mechanical Engineering Internship remains live (posted Sep. 8) across Centennial, Pueblo and Vandenberg among other sites, and ULA's current jobs also include Systems Engineer 2, Strength Analyst 2 and Control Dynamics Engineer 2 in Centennial. The 2027 recruiting cycle is clearly active; ask when corresponding full-time Engineer 1/new-grad roles open."
  },
  "Lockheed Martin": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Lockheed Martin recruiting evidence. Colorado/California continue to show relevant mechanical, controls, systems-integration and test work, including Mechanical Engineer – Controls in Englewood and System Integration/Test pathways. Individual requisitions move quickly, so search specifically for Associate/Early Career/Level 1–2 roles for May 2027."
  },
  "Jabil": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Jabil's San Jose listings. Industrial Engineer I remains live, full-time, posted Aug. 13, with $73.5k–$117.6k listed pay and work involving production tooling/equipment, workstation design, layouts, AutoCAD and continuous improvement. San Jose also currently lists Test Engineer III and other engineering roles. Industrial Engineer I remains the strongest immediate fit."
  },
  "Emerson": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Emerson's student/new-graduate pathway and Lauren's adjacent Applied Control opportunity. Emerson remains strategically relevant through automation, process-control and engineered-equipment work; prioritize business units/locations that offer hands-on controls, testing, commissioning and customer-system exposure."
  },
  "Blue Canyon Technologies": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Blue Canyon's recruiting path. Colorado spacecraft build, integration, manufacturing and test remain attractive hands-on paths for Lauren; use the booth/careers search to identify the specific May 2027 B.S.-level mechanical openings as they appear."
  },
  "Gates": {
    verified: RESEARCH_VERIFIED,
    evidence: "Important update: Gates currently has Colorado engineering activity that fits Lauren well. Project Engineer – Global Mobility Bike & Fitness in Englewood is full-time at $80k–$90k and centers on prototypes, DFM, inspection, testing, CAD drawings and troubleshooting, though it asks for 2–5+ years. Gates also lists a Product Engineer – Motorcycle role in Denver. These are excellent role-family signals and worth a direct new-grad conversation."
  },
  "Sierra Nevada Corporation": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked SNC's official careers site. Colorado aerospace hardware, systems, manufacturing/integration and test remain strong target families. The careers site is actively recruiting, but today's search did not surface a clearly verified B.S.-level mechanical new-grad requisition, so use the booth/search to identify the 2027 pipeline."
  },
  "Paragon 28 / Zimmer Biomet": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked the Zimmer Biomet recruiting route following the Paragon 28 acquisition. Englewood orthopedic product development remains the key Colorado organization to ask about for mechanical, manufacturing, quality/test and product-development opportunities; exact early-career requisitions remain time-sensitive."
  },
  "Milwaukee Tool": {
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Milwaukee Tool's early-talent recruiting path. Its recent-graduate engineering-development environment remains attractive for hands-on product design, prototyping and test; geography is still the primary reason it ranks below Lauren's Colorado/California targets."
  }
};

companies.forEach(c => Object.assign(c, refreshByCompany[c.name] || {verified: RESEARCH_VERIFIED}));

const day1Refresh = {
  "Fervo Energy": {
    rank: 1,
    verified: RESEARCH_VERIFIED,
    why: "The strongest current Day 1 new-graduate evidence. Fervo is building engineered geothermal systems and has a true entry-level role accepting Mechanical Engineering. The main tradeoff is the field-heavy rotation and eventual Houston base.",
    evidence: "Rechecked Fervo's live Completions Engineer – Entry Level role. It is explicitly designed for new graduates/0–2 years, accepts Mechanical Engineering, and starts with Houston training before a 14/14 Utah field rotation. The role remains a concrete apply-now option if Lauren is comfortable with that lifestyle and geography.",
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
    evidence: "Rechecked AEI's recruiting path. Mechanical systems, commissioning and controls in healthcare/research facilities remain relevant; ask specifically which May 2027 new-graduate mechanical openings are planned."
  },
  "Merrick & Company": {
    rank: 4,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Merrick's recruiting path. Mechanical and Instrumentation & Controls remain relevant Colorado categories; visible full-time mechanical examples still skew more experienced, so the booth remains important for uncovering the May 2027 graduate pipeline."
  },
  "Black & Veatch": {
    rank: 5,
    verified: RESEARCH_VERIFIED,
    why: "Strong Colorado mechanical-infrastructure employer with local power-generation engineering work. The previously cited Associate Mechanical Engineer posting is useful evidence of the work itself, but it should not be treated as a new-grad posting.",
    evidence: "Rechecked the Colorado recruiting path. Keep the prior correction: the cited Associate Mechanical Engineer example was midlevel, not a true new-grad opening. Ask specifically for May 2027 mechanical titles and recruiting timing.",
    question: "Your Greenwood Village power-generation group hires mechanical engineers. Which job titles should a May 2027 B.S. mechanical graduate watch for, and when do those openings usually post?"
  },
  "Swanson Rink": {
    rank: 6,
    verified: RESEARCH_VERIFIED,
    evidence: "Rechecked Swanson Rink's careers path. It remains a worthwhile Denver exploratory target for complex-facility mechanical work; ask directly whether 2027 entry-level mechanical hiring is planned."
  }
};

day1Top6.forEach(c => Object.assign(c, day1Refresh[c.name] || {verified: RESEARCH_VERIFIED}));
day1Top6.sort((a,b) => a.rank - b.rank);

tier2Companies.forEach(c => { c.verified = RESEARCH_VERIFIED; });
