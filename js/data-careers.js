// Career data for the Georgia Pathway Explorer.
//
// wage: approximate Georgia median annual pay, rounded, based on U.S. Bureau of Labor
//       Statistics Occupational Employment & Wage Statistics. Use for comparison only.
// edu:  cert  = short-term certificate / license (under 1 year)
//       assoc = technical diploma or associate degree (1–2 years)
//       bach  = bachelor's degree (4 years)
//       adv   = graduate or professional degree (6+ years)
// tcsg / usg: the kind of program to look for at Technical College System of Georgia
//       colleges and University System of Georgia institutions.

window.SECTORS = [
  { id: "health", name: "Healthcare", icon: "✚", blurb: "Georgia's largest and fastest-growing need — from hospitals in Atlanta to rural clinics in every corner of the state." },
  { id: "mfg", name: "Advanced Manufacturing & EV", icon: "⚙", blurb: "Electric vehicles, batteries, solar panels, carpet, and food processing — Georgia builds things the world uses." },
  { id: "tech", name: "IT & Cybersecurity", icon: "⌘", blurb: "Atlanta is a top tech hub, and Augusta is home to U.S. Army Cyber Command." },
  { id: "logi", name: "Logistics & Transportation", icon: "⇄", blurb: "The Port of Savannah, Hartsfield-Jackson, and the interstates make Georgia the Southeast's shipping engine." },
  { id: "build", name: "Construction & Skilled Trades", icon: "⌂", blurb: "New plants, homes, and data centers mean every trade is in demand — and many pay while you learn." },
  { id: "energy", name: "Energy & Utilities", icon: "ϟ", blurb: "Plant Vogtle, solar farms, and a growing grid need technicians, operators, and engineers." },
  { id: "aero", name: "Aerospace & Defense", icon: "✈", blurb: "Gulfstream, Lockheed Martin, Delta TechOps, and Robins Air Force Base keep Georgia flying." },
  { id: "edu", name: "Education", icon: "✎", blurb: "Every Georgia county needs great teachers, counselors, and specialists." },
  { id: "biz", name: "Business & FinTech", icon: "$", blurb: "Much of America's card payments run through Georgia's \"Transaction Alley.\"" },
  { id: "safety", name: "Public Safety", icon: "◈", blurb: "Protect and serve as a firefighter, officer, dispatcher, or forensic specialist." },
  { id: "ag", name: "Agriculture & Food", icon: "❦", blurb: "Agribusiness is Georgia's oldest industry, from poultry and peanuts to forestry and food science." },
  { id: "film", name: "Film & Creative Media", icon: "◐", blurb: "\"Y'allywood\": Georgia is one of the busiest film production centers in the country." }
];

window.EDU_LEVELS = {
  cert:  { label: "Certificate", long: "Short-term certificate or license", time: "Under 1 year", order: 1 },
  assoc: { label: "Diploma / Associate", long: "Technical diploma or associate degree", time: "1–2 years", order: 2 },
  bach:  { label: "Bachelor's", long: "Bachelor's degree", time: "4 years", order: 3 },
  adv:   { label: "Graduate", long: "Graduate or professional degree", time: "6+ years", order: 4 }
};

window.CAREERS = {
  // ─── Healthcare ───────────────────────────────────────────────
  physician: {
    title: "Family Physician", sector: "health", edu: "adv", years: "11+ yrs", wage: 230000, demand: "Very high",
    summary: "The doctor patients see first. Diagnoses illness, manages long-term health, and refers to specialists. Rural Georgia especially needs them.",
    day: ["See 20–25 patients in clinic", "Order and read lab tests", "Coordinate care with nurses, PAs, and specialists"],
    hs: ["Biology", "Chemistry", "AP/Dual Enrollment science", "Health Science pathway"],
    usg: "Pre-med bachelor's (biology, chemistry) → MD at the Medical College of Georgia (Augusta University)",
    tcsg: null, also: ["pa", "np", "anesthesiologist", "surgeon"]
  },
  anesthesiologist: {
    title: "Anesthesiologist", sector: "health", edu: "adv", years: "12+ yrs", wage: 239000, demand: "High", gem: true,
    summary: "The physician who keeps patients safe, asleep, and pain-free during surgery — watching every heartbeat and breath.",
    day: ["Meet patients before surgery", "Deliver and adjust anesthesia in the OR", "Manage pain and emergencies after surgery"],
    hs: ["Chemistry", "Biology", "Physics", "Calculus"],
    usg: "Pre-med bachelor's → MD → 4-year anesthesiology residency",
    tcsg: null, also: ["crna", "anesthesiatech", "surgeon", "perfusionist"]
  },
  surgeon: {
    title: "Surgeon", sector: "health", edu: "adv", years: "13+ yrs", wage: 239000, demand: "High",
    summary: "Repairs injuries, removes disease, and performs life-saving operations as the leader of the surgical team.",
    day: ["Operate in the OR", "Round on recovering patients", "Consult with families on treatment options"],
    hs: ["Biology", "Chemistry", "Anatomy", "Precision hobbies (art, music, models)"],
    usg: "Pre-med bachelor's → MD → 5–7 year surgical residency",
    tcsg: null, also: ["surgtech", "anesthesiologist", "pa", "sterileproc"]
  },
  pa: {
    title: "Physician Assistant", sector: "health", edu: "adv", years: "6–7 yrs", wage: 125000, demand: "Very high", gem: true,
    summary: "Diagnoses and treats patients, writes prescriptions, and even assists in surgery — with less schooling and debt than becoming an MD.",
    day: ["Examine patients and order tests", "Prescribe treatment plans", "Work in ERs, surgery, or family practice"],
    hs: ["Biology", "Chemistry", "Health Science pathway", "Volunteer or patient-care job"],
    usg: "Bachelor's (biology, health science) → Master of Physician Assistant Studies (e.g., Augusta University)",
    tcsg: "Start with EMT, CNA, or Medical Assisting to earn required patient-care hours", also: ["physician", "np", "surgtech", "paramedic"]
  },
  np: {
    title: "Nurse Practitioner", sector: "health", edu: "adv", years: "6–7 yrs", wage: 118000, demand: "Very high",
    summary: "An advanced-practice nurse who diagnoses, prescribes, and often runs their own patient panel — a major answer to Georgia's doctor shortage.",
    day: ["Manage a schedule of patients", "Prescribe medications", "Specialize in family, pediatrics, psych, or acute care"],
    hs: ["Biology", "Chemistry", "Psychology", "Health Science pathway"],
    usg: "BSN → Master's or Doctor of Nursing Practice",
    tcsg: "Associate Degree Nursing (ADN) as a starting point", also: ["rn", "pa", "crna", "physician"]
  },
  crna: {
    title: "Nurse Anesthetist (CRNA)", sector: "health", edu: "adv", years: "7–8 yrs", wage: 190000, demand: "High", gem: true,
    summary: "An advanced-practice nurse who gives anesthesia for surgeries — one of the highest-paid careers in nursing.",
    day: ["Plan anesthesia for each patient", "Monitor vital signs throughout surgery", "Handle airways and emergencies"],
    hs: ["Chemistry", "Biology", "Anatomy & Physiology"],
    usg: "BSN → ICU nursing experience → Doctor of Nurse Anesthesia Practice",
    tcsg: null, also: ["anesthesiologist", "rn", "anesthesiatech", "np"]
  },
  rn: {
    title: "Registered Nurse", sector: "health", edu: "assoc", years: "2–4 yrs", wage: 85000, demand: "Very high",
    summary: "The heartbeat of every hospital. Cares for patients, gives medications, and coordinates the care team. Georgia needs thousands more.",
    day: ["Assess and monitor patients", "Give medications and treatments", "Teach patients and families"],
    hs: ["Biology", "Anatomy & Physiology", "Health Science pathway", "CNA certification"],
    usg: "Bachelor of Science in Nursing (BSN)", tcsg: "Associate Degree Nursing (ADN) — then RN-to-BSN later",
    also: ["lpn", "np", "crna", "cna"]
  },
  lpn: {
    title: "Licensed Practical Nurse", sector: "health", edu: "assoc", years: "1 yr", wage: 52000, demand: "High",
    summary: "Provides hands-on nursing care in nursing homes, clinics, and hospitals — and can bridge to RN later.",
    day: ["Check vital signs", "Give medications", "Help patients with daily care"],
    hs: ["Health Science pathway", "Biology"], usg: null, tcsg: "Practical Nursing diploma",
    also: ["rn", "cna", "medassist"]
  },
  cna: {
    title: "Certified Nursing Assistant", sector: "health", edu: "cert", years: "6–12 wks", wage: 34000, demand: "Very high",
    summary: "A fast way into healthcare. Helps patients bathe, eat, and move — and builds hours for nursing or PA school.",
    day: ["Help patients with daily living", "Record vital signs", "Report changes to nurses"],
    hs: ["Health Science pathway (often earn it in high school!)"], usg: null, tcsg: "Nurse Aide certificate",
    also: ["lpn", "rn", "medassist", "pa"]
  },
  surgtech: {
    title: "Surgical Technologist", sector: "health", edu: "assoc", years: "1–2 yrs", wage: 56000, demand: "High", gem: true,
    summary: "Right beside the surgeon in the operating room — prepares instruments, keeps everything sterile, and hands over tools during surgery.",
    day: ["Set up the operating room", "Pass instruments during surgery", "Count every sponge and tool"],
    hs: ["Anatomy & Physiology", "Health Science pathway"], usg: null,
    tcsg: "Surgical Technology diploma or AAS", also: ["sterileproc", "surgeon", "anesthesiatech", "pa"]
  },
  anesthesiatech: {
    title: "Anesthesia Technologist", sector: "health", edu: "assoc", years: "2 yrs", wage: 50000, demand: "Growing", gem: true,
    summary: "Prepares and troubleshoots the high-tech anesthesia machines and monitors that keep surgery patients safe.",
    day: ["Set up anesthesia equipment", "Assist during airway procedures", "Maintain monitors and supplies"],
    hs: ["Biology", "Physics", "Health Science pathway"], usg: null,
    tcsg: "Allied health AAS (programs vary — ask your college)", also: ["anesthesiologist", "crna", "surgtech", "resptherapist"]
  },
  perfusionist: {
    title: "Perfusionist", sector: "health", edu: "adv", years: "6 yrs", wage: 140000, demand: "High", gem: true,
    summary: "Runs the heart-lung machine that keeps a patient alive during open-heart surgery. Few people have heard of it — and few people do it.",
    day: ["Operate heart-lung bypass machines", "Manage blood flow and oxygen", "Work on cardiac surgery teams"],
    hs: ["Chemistry", "Biology", "Physics", "Math"], usg: "Bachelor's in biology/chemistry → Master's in perfusion science",
    tcsg: null, also: ["anesthesiologist", "resptherapist", "surgeon"]
  },
  sterileproc: {
    title: "Sterile Processing Technician", sector: "health", edu: "cert", years: "Under 1 yr", wage: 43000, demand: "High", gem: true,
    summary: "No sterile tools, no surgery. Cleans, inspects, and packages every surgical instrument in the hospital.",
    day: ["Decontaminate surgical instruments", "Assemble instrument trays", "Run sterilizers and track quality"],
    hs: ["Health Science pathway", "Biology"], usg: null, tcsg: "Sterile Supply Processing certificate",
    also: ["surgtech", "medlabtech"]
  },
  radtech: {
    title: "Radiologic Technologist", sector: "health", edu: "assoc", years: "2 yrs", wage: 63000, demand: "High",
    summary: "Takes the X-rays, CT, and MRI scans doctors use to find broken bones, tumors, and more.",
    day: ["Position patients for imaging", "Operate X-ray and CT scanners", "Protect patients from radiation"],
    hs: ["Physics", "Anatomy", "Health Science pathway"], usg: "B.S. in Radiologic Sciences (advanced imaging)",
    tcsg: "Radiologic Technology AAS", also: ["sonographer", "physician", "surgtech"]
  },
  sonographer: {
    title: "Diagnostic Medical Sonographer", sector: "health", edu: "assoc", years: "2 yrs", wage: 78000, demand: "High", gem: true,
    summary: "Uses ultrasound to see inside the body — babies, hearts, blood vessels — without any radiation.",
    day: ["Perform ultrasound exams", "Capture images for physicians", "Specialize in cardiac or OB imaging"],
    hs: ["Physics", "Anatomy", "Health Science pathway"], usg: null,
    tcsg: "Diagnostic Medical Sonography or Cardiovascular Technology AAS", also: ["radtech", "physician"]
  },
  resptherapist: {
    title: "Respiratory Therapist", sector: "health", edu: "assoc", years: "2 yrs", wage: 70000, demand: "High", gem: true,
    summary: "The breathing expert — manages ventilators in the ICU, treats asthma, and responds to emergencies.",
    day: ["Manage ventilators", "Give breathing treatments", "Respond to codes and trauma"],
    hs: ["Biology", "Chemistry", "Health Science pathway"], usg: "B.S. in Respiratory Therapy",
    tcsg: "Respiratory Care AAS", also: ["rn", "paramedic", "anesthesiatech", "perfusionist"]
  },
  paramedic: {
    title: "Paramedic", sector: "health", edu: "assoc", years: "1–2 yrs", wage: 47000, demand: "High",
    summary: "The first medical provider on scene of emergencies — treating patients in the ambulance on the way to the ER.",
    day: ["Respond to 911 calls", "Stabilize trauma and cardiac patients", "Work 24-hour shifts with a crew"],
    hs: ["Health Science pathway", "EMT certification", "First aid"], usg: null,
    tcsg: "EMT certificate → Paramedicine diploma/AAS", also: ["firefighter", "rn", "pa", "dispatcher"]
  },
  pharmacist: {
    title: "Pharmacist", sector: "health", edu: "adv", years: "6–8 yrs", wage: 128000, demand: "Steady",
    summary: "Medication expert who makes sure prescriptions are safe and work as intended — in pharmacies, hospitals, and research.",
    day: ["Check prescriptions for safety", "Counsel patients", "Work with doctors on dosing"],
    hs: ["Chemistry", "Biology", "Math"], usg: "Pre-pharmacy → PharmD (e.g., UGA College of Pharmacy)",
    tcsg: "Pharmacy Technology to get started", also: ["pharmtech", "medlabtech", "physician"]
  },
  pharmtech: {
    title: "Pharmacy Technician", sector: "health", edu: "cert", years: "Under 1 yr", wage: 39000, demand: "High",
    summary: "Fills prescriptions, manages inventory, and helps pharmacists serve patients. A great first step toward pharmacy school.",
    day: ["Prepare medications", "Process insurance", "Help customers"], hs: ["Chemistry", "Math", "Health Science pathway"],
    usg: null, tcsg: "Pharmacy Technology diploma/certificate", also: ["pharmacist", "medassist"]
  },
  medlabtech: {
    title: "Medical Laboratory Scientist", sector: "health", edu: "bach", years: "2–4 yrs", wage: 66000, demand: "High", gem: true,
    summary: "The detective behind the diagnosis — runs the blood and tissue tests that tell doctors what's wrong.",
    day: ["Analyze blood and body fluids", "Run lab instruments", "Report critical results to doctors"],
    hs: ["Chemistry", "Biology", "Lab science electives"], usg: "B.S. in Medical Laboratory Science",
    tcsg: "Medical Laboratory Technology AAS", also: ["phlebotomist", "forensictech", "pharmacist"]
  },
  phlebotomist: {
    title: "Phlebotomist", sector: "health", edu: "cert", years: "Under 1 yr", wage: 38000, demand: "High",
    summary: "Draws blood for tests, donations, and transfusions — a fast way to start working in healthcare.",
    day: ["Draw blood from patients", "Label and process samples", "Put nervous patients at ease"],
    hs: ["Health Science pathway"], usg: null, tcsg: "Phlebotomy Technician certificate", also: ["medlabtech", "cna", "medassist"]
  },
  medassist: {
    title: "Medical Assistant", sector: "health", edu: "cert", years: "Under 1 yr", wage: 39000, demand: "Very high",
    summary: "Keeps doctors' offices running — takes vitals, gives shots, and handles patient records.",
    day: ["Room patients and take vitals", "Give injections", "Schedule and update records"], hs: ["Health Science pathway"],
    usg: null, tcsg: "Medical Assisting diploma", also: ["lpn", "pa", "phlebotomist"]
  },
  pt: {
    title: "Physical Therapist", sector: "health", edu: "adv", years: "7 yrs", wage: 97000, demand: "High",
    summary: "Helps athletes and patients recover from injuries and surgery so they can move, play, and live without pain.",
    day: ["Evaluate injuries and movement", "Design exercise programs", "Track recovery progress"],
    hs: ["Anatomy", "Biology", "Sports Medicine pathway"], usg: "Bachelor's (exercise science) → Doctor of Physical Therapy",
    tcsg: null, also: ["pta", "athletictrainer", "ot"]
  },
  pta: {
    title: "Physical Therapist Assistant", sector: "health", edu: "assoc", years: "2 yrs", wage: 60000, demand: "High", gem: true,
    summary: "Works hands-on with patients to carry out their therapy plan — with just a two-year degree.",
    day: ["Guide patients through exercises", "Use therapy equipment", "Encourage and track progress"],
    hs: ["Anatomy", "Sports Medicine pathway"], usg: null, tcsg: "Physical Therapist Assistant AAS",
    also: ["pt", "athletictrainer", "ota"]
  },
  athletictrainer: {
    title: "Athletic Trainer", sector: "health", edu: "adv", years: "5–6 yrs", wage: 55000, demand: "Growing",
    summary: "On the sidelines with teams — prevents, evaluates, and treats sports injuries for high school, college, and pro athletes.",
    day: ["Tape and prepare athletes", "Respond to injuries on the field", "Run rehab programs"],
    hs: ["Sports Medicine pathway", "Anatomy"], usg: "Bachelor's → Master's in Athletic Training", tcsg: null,
    also: ["pt", "pta", "physician"]
  },
  ot: {
    title: "Occupational Therapist", sector: "health", edu: "adv", years: "6 yrs", wage: 90000, demand: "High",
    summary: "Helps people of all ages do everyday things — from kids with disabilities to adults recovering from a stroke.",
    day: ["Evaluate daily living skills", "Adapt homes and tools", "Work in schools, hospitals, and clinics"],
    hs: ["Psychology", "Biology", "Anatomy"], usg: "Bachelor's → Master's or Doctorate in Occupational Therapy",
    tcsg: null, also: ["ota", "pt", "slp"]
  },
  ota: {
    title: "Occupational Therapy Assistant", sector: "health", edu: "assoc", years: "2 yrs", wage: 65000, demand: "High", gem: true,
    summary: "Helps patients practice the skills they need for daily life under the direction of an occupational therapist.",
    day: ["Lead therapy activities", "Teach use of adaptive equipment", "Record progress"], hs: ["Psychology", "Health Science pathway"],
    usg: null, tcsg: "Occupational Therapy Assistant AAS", also: ["ot", "pta"]
  },
  dentalhyg: {
    title: "Dental Hygienist", sector: "health", edu: "assoc", years: "2–3 yrs", wage: 78000, demand: "High",
    summary: "Cleans teeth, takes X-rays, and teaches healthy habits — great pay and flexible schedules.",
    day: ["Clean and polish teeth", "Take dental X-rays", "Screen for gum disease"], hs: ["Biology", "Chemistry"],
    usg: "B.S. in Dental Hygiene", tcsg: "Dental Hygiene AAS", also: ["dentist", "radtech"]
  },
  dentist: {
    title: "Dentist", sector: "health", edu: "adv", years: "8 yrs", wage: 170000, demand: "High",
    summary: "Diagnoses and treats problems with teeth and gums — and often owns their own practice.",
    day: ["Fill cavities and fix teeth", "Read X-rays", "Run a practice and lead a team"], hs: ["Biology", "Chemistry", "Art (fine motor skills)"],
    usg: "Pre-dental bachelor's → DMD at the Dental College of Georgia (Augusta University)", tcsg: null,
    also: ["dentalhyg", "physician"]
  },
  slp: {
    title: "Speech-Language Pathologist", sector: "health", edu: "adv", years: "6 yrs", wage: 85000, demand: "Very high",
    summary: "Helps people speak, understand, and swallow — working with toddlers, students, and stroke patients.",
    day: ["Assess speech and language", "Run therapy sessions", "Work in schools or hospitals"], hs: ["Psychology", "English", "World Language"],
    usg: "Bachelor's in communication sciences → Master's in Speech-Language Pathology", tcsg: null,
    also: ["ot", "teacher", "specialed"]
  },
  vet: {
    title: "Veterinarian", sector: "ag", edu: "adv", years: "8 yrs", wage: 110000, demand: "High",
    summary: "Animal doctor for pets, horses, poultry flocks, and cattle herds. Georgia needs large-animal vets especially.",
    day: ["Examine and treat animals", "Perform surgery", "Protect the food supply"], hs: ["Biology", "Chemistry", "Ag Science / FFA"],
    usg: "Pre-vet bachelor's → DVM at UGA College of Veterinary Medicine", tcsg: null, also: ["vettech", "foodscientist", "poultryspec"]
  },
  vettech: {
    title: "Veterinary Technician", sector: "ag", edu: "assoc", years: "2 yrs", wage: 40000, demand: "High",
    summary: "The nurse of the animal world — assists in surgery, takes X-rays, and runs lab tests for vets.",
    day: ["Assist vets in exams and surgery", "Give anesthesia", "Care for animals in recovery"], hs: ["Biology", "Ag Science / FFA"],
    usg: null, tcsg: "Veterinary Technology AAS", also: ["vet", "poultryspec"]
  },

  // ─── Advanced Manufacturing & EV ─────────────────────────────
  maintenancetech: {
    title: "Industrial Maintenance Technician", sector: "mfg", edu: "assoc", years: "1–2 yrs", wage: 60000, demand: "Very high", gem: true,
    summary: "Keeps the robots, conveyors, and machines running at plants like Hyundai, Kia, and Qcells. Every factory needs them.",
    day: ["Troubleshoot electrical and mechanical problems", "Program and repair PLCs", "Prevent breakdowns before they happen"],
    hs: ["Engineering & Technology pathway", "Physics", "Robotics team"], usg: null,
    tcsg: "Industrial Systems Technology diploma/AAS", also: ["mechatronics", "electrician", "robotics", "evtech"]
  },
  mechatronics: {
    title: "Mechatronics Technician", sector: "mfg", edu: "assoc", years: "2 yrs", wage: 62000, demand: "Very high", gem: true,
    summary: "Part mechanic, part electrician, part programmer — builds and maintains automated production lines.",
    day: ["Wire and program automated systems", "Diagnose sensors and motors", "Work alongside engineers"],
    hs: ["Engineering pathway", "Robotics", "Computer Science"], usg: "B.S. in Mechatronics Engineering (Kennesaw State, Georgia Southern)",
    tcsg: "Mechatronics or Industrial Systems Technology AAS", also: ["maintenancetech", "robotics", "mecheng", "evtech"]
  },
  robotics: {
    title: "Robotics Technician", sector: "mfg", edu: "assoc", years: "2 yrs", wage: 64000, demand: "High", gem: true,
    summary: "Programs and services the industrial robots that weld car bodies and pack products at Georgia plants.",
    day: ["Program robot paths", "Calibrate vision systems", "Repair robot arms and grippers"],
    hs: ["Robotics team", "Computer Science", "Engineering pathway"], usg: "Robotics/mechatronics engineering",
    tcsg: "Industrial Systems / Robotics certificates", also: ["mechatronics", "maintenancetech", "softwaredev"]
  },
  evtech: {
    title: "EV & Battery Technician", sector: "mfg", edu: "assoc", years: "1–2 yrs", wage: 56000, demand: "Very high", gem: true,
    summary: "Builds, tests, and services the batteries and electric vehicles that are reshaping Georgia's economy.",
    day: ["Test battery cells and modules", "Follow high-voltage safety procedures", "Diagnose EV systems"],
    hs: ["Chemistry", "Engineering pathway", "Automotive pathway"], usg: "Electrical or chemical engineering",
    tcsg: "Electric Vehicle / Automotive Technology and Industrial Systems programs", also: ["maintenancetech", "chemeng", "eleceng", "automotivetech"]
  },
  cnc: {
    title: "CNC Machinist", sector: "mfg", edu: "assoc", years: "1–2 yrs", wage: 50000, demand: "High",
    summary: "Programs computer-controlled machines that cut metal into precise parts for jets, cars, and medical devices.",
    day: ["Read blueprints", "Program CNC machines", "Measure parts to a thousandth of an inch"],
    hs: ["Geometry", "Engineering pathway", "Manufacturing pathway"], usg: null,
    tcsg: "Machine Tool Technology / CNC diploma", also: ["welder", "qualitytech", "mecheng"]
  },
  welder: {
    title: "Welder", sector: "mfg", edu: "cert", years: "Under 1 yr", wage: 48000, demand: "Very high",
    summary: "Joins metal for ships, pipelines, buildings, and cars. Skilled welders can travel the world — or start their own business.",
    day: ["Weld steel and aluminum", "Read blueprints", "Inspect welds for strength"], hs: ["Welding pathway", "Geometry"],
    usg: null, tcsg: "Welding & Joining Technology certificate/diploma", also: ["cnc", "pipefitter", "maintenancetech"]
  },
  qualitytech: {
    title: "Quality Control Technician", sector: "mfg", edu: "assoc", years: "1–2 yrs", wage: 50000, demand: "High",
    summary: "Makes sure every product meets the standard — measuring, testing, and stopping defects before they ship.",
    day: ["Inspect parts and products", "Use precision measuring tools", "Track quality data"], hs: ["Statistics", "Engineering pathway"],
    usg: "Industrial engineering", tcsg: "Manufacturing / Quality certificates", also: ["indeng", "cnc", "foodscientist"]
  },
  mecheng: {
    title: "Mechanical Engineer", sector: "mfg", edu: "bach", years: "4 yrs", wage: 100000, demand: "High",
    summary: "Designs machines, engines, and products — from car parts to medical devices to HVAC systems.",
    day: ["Design in 3D CAD", "Test prototypes", "Solve production problems"], hs: ["Calculus", "Physics", "Engineering pathway"],
    usg: "B.S. in Mechanical Engineering (Georgia Tech, Kennesaw State, Georgia Southern, UGA)", tcsg: "Engineering Technology AAS as a starting point",
    also: ["eleceng", "aeroeng", "indeng", "mechatronics"]
  },
  eleceng: {
    title: "Electrical Engineer", sector: "energy", edu: "bach", years: "4 yrs", wage: 110000, demand: "High",
    summary: "Designs power systems, circuits, and electronics — from the grid to EV batteries to chips.",
    day: ["Design circuits and power systems", "Simulate and test", "Lead projects with technicians"], hs: ["Calculus", "Physics", "Computer Science"],
    usg: "B.S. in Electrical Engineering (Georgia Tech, Kennesaw State, Georgia Southern, UGA)", tcsg: "Electrical Engineering Technology AAS",
    also: ["mecheng", "lineworker", "evtech", "softwaredev"]
  },
  indeng: {
    title: "Industrial Engineer", sector: "mfg", edu: "bach", years: "4 yrs", wage: 98000, demand: "High", gem: true,
    summary: "Makes things work better — designs efficient factories, warehouses, hospitals, and theme-park lines.",
    day: ["Map and improve processes", "Analyze data", "Design layouts and workflows"], hs: ["Statistics", "Calculus", "Business"],
    usg: "B.S. in Industrial Engineering (Georgia Tech, Kennesaw State, Georgia Southern)", tcsg: null,
    also: ["logistician", "qualitytech", "mecheng", "supplychain"]
  },
  chemeng: {
    title: "Chemical Engineer", sector: "mfg", edu: "bach", years: "4 yrs", wage: 110000, demand: "Growing",
    summary: "Turns chemistry into products at scale — batteries, medicines, paper, and food.",
    day: ["Design chemical processes", "Improve safety and yield", "Work in plants and labs"], hs: ["Chemistry", "Calculus", "Physics"],
    usg: "B.S. in Chemical Engineering (Georgia Tech, UGA, Augusta University)", tcsg: null,
    also: ["evtech", "foodscientist", "mecheng"]
  },

  // ─── IT & Cyber ──────────────────────────────────────────────
  softwaredev: {
    title: "Software Developer", sector: "tech", edu: "bach", years: "4 yrs", wage: 125000, demand: "Very high",
    summary: "Builds the apps, websites, and systems that run everything — including the payment systems built in Atlanta.",
    day: ["Write and review code", "Build features with a team", "Fix bugs and ship updates"], hs: ["AP Computer Science", "Math", "Coding clubs"],
    usg: "B.S. in Computer Science or Software Engineering", tcsg: "Computer Programming / Web Development AAS",
    also: ["gamedev", "cyberanalyst", "datascientist", "cloudeng"]
  },
  cyberanalyst: {
    title: "Cybersecurity Analyst", sector: "tech", edu: "bach", years: "2–4 yrs", wage: 110000, demand: "Very high",
    summary: "Defends networks from hackers. Augusta's Cyber Center and Fort Eisenhower make Georgia a national cyber hub.",
    day: ["Monitor for threats", "Investigate incidents", "Harden systems against attacks"], hs: ["Computer Science", "CyberPatriot", "Math"],
    usg: "B.S. in Cybersecurity (Augusta University, Kennesaw State, UNG, Georgia Tech)", tcsg: "Cybersecurity AAS",
    also: ["pentester", "networkadmin", "softwaredev", "police"]
  },
  pentester: {
    title: "Ethical Hacker (Penetration Tester)", sector: "tech", edu: "bach", years: "4 yrs", wage: 115000, demand: "High", gem: true,
    summary: "Gets paid to break in — legally — finding security holes before criminals do.",
    day: ["Test systems for weaknesses", "Write exploit reports", "Teach teams to fix flaws"], hs: ["Computer Science", "CyberPatriot", "Capture-the-Flag contests"],
    usg: "B.S. in Cybersecurity or Computer Science", tcsg: "Cybersecurity AAS + certifications", also: ["cyberanalyst", "softwaredev"]
  },
  networkadmin: {
    title: "Network & Systems Administrator", sector: "tech", edu: "assoc", years: "2 yrs", wage: 90000, demand: "High",
    summary: "Keeps an organization's computers, servers, and Wi-Fi running fast and secure.",
    day: ["Configure networks", "Manage user accounts", "Solve outages"], hs: ["IT pathway", "Computer Science"],
    usg: "B.S. in Information Technology", tcsg: "Networking Specialist AAS", also: ["itsupport", "cloudeng", "cyberanalyst"]
  },
  itsupport: {
    title: "IT Support Specialist", sector: "tech", edu: "cert", years: "Under 1 yr", wage: 58000, demand: "Very high",
    summary: "The tech problem-solver everyone calls first — a fast way into the IT field.",
    day: ["Troubleshoot computers and devices", "Set up new users", "Help people solve problems"], hs: ["IT pathway", "CompTIA A+"],
    usg: null, tcsg: "IT Support Specialist certificate", also: ["networkadmin", "cyberanalyst"]
  },
  datascientist: {
    title: "Data Scientist", sector: "tech", edu: "bach", years: "4–6 yrs", wage: 110000, demand: "Very high",
    summary: "Finds patterns in data to predict what happens next — in sports, health, finance, and shipping.",
    day: ["Clean and analyze data", "Build predictive models", "Explain findings to leaders"], hs: ["Statistics", "Calculus", "Computer Science"],
    usg: "B.S. in Data Science, Statistics, or Computer Science", tcsg: null, also: ["aieng", "softwaredev", "actuary", "finanalyst"]
  },
  aieng: {
    title: "AI / Machine Learning Engineer", sector: "tech", edu: "bach", years: "4–6 yrs", wage: 140000, demand: "Very high", gem: true,
    summary: "Builds the AI systems behind recommendations, self-driving features, and medical imaging.",
    day: ["Train and test AI models", "Build data pipelines", "Deploy AI into real products"], hs: ["Calculus", "Statistics", "AP Computer Science"],
    usg: "B.S. in Computer Science (AI concentration)", tcsg: null, also: ["datascientist", "softwaredev", "robotics"]
  },
  cloudeng: {
    title: "Cloud Engineer", sector: "tech", edu: "bach", years: "2–4 yrs", wage: 120000, demand: "Very high", gem: true,
    summary: "Builds and runs systems in massive data centers — like those rising across metro Atlanta.",
    day: ["Design cloud infrastructure", "Automate deployments", "Monitor performance and cost"], hs: ["Computer Science", "IT pathway"],
    usg: "B.S. in Information Technology or Computer Science", tcsg: "Cloud / Networking certificates", also: ["networkadmin", "softwaredev", "datacentertech"]
  },
  datacentertech: {
    title: "Data Center Technician", sector: "tech", edu: "cert", years: "Under 1 yr", wage: 60000, demand: "Very high", gem: true,
    summary: "Keeps the servers humming inside the giant data centers being built across Georgia.",
    day: ["Install and replace servers", "Run cabling", "Monitor power and cooling"], hs: ["IT pathway", "Electrical basics"],
    usg: null, tcsg: "IT Support / Networking / Electrical certificates", also: ["cloudeng", "electrician", "networkadmin"]
  },
  gamedev: {
    title: "Game Developer", sector: "film", edu: "bach", years: "4 yrs", wage: 95000, demand: "Growing",
    summary: "Designs and codes video games — gameplay, graphics, and the worlds players explore.",
    day: ["Program gameplay systems", "Collaborate with artists", "Playtest and polish"], hs: ["Computer Science", "Art", "Math"],
    usg: "B.S. in Computer Science or Game Design (Kennesaw State, Georgia Tech, Savannah State)", tcsg: "Game Development / Programming AAS",
    also: ["softwaredev", "animator", "aieng"]
  },

  // ─── Logistics & Transportation ──────────────────────────────
  cdldriver: {
    title: "Commercial Truck Driver (CDL)", sector: "logi", edu: "cert", years: "4–8 wks", wage: 55000, demand: "Very high",
    summary: "Moves the goods from the Port of Savannah to every store in America. Start earning in weeks.",
    day: ["Drive regional or long-haul routes", "Inspect your truck", "Deliver on schedule"], hs: ["Driver's license", "Logistics pathway"],
    usg: null, tcsg: "Commercial Truck Driving (CDL) certificate", also: ["diesel", "logistician", "craneop"]
  },
  diesel: {
    title: "Diesel Technician", sector: "logi", edu: "assoc", years: "1–2 yrs", wage: 56000, demand: "Very high",
    summary: "Repairs the trucks, buses, and heavy equipment that keep Georgia moving.",
    day: ["Diagnose engine problems with computers", "Repair brakes, hydraulics, and engines", "Keep fleets on the road"], hs: ["Automotive pathway", "Physics"],
    usg: null, tcsg: "Diesel Equipment Technology diploma", also: ["automotivetech", "aviationmech", "cdldriver"]
  },
  automotivetech: {
    title: "Automotive Technician", sector: "logi", edu: "assoc", years: "1–2 yrs", wage: 50000, demand: "High",
    summary: "Diagnoses and repairs today's computer-filled cars — including hybrids and EVs.",
    day: ["Run computer diagnostics", "Repair engines and electrical systems", "Service EVs and hybrids"], hs: ["Automotive pathway"],
    usg: null, tcsg: "Automotive Technology diploma", also: ["diesel", "evtech"]
  },
  logistician: {
    title: "Logistician", sector: "logi", edu: "bach", years: "4 yrs", wage: 80000, demand: "High",
    summary: "The planner who gets the right product to the right place at the right time — across oceans and highways.",
    day: ["Plan shipments and routes", "Track inventory with software", "Solve delays and disruptions"], hs: ["Business", "Statistics", "Logistics pathway"],
    usg: "B.S. in Logistics & Supply Chain Management (Georgia Southern, Georgia Tech, UNG)", tcsg: "Supply Chain Management AAS",
    also: ["supplychain", "indeng", "warehousesup"]
  },
  supplychain: {
    title: "Supply Chain Analyst", sector: "logi", edu: "bach", years: "4 yrs", wage: 78000, demand: "High", gem: true,
    summary: "Uses data to make global supply chains faster, cheaper, and more reliable.",
    day: ["Analyze shipping and inventory data", "Forecast demand", "Recommend improvements"], hs: ["Statistics", "Business", "Excel skills"],
    usg: "B.B.A. in Supply Chain Management", tcsg: "Supply Chain Management AAS", also: ["logistician", "datascientist", "indeng"]
  },
  warehousesup: {
    title: "Warehouse Operations Supervisor", sector: "logi", edu: "assoc", years: "1–2 yrs", wage: 60000, demand: "High",
    summary: "Leads teams in the massive distribution centers along Georgia's interstates.",
    day: ["Lead shift teams", "Track productivity and safety", "Coordinate inbound and outbound freight"], hs: ["Business", "Logistics pathway"],
    usg: null, tcsg: "Supply Chain / Warehouse certificates", also: ["logistician", "forkliftop"]
  },
  forkliftop: {
    title: "Material Handling / Forklift Operator", sector: "logi", edu: "cert", years: "Weeks", wage: 40000, demand: "Very high",
    summary: "Loads and moves freight in warehouses and ports — a fast entry with room to move up.",
    day: ["Operate forklifts and reach trucks", "Load trailers", "Scan and track inventory"], hs: ["Logistics pathway"],
    usg: null, tcsg: "Forklift / warehouse fast-track certificates (Quick Start)", also: ["warehousesup", "craneop"]
  },
  craneop: {
    title: "Port Crane Operator", sector: "logi", edu: "cert", years: "On-the-job", wage: 70000, demand: "High", gem: true,
    summary: "Lifts shipping containers off giant ships at the Port of Savannah — one of the busiest ports in the U.S.",
    day: ["Operate ship-to-shore or yard cranes", "Coordinate with longshore crews", "Keep cargo moving safely"], hs: ["Logistics pathway", "Physics"],
    usg: null, tcsg: "Heavy equipment & logistics certificates", also: ["heavyequip", "cdldriver", "logistician"]
  },
  pilot: {
    title: "Airline Pilot", sector: "aero", edu: "bach", years: "4–6 yrs", wage: 170000, demand: "High",
    summary: "Flies passengers and cargo around the world from the busiest airport on the planet: Atlanta's Hartsfield-Jackson.",
    day: ["Plan flights and check weather", "Fly the aircraft with a co-pilot", "Handle emergencies calmly"], hs: ["Physics", "Math", "Aviation pathway", "Civil Air Patrol"],
    usg: "B.S. in Aviation (Middle Georgia State University)", tcsg: null, also: ["aviationmech", "atc", "aeroeng", "dronepilot"]
  },

  // ─── Aerospace & Defense ─────────────────────────────────────
  aviationmech: {
    title: "Aircraft Mechanic (A&P)", sector: "aero", edu: "assoc", years: "2 yrs", wage: 75000, demand: "Very high", gem: true,
    summary: "Inspects and repairs airplanes and jet engines — every flight depends on them. Delta TechOps and Gulfstream hire constantly.",
    day: ["Inspect aircraft", "Repair engines and structures", "Sign off that planes are safe to fly"], hs: ["Physics", "Aviation pathway", "Automotive"],
    usg: "Aviation Maintenance (Middle Georgia State)", tcsg: "Aviation Maintenance Technology (Airframe & Powerplant)", also: ["avionics", "diesel", "pilot"]
  },
  avionics: {
    title: "Avionics Technician", sector: "aero", edu: "assoc", years: "2 yrs", wage: 72000, demand: "High", gem: true,
    summary: "Installs and repairs the electronics in aircraft — navigation, radios, and flight computers.",
    day: ["Test aircraft electronics", "Install radar and radios", "Troubleshoot wiring"], hs: ["Physics", "Electronics", "Aviation pathway"],
    usg: null, tcsg: "Avionics / Electronics Technology AAS", also: ["aviationmech", "eleceng"]
  },
  aeroeng: {
    title: "Aerospace Engineer", sector: "aero", edu: "bach", years: "4 yrs", wage: 125000, demand: "High",
    summary: "Designs aircraft, jets, rockets, and drones. Georgia Tech is one of the top aerospace schools in the country.",
    day: ["Design and simulate aircraft systems", "Test prototypes", "Analyze flight data"], hs: ["Calculus", "Physics", "Rocketry clubs"],
    usg: "B.S. in Aerospace Engineering (Georgia Tech)", tcsg: null, also: ["mecheng", "pilot", "aviationmech"]
  },
  atc: {
    title: "Air Traffic Controller", sector: "aero", edu: "assoc", years: "2–4 yrs", wage: 140000, demand: "High", gem: true,
    summary: "Directs planes safely through the sky and on the runway — a high-stakes, high-paying career.",
    day: ["Guide takeoffs and landings", "Track flights on radar", "Make split-second decisions"], hs: ["Math", "Aviation pathway"],
    usg: "Aviation degree; FAA Academy training", tcsg: null, also: ["pilot", "dispatcher"]
  },
  dronepilot: {
    title: "Drone (UAS) Pilot", sector: "aero", edu: "cert", years: "Weeks–1 yr", wage: 60000, demand: "Growing", gem: true,
    summary: "Flies drones to inspect power lines, map farms, film movies, and survey construction sites.",
    day: ["Plan and fly drone missions", "Capture video and mapping data", "Earn FAA Part 107 certification"], hs: ["Aviation pathway", "Film / AV"],
    usg: "Unmanned aircraft programs (Middle Georgia State)", tcsg: "Drone / UAS certificates (varies by college)", also: ["pilot", "precisionag", "lineworker"]
  },

  // ─── Construction & Skilled Trades ───────────────────────────
  electrician: {
    title: "Electrician", sector: "build", edu: "assoc", years: "1–4 yrs", wage: 55000, demand: "Very high",
    summary: "Powers homes, factories, and data centers. Apprentices earn while they learn — no college debt.",
    day: ["Wire buildings", "Install panels and lighting", "Troubleshoot electrical problems"], hs: ["Construction pathway", "Physics", "Math"],
    usg: null, tcsg: "Electrical Construction diploma / apprenticeship", also: ["lineworker", "hvac", "maintenancetech", "solartech"]
  },
  plumber: {
    title: "Plumber & Pipefitter", sector: "build", edu: "assoc", years: "1–4 yrs", wage: 55000, demand: "Very high",
    summary: "Installs and repairs water, gas, and steam systems — from homes to hospitals to factories.",
    day: ["Install piping systems", "Read blueprints", "Solve leaks and problems"], hs: ["Construction pathway", "Math"],
    usg: null, tcsg: "Plumbing diploma / apprenticeship", also: ["pipefitter", "hvac", "electrician"]
  },
  pipefitter: {
    title: "Industrial Pipefitter", sector: "build", edu: "assoc", years: "2–4 yrs", wage: 60000, demand: "High", gem: true,
    summary: "Builds the high-pressure piping in power plants, battery factories, and refineries.",
    day: ["Fabricate and install industrial pipe", "Weld and thread joints", "Pressure-test systems"], hs: ["Welding pathway", "Geometry"],
    usg: null, tcsg: "Pipefitting / Welding programs", also: ["plumber", "welder", "nuclearop"]
  },
  hvac: {
    title: "HVAC Technician", sector: "build", edu: "assoc", years: "1–2 yrs", wage: 52000, demand: "Very high",
    summary: "In Georgia's heat, air conditioning is essential. Installs and repairs heating and cooling systems.",
    day: ["Install HVAC equipment", "Diagnose system problems", "Service commercial and home units"], hs: ["Construction pathway", "Physics"],
    usg: null, tcsg: "Air Conditioning Technology diploma", also: ["electrician", "plumber", "datacentertech"]
  },
  constructionmgr: {
    title: "Construction Manager", sector: "build", edu: "bach", years: "4 yrs", wage: 100000, demand: "High",
    summary: "Leads construction projects from blueprint to ribbon-cutting — budgets, crews, and schedules.",
    day: ["Plan and schedule projects", "Manage subcontractors", "Keep sites safe and on budget"], hs: ["Construction pathway", "Business", "Math"],
    usg: "B.S. in Construction Management (Georgia Southern, Kennesaw State, Georgia Tech)", tcsg: "Construction Management AAS",
    also: ["civileng", "electrician", "buildinginspector"]
  },
  civileng: {
    title: "Civil Engineer", sector: "build", edu: "bach", years: "4 yrs", wage: 95000, demand: "High",
    summary: "Designs roads, bridges, water systems, and stadiums — the infrastructure everyone depends on.",
    day: ["Design projects in CAD", "Visit job sites", "Work with cities and the state DOT"], hs: ["Calculus", "Physics", "Engineering pathway"],
    usg: "B.S. in Civil Engineering (Georgia Tech, Kennesaw State, Georgia Southern, UGA)", tcsg: "Civil Engineering Technology AAS",
    also: ["constructionmgr", "surveyor", "mecheng"]
  },
  surveyor: {
    title: "Land Surveyor", sector: "build", edu: "bach", years: "2–4 yrs", wage: 65000, demand: "High", gem: true,
    summary: "Measures land with GPS, drones, and lasers to set property lines and guide construction.",
    day: ["Work outdoors with GPS and drones", "Create maps and plats", "Mark construction layouts"], hs: ["Geometry", "Trigonometry", "Drafting"],
    usg: "Civil engineering / surveying coursework", tcsg: "Civil Engineering Technology / Surveying", also: ["civileng", "dronepilot"]
  },
  carpenter: {
    title: "Carpenter", sector: "build", edu: "cert", years: "Under 1 yr", wage: 48000, demand: "High",
    summary: "Builds the frames, forms, and finishes of homes and buildings — or movie sets!",
    day: ["Frame walls and roofs", "Build concrete forms", "Install trim and cabinets"], hs: ["Construction pathway", "Geometry"],
    usg: null, tcsg: "Carpentry diploma/certificate", also: ["setbuilder", "constructionmgr"]
  },
  heavyequip: {
    title: "Heavy Equipment Operator", sector: "build", edu: "cert", years: "Under 1 yr", wage: 50000, demand: "High",
    summary: "Runs bulldozers, excavators, and cranes to build highways and job sites.",
    day: ["Operate excavators and loaders", "Grade and dig sites", "Maintain equipment"], hs: ["Construction pathway"],
    usg: null, tcsg: "Heavy Equipment Operation certificate", also: ["craneop", "diesel"]
  },
  buildinginspector: {
    title: "Building Inspector", sector: "build", edu: "assoc", years: "2+ yrs", wage: 60000, demand: "Growing", gem: true,
    summary: "Makes sure buildings are safe and built to code before people move in.",
    day: ["Inspect construction sites", "Review plans", "Approve or flag work"], hs: ["Construction pathway", "Drafting"],
    usg: null, tcsg: "Construction / building trades programs", also: ["constructionmgr", "electrician"]
  },
  elevatormech: {
    title: "Elevator Mechanic", sector: "build", edu: "assoc", years: "4 yr apprenticeship", wage: 95000, demand: "Growing", gem: true,
    summary: "Installs and repairs elevators and escalators — one of the highest-paying trades, learned through paid apprenticeship.",
    day: ["Install elevator systems", "Troubleshoot controls", "Respond to service calls"], hs: ["Physics", "Electrical basics"],
    usg: null, tcsg: "Electrical / Industrial Systems foundations", also: ["electrician", "maintenancetech"]
  },

  // ─── Energy & Utilities ──────────────────────────────────────
  lineworker: {
    title: "Electrical Lineworker", sector: "energy", edu: "cert", years: "Under 1 yr", wage: 80000, demand: "Very high",
    summary: "Climbs poles and works on power lines — the people who turn the lights back on after storms.",
    day: ["Build and repair power lines", "Restore power after storms", "Work at heights with a crew"], hs: ["Energy pathway", "Physical fitness"],
    usg: null, tcsg: "Electrical Lineworker certificate", also: ["electrician", "solartech", "nuclearop"]
  },
  solartech: {
    title: "Solar Installer & Technician", sector: "energy", edu: "cert", years: "Under 1 yr", wage: 46000, demand: "Growing",
    summary: "Installs and maintains solar panels on rooftops and across Georgia's growing solar farms.",
    day: ["Mount panels and wire systems", "Test and maintain arrays", "Work outdoors"], hs: ["Energy pathway", "Electrical basics"],
    usg: null, tcsg: "Electrical / renewable energy certificates", also: ["electrician", "lineworker"]
  },
  nuclearop: {
    title: "Nuclear Power Plant Operator", sector: "energy", edu: "assoc", years: "2+ yrs", wage: 110000, demand: "High", gem: true,
    summary: "Controls a nuclear reactor. Plant Vogtle near Augusta is the largest nuclear plant in the U.S.",
    day: ["Monitor reactor controls", "Follow strict safety procedures", "Train continuously"], hs: ["Physics", "Chemistry", "Math"],
    usg: "Nuclear / engineering programs", tcsg: "Nuclear Energy Technology (e.g., Augusta Tech)", also: ["eleceng", "lineworker", "pipefitter"]
  },
  wateroperator: {
    title: "Water Treatment Operator", sector: "energy", edu: "cert", years: "Under 1 yr", wage: 52000, demand: "High", gem: true,
    summary: "Makes sure every community has clean, safe drinking water.",
    day: ["Monitor treatment systems", "Test water quality", "Maintain pumps and equipment"], hs: ["Chemistry", "Environmental science"],
    usg: "Environmental engineering", tcsg: "Water quality certificates", also: ["civileng", "nuclearop"]
  },

  // ─── Education ───────────────────────────────────────────────
  teacher: {
    title: "K-12 Teacher", sector: "edu", edu: "bach", years: "4 yrs", wage: 64000, demand: "Very high",
    summary: "Shapes the next generation. Georgia needs teachers in math, science, special ed, and CTAE most.",
    day: ["Plan and teach lessons", "Coach and mentor students", "Work with families"], hs: ["Teaching as a Profession pathway", "Your favorite subject"],
    usg: "B.S. in Education (every USG university offers education degrees)", tcsg: "Early Childhood Care & Education as a starting point",
    also: ["specialed", "counselor", "earlychild", "ctaeteacher"]
  },
  specialed: {
    title: "Special Education Teacher", sector: "edu", edu: "bach", years: "4 yrs", wage: 64000, demand: "Very high",
    summary: "Helps students with disabilities learn and thrive — one of the most needed roles in Georgia schools.",
    day: ["Adapt lessons for each student", "Write learning plans (IEPs)", "Work with therapists and families"], hs: ["Teaching as a Profession pathway", "Psychology"],
    usg: "B.S. in Special Education", tcsg: null, also: ["teacher", "slp", "ot"]
  },
  counselor: {
    title: "School Counselor", sector: "edu", edu: "adv", years: "6 yrs", wage: 65000, demand: "High",
    summary: "Helps students plan careers, handle stress, and find their path — maybe someone helped you find this site!",
    day: ["Meet with students", "Plan courses and college apps", "Support mental health"], hs: ["Psychology", "Peer leadership"],
    usg: "Bachelor's → Master's in School Counseling", tcsg: null, also: ["teacher", "specialed"]
  },
  earlychild: {
    title: "Early Childhood Educator", sector: "edu", edu: "assoc", years: "1–2 yrs", wage: 32000, demand: "Very high",
    summary: "Teaches Georgia Pre-K and young learners during the years when brains grow fastest.",
    day: ["Lead learning through play", "Track child development", "Partner with parents"], hs: ["Early Childhood pathway"],
    usg: "B.S. in Early Childhood Education", tcsg: "Early Childhood Care & Education diploma/AAS", also: ["teacher", "specialed"]
  },
  ctaeteacher: {
    title: "Career & Technical (CTAE) Teacher", sector: "edu", edu: "bach", years: "4 yrs", wage: 66000, demand: "High", gem: true,
    summary: "Teaches welding, healthcare, ag, or engineering in high school — often after working in the industry first.",
    day: ["Teach hands-on labs", "Coach students for certifications", "Advise clubs like FFA, HOSA, SkillsUSA"], hs: ["Any CTAE pathway", "Leadership in a student org"],
    usg: "B.S. in Career & Technical Education or Agricultural Education", tcsg: "Industry credential first, then teaching certification",
    also: ["teacher", "welder", "agscientist"]
  },

  // ─── Business & FinTech ──────────────────────────────────────
  accountant: {
    title: "Accountant / CPA", sector: "biz", edu: "bach", years: "4–5 yrs", wage: 80000, demand: "High",
    summary: "Tracks money for companies, governments, and families — and every business needs one.",
    day: ["Prepare financial statements", "Do taxes and audits", "Advise on money decisions"], hs: ["Business pathway", "Math", "Accounting"],
    usg: "B.B.A. in Accounting", tcsg: "Accounting AAS", also: ["finanalyst", "actuary", "payrollspec"]
  },
  finanalyst: {
    title: "Financial Analyst", sector: "biz", edu: "bach", years: "4 yrs", wage: 95000, demand: "High",
    summary: "Analyzes investments and company finances to guide big business decisions.",
    day: ["Build financial models", "Research companies and markets", "Present recommendations"], hs: ["Statistics", "Business", "Economics"],
    usg: "B.B.A. in Finance", tcsg: null, also: ["accountant", "datascientist", "fintechdev"]
  },
  fintechdev: {
    title: "FinTech Developer", sector: "biz", edu: "bach", years: "4 yrs", wage: 120000, demand: "Very high", gem: true,
    summary: "Builds the payment systems behind card swipes and mobile wallets — much of it designed in Atlanta and Columbus.",
    day: ["Code secure payment software", "Protect financial data", "Work with banks and merchants"], hs: ["AP Computer Science", "Business"],
    usg: "B.S. in Computer Science; FinTech programs (Georgia State, Kennesaw State, UGA)", tcsg: "Computer Programming AAS",
    also: ["softwaredev", "cyberanalyst", "finanalyst"]
  },
  actuary: {
    title: "Actuary", sector: "biz", edu: "bach", years: "4 yrs + exams", wage: 115000, demand: "High", gem: true,
    summary: "Uses math to measure risk for insurance companies like Aflac. Perfect for students who love math.",
    day: ["Model risk and probability", "Price insurance products", "Pass professional exams"], hs: ["Calculus", "Statistics", "AP Math"],
    usg: "B.S. in Actuarial Science, Mathematics, or Statistics (e.g., Georgia State)", tcsg: null, also: ["datascientist", "finanalyst", "accountant"]
  },
  hrspecialist: {
    title: "Human Resources Specialist", sector: "biz", edu: "bach", years: "4 yrs", wage: 65000, demand: "High",
    summary: "Recruits, hires, and supports the people who make a company work.",
    day: ["Recruit and interview candidates", "Manage benefits", "Help solve workplace issues"], hs: ["Business", "Psychology"],
    usg: "B.B.A. in Management / HR", tcsg: "Business Management AAS", also: ["accountant", "payrollspec"]
  },
  payrollspec: {
    title: "Payroll & Bookkeeping Specialist", sector: "biz", edu: "cert", years: "Under 1 yr", wage: 48000, demand: "High",
    summary: "Makes sure everyone gets paid correctly and on time — in-demand in every industry.",
    day: ["Process payroll", "Reconcile accounts", "Use accounting software"], hs: ["Accounting", "Business pathway"],
    usg: null, tcsg: "Accounting / Payroll certificates", also: ["accountant", "hrspecialist"]
  },

  // ─── Public Safety ───────────────────────────────────────────
  police: {
    title: "Police Officer / Sheriff's Deputy", sector: "safety", edu: "cert", years: "Academy (~4–6 mo)", wage: 52000, demand: "Very high",
    summary: "Protects communities, responds to emergencies, and investigates crimes.",
    day: ["Patrol and respond to calls", "Help people in crisis", "Investigate and write reports"], hs: ["Law & Justice pathway", "Physical fitness"],
    usg: "B.S. in Criminal Justice", tcsg: "Criminal Justice + POST basic law enforcement academy", also: ["dispatcher", "forensictech", "cyberanalyst", "firefighter"]
  },
  firefighter: {
    title: "Firefighter", sector: "safety", edu: "cert", years: "Academy + EMT", wage: 45000, demand: "High",
    summary: "Fights fires, responds to medical calls, and rescues people — most firefighters are also EMTs.",
    day: ["Respond to fires and medical calls", "Train constantly", "Live at the station for 24-hour shifts"], hs: ["Fire & Emergency Services pathway", "EMT"],
    usg: "Fire Science / Emergency Management", tcsg: "Fire Science Technology + EMT", also: ["paramedic", "police", "dispatcher"]
  },
  dispatcher: {
    title: "911 Dispatcher", sector: "safety", edu: "cert", years: "Weeks", wage: 42000, demand: "Very high", gem: true,
    summary: "The calm voice on the line in an emergency — sends help and talks callers through crises.",
    day: ["Answer 911 calls", "Dispatch police, fire, and EMS", "Give CPR instructions by phone"], hs: ["Law & Justice pathway", "Communication"],
    usg: null, tcsg: "Criminal Justice / dispatcher certification", also: ["police", "paramedic", "atc"]
  },
  forensictech: {
    title: "Forensic Science Technician", sector: "safety", edu: "bach", years: "4 yrs", wage: 60000, demand: "Growing", gem: true,
    summary: "Collects and analyzes evidence from crime scenes — DNA, fingerprints, and more. Like TV, but real.",
    day: ["Process crime scenes", "Analyze evidence in the lab", "Testify in court"], hs: ["Chemistry", "Biology", "Law & Justice pathway"],
    usg: "B.S. in Forensic Science or Chemistry", tcsg: "Criminal Justice AAS", also: ["medlabtech", "police", "cyberanalyst"]
  },

  // ─── Agriculture & Food ──────────────────────────────────────
  agscientist: {
    title: "Agricultural & Food Scientist", sector: "ag", edu: "bach", years: "4 yrs", wage: 75000, demand: "High",
    summary: "Improves crops, livestock, and food safety — using science to feed the world.",
    day: ["Run field and lab experiments", "Develop better crops", "Advise farmers"], hs: ["Biology", "Chemistry", "Ag Science / FFA"],
    usg: "B.S. in Agriculture (UGA, ABAC, Fort Valley State)", tcsg: null, also: ["foodscientist", "precisionag", "vet", "forester"]
  },
  foodscientist: {
    title: "Food Scientist", sector: "ag", edu: "bach", years: "4 yrs", wage: 80000, demand: "Growing", gem: true,
    summary: "Invents new foods and keeps them safe — at companies like Coca-Cola, Chick-fil-A, and Georgia's food processors.",
    day: ["Develop recipes and products", "Test food safety", "Scale up production"], hs: ["Chemistry", "Culinary pathway", "Biology"],
    usg: "B.S. in Food Science (UGA)", tcsg: "Food processing / culinary programs", also: ["agscientist", "qualitytech", "chemeng"]
  },
  poultryspec: {
    title: "Poultry Science Specialist", sector: "ag", edu: "bach", years: "4 yrs", wage: 70000, demand: "High", gem: true,
    summary: "Georgia is America's top chicken-producing state. Manage flocks, nutrition, and food safety for the industry.",
    day: ["Manage poultry operations", "Improve animal health and nutrition", "Ensure food safety"], hs: ["Ag Science / FFA", "Biology"],
    usg: "B.S. in Poultry Science (UGA, ABAC)", tcsg: null, also: ["vet", "agscientist", "foodscientist"]
  },
  precisionag: {
    title: "Precision Agriculture Technician", sector: "ag", edu: "assoc", years: "2 yrs", wage: 55000, demand: "Growing", gem: true,
    summary: "Uses GPS, drones, and sensors to help farmers grow more with less water and fertilizer.",
    day: ["Fly drones over fields", "Set up GPS-guided equipment", "Analyze crop data"], hs: ["Ag Science / FFA", "Computer Science"],
    usg: "Agriculture degrees (ABAC, UGA Tifton)", tcsg: "Agricultural / precision ag programs", also: ["dronepilot", "agscientist", "agequiptech"]
  },
  agequiptech: {
    title: "Agricultural Equipment Technician", sector: "ag", edu: "assoc", years: "1–2 yrs", wage: 52000, demand: "High",
    summary: "Repairs the tractors, combines, and high-tech machinery that keep Georgia's farms running.",
    day: ["Diagnose equipment with computers", "Repair engines and hydraulics", "Service GPS guidance systems"], hs: ["Ag Mechanics / FFA", "Automotive"],
    usg: null, tcsg: "Diesel / Agricultural Equipment Technology", also: ["diesel", "precisionag"]
  },
  forester: {
    title: "Forester", sector: "ag", edu: "bach", years: "4 yrs", wage: 65000, demand: "Steady",
    summary: "Manages Georgia's 24 million acres of forest for timber, wildlife, and recreation.",
    day: ["Survey and measure forests", "Plan timber harvests", "Fight wildfires and pests"], hs: ["Biology", "Ag Science / Forestry"],
    usg: "B.S. in Forestry (UGA Warnell School, ABAC)", tcsg: "Forest Technology", also: ["agscientist", "wildlifetech"]
  },
  wildlifetech: {
    title: "Wildlife & Natural Resources Technician", sector: "ag", edu: "assoc", years: "2 yrs", wage: 45000, demand: "Steady",
    summary: "Protects Georgia's wildlife, rivers, and coasts — working outdoors in parks and preserves.",
    day: ["Track wildlife populations", "Restore habitat", "Educate visitors"], hs: ["Environmental science", "Biology", "FFA"],
    usg: "B.S. in Wildlife Biology (UGA, ABAC)", tcsg: "Forest / natural resources programs", also: ["forester", "vettech"]
  },

  // ─── Film & Creative Media ───────────────────────────────────
  grip: {
    title: "Grip / Rigging Technician", sector: "film", edu: "cert", years: "Under 1 yr", wage: 55000, demand: "High", gem: true,
    summary: "Builds the rigs that hold cameras and lights on movie sets. Georgia hosts major productions every year.",
    day: ["Rig cameras on cranes and cars", "Shape light with flags and frames", "Move fast on set"], hs: ["AV & Film pathway", "Construction pathway"],
    usg: null, tcsg: "Georgia Film Academy certificates", also: ["gaffer", "setbuilder", "carpenter"]
  },
  gaffer: {
    title: "Set Lighting Technician", sector: "film", edu: "cert", years: "Under 1 yr", wage: 60000, demand: "High", gem: true,
    summary: "Lights the scene for movies and TV — part electrician, part artist.",
    day: ["Set and power lights", "Run cable safely", "Shape the look of a scene"], hs: ["AV & Film pathway", "Electrical basics"],
    usg: null, tcsg: "Georgia Film Academy certificates", also: ["grip", "electrician", "videoeditor"]
  },
  setbuilder: {
    title: "Set Construction Carpenter", sector: "film", edu: "cert", years: "Under 1 yr", wage: 52000, demand: "High", gem: true,
    summary: "Builds entire worlds — houses, spaceships, and city streets — on Georgia's soundstages.",
    day: ["Build sets from designs", "Work with painters and designers", "Tear down and rebuild fast"], hs: ["Construction pathway", "Art"],
    usg: null, tcsg: "Carpentry or Georgia Film Academy certificates", also: ["carpenter", "grip"]
  },
  videoeditor: {
    title: "Video Editor", sector: "film", edu: "bach", years: "2–4 yrs", wage: 65000, demand: "Growing",
    summary: "Shapes raw footage into movies, shows, ads, and YouTube content that keeps people watching.",
    day: ["Cut and assemble footage", "Add music, color, and effects", "Work with directors"], hs: ["AV & Film pathway", "Art"],
    usg: "B.A. in Film / Media (Georgia State, Kennesaw State, UGA)", tcsg: "Digital Media / Video Production AAS", also: ["animator", "gaffer", "gamedev"]
  },
  animator: {
    title: "Animator & VFX Artist", sector: "film", edu: "bach", years: "4 yrs", wage: 80000, demand: "Growing",
    summary: "Creates 3D characters, visual effects, and animation for film, TV, and games.",
    day: ["Model and animate in 3D", "Composite visual effects", "Iterate with directors"], hs: ["Art", "Computer Science", "AV & Film pathway"],
    usg: "B.F.A./B.S. in Animation or Interactive Design (Kennesaw State, Georgia State)", tcsg: "Digital media / animation programs",
    also: ["gamedev", "videoeditor"]
  }
};

// "Dreams": the career a student is already thinking about, and the
// constellation of related careers they might not have heard of.
window.DREAMS = [
  { id: "doctor", label: "a doctor", emoji: "🩺", careers: ["physician", "anesthesiologist", "surgeon", "pa", "np", "crna", "perfusionist", "surgtech", "anesthesiatech", "sterileproc", "radtech", "sonographer", "resptherapist", "paramedic", "medlabtech", "pharmacist"] },
  { id: "nurse", label: "a nurse", emoji: "💉", careers: ["rn", "lpn", "cna", "np", "crna", "medassist", "surgtech", "phlebotomist", "resptherapist", "paramedic"] },
  { id: "sports", label: "in sports", emoji: "🏈", careers: ["athletictrainer", "pt", "pta", "ot", "ota", "physician", "datascientist", "videoeditor"] },
  { id: "engineer", label: "an engineer", emoji: "🛠", careers: ["mecheng", "eleceng", "indeng", "chemeng", "civileng", "aeroeng", "mechatronics", "robotics", "maintenancetech", "evtech", "cnc", "qualitytech"] },
  { id: "computers", label: "in computers", emoji: "💻", careers: ["softwaredev", "cyberanalyst", "pentester", "aieng", "datascientist", "cloudeng", "datacentertech", "networkadmin", "itsupport", "gamedev", "fintechdev"] },
  { id: "builder", label: "a builder", emoji: "🏗", careers: ["electrician", "plumber", "hvac", "welder", "pipefitter", "lineworker", "elevatormech", "carpenter", "heavyequip", "constructionmgr", "civileng", "surveyor", "buildinginspector"] },
  { id: "pilot", label: "a pilot", emoji: "✈️", careers: ["pilot", "aviationmech", "avionics", "atc", "aeroeng", "dronepilot"] },
  { id: "teacher", label: "a teacher", emoji: "🍎", careers: ["teacher", "specialed", "earlychild", "ctaeteacher", "counselor", "slp"] },
  { id: "animals", label: "with animals", emoji: "🐾", careers: ["vet", "vettech", "poultryspec", "agscientist", "wildlifetech", "forester", "foodscientist"] },
  { id: "film", label: "in movies", emoji: "🎬", careers: ["grip", "gaffer", "setbuilder", "videoeditor", "animator", "gamedev", "dronepilot"] },
  { id: "protect", label: "a first responder", emoji: "🚒", careers: ["police", "firefighter", "paramedic", "dispatcher", "forensictech", "cyberanalyst"] },
  { id: "business", label: "in business", emoji: "📈", careers: ["accountant", "finanalyst", "actuary", "fintechdev", "logistician", "supplychain", "hrspecialist", "payrollspec"] },
  { id: "cars", label: "working on cars", emoji: "🚗", careers: ["automotivetech", "diesel", "evtech", "maintenancetech", "agequiptech", "aviationmech", "cdldriver"] },
  { id: "outdoors", label: "outdoors", emoji: "🌲", careers: ["forester", "wildlifetech", "precisionag", "lineworker", "surveyor", "solartech", "heavyequip", "wateroperator"] },
  { id: "ships", label: "in shipping", emoji: "🚢", careers: ["craneop", "logistician", "supplychain", "cdldriver", "diesel", "warehousesup", "forkliftop"] },
  { id: "energy", label: "in energy", emoji: "⚡", careers: ["nuclearop", "lineworker", "eleceng", "solartech", "electrician", "wateroperator", "pipefitter"] }
];
