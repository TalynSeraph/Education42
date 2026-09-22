const INITIAL_CURRICULUM = {
  subjects: [
    { id: "eng", name: "GCSE English Literature & Language", description: "AQA 8702/8700 - Macbeth, Jekyll & Hyde, Animal Farm, Power & Conflict", weeks: 36 },
    { id: "maths", name: "GCSE Mathematics Higher", description: "AQA Higher - Number, Algebra, Geometry, Probability, Statistics", weeks: 36 },
    { id: "bio", name: "GCSE Biology", description: "Cells, Transport, Organisation, Infection, Bioenergetics, Homeostasis, Ecology", weeks: 36 },
    { id: "chem", name: "GCSE Chemistry", description: "Atomic Structure, Bonding, Quantitative, Reactions, Rates, Organic", weeks: 36 },
    { id: "phys", name: "GCSE Physics", description: "Energy, Electricity, Particle Model, Radiation, Waves, Space", weeks: 36 },
    { id: "pshe", name: "PSHE & RSE", description: "Mental Health, Relationships, Safety, Finance, Careers, Becoming an Adult", weeks: 36 },
    { id: "art", name: "Art & Design", description: "Portfolio Projects: Objects & Identity, Colour & Place, Portraiture, Mixed Media", weeks: 36 }
  ],
  lessons: [
    // --- WEEK 1 SCRIPTED LESSONS ---
    { id: "w1_mon_eng", week: 1, day: "Monday", slot: 1, subject: "English", focus: "Macbeth foundations: Shakespeare, James I, Divine Right, Great Chain, witchcraft, tragedy, 'Fair is foul'", teaching: "0-7m: Retrieval (Divine Right, Regicide, Tragedy)\n7-18m: Reading Oxford School Shakespeare pp. 115-116, Act 1 Sc 1\n18-28m: Paradox, moral disorder, supernatural storm\n28-39m: 5-point event map + copy anchor quote: 'Fair is foul, and foul is fair'\n39-45m: Retell reading in 5 accurate points.", completed: false },
    { id: "w1_mon_mat", week: 1, day: "Monday", slot: 2, subject: "Maths", focus: "Number foundations: place value, decimals, negatives, factors, primes", teaching: "Calculations with 4 operations, prime factorization of 180 (2^2 * 3^2 * 5), negative number operations. Exit check without hints.", completed: false },
    { id: "w1_mon_bio", week: 1, day: "Monday", slot: 3, subject: "Biology", focus: "Cells: animal/plant structures and functions", teaching: "Label nucleus, membrane, mitochondria, ribosomes, chloroplasts, vacuole, cell wall. Explain organelle functions with cause/effect sentences.", completed: false },
    { id: "w1_mon_chm", week: 1, day: "Monday", slot: 4, subject: "Chemistry", focus: "Atoms, elements, compounds and mixtures", teaching: "Define central chemistry terms, conservation of mass, model particles and mixtures.", completed: false },

    { id: "w1_tue_eng", week: 1, day: "Tuesday", slot: 1, subject: "English", focus: "Close reading and quotation analysis", teaching: "Model analysis: word -> connotation -> theme -> writer purpose. Anchor quote: 'Fair is foul, and foul is fair'.", completed: false },
    { id: "w1_tue_mat", week: 1, day: "Tuesday", slot: 2, subject: "Maths", focus: "Factors and Multiples: HCF & LCM", teaching: "Find HCF of 60 and 90; LCM of 12 and 18. Ordering negative decimals.", completed: false },
    { id: "w1_tue_phy", week: 1, day: "Tuesday", slot: 3, subject: "Physics", focus: "Energy stores and transfers", teaching: "Kinetic, gravitational, chemical, thermal stores. Identifying pathways and SI units.", completed: false },
    { id: "w1_tue_art", week: 1, day: "Tuesday", slot: 4, subject: "Art", focus: "Objects & Identity: observation, line, shape, proportion", teaching: "Block largest shapes, compare proportions, observational drawing using graphite pencils.", completed: false },

    { id: "w1_wed_eng", week: 1, day: "Wednesday", slot: 1, subject: "English", focus: "Apply: argument, theme and evidence", teaching: "Construct 2-paragraph argument answering how Shakespeare establishes disorder.", completed: false },
    { id: "w1_wed_bio", week: 1, day: "Wednesday", slot: 2, subject: "Biology", focus: "Cell specialization & function application", teaching: "Written exam-style practice questions linking cell structures to their specific functions.", completed: false },
    { id: "w1_wed_chm", week: 1, day: "Wednesday", slot: 3, subject: "Chemistry", focus: "Elements, compounds, chemical changes", teaching: "Application practice: distinguishing physical vs chemical separation methods.", completed: false },
    { id: "w1_wed_psh", week: 1, day: "Wednesday", slot: 4, subject: "PSHE/RSE", focus: "Mental wellbeing: stress, sleep, movement, food, support", teaching: "4-step response scenario: Notice -> Choose safest action -> Name trusted source -> Adult intervention triggers.", completed: false },

    { id: "w1_thu_eng", week: 1, day: "Thursday", slot: 1, subject: "English", focus: "GCSE writing and review", teaching: "AQA paragraph construction: thesis, precise evidence, AO2 method analysis.", completed: false },
    { id: "w1_thu_mat", week: 1, day: "Thursday", slot: 2, subject: "Maths", focus: "Weekly Maths Check & Error Diagnosis", teaching: "6-question timed check. Diagnose errors: K (knowledge), M (method), C (careless), Q (misread).", completed: false },
    { id: "w1_thu_phy", week: 1, day: "Thursday", slot: 3, subject: "Physics", focus: "Energy application practice", teaching: "Calculations on work done and conservation of energy in closed systems.", completed: false },
    { id: "w1_thu_rev", week: 1, day: "Thursday", slot: 4, subject: "Weekly Review", focus: "Closed-book 10-question retrieval & catch-up", teaching: "Identify RED/AMBER topics across all subjects. Record exact gaps in Error Log.", completed: false },

    // --- WEEKS 2 TO 36 LESSON INGESTION ---
    ...generateRemainingLessons()
  ]
};

function generateRemainingLessons() {
  const generated = [];
  const scheduleTemplate = [
    { day: "Monday", slots: ["English", "Maths", "Biology", "Chemistry"] },
    { day: "Tuesday", slots: ["English", "Maths", "Physics", "Art"] },
    { day: "Wednesday", slots: ["English", "Biology", "Chemistry", "PSHE/RSE"] },
    { day: "Thursday", slots: ["English", "Maths", "Physics", "Weekly Review"] }
  ];

  const topicsByWeek = {
    2: { eng: "Macbeth Act 1: Prophecy & Ambition", mat: "HCF/LCM & Fraction arithmetic", bio: "Specialised cells: sperm, nerve, muscle, xylem", chm: "Subatomic particles & mass numbers", phy: "KE, GPE & Elastic energy equations", psh: "Self-esteem and body image", art: "Objects & Identity: Tone and 3D form" },
    3: { eng: "Macbeth Act 2: Dagger & Regicide", mat: "Decimals, percentages & standard form", bio: "Mitosis and stem cells", chm: "Isotopes and electronic structure", phy: "Work done, power and efficiency", psh: "Sleep, nutrition and coping strategies", art: "Texture: charcoal and fineliners" },
    4: { eng: "Macbeth Act 3: Paranoia & Banquo", mat: "Number consolidation & recurring decimals", bio: "Microscopy, units & magnification", chm: "Atomic structure consolidation", phy: "Renewable vs non-renewable energy", psh: "Support routes and asking for help", art: "Composition planning" },
    5: { eng: "Macbeth Act 4: Apparitions & Tyranny", mat: "Ratio notation & sharing amounts", bio: "Diffusion & concentration gradients", chm: "Periodic table: groups & periods", phy: "Energy exam questions & calculations", psh: "Healthy friendships and boundaries", art: "Objects & Identity final study" },
    6: { eng: "Macbeth Act 5: Downfall & Order Restored", mat: "Direct proportion, scale & best buys", bio: "Osmosis & active transport", chm: "Group 1 and Group 7 trends", phy: "Energy topic assessment", psh: "Boundaries and active consent", art: "Project 1 evaluation" },
    7: { eng: "English Language: Explicit vs Inference", mat: "Percentage change & multipliers", bio: "Surface-area-to-volume ratio", chm: "Group 0 & periodic trends", phy: "Current, charge & potential difference", psh: "Pressure and coercion", art: "Colour & Place: Colour theory" },
    8: { eng: "English Language: Method & Connotation", mat: "Reverse percentages & compound measures", bio: "Transport revision & exam practice", chm: "Periodic table review & assessment", phy: "Resistance & series circuits", psh: "Controlling behaviour & grooming", art: "Landscape atmosphere" },
    9: { eng: "English Language: Structural shifts", mat: "Algebraic notation & collecting terms", bio: "Organisation: cells to organisms", chm: "Ionic bonding & dot-and-cross", phy: "Parallel circuits & symbols", psh: "Digital footprints & online safety", art: "Van Gogh / Monet artist study" },
    10: { eng: "English Language: Descriptive writing", mat: "Expanding brackets & factorising", bio: "Digestive system & enzymes", chm: "Covalent bonding & simple molecules", phy: "Electrical power (P=VI, P=I^2R)", psh: "Healthy vs unhealthy behaviours", art: "Hockney / O'Keeffe study" },
    11: { eng: "English Language: Narrative structure", mat: "Substitution & rearranging formulae", bio: "Enzyme factors & digestion review", chm: "Giant covalent structures", phy: "National Grid & domestic electricity", psh: "Relationships recap", art: "Colour & Place final piece" },
    12: { eng: "Autumn English Assessment", mat: "Autumn Maths Review & check", bio: "Autumn Biology consolidation", chm: "Autumn Chemistry consolidation", phy: "Autumn Physics assessment", psh: "Healthy Me Review", art: "Autumn Portfolio check" },
    13: { eng: "Jekyll & Hyde: Victorian Gothic", mat: "Geometry: angles & polygons", bio: "Infection: pathogen types", chm: "Relative atomic/formula mass", phy: "Particle model: solids/liquids/gases", psh: "Reproductive systems & puberty", art: "Portraiture proportions" },
    14: { eng: "Jekyll & Hyde: Chapters 1-3", mat: "Perimeter, area & volume", bio: "Human defence systems", chm: "Balancing equations", phy: "Density & state changes", psh: "Menstrual cycle & fertility", art: "Facial features study" },
    15: { eng: "Jekyll & Hyde: Chapters 4-6", mat: "Circles & bearings", bio: "Vaccines & antibiotics", chm: "Moles & reacting masses", phy: "Specific heat capacity", psh: "Contraception & STIs", art: "Light, shade & skin tones" },
    16: { eng: "Jekyll & Hyde: Chapters 7-8", mat: "Pythagoras' Theorem", bio: "Monoclonal antibodies", chm: "Concentration & % yield", phy: "Latent heat & pressure", psh: "Consent & sexual health", art: "Frida Kahlo study" },
    17: { eng: "Jekyll & Hyde: Chapters 9-10", mat: "Trigonometry (SOHCAHTOA)", bio: "Infection review", chm: "Empirical formula calculations", phy: "Particle model calculations", psh: "Sexual health review", art: "Portrait development" },
    18: { eng: "Jekyll & Hyde Assessment Essay", mat: "Geometry assessment", bio: "Photosynthesis equation", chm: "Quantitative review", phy: "Atomic physics & isotopes", psh: "Spring safety review", art: "Portrait evaluation" },
    19: { eng: "Animal Farm: Context & Allegory", mat: "Probability scale & sample spaces", bio: "Photosynthesis limiting factors", chm: "Acids, alkalis & pH", phy: "Alpha, beta, gamma radiation", psh: "First aid & CPR theory", art: "Environment/Change mood board" },
    20: { eng: "Animal Farm: Chapters 1-2", mat: "Experimental probability", bio: "Limiting factor graphs", chm: "Neutralisation & salts", phy: "Half-life & background radiation", psh: "Emergency responses", art: "Collage & printing" },
    21: { eng: "Animal Farm: Chapters 3-5", mat: "Probability tree diagrams", bio: "Uses of glucose", chm: "Reactivity & displacement", phy: "Nuclear equations", psh: "Road & water safety", art: "Digital manipulation" },
    22: { eng: "Animal Farm: Chapters 6-7", mat: "Venn diagrams", bio: "Aerobic respiration", chm: "Redox reactions", phy: "Irradiation vs contamination", psh: "Substance misuse risks", art: "Layering & texture" },
    23: { eng: "Animal Farm: Chapters 8-10", mat: "Conditional probability", bio: "Anaerobic respiration", chm: "Acids & redox practice", phy: "Fission and fusion", psh: "Addiction & exit strategies", art: "Mixed media piece" },
    24: { eng: "Animal Farm Final Essay", mat: "Statistics: Averages & ranges", bio: "Bioenergetics assessment", chm: "Electrolysis basics", phy: "Radiation assessment", psh: "Spring term review", art: "Project 4 evaluation" },
    25: { eng: "Poetry: Ozymandias & London", mat: "Quadratics: Expanding/factorising", bio: "Genetics: DNA & chromosomes", chm: "Electrolysis products", phy: "Transverse & longitudinal waves", psh: "Money: banking & accounts", art: "Personal Project mind map" },
    26: { eng: "Poetry: Prelude & My Last Duchess", mat: "Solving quadratic equations", bio: "Inheritance & Punnett squares", chm: "Electrolysis calculations", phy: "Wave speed calculations", psh: "Loans, APR & debt", art: "Artist research" },
    27: { eng: "Poetry: Light Brigade & Exposure", mat: "Quadratic formula", bio: "Mutations & sex determination", chm: "Energy changes in reactions", phy: "Reflection & refraction", psh: "Credit scores & insurance", art: "Primary observation" },
    28: { eng: "Poetry: Storm on Island & Bayonet", mat: "Quadratic inequalities", bio: "Genetics review", chm: "Bond energy calculations", phy: "Sound & ultrasound", psh: "Tax & payslips", art: "Material experiments" },
    29: { eng: "Poetry: Remains & Poppies", mat: "Simultaneous equations", bio: "Evolution & natural selection", chm: "Rates: collision theory", phy: "EM spectrum: radio to visible", psh: "Budgeting & household bills", art: "Technique development" },
    30: { eng: "Poetry: Exposure ↔ Remains", mat: "Algebraic fractions", bio: "Fossils & selective breeding", chm: "Factors affecting rates", phy: "UV, X-rays & gamma", psh: "Contracts & scams", art: "Personal composition" },
    31: { eng: "Poetry: Storm on Island Comparison", mat: "Functions & iteration", bio: "Genetic engineering", chm: "Catalysts & rate graphs", phy: "EM wave applications", psh: "Consumer rights", art: "Project refinement" },
    32: { eng: "Poetry: Bayonet Charge Comparison", mat: "Surds & indices", bio: "Extinction & evidence", chm: "Crude oil & alkanes", phy: "EM wave dangers", psh: "CVs & job applications", art: "Final piece creation" },
    33: { eng: "Poetry: Remains ↔ Poppies", mat: "Transformations: rotations", bio: "Ecology: ecosystems", chm: "Alkenes & cracking", phy: "Space: stars & orbits", psh: "Careers & apprenticeships", art: "Final piece creation" },
    34: { eng: "Anthology: Final 5 Poems", mat: "Vectors & congruence", bio: "Food webs & cycles", chm: "Combustion & polymers", phy: "Red shift & Big Bang", psh: "Democracy & citizenship", art: "Personal evaluation" },
    35: { eng: "Unseen Poetry Analysis", mat: "Vectors & proofs", bio: "Ecology & conservation", chm: "Potable water & atmosphere", phy: "Physics consolidation", psh: "Human rights & media", art: "Portfolio assembly" },
    36: { eng: "Final GCSE Literature Mocks", mat: "Full GCSE Maths Assessment", bio: "Final Biology Assessment", chm: "Final Chemistry Assessment", phy: "Final Physics Assessment", psh: "Adult Life Guide Project", art: "Final Portfolio Review" }
  };

  for (let w = 2; w <= 36; w++) {
    const t = topicsByWeek[w] || topicsByWeek[12];
    scheduleTemplate.forEach(dayPlan => {
      dayPlan.slots.forEach((subj, idx) => {
        let topicFocus = "";
        if (subj.includes("English")) topicFocus = t.eng;
        else if (subj.includes("Maths")) topicFocus = t.mat;
        else if (subj.includes("Bio")) topicFocus = t.bio;
        else if (subj.includes("Chem")) topicFocus = t.chm;
        else if (subj.includes("Phys")) topicFocus = t.phy;
        else if (subj.includes("PSHE")) topicFocus = t.psh;
        else if (subj.includes("Art")) topicFocus = t.art;
        else topicFocus = "Consolidation & Retrieval Review";

        generated.push({
          id: `w${w}_${dayPlan.day.slice(0,3).toLowerCase()}_slot${idx+1}`,
          week: w,
          day: dayPlan.day,
          slot: idx + 1,
          subject: subj,
          focus: topicFocus,
          teaching: `Scheduled GCSE content for Week ${w}, ${dayPlan.day} (${subj}):\n- Focus: ${topicFocus}\n- Format: 5-8 min retrieval starter, 15 min teaching/worked example, 20 min independent practice, 5 min check.`,
          completed: false
        });
      });
    });
  }
  return generated;
}

let appData = { curriculum: null, diary: {} };

function initApp() {
  const stored = localStorage.getItem("homeschool_gcse_tracker");
  if (stored) {
    try { appData = JSON.parse(stored); }
    catch(e) { appData.curriculum = INITIAL_CURRICULUM; }
  } else {
    appData.curriculum = INITIAL_CURRICULUM;
    saveState();
  }

  const weekSelect = document.getElementById("schedule-week-select");
  weekSelect.innerHTML = "";
  for (let i = 1; i <= 36; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Week ${i}`;
    weekSelect.appendChild(opt);
  }
  weekSelect.value = 1;

  const today = new Date().toISOString().split("T")[0];
  document.getElementById("diary-date-picker").value = today;

  renderSchedule();
  renderCurriculum();
  renderDiary();
  renderProgress();
}

function saveState() {
  localStorage.setItem("homeschool_gcse_tracker", JSON.stringify(appData));
  renderProgress();
}

function resetToDefault() {
  if (confirm("Reset curriculum back to default timetable and wipe custom edits?")) {
    appData.curriculum = JSON.parse(JSON.stringify(INITIAL_CURRICULUM));
    saveState();
    location.reload();
  }
}

function exportData() {
  const blob = new Blob([JSON.stringify(appData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "homeschool_gcse_tracker_backup.json";
  a.click();
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add("active");
  document.getElementById(`pane-${tabId}`).classList.add("active");
  if (tabId === "progress") renderProgress();
  if (tabId === "diary") renderDiary();
}

function renderSchedule() {
  const weekNum = parseInt(document.getElementById("schedule-week-select").value);
  const tbody = document.getElementById("schedule-grid-body");
  tbody.innerHTML = "";

  const termLabel = document.getElementById("schedule-term-label");
  if (weekNum <= 12) termLabel.textContent = "(Autumn Term)";
  else if (weekNum <= 24) termLabel.textContent = "(Spring Term)";
  else termLabel.textContent = "(Summer Term)";

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
  const weekLessons = appData.curriculum.lessons.filter(l => l.week === weekNum);

  for (let slot = 1; slot <= 4; slot++) {
    const tr = document.createElement("tr");
    days.forEach(day => {
      const td = document.createElement("td");
      td.className = "schedule-cell";
      const lesson = weekLessons.find(l => l.day === day && l.slot === slot);

      if (lesson) {
        const div = document.createElement("div");
        div.className = `lesson-tag ${lesson.completed ? "completed" : ""}`;
        div.onclick = () => openLessonModal(lesson.id);

        const sub = document.createElement("div");
        sub.className = "sub-title";
        sub.textContent = `${lesson.subject} (L${lesson.slot})`;

        const focus = document.createElement("div");
        focus.style.fontWeight = "600";
        focus.textContent = lesson.focus;

        div.appendChild(sub);
        div.appendChild(focus);
        td.appendChild(div);
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
}

let activeLessonId = null;

function openLessonModal(lessonId) {
  activeLessonId = lessonId;
  const lesson = appData.curriculum.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  document.getElementById("modal-subject").textContent = `${lesson.subject} — Week ${lesson.week}, ${lesson.day}`;
  document.getElementById("modal-focus").textContent = lesson.focus;
  document.getElementById("modal-content").textContent = lesson.teaching || "No lesson breakdown recorded.";

  c
