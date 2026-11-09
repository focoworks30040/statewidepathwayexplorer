// Forsyth County data for the FOCO Works Pathway Explorer layout.
//
// Industries, school programs, high-school pathways, employers, and the local
// careers (with Forsyth pay ranges) come from the FOCO Works Pathway Explorer
// (focoworkspathwayexplorer.com), a Forsyth County Chamber of Commerce resource.
// Careers marked local: false are statewide roles added so students can see the
// whole team around a familiar job; their pay is an approximate Georgia median.
//
// highDemand lists occupations (by SOC code) from Georgia's High-Demand Career
// List; a career with a matching "soc" is marked "Georgia High-Demand Career".
//
// tcsgPrograms lists programs at every Technical College System of Georgia
// college, by industry, for the "additional education options" view.
//
// Edit this file directly to change what the site shows.
window.FOCO = {
 "careers": {
  "welder": {
   "title": "Welder",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "Very high",
   "gem": false,
   "summary": "Joins metal for ships, pipelines, buildings, and cars. Skilled welders can travel the world — or start their own business.",
   "pay": "$42,000–$65,000",
   "payShort": "$42K–$65K",
   "wage": 53500,
   "learn": "Lanier Tech Welding & Joining Technology or equivalent certificate",
   "dayText": "You read blueprints, set up welding equipment, and join metal parts for local manufacturers. Mornings often involve inspecting completed welds and adjusting settings for precision work. High demand and strong overtime opportunities.",
   "hs": [
    "Welding pathway",
    "Geometry"
   ],
   "programs": [
    {
     "school": "lanier",
     "name": "Welding & Joining Technology"
    }
   ],
   "employers": [
    "Precision Welding Group",
    "American BOA Inc",
    "Dependable Tube Bending LLC",
    "Flex Fab Inc.",
    "Motovario Corporation"
   ],
   "also": [
    "cnc",
    "maintenancetech"
   ]
  },
  "cnc": {
   "title": "CNC Machinist",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Programs computer-controlled machines that cut metal into precise parts for jets, cars, and medical devices.",
   "pay": "$40,000–$62,000",
   "payShort": "$40K–$62K",
   "wage": 51000,
   "learn": "Lanier Tech Precision Machining & Manufacturing",
   "dayText": "You program and operate CNC equipment to cut metal parts to exact tolerances. Work includes reading technical drawings, setting up tooling, and checking finished parts with measuring instruments.",
   "hs": [
    "Automotive Technology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Automotive Technology"
    },
    {
     "school": "lanier",
     "name": "Precision Machining & Manufacturing"
    }
   ],
   "employers": [
    "DMAC Industries, Inc",
    "Precision Welding Group",
    "Dependable Tube Bending LLC",
    "S & S Technical, LLC"
   ],
   "also": [
    "welder",
    "qualitytech",
    "mecheng"
   ]
  },
  "mechatronics": {
   "title": "Mechatronics Technician",
   "inds": [
    "mfg",
    "tech"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Part mechanic, part electrician, part programmer — builds and maintains automated production lines.",
   "pay": "$45,000–$72,000",
   "payShort": "$45K–$72K",
   "wage": 58500,
   "learn": "Lanier Tech Mechatronics Technology (A.A.S.)",
   "dayText": "You maintain and troubleshoot automated production lines — part electrical, part mechanical, part software. A typical shift might involve diagnosing a sensor fault, then programming a small fix on a PLC.",
   "hs": [
    "Mechatronics"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Mechatronics"
    },
    {
     "school": "lanier",
     "name": "Mechatronics Technology (A.A.S.)"
    },
    {
     "school": "lanier",
     "name": "Automation Technology (A.A.S.)"
    },
    {
     "school": "lanier",
     "name": "Electrical Systems Technology"
    },
    {
     "school": "lanier",
     "name": "Building Automation Systems"
    }
   ],
   "employers": [
    "Siemens Corporation",
    "Kamstrup Water Metering LLC",
    "FUTURA North America Inc.",
    "L3 Harris"
   ],
   "also": [
    "maintenancetech",
    "robotics",
    "mecheng",
    "evtech"
   ]
  },
  "automationtech": {
   "title": "Automation Technician",
   "inds": [
    "mfg",
    "tech"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Installs, programs, and services the robots and automated assembly lines in Forsyth County plants.",
   "pay": "$48,000–$76,000",
   "payShort": "$48K–$76K",
   "wage": 62000,
   "learn": "Lanier Tech Automation Technology (A.A.S.) or Mechatronics",
   "dayText": "You install, program, and service robotic systems and automated assembly equipment. Forsyth County's manufacturing base — especially electronics and machining — keeps demand high year-round.",
   "hs": [
    "Engineering & Technology",
    "Mechatronics"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Engineering & Technology"
    },
    {
     "school": "fcs",
     "name": "Mechatronics"
    },
    {
     "school": "lanier",
     "name": "Mechatronics Technology (A.A.S.)"
    },
    {
     "school": "lanier",
     "name": "Automation Technology (A.A.S.)"
    },
    {
     "school": "lanier",
     "name": "Electrical Systems Technology"
    },
    {
     "school": "lanier",
     "name": "Building Automation Systems"
    },
    {
     "school": "ung",
     "name": "Engineering Technology (A.S.)"
    }
   ],
   "employers": [
    "Siemens Corporation",
    "Rockwell Automation",
    "Container Automation Systems",
    "AGILOX North America"
   ],
   "also": [
    "mechatronics",
    "robotics",
    "electricaltech"
   ]
  },
  "mfgeng": {
   "title": "Manufacturing Engineer",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Designs how products get made — then makes the process faster, safer, and higher quality.",
   "pay": "$62,000–$92,000",
   "payShort": "$62K–$92K",
   "wage": 77000,
   "learn": "UNG Engineering Technology (A.S.) or B.S. Engineering",
   "dayText": "You design production processes, improve efficiency, and solve quality problems on the floor. Expect a mix of desk work analyzing data and time walking the line with operators.",
   "hs": [
    "Engineering & Technology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Engineering & Technology"
    },
    {
     "school": "ung",
     "name": "Engineering (A.S.)"
    },
    {
     "school": "ung",
     "name": "Engineering Technology (A.S.)"
    },
    {
     "school": "ung",
     "name": "Technology Management (B.A.S.)"
    },
    {
     "school": "ung",
     "name": "Digital Design & Fabrication Certificate"
    }
   ],
   "employers": [
    "Siemens Corporation",
    "L3 Harris",
    "Kamstrup Water Metering LLC",
    "FUTURA North America Inc."
   ],
   "also": [
    "indeng",
    "mecheng",
    "qualitytech",
    "drafter"
   ]
  },
  "qualitytech": {
   "title": "Quality Control Technician",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Makes sure every product meets the standard — measuring, testing, and stopping defects before they ship.",
   "pay": "$38,000–$55,000",
   "payShort": "$38K–$55K",
   "wage": 46500,
   "learn": "Lanier Tech Precision Machining or any manufacturing certificate",
   "dayText": "You measure and test finished parts using calipers, gauges, and inspection software to verify they meet spec. Attention to detail is the core skill — a missed defect can affect safety.",
   "hs": [
    "Automotive Technology",
    "Heavy Equipment Operations",
    "Construction & Carpentry"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Automotive Technology"
    },
    {
     "school": "fcs",
     "name": "Heavy Equipment Operations"
    },
    {
     "school": "fcs",
     "name": "Construction & Carpentry"
    },
    {
     "school": "lanier",
     "name": "Precision Machining & Manufacturing"
    }
   ],
   "employers": [
    "Precision Welding Group",
    "DMAC Industries, Inc",
    "S & S Technical, LLC",
    "Flex Fab Inc."
   ],
   "also": [
    "indeng",
    "cnc",
    "foodscientist"
   ]
  },
  "drafter": {
   "title": "Drafter / CAD Designer",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Turns engineers' ideas into precise 2D and 3D models that go straight to the shop floor.",
   "pay": "$44,000–$66,000",
   "payShort": "$44K–$66K",
   "wage": 55000,
   "learn": "Lanier Tech Drafting Technology or FCS Engineering & Technology pathway",
   "dayText": "You translate engineer sketches and verbal specs into precise 2D and 3D digital models using AutoCAD or SolidWorks. Files you produce go directly to the shop floor.",
   "hs": [
    "Engineering & Technology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Engineering & Technology"
    },
    {
     "school": "lanier",
     "name": "Drafting Technology"
    },
    {
     "school": "ung",
     "name": "Engineering (A.S.)"
    },
    {
     "school": "ung",
     "name": "Digital Design & Fabrication Certificate"
    }
   ],
   "employers": [
    "MRI Next Generation Manufacturing",
    "L3 Harris",
    "Dieffenbacher USA, Inc."
   ],
   "also": [
    "mfgeng",
    "mecheng",
    "cnc"
   ]
  },
  "electricaltech": {
   "title": "Electrical Systems Tech",
   "inds": [
    "mfg"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Wires and troubleshoots the control panels and electrical systems that keep production running.",
   "pay": "$44,000–$68,000",
   "payShort": "$44K–$68K",
   "wage": 56000,
   "learn": "Lanier Tech Electrical Systems Technology or FCS Engineering & Technology pathway",
   "dayText": "You install, wire, and troubleshoot the electrical systems and control panels that keep production equipment running. Work ranges from new equipment installs to emergency repairs on the plant floor.",
   "hs": [],
   "programs": [],
   "employers": [
    "Siemens Corporation",
    "Kamstrup Water Metering LLC",
    "Swagelok",
    "Sterling Deaerator Company"
   ],
   "also": [
    "mechatronics",
    "automationtech",
    "eleceng"
   ]
  },
  "rn": {
   "title": "Registered Nurse",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2–4 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "The heartbeat of every hospital. Cares for patients, gives medications, and coordinates the care team. Georgia needs thousands more.",
   "pay": "$60,000–$88,000",
   "payShort": "$60K–$88K",
   "wage": 74000,
   "learn": "Lanier Tech A.S. in Nursing (ASN) or UNG BSN",
   "dayText": "Your day moves fast — assessing patients, administering medications, and coordinating care across a busy floor. Forsyth's hospitals and urgent care clinics are among the county's largest employers.",
   "hs": [
    "Allied Health & Medicine",
    "Public Health"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Allied Health & Medicine"
    },
    {
     "school": "fcs",
     "name": "Public Health"
    },
    {
     "school": "lanier",
     "name": "Associate of Science in Nursing"
    },
    {
     "school": "lanier",
     "name": "Practical Nursing"
    },
    {
     "school": "ung",
     "name": "Nursing (BSN)"
    }
   ],
   "employers": [
    "Northside Hospital-Forsyth",
    "Northeast Georgia Health System",
    "Wellstar North Fulton Medical Center",
    "Encompass Health Rehabilitation Hospital"
   ],
   "also": [
    "lpn",
    "np",
    "crna",
    "cna"
   ],
   "soc": "29-1141"
  },
  "dentalhyg": {
   "title": "Dental Hygienist",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2–3 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Cleans teeth, takes X-rays, and teaches healthy habits — great pay and flexible schedules.",
   "pay": "$58,000–$80,000",
   "payShort": "$58K–$80K",
   "wage": 69000,
   "learn": "Lanier Tech Dental Hygiene (A.A.S.)",
   "dayText": "You clean teeth, take X-rays, and screen patients for gum disease and oral cancer — often seeing six or more patients per day in one of Forsyth County's many dental practices.",
   "hs": [
    "Biology",
    "Chemistry"
   ],
   "programs": [
    {
     "school": "lanier",
     "name": "Dental Hygiene & Dental Assisting"
    }
   ],
   "employers": [
    "Bragg Dental",
    "Serenity Orthodontics",
    "Cumming Pediatric Dentistry & Orthodontics",
    "HOPE Primary Care & Dentistry"
   ],
   "also": [
    "dentist",
    "radtech",
    "dentalasst"
   ],
   "soc": "29-1292"
  },
  "medassist": {
   "title": "Medical Assistant",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "Very high",
   "gem": false,
   "summary": "Keeps doctors' offices running — takes vitals, gives shots, and handles patient records.",
   "pay": "$32,000–$46,000",
   "payShort": "$32K–$46K",
   "wage": 39000,
   "learn": "Lanier Tech Medical Assisting (diploma or A.A.S.)",
   "dayText": "You room patients, take vitals, assist physicians during exams, and handle administrative tasks like scheduling and insurance forms. A great entry point into healthcare.",
   "hs": [
    "Allied Health & Medicine",
    "Sports Medicine",
    "Mental Health Professional",
    "Public Health"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Allied Health & Medicine"
    },
    {
     "school": "fcs",
     "name": "Sports Medicine"
    },
    {
     "school": "fcs",
     "name": "Mental Health Professional"
    },
    {
     "school": "fcs",
     "name": "Public Health"
    },
    {
     "school": "lanier",
     "name": "Medical Assisting"
    },
    {
     "school": "lanier",
     "name": "Physical Therapist Assistant (A.A.S.)"
    },
    {
     "school": "lanier",
     "name": "Health Information Management"
    },
    {
     "school": "ung",
     "name": "Health Informatics & Administration"
    },
    {
     "school": "ung",
     "name": "Human Services Delivery & Administration"
    }
   ],
   "employers": [
    "HOPE Primary Care & Dentistry",
    "Northeast Georgia Health System",
    "Northside Hospital-Forsyth",
    "Children's Healthcare of Atlanta Forsyth"
   ],
   "also": [
    "lpn",
    "pa",
    "phlebotomist"
   ],
   "soc": "31-9092"
  },
  "paramedic": {
   "title": "EMT / Paramedic",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "The first medical provider on scene of emergencies — treating patients in the ambulance on the way to the ER.",
   "pay": "$34,000–$56,000",
   "payShort": "$34K–$56K",
   "wage": 45000,
   "learn": "Lanier Tech EMS Education (EMT or Paramedic certificate)",
   "dayText": "You respond to 911 calls, stabilize patients, and transport them to care. Shifts are high-energy and unpredictable — Forsyth County's rapid growth keeps call volume rising.",
   "hs": [
    "Sports Medicine",
    "Emergency Medical Services"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Sports Medicine"
    },
    {
     "school": "fcs",
     "name": "Emergency Medical Services"
    },
    {
     "school": "lanier",
     "name": "EMS Education"
    },
    {
     "school": "ung",
     "name": "Kinesiology (A.S. & B.S.)"
    }
   ],
   "employers": [
    "Central EMS",
    "Northeast Georgia Health System"
   ],
   "also": [
    "rn",
    "pa"
   ]
  },
  "radtech": {
   "title": "Radiologic Technologist",
   "inds": [
    "health",
    "bio"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Takes the X-rays, CT, and MRI scans doctors use to find broken bones, tumors, and more.",
   "pay": "$52,000–$74,000",
   "payShort": "$52K–$74K",
   "wage": 63000,
   "learn": "Lanier Tech Radiologic Technology / CT (A.A.S.)",
   "dayText": "You position patients and operate X-ray, CT, and MRI equipment to produce the diagnostic images doctors use to guide treatment. Precision and patient communication are both key.",
   "hs": [
    "Physics",
    "Anatomy",
    "Health Science pathway"
   ],
   "programs": [
    {
     "school": "lanier",
     "name": "Radiologic Technology / CT"
    },
    {
     "school": "ung",
     "name": "Clinical Health Sciences (A.S.)"
    }
   ],
   "employers": [
    "Northside Hospital-Forsyth",
    "Northeast Georgia Health System",
    "Advanced Imaging Centers"
   ],
   "also": [
    "sonographer",
    "physician",
    "surgtech"
   ],
   "soc": "29-2034"
  },
  "pta": {
   "title": "Physical Therapist Assistant",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Works hands-on with patients to carry out their therapy plan — with just a two-year degree.",
   "pay": "$50,000–$66,000",
   "payShort": "$50K–$66K",
   "wage": 58000,
   "learn": "Lanier Tech Physical Therapist Assistant (A.A.S.)",
   "dayText": "You guide patients through exercises and treatments prescribed by a physical therapist, track progress, and help people recover mobility after injury or surgery. Most days are spent hands-on in a clinic or rehab setting.",
   "hs": [
    "Anatomy",
    "Sports Medicine pathway"
   ],
   "programs": [],
   "employers": [
    "Encompass Health Rehabilitation Hospital",
    "Northside Hospital-Forsyth",
    "Northeast Georgia Health System"
   ],
   "also": [
    "pt",
    "athletictrainer",
    "ota"
   ],
   "soc": "31-2021"
  },
  "healthinfo": {
   "title": "Health Information Specialist",
   "inds": [
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Keeps patient records accurate, coded, and secure — the behind-the-scenes job every clinic depends on.",
   "pay": "$38,000–$58,000",
   "payShort": "$38K–$58K",
   "wage": 48000,
   "learn": "Lanier Tech Health Information Management",
   "dayText": "You manage patient records, code diagnoses and procedures for billing, and make sure health data stays accurate and secure under HIPAA rules. A behind-the-scenes role essential to every clinic and hospital.",
   "hs": [],
   "programs": [],
   "employers": [
    "Northside Hospital-Forsyth",
    "Northeast Georgia Health System",
    "Wellstar North Fulton Medical Center"
   ],
   "also": [
    "medassist",
    "dataanalyst"
   ],
   "soc": "29-2072"
  },
  "phlebotomist": {
   "title": "Phlebotomist",
   "inds": [
    "health",
    "bio"
   ],
   "local": true,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Draws blood for tests, donations, and transfusions — a fast way to start working in healthcare.",
   "pay": "$30,000–$42,000",
   "payShort": "$30K–$42K",
   "wage": 36000,
   "learn": "FCS Phlebotomy pathway or Lanier Tech certificate",
   "dayText": "You draw blood specimens for lab testing — a fast-paced role with lots of patient interaction across hospitals, clinics, and standalone lab sites.",
   "hs": [
    "Clinical Lab",
    "Phlebotomy"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Clinical Lab"
    },
    {
     "school": "fcs",
     "name": "Phlebotomy"
    },
    {
     "school": "lanier",
     "name": "Phlebotomy"
    }
   ],
   "employers": [
    "LabCorp",
    "Quest Diagnostics",
    "Northside Hospital-Forsyth",
    "Children's Healthcare of Atlanta Forsyth"
   ],
   "also": [
    "medlabtech",
    "cna",
    "medassist"
   ],
   "soc": "31-9097"
  },
  "labtech": {
   "title": "Lab Technician",
   "inds": [
    "bio",
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2–4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Runs the tests on blood and tissue samples that tell doctors what's going on.",
   "pay": "$38,000–$58,000",
   "payShort": "$38K–$58K",
   "wage": 48000,
   "learn": "Lanier Tech or UNG Clinical Health Sciences / Biology",
   "dayText": "You run tests on blood, tissue, and other specimens using analyzers and microscopes, then report results to physicians. Forsyth's growing lab and life-sciences sector has strong demand.",
   "hs": [
    "Clinical Lab",
    "Biotechnology",
    "Public Health"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Clinical Lab"
    },
    {
     "school": "ung",
     "name": "Clinical Health Sciences (A.S.)"
    },
    {
     "school": "fcs",
     "name": "Biotechnology"
    },
    {
     "school": "fcs",
     "name": "Public Health"
    },
    {
     "school": "lanier",
     "name": "Medical lab support coursework"
    }
   ],
   "employers": [
    "LabCorp",
    "Quest Diagnostics",
    "Diagnostic Solutions Laboratory",
    "Omega Molecular Laboratories"
   ],
   "also": [
    "medlabtech",
    "phlebotomist",
    "researchasst"
   ],
   "soc": "29-2018"
  },
  "biologist": {
   "title": "Biologist",
   "inds": [
    "bio"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": false,
   "summary": "Designs experiments and studies living things — the research behind new medicines and medical devices.",
   "pay": "$50,000–$78,000",
   "payShort": "$50K–$78K",
   "wage": 64000,
   "learn": "UNG Biology (B.S.) or Chemistry (B.S.)",
   "dayText": "You design and conduct experiments, analyze data, and write reports in a laboratory or field setting. Entry-level roles often support senior researchers at biotech and pharmaceutical firms.",
   "hs": [],
   "programs": [
    {
     "school": "ung",
     "name": "Biology (B.S.)"
    },
    {
     "school": "ung",
     "name": "Chemistry (B.S.)"
    },
    {
     "school": "ung",
     "name": "Chemistry with Biochemistry Concentration"
    }
   ],
   "employers": [
    "SYENSQO",
    "Alimera Sciences",
    "Children's Healthcare of Atlanta (Research)"
   ],
   "also": [
    "chemist",
    "researchasst",
    "labtech"
   ]
  },
  "chemist": {
   "title": "Chemist / Biochemist",
   "inds": [
    "bio"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": false,
   "summary": "Analyzes and develops chemical compounds for products, medicines, and quality programs.",
   "pay": "$52,000–$82,000",
   "payShort": "$52K–$82K",
   "wage": 67000,
   "learn": "UNG Chemistry (B.S.) or Chemistry with Biochemistry Concentration",
   "dayText": "You run chemical analyses, formulate or test compounds, and document results to support product development or quality programs. Work happens mostly in a lab, often alongside biologists and engineers.",
   "hs": [],
   "programs": [],
   "employers": [
    "SYENSQO",
    "Alimera Sciences"
   ],
   "also": [
    "biologist",
    "qcanalyst",
    "chemeng"
   ]
  },
  "qcanalyst": {
   "title": "Quality Control Analyst",
   "inds": [
    "bio",
    "mfg"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2–4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Tests materials and finished products to make sure everything meets safety and quality standards.",
   "pay": "$42,000–$62,000",
   "payShort": "$42K–$62K",
   "wage": 52000,
   "learn": "UNG Clinical Health Sciences (A.S.) or Lanier Tech lab coursework",
   "dayText": "You test raw materials and finished products against specifications, document results, and flag anything out of range. Strong attention to detail keeps manufacturers and labs compliant with safety standards.",
   "hs": [],
   "programs": [],
   "employers": [
    "SYENSQO",
    "River Valley Ingredients",
    "Healthy Vending Options, Inc"
   ],
   "also": [
    "qualitytech",
    "chemist",
    "labtech"
   ]
  },
  "researchasst": {
   "title": "Research Assistant",
   "inds": [
    "bio"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "Growing",
   "gem": true,
   "summary": "Supports scientists by preparing samples, running assays, and recording data — a launch pad for a lab career.",
   "pay": "$35,000–$52,000",
   "payShort": "$35K–$52K",
   "wage": 43500,
   "learn": "UNG Biology, Chemistry, or Clinical Health Sciences",
   "dayText": "You support scientists by preparing samples, maintaining equipment, recording data, and running standard assays. A strong launching pad for graduate school or a lab scientist role.",
   "hs": [
    "Biotechnology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Biotechnology"
    },
    {
     "school": "ung",
     "name": "Biology (B.S.)"
    },
    {
     "school": "ung",
     "name": "Chemistry (B.S.)"
    },
    {
     "school": "ung",
     "name": "Chemistry with Biochemistry Concentration"
    }
   ],
   "employers": [
    "SYENSQO",
    "Children's Healthcare of Atlanta (Research)",
    "Alimera Sciences"
   ],
   "also": [
    "biologist",
    "labtech"
   ]
  },
  "vettech": {
   "title": "Veterinary Technician",
   "inds": [
    "bio",
    "health"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "The nurse of the animal world — assists in surgery, takes X-rays, and runs lab tests for vets.",
   "pay": "$32,000–$48,000",
   "payShort": "$32K–$48K",
   "wage": 40000,
   "learn": "Lanier Tech or FCS Veterinary Science pathway",
   "dayText": "You assist veterinarians with exams, anesthesia, lab work, and patient care in small-animal clinics across Forsyth. Busy practices often have openings year-round.",
   "hs": [
    "Veterinary Science"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Veterinary Science"
    }
   ],
   "employers": [
    "Homestead Animal Hospital",
    "Vickery Animal Hospital"
   ],
   "also": [
    "vet"
   ]
  },
  "pharmtech": {
   "title": "Pharmacy Technician",
   "inds": [
    "bio",
    "health"
   ],
   "local": true,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Fills prescriptions, manages inventory, and helps pharmacists serve patients. A great first step toward pharmacy school.",
   "pay": "$32,000–$46,000",
   "payShort": "$32K–$46K",
   "wage": 39000,
   "learn": "FCS Clinical Lab or pharmacy tech certificate",
   "dayText": "You fill prescriptions, manage inventory, and work with insurance companies under a pharmacist's supervision. Community pharmacies and hospital settings both hire from Forsyth programs.",
   "hs": [
    "Chemistry",
    "Math",
    "Health Science pathway"
   ],
   "programs": [],
   "employers": [
    "Magnolia Pharmacy"
   ],
   "also": [
    "pharmacist",
    "medassist"
   ],
   "soc": "29-2052"
  },
  "marketing": {
   "title": "Marketing Specialist",
   "inds": [
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Creates campaigns, runs social media, and uses data to grow a brand — for agencies and in-house teams.",
   "pay": "$44,000–$72,000",
   "payShort": "$44K–$72K",
   "wage": 58000,
   "learn": "UNG Marketing (B.B.A.) or FCS Digital Media & Communications",
   "dayText": "You create campaigns, manage social media, analyze performance data, and coordinate with designers and copywriters. Forsyth's cluster of agencies and in-house marketing teams are active hirers.",
   "hs": [
    "Marketing",
    "Digital Media & Communications"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Marketing"
    },
    {
     "school": "fcs",
     "name": "Digital Media & Communications"
    },
    {
     "school": "lanier",
     "name": "Digital Marketing Certificate"
    },
    {
     "school": "ung",
     "name": "Marketing (B.B.A.)"
    },
    {
     "school": "ung",
     "name": "Communication (B.A.)"
    }
   ],
   "employers": [
    "AWE! Creative & Marketing",
    "Because Mom Marketing & Social Agency",
    "Newton Simon Advertising",
    "Conquest Strategic Marketing",
    "Yonder Agency",
    "Renaissance Marketing"
   ],
   "also": [
    "accountexec",
    "graphicdesigner",
    "uxdesigner"
   ]
  },
  "businessanalyst": {
   "title": "Business Analyst",
   "inds": [
    "pro",
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Finds where a business can work better and shows leaders how to fix it, using data.",
   "pay": "$52,000–$82,000",
   "payShort": "$52K–$82K",
   "wage": 67000,
   "learn": "UNG Business Administration (B.B.A.) or Accounting",
   "dayText": "You gather data on processes or performance, identify inefficiencies, and present recommendations to leadership. A role that bridges IT and operations at companies headquartered in Forsyth.",
   "hs": [
    "Business & Entrepreneurship"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Business & Entrepreneurship"
    },
    {
     "school": "ung",
     "name": "Business Administration (B.B.A.)"
    }
   ],
   "employers": [
    "AutomationDirect",
    "DataScan",
    "1st Franklin Financial Corporation",
    "Sawnee EMC"
   ],
   "also": [
    "dataanalyst",
    "projectmgr",
    "opsmgr"
   ]
  },
  "financialadvisor": {
   "title": "Financial Advisor",
   "inds": [
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Helps families and businesses plan for retirement, investments, and big money decisions.",
   "pay": "$48,000–$90,000+",
   "payShort": "$48K–$90K+",
   "wage": 69000,
   "learn": "UNG Business Administration or Accounting (B.B.A.)",
   "dayText": "You help individuals and businesses plan for retirement, investments, and insurance needs. Many Forsyth County residents work with local advisors — a strong market for new professionals.",
   "hs": [
    "Finance & Accounting"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Finance & Accounting"
    },
    {
     "school": "lanier",
     "name": "Accounting Technology"
    },
    {
     "school": "ung",
     "name": "Accounting (B.B.A.)"
    }
   ],
   "employers": [
    "1st Franklin Financial Corporation",
    "Phoenix Benefits Management"
   ],
   "also": [
    "accountant",
    "finanalyst",
    "actuary"
   ]
  },
  "sales": {
   "title": "Sales Professional",
   "inds": [
    "pro",
    "tech"
   ],
   "local": true,
   "edu": "cert",
   "years": "0–4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Finds new clients and builds relationships — with pay that grows with your results.",
   "pay": "$40,000–$85,000+ (with commission)",
   "payShort": "$40K–$85K+",
   "wage": 62500,
   "learn": "Any business or communications degree; FCS Business & Entrepreneurship pathway",
   "dayText": "You prospect for new clients, present solutions, and manage account relationships. Forsyth's HQ companies and agencies offer both inside and field sales roles.",
   "hs": [],
   "programs": [],
   "employers": [
    "Sandler Sales Institute",
    "Schooley Mitchell of Cumming",
    "OUTFRONT Media",
    "CarShield"
   ],
   "also": [
    "accountexec",
    "marketing"
   ]
  },
  "projectmgr": {
   "title": "Project Manager",
   "inds": [
    "pro",
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Keeps projects on time and on budget by organizing the people, tasks, and money.",
   "pay": "$60,000–$95,000",
   "payShort": "$60K–$95K",
   "wage": 77500,
   "learn": "UNG Business Administration or Organizational Leadership; Lanier Tech Project Management Certificate",
   "dayText": "You scope projects, assign tasks, manage budgets, and keep teams on schedule. PM roles appear across every industry — manufacturing, healthcare IT, and professional services all need them.",
   "hs": [],
   "programs": [
    {
     "school": "lanier",
     "name": "Project Management Certificate"
    }
   ],
   "employers": [
    "MainStreet400",
    "Riptide LLC",
    "Macrovey",
    "Syclone IT"
   ],
   "also": [
    "opsmgr",
    "businessanalyst"
   ]
  },
  "hrspecialist": {
   "title": "HR Generalist",
   "inds": [
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Recruits, hires, and supports the people who make a company work.",
   "pay": "$46,000–$68,000",
   "payShort": "$46K–$68K",
   "wage": 57000,
   "learn": "UNG Business Administration or Organizational Leadership (B.A.S.)",
   "dayText": "You handle recruiting, onboarding, benefits administration, and employee relations for a company or division. Many of Forsyth's larger employers and HQ companies hire HR staff locally.",
   "hs": [
    "Business",
    "Psychology"
   ],
   "programs": [
    {
     "school": "lanier",
     "name": "Business Management (A.A.S.)"
    },
    {
     "school": "ung",
     "name": "Organizational Leadership (B.A.S.)"
    }
   ],
   "employers": [
    "AutomationDirect",
    "Sawnee EMC",
    "Hoover Precision Products"
   ],
   "also": [
    "accountant",
    "payrollspec"
   ]
  },
  "opsmgr": {
   "title": "Operations Manager",
   "inds": [
    "pro",
    "mfg"
   ],
   "local": true,
   "edu": "bach",
   "years": "4+ yrs",
   "demand": "High",
   "gem": false,
   "summary": "Runs the day-to-day of a business — staffing, supply chain, facilities, and quality.",
   "pay": "$60,000–$98,000",
   "payShort": "$60K–$98K",
   "wage": 79000,
   "learn": "UNG Business Administration (B.B.A.) or Technology Management (B.A.S.)",
   "dayText": "You oversee day-to-day business functions — staffing, supply chain, facilities, and quality. A senior role reachable within 5–8 years from entry-level positions at local companies.",
   "hs": [
    "Heavy Equipment Operations",
    "Construction & Carpentry",
    "Business & Entrepreneurship"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Heavy Equipment Operations"
    },
    {
     "school": "fcs",
     "name": "Construction & Carpentry"
    },
    {
     "school": "ung",
     "name": "Technology Management (B.A.S.)"
    },
    {
     "school": "fcs",
     "name": "Business & Entrepreneurship"
    },
    {
     "school": "lanier",
     "name": "Business Management (A.A.S.)"
    },
    {
     "school": "ung",
     "name": "Business Administration (B.B.A.)"
    },
    {
     "school": "ung",
     "name": "Organizational Leadership (B.A.S.)"
    }
   ],
   "employers": [
    "AutomationDirect",
    "River Valley Ingredients",
    "Metcam",
    "Hansgrohe USA"
   ],
   "also": [
    "projectmgr",
    "mfgeng",
    "businessanalyst"
   ]
  },
  "accountexec": {
   "title": "Account Executive",
   "inds": [
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Manages a portfolio of client accounts and makes sure every campaign or contract delivers.",
   "pay": "$45,000–$80,000+ (with commission)",
   "payShort": "$45K–$80K+",
   "wage": 62500,
   "learn": "UNG Marketing (B.B.A.) or Communication (B.A.); FCS Marketing pathway",
   "dayText": "You manage a portfolio of client accounts — checking in regularly, spotting upsell opportunities, and making sure campaigns or contracts deliver results. Strong communication skills matter as much as the numbers.",
   "hs": [],
   "programs": [],
   "employers": [
    "AWE! Creative & Marketing",
    "Newton Simon Advertising",
    "Conquest Strategic Marketing",
    "Yonder Agency"
   ],
   "also": [
    "sales",
    "marketing"
   ]
  },
  "softwaredev": {
   "title": "Software Developer",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "Builds the apps, websites, and systems that run everything — including the payment systems built in Atlanta.",
   "pay": "$70,000–$115,000",
   "payShort": "$70K–$115K",
   "wage": 92500,
   "learn": "UNG Computer Science (B.S.) or Lanier Tech Computer Information Systems",
   "dayText": "You write, test, and maintain code for web apps, internal tools, or client software. Remote-friendly and in high demand — Forsyth's tech companies and HQs hire developers at all levels.",
   "hs": [
    "Computer Science & IT",
    "Engineering & Technology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Computer Science & IT"
    },
    {
     "school": "fcs",
     "name": "Engineering & Technology"
    },
    {
     "school": "lanier",
     "name": "Web Development Certificate"
    },
    {
     "school": "ung",
     "name": "Computer Science (B.S.)"
    }
   ],
   "employers": [
    "AutomationDirect",
    "DataScan",
    "Macrovey",
    "Tuesday AI Edge",
    "Joonik, LLC.",
    "Undocked, Inc."
   ],
   "also": [
    "gamedev",
    "cyberanalyst",
    "datascientist",
    "cloudeng"
   ]
  },
  "networkadmin": {
   "title": "Network & Systems Administrator",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Keeps an organization's computers, servers, and Wi-Fi running fast and secure.",
   "pay": "$52,000–$80,000",
   "payShort": "$52K–$80K",
   "wage": 66000,
   "learn": "Lanier Tech Networking Technology or Computer Information Systems",
   "dayText": "You install and maintain the servers, switches, and firewalls that keep a business running. On-site roles at Forsyth companies offer stability; managed-services firms offer variety.",
   "hs": [
    "Engineering & Technology"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Engineering & Technology"
    },
    {
     "school": "lanier",
     "name": "Computer Information Systems"
    },
    {
     "school": "lanier",
     "name": "Networking Technology"
    },
    {
     "school": "ung",
     "name": "Information Technology (B.S.)"
    }
   ],
   "employers": [
    "Interstate Telecommunication, Inc.",
    "Transcend Networks",
    "Syclone IT",
    "Verin Technology Consulting",
    "MDSi Inc"
   ],
   "also": [
    "itsupport",
    "cloudeng",
    "cyberanalyst"
   ]
  },
  "cyberanalyst": {
   "title": "Cybersecurity Analyst",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "Defends networks from hackers. Augusta's Cyber Center and Fort Eisenhower make Georgia a national cyber hub.",
   "pay": "$65,000–$105,000",
   "payShort": "$65K–$105K",
   "wage": 85000,
   "learn": "Lanier Tech Cybersecurity (A.A.S.) or UNG Cybersecurity Certificate",
   "dayText": "You monitor networks for threats, investigate alerts, and harden systems against attack. One of the fastest-growing roles in IT — every company from healthcare to manufacturing needs cyber talent.",
   "hs": [
    "Cybersecurity"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Cybersecurity"
    },
    {
     "school": "lanier",
     "name": "Cybersecurity (A.A.S.)"
    },
    {
     "school": "ung",
     "name": "Cybersecurity Certificate"
    }
   ],
   "employers": [
    "Cybersecurity Auditing Technologies, LLC",
    "Syclone IT",
    "Verin Technology Consulting",
    "Technali, LLC"
   ],
   "also": [
    "pentester",
    "networkadmin",
    "softwaredev"
   ]
  },
  "itsupport": {
   "title": "IT Support Specialist",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "Very high",
   "gem": false,
   "summary": "The tech problem-solver everyone calls first — a fast way into the IT field.",
   "pay": "$36,000–$54,000",
   "payShort": "$36K–$54K",
   "wage": 45000,
   "learn": "Lanier Tech IT Support Specialist Certificate or CompTIA A+",
   "dayText": "You're the first responder for tech problems — resetting passwords, replacing hardware, diagnosing software issues, and walking users through fixes. A strong entry point into IT careers.",
   "hs": [
    "IT pathway",
    "CompTIA A+"
   ],
   "programs": [
    {
     "school": "lanier",
     "name": "Computer Information Systems"
    },
    {
     "school": "lanier",
     "name": "IT Support Specialist Certificate"
    },
    {
     "school": "ung",
     "name": "Information Technology (B.S.)"
    }
   ],
   "employers": [
    "Sturgeon Technology Services, LLC",
    "MDSi Inc",
    "Syclone IT",
    "Georgia United Credit Union"
   ],
   "also": [
    "networkadmin",
    "cyberanalyst"
   ]
  },
  "dataanalyst": {
   "title": "Data Analyst",
   "inds": [
    "tech",
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "Turns raw business data into answers leaders can act on, using SQL, Excel, and dashboards.",
   "pay": "$55,000–$85,000",
   "payShort": "$55K–$85K",
   "wage": 70000,
   "learn": "UNG Data Analytics Certificate or Computer Science (B.S.)",
   "dayText": "You pull data from business systems, clean it, analyze trends, and present findings to help leaders make decisions. SQL and Excel are daily tools; Python and Tableau are strong add-ons.",
   "hs": [
    "Computer Science & IT",
    "Artificial Intelligence"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Computer Science & IT"
    },
    {
     "school": "fcs",
     "name": "Artificial Intelligence"
    },
    {
     "school": "ung",
     "name": "Data Analytics Certificate"
    }
   ],
   "employers": [
    "AutomationDirect",
    "DataScan",
    "Macrovey",
    "Tuesday AI Edge"
   ],
   "also": [
    "datascientist",
    "businessanalyst",
    "aieng"
   ]
  },
  "cloudeng": {
   "title": "Cloud Engineer",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Builds and runs systems in massive data centers — like those rising across metro Atlanta.",
   "pay": "$70,000–$110,000",
   "payShort": "$70K–$110K",
   "wage": 90000,
   "learn": "UNG Cybersecurity Certificate / Computer Science (B.S.) or Lanier Tech Networking Technology",
   "dayText": "You build and manage cloud infrastructure — servers, storage, and networking — that businesses run their applications on. Automation, monitoring, and security are part of the daily routine.",
   "hs": [
    "Cloud Computing"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Cloud Computing"
    }
   ],
   "employers": [
    "AutomationDirect",
    "Macrovey",
    "Tuesday AI Edge",
    "Syclone IT"
   ],
   "also": [
    "networkadmin",
    "softwaredev",
    "datacentertech"
   ]
  },
  "sysadmin": {
   "title": "Systems Administrator",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Keeps a company's servers, accounts, and backups running so everyone else can work.",
   "pay": "$55,000–$85,000",
   "payShort": "$55K–$85K",
   "wage": 70000,
   "learn": "Lanier Tech Computer Information Systems or Networking Technology",
   "dayText": "You keep servers, user accounts, and internal systems running smoothly — applying updates, managing backups, and troubleshooting outages before they affect the whole company.",
   "hs": [],
   "programs": [],
   "employers": [
    "MDSi Inc",
    "Syclone IT",
    "Sturgeon Technology Services, LLC",
    "Georgia United Credit Union"
   ],
   "also": [
    "networkadmin",
    "itsupport",
    "cloudeng"
   ]
  },
  "uxdesigner": {
   "title": "UX/UI Designer",
   "inds": [
    "tech",
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": true,
   "summary": "Designs how apps and websites look and feel — then tests them with real users.",
   "pay": "$55,000–$88,000",
   "payShort": "$55K–$88K",
   "wage": 71500,
   "learn": "UNG Communication (B.A.) + portfolio; FCS Digital Media & Communications",
   "dayText": "You research how users navigate digital products, then design wireframes, prototypes, and final interfaces. Forsyth's tech startups and agencies look for designers who can work closely with developers.",
   "hs": [
    "Digital Media & Communications",
    "Graphic Design"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Digital Media & Communications"
    },
    {
     "school": "ung",
     "name": "Communication (B.A.)"
    },
    {
     "school": "fcs",
     "name": "Graphic Design"
    },
    {
     "school": "lanier",
     "name": "Web Development Certificate"
    }
   ],
   "employers": [
    "Macrovey",
    "Joonik, LLC.",
    "Undocked, Inc.",
    "Yonder Agency"
   ],
   "also": [
    "graphicdesigner",
    "softwaredev",
    "marketing"
   ]
  },
  "dronepilot": {
   "title": "Drone Systems Operator",
   "inds": [
    "tech",
    "mfg"
   ],
   "local": true,
   "edu": "cert",
   "years": "Weeks–1 yr",
   "demand": "Growing",
   "gem": true,
   "summary": "Flies drones to inspect power lines, map farms, film movies, and survey construction sites.",
   "pay": "$42,000–$68,000",
   "payShort": "$42K–$68K",
   "wage": 55000,
   "learn": "FCS Drone & Unmanned Aircraft Systems pathway + FAA Part 107 certification; Lanier Tech or UNG aviation/engineering coursework",
   "dayText": "You fly and maintain drones for mapping, inspection, and aerial imaging work — programming flight paths, processing captured data, and keeping equipment FAA-compliant. Growing demand from construction, agriculture, and public safety clients.",
   "hs": [
    "Drone & Unmanned Aircraft Systems"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Drone & Unmanned Aircraft Systems"
    }
   ],
   "employers": [
    "AutomationDirect",
    "L3 Harris",
    "Macrovey"
   ],
   "also": []
  },
  "gamedev": {
   "title": "Game Designer",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": false,
   "summary": "Designs and codes video games — gameplay, graphics, and the worlds players explore.",
   "pay": "$48,000–$80,000",
   "payShort": "$48K–$80K",
   "wage": 64000,
   "learn": "FCS Game Design pathway + UNG Computer Science (B.S.) or portfolio-based hiring",
   "dayText": "You design game mechanics, levels, and systems, then prototype and playtest with a small team. Most roles blend creative design work with scripting in tools like Unity or Unreal Engine.",
   "hs": [
    "Game Design"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Game Design"
    }
   ],
   "employers": [
    "Macrovey",
    "Joonik, LLC.",
    "Undocked, Inc."
   ],
   "also": [
    "softwaredev",
    "aieng"
   ]
  },
  "aieng": {
   "title": "AI / Machine Learning Specialist",
   "inds": [
    "tech"
   ],
   "local": true,
   "edu": "bach",
   "years": "4–6 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Builds the AI systems behind recommendations, self-driving features, and medical imaging.",
   "pay": "$75,000–$125,000",
   "payShort": "$75K–$125K",
   "wage": 100000,
   "learn": "FCS Artificial Intelligence pathway + UNG Computer Science (B.S.) with data/AI coursework",
   "dayText": "You build and train models that power predictive tools, automation, and data-driven products. Work includes cleaning data, testing models, and collaborating with developers to put AI features into production.",
   "hs": [
    "Artificial Intelligence"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Artificial Intelligence"
    }
   ],
   "employers": [
    "AutomationDirect",
    "Tuesday AI Edge",
    "DataScan"
   ],
   "also": [
    "datascientist",
    "softwaredev",
    "robotics"
   ]
  },
  "graphicdesigner": {
   "title": "Graphic Designer",
   "inds": [
    "tech",
    "pro"
   ],
   "local": true,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "Steady",
   "gem": false,
   "summary": "Creates logos, social graphics, and layouts that bring a brand to life.",
   "pay": "$40,000–$62,000",
   "payShort": "$40K–$62K",
   "wage": 51000,
   "learn": "FCS Graphic Design pathway + UNG Communication (B.A.) or portfolio-based hiring",
   "dayText": "You design visual content — branding, social graphics, web layouts, and print materials — working closely with marketing teams to bring campaigns to life. A strong portfolio matters more than a specific degree.",
   "hs": [
    "Graphic Design"
   ],
   "programs": [
    {
     "school": "fcs",
     "name": "Graphic Design"
    }
   ],
   "employers": [
    "AWE! Creative & Marketing",
    "Newton Simon Advertising",
    "Yonder Agency",
    "Black Bird Motion Media LLC"
   ],
   "also": [
    "uxdesigner",
    "marketing"
   ]
  },
  "physician": {
   "title": "Family Physician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "11+ yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "The doctor patients see first. Diagnoses illness, manages long-term health, and refers to specialists. Rural Georgia especially needs them.",
   "wage": 230000,
   "day": [
    "See 20–25 patients in clinic",
    "Order and read lab tests",
    "Coordinate care with nurses, PAs, and specialists"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "AP/Dual Enrollment science",
    "Health Science pathway"
   ],
   "tcsg": null,
   "usg": "Pre-med bachelor's (biology, chemistry) → MD at the Medical College of Georgia (Augusta University)",
   "also": [
    "pa",
    "np",
    "anesthesiologist",
    "surgeon",
    "internist",
    "erphysician"
   ],
   "soc": "29-1215"
  },
  "anesthesiologist": {
   "title": "Anesthesiologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "12+ yrs",
   "demand": "High",
   "gem": true,
   "summary": "The physician who keeps patients safe, asleep, and pain-free during surgery — watching every heartbeat and breath.",
   "wage": 239000,
   "day": [
    "Meet patients before surgery",
    "Deliver and adjust anesthesia in the OR",
    "Manage pain and emergencies after surgery"
   ],
   "hs": [
    "Chemistry",
    "Biology",
    "Physics",
    "Calculus"
   ],
   "tcsg": null,
   "usg": "Pre-med bachelor's → MD → 4-year anesthesiology residency",
   "also": [
    "crna",
    "anesthesiatech",
    "surgeon",
    "perfusionist"
   ]
  },
  "surgeon": {
   "title": "Surgeon",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "13+ yrs",
   "demand": "High",
   "gem": false,
   "summary": "Repairs injuries, removes disease, and performs life-saving operations as the leader of the surgical team.",
   "wage": 239000,
   "day": [
    "Operate in the OR",
    "Round on recovering patients",
    "Consult with families on treatment options"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Anatomy",
    "Precision hobbies (art, music, models)"
   ],
   "tcsg": null,
   "usg": "Pre-med bachelor's → MD → 5–7 year surgical residency",
   "also": [
    "surgtech",
    "anesthesiologist",
    "pa",
    "sterileproc"
   ]
  },
  "pa": {
   "title": "Physician Assistant",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6–7 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Diagnoses and treats patients, writes prescriptions, and even assists in surgery — with less schooling and debt than becoming an MD.",
   "wage": 125000,
   "day": [
    "Examine patients and order tests",
    "Prescribe treatment plans",
    "Work in ERs, surgery, or family practice"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Health Science pathway",
    "Volunteer or patient-care job"
   ],
   "tcsg": "Start with EMT, CNA, or Medical Assisting to earn required patient-care hours",
   "usg": "Bachelor's (biology, health science) → Master of Physician Assistant Studies (e.g., Augusta University)",
   "also": [
    "physician",
    "np",
    "surgtech",
    "paramedic"
   ],
   "soc": "29-1071"
  },
  "np": {
   "title": "Nurse Practitioner",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6–7 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "An advanced-practice nurse who diagnoses, prescribes, and often runs their own patient panel — a major answer to Georgia's doctor shortage.",
   "wage": 118000,
   "day": [
    "Manage a schedule of patients",
    "Prescribe medications",
    "Specialize in family, pediatrics, psych, or acute care"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Psychology",
    "Health Science pathway"
   ],
   "tcsg": "Associate Degree Nursing (ADN) as a starting point",
   "usg": "BSN → Master's or Doctor of Nursing Practice",
   "also": [
    "rn",
    "pa",
    "crna",
    "physician"
   ],
   "soc": "29-1171"
  },
  "crna": {
   "title": "Nurse Anesthetist (CRNA)",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "7–8 yrs",
   "demand": "High",
   "gem": true,
   "summary": "An advanced-practice nurse who gives anesthesia for surgeries — one of the highest-paid careers in nursing.",
   "wage": 190000,
   "day": [
    "Plan anesthesia for each patient",
    "Monitor vital signs throughout surgery",
    "Handle airways and emergencies"
   ],
   "hs": [
    "Chemistry",
    "Biology",
    "Anatomy & Physiology"
   ],
   "tcsg": null,
   "usg": "BSN → ICU nursing experience → Doctor of Nurse Anesthesia Practice",
   "also": [
    "anesthesiologist",
    "rn",
    "anesthesiatech",
    "np"
   ]
  },
  "perfusionist": {
   "title": "Perfusionist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Runs the heart-lung machine that keeps a patient alive during open-heart surgery. Few people have heard of it — and few people do it.",
   "wage": 140000,
   "day": [
    "Operate heart-lung bypass machines",
    "Manage blood flow and oxygen",
    "Work on cardiac surgery teams"
   ],
   "hs": [
    "Chemistry",
    "Biology",
    "Physics",
    "Math"
   ],
   "tcsg": null,
   "usg": "Bachelor's in biology/chemistry → Master's in perfusion science",
   "also": [
    "anesthesiologist",
    "resptherapist",
    "surgeon"
   ]
  },
  "surgtech": {
   "title": "Surgical Technologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Right beside the surgeon in the operating room — prepares instruments, keeps everything sterile, and hands over tools during surgery.",
   "wage": 56000,
   "day": [
    "Set up the operating room",
    "Pass instruments during surgery",
    "Count every sponge and tool"
   ],
   "hs": [
    "Anatomy & Physiology",
    "Health Science pathway"
   ],
   "tcsg": "Surgical Technology diploma or AAS",
   "usg": null,
   "also": [
    "sterileproc",
    "surgeon",
    "anesthesiatech",
    "pa"
   ],
   "soc": "29-2055"
  },
  "anesthesiatech": {
   "title": "Anesthesia Technologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "Growing",
   "gem": true,
   "summary": "Prepares and troubleshoots the high-tech anesthesia machines and monitors that keep surgery patients safe.",
   "wage": 50000,
   "day": [
    "Set up anesthesia equipment",
    "Assist during airway procedures",
    "Maintain monitors and supplies"
   ],
   "hs": [
    "Biology",
    "Physics",
    "Health Science pathway"
   ],
   "tcsg": "Allied health AAS (programs vary — ask your college)",
   "usg": null,
   "also": [
    "anesthesiologist",
    "crna",
    "surgtech",
    "resptherapist"
   ]
  },
  "sterileproc": {
   "title": "Sterile Processing Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": true,
   "summary": "No sterile tools, no surgery. Cleans, inspects, and packages every surgical instrument in the hospital.",
   "wage": 43000,
   "day": [
    "Decontaminate surgical instruments",
    "Assemble instrument trays",
    "Run sterilizers and track quality"
   ],
   "hs": [
    "Health Science pathway",
    "Biology"
   ],
   "tcsg": "Sterile Supply Processing certificate",
   "usg": null,
   "also": [
    "surgtech",
    "medlabtech"
   ],
   "soc": "31-9093"
  },
  "sonographer": {
   "title": "Diagnostic Medical Sonographer",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Uses ultrasound to see inside the body — babies, hearts, blood vessels — without any radiation.",
   "wage": 78000,
   "day": [
    "Perform ultrasound exams",
    "Capture images for physicians",
    "Specialize in cardiac or OB imaging"
   ],
   "hs": [
    "Physics",
    "Anatomy",
    "Health Science pathway"
   ],
   "tcsg": "Diagnostic Medical Sonography or Cardiovascular Technology AAS",
   "usg": null,
   "also": [
    "radtech",
    "physician"
   ],
   "soc": "29-2032"
  },
  "resptherapist": {
   "title": "Respiratory Therapist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "The breathing expert — manages ventilators in the ICU, treats asthma, and responds to emergencies.",
   "wage": 70000,
   "day": [
    "Manage ventilators",
    "Give breathing treatments",
    "Respond to codes and trauma"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Health Science pathway"
   ],
   "tcsg": "Respiratory Care AAS",
   "usg": "B.S. in Respiratory Therapy",
   "also": [
    "rn",
    "paramedic",
    "anesthesiatech",
    "perfusionist"
   ],
   "soc": "29-1126"
  },
  "pharmacist": {
   "title": "Pharmacist",
   "inds": [
    "health",
    "bio"
   ],
   "local": false,
   "edu": "adv",
   "years": "6–8 yrs",
   "demand": "Steady",
   "gem": false,
   "summary": "Medication expert who makes sure prescriptions are safe and work as intended — in pharmacies, hospitals, and research.",
   "wage": 128000,
   "day": [
    "Check prescriptions for safety",
    "Counsel patients",
    "Work with doctors on dosing"
   ],
   "hs": [
    "Chemistry",
    "Biology",
    "Math"
   ],
   "tcsg": "Pharmacy Technology to get started",
   "usg": "Pre-pharmacy → PharmD (e.g., UGA College of Pharmacy)",
   "also": [
    "pharmtech",
    "medlabtech",
    "physician"
   ],
   "soc": "29-1051"
  },
  "pt": {
   "title": "Physical Therapist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "7 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Helps athletes and patients recover from injuries and surgery so they can move, play, and live without pain.",
   "wage": 97000,
   "day": [
    "Evaluate injuries and movement",
    "Design exercise programs",
    "Track recovery progress"
   ],
   "hs": [
    "Anatomy",
    "Biology",
    "Sports Medicine pathway"
   ],
   "tcsg": null,
   "usg": "Bachelor's (exercise science) → Doctor of Physical Therapy",
   "also": [
    "pta",
    "athletictrainer",
    "ot"
   ],
   "soc": "29-1123"
  },
  "athletictrainer": {
   "title": "Athletic Trainer",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "5–6 yrs",
   "demand": "Growing",
   "gem": false,
   "summary": "On the sidelines with teams — prevents, evaluates, and treats sports injuries for high school, college, and pro athletes.",
   "wage": 55000,
   "day": [
    "Tape and prepare athletes",
    "Respond to injuries on the field",
    "Run rehab programs"
   ],
   "hs": [
    "Sports Medicine pathway",
    "Anatomy"
   ],
   "tcsg": null,
   "usg": "Bachelor's → Master's in Athletic Training",
   "also": [
    "pt",
    "pta",
    "physician"
   ]
  },
  "ot": {
   "title": "Occupational Therapist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Helps people of all ages do everyday things — from kids with disabilities to adults recovering from a stroke.",
   "wage": 90000,
   "day": [
    "Evaluate daily living skills",
    "Adapt homes and tools",
    "Work in schools, hospitals, and clinics"
   ],
   "hs": [
    "Psychology",
    "Biology",
    "Anatomy"
   ],
   "tcsg": null,
   "usg": "Bachelor's → Master's or Doctorate in Occupational Therapy",
   "also": [
    "ota",
    "pt",
    "slp"
   ],
   "soc": "29-1122"
  },
  "ota": {
   "title": "Occupational Therapy Assistant",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Helps patients practice the skills they need for daily life under the direction of an occupational therapist.",
   "wage": 65000,
   "day": [
    "Lead therapy activities",
    "Teach use of adaptive equipment",
    "Record progress"
   ],
   "hs": [
    "Psychology",
    "Health Science pathway"
   ],
   "tcsg": "Occupational Therapy Assistant AAS",
   "usg": null,
   "also": [
    "ot",
    "pta"
   ],
   "soc": "31-2011"
  },
  "dentist": {
   "title": "Dentist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "8 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Diagnoses and treats problems with teeth and gums — and often owns their own practice.",
   "wage": 170000,
   "day": [
    "Fill cavities and fix teeth",
    "Read X-rays",
    "Run a practice and lead a team"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Art (fine motor skills)"
   ],
   "tcsg": null,
   "usg": "Pre-dental bachelor's → DMD at the Dental College of Georgia (Augusta University)",
   "also": [
    "dentalhyg",
    "physician",
    "dentalasst",
    "dentallab"
   ],
   "soc": "29-1021"
  },
  "slp": {
   "title": "Speech-Language Pathologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "Helps people speak, understand, and swallow — working with toddlers, students, and stroke patients.",
   "wage": 85000,
   "day": [
    "Assess speech and language",
    "Run therapy sessions",
    "Work in schools or hospitals"
   ],
   "hs": [
    "Psychology",
    "English",
    "World Language"
   ],
   "tcsg": null,
   "usg": "Bachelor's in communication sciences → Master's in Speech-Language Pathology",
   "also": [
    "ot"
   ],
   "soc": "29-1127"
  },
  "cna": {
   "title": "Certified Nursing Assistant",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "6–12 wks",
   "demand": "Very high",
   "gem": false,
   "summary": "A fast way into healthcare. Helps patients bathe, eat, and move — and builds hours for nursing or PA school.",
   "wage": 34000,
   "day": [
    "Help patients with daily living",
    "Record vital signs",
    "Report changes to nurses"
   ],
   "hs": [
    "Health Science pathway (often earn it in high school!)"
   ],
   "tcsg": "Nurse Aide certificate",
   "usg": null,
   "also": [
    "lpn",
    "rn",
    "medassist",
    "pa"
   ],
   "soc": "31-1131"
  },
  "lpn": {
   "title": "Licensed Practical Nurse",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Provides hands-on nursing care in nursing homes, clinics, and hospitals — and can bridge to RN later.",
   "wage": 52000,
   "day": [
    "Check vital signs",
    "Give medications",
    "Help patients with daily care"
   ],
   "hs": [
    "Health Science pathway",
    "Biology"
   ],
   "tcsg": "Practical Nursing diploma",
   "usg": null,
   "also": [
    "rn",
    "cna",
    "medassist"
   ],
   "soc": "29-2061"
  },
  "medlabtech": {
   "title": "Medical Laboratory Scientist",
   "inds": [
    "bio",
    "health"
   ],
   "local": false,
   "edu": "bach",
   "years": "2–4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "The detective behind the diagnosis — runs the blood and tissue tests that tell doctors what's wrong.",
   "wage": 66000,
   "day": [
    "Analyze blood and body fluids",
    "Run lab instruments",
    "Report critical results to doctors"
   ],
   "hs": [
    "Chemistry",
    "Biology",
    "Lab science electives"
   ],
   "tcsg": "Medical Laboratory Technology AAS",
   "usg": "B.S. in Medical Laboratory Science",
   "also": [
    "phlebotomist",
    "pharmacist"
   ],
   "soc": "29-2018"
  },
  "vet": {
   "title": "Veterinarian",
   "inds": [
    "bio"
   ],
   "local": false,
   "edu": "adv",
   "years": "8 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Animal doctor for pets, horses, poultry flocks, and cattle herds. Georgia needs large-animal vets especially.",
   "wage": 110000,
   "day": [
    "Examine and treat animals",
    "Perform surgery",
    "Protect the food supply"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Ag Science / FFA"
   ],
   "tcsg": null,
   "usg": "Pre-vet bachelor's → DVM at UGA College of Veterinary Medicine",
   "also": [
    "vettech",
    "foodscientist"
   ]
  },
  "foodscientist": {
   "title": "Food Scientist",
   "inds": [
    "bio"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": true,
   "summary": "Invents new foods and keeps them safe — at companies like Coca-Cola, Chick-fil-A, and Georgia's food processors.",
   "wage": 80000,
   "day": [
    "Develop recipes and products",
    "Test food safety",
    "Scale up production"
   ],
   "hs": [
    "Chemistry",
    "Culinary pathway",
    "Biology"
   ],
   "tcsg": "Food processing / culinary programs",
   "usg": "B.S. in Food Science (UGA)",
   "also": [
    "qualitytech",
    "chemeng"
   ]
  },
  "robotics": {
   "title": "Robotics Technician",
   "inds": [
    "mfg"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Programs and services the industrial robots that weld car bodies and pack products at Georgia plants.",
   "wage": 64000,
   "day": [
    "Program robot paths",
    "Calibrate vision systems",
    "Repair robot arms and grippers"
   ],
   "hs": [
    "Robotics team",
    "Computer Science",
    "Engineering pathway"
   ],
   "tcsg": "Industrial Systems / Robotics certificates",
   "usg": "Robotics/mechatronics engineering",
   "also": [
    "mechatronics",
    "maintenancetech",
    "softwaredev"
   ]
  },
  "evtech": {
   "title": "EV & Battery Technician",
   "inds": [
    "mfg"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Builds, tests, and services the batteries and electric vehicles that are reshaping Georgia's economy.",
   "wage": 56000,
   "day": [
    "Test battery cells and modules",
    "Follow high-voltage safety procedures",
    "Diagnose EV systems"
   ],
   "hs": [
    "Chemistry",
    "Engineering pathway",
    "Automotive pathway"
   ],
   "tcsg": "Electric Vehicle / Automotive Technology and Industrial Systems programs",
   "usg": "Electrical or chemical engineering",
   "also": [
    "maintenancetech",
    "chemeng",
    "eleceng"
   ]
  },
  "maintenancetech": {
   "title": "Industrial Maintenance Technician",
   "inds": [
    "mfg"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Keeps the robots, conveyors, and machines running at plants like Hyundai, Kia, and Qcells. Every factory needs them.",
   "wage": 60000,
   "day": [
    "Troubleshoot electrical and mechanical problems",
    "Program and repair PLCs",
    "Prevent breakdowns before they happen"
   ],
   "hs": [
    "Engineering & Technology pathway",
    "Physics",
    "Robotics team"
   ],
   "tcsg": "Industrial Systems Technology diploma/AAS",
   "usg": null,
   "also": [
    "mechatronics",
    "robotics",
    "evtech"
   ]
  },
  "mecheng": {
   "title": "Mechanical Engineer",
   "inds": [
    "mfg"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Designs machines, engines, and products — from car parts to medical devices to HVAC systems.",
   "wage": 100000,
   "day": [
    "Design in 3D CAD",
    "Test prototypes",
    "Solve production problems"
   ],
   "hs": [
    "Calculus",
    "Physics",
    "Engineering pathway"
   ],
   "tcsg": "Engineering Technology AAS as a starting point",
   "usg": "B.S. in Mechanical Engineering (Georgia Tech, Kennesaw State, Georgia Southern, UGA)",
   "also": [
    "eleceng",
    "indeng",
    "mechatronics"
   ]
  },
  "eleceng": {
   "title": "Electrical Engineer",
   "inds": [
    "mfg",
    "tech"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Designs power systems, circuits, and electronics — from the grid to EV batteries to chips.",
   "wage": 110000,
   "day": [
    "Design circuits and power systems",
    "Simulate and test",
    "Lead projects with technicians"
   ],
   "hs": [
    "Calculus",
    "Physics",
    "Computer Science"
   ],
   "tcsg": "Electrical Engineering Technology AAS",
   "usg": "B.S. in Electrical Engineering (Georgia Tech, Kennesaw State, Georgia Southern, UGA)",
   "also": [
    "mecheng",
    "evtech",
    "softwaredev"
   ]
  },
  "indeng": {
   "title": "Industrial Engineer",
   "inds": [
    "mfg"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Makes things work better — designs efficient factories, warehouses, hospitals, and theme-park lines.",
   "wage": 98000,
   "day": [
    "Map and improve processes",
    "Analyze data",
    "Design layouts and workflows"
   ],
   "hs": [
    "Statistics",
    "Calculus",
    "Business"
   ],
   "tcsg": null,
   "usg": "B.S. in Industrial Engineering (Georgia Tech, Kennesaw State, Georgia Southern)",
   "also": [
    "qualitytech",
    "mecheng",
    "supplychain"
   ]
  },
  "chemeng": {
   "title": "Chemical Engineer",
   "inds": [
    "mfg",
    "bio"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Growing",
   "gem": false,
   "summary": "Turns chemistry into products at scale — batteries, medicines, paper, and food.",
   "wage": 110000,
   "day": [
    "Design chemical processes",
    "Improve safety and yield",
    "Work in plants and labs"
   ],
   "hs": [
    "Chemistry",
    "Calculus",
    "Physics"
   ],
   "tcsg": null,
   "usg": "B.S. in Chemical Engineering (Georgia Tech, UGA, Augusta University)",
   "also": [
    "evtech",
    "foodscientist",
    "mecheng"
   ]
  },
  "pentester": {
   "title": "Ethical Hacker (Penetration Tester)",
   "inds": [
    "tech"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Gets paid to break in — legally — finding security holes before criminals do.",
   "wage": 115000,
   "day": [
    "Test systems for weaknesses",
    "Write exploit reports",
    "Teach teams to fix flaws"
   ],
   "hs": [
    "Computer Science",
    "CyberPatriot",
    "Capture-the-Flag contests"
   ],
   "tcsg": "Cybersecurity AAS + certifications",
   "usg": "B.S. in Cybersecurity or Computer Science",
   "also": [
    "cyberanalyst",
    "softwaredev"
   ]
  },
  "datascientist": {
   "title": "Data Scientist",
   "inds": [
    "tech"
   ],
   "local": false,
   "edu": "bach",
   "years": "4–6 yrs",
   "demand": "Very high",
   "gem": false,
   "summary": "Finds patterns in data to predict what happens next — in sports, health, finance, and shipping.",
   "wage": 110000,
   "day": [
    "Clean and analyze data",
    "Build predictive models",
    "Explain findings to leaders"
   ],
   "hs": [
    "Statistics",
    "Calculus",
    "Computer Science"
   ],
   "tcsg": null,
   "usg": "B.S. in Data Science, Statistics, or Computer Science",
   "also": [
    "aieng",
    "softwaredev",
    "actuary",
    "finanalyst"
   ]
  },
  "datacentertech": {
   "title": "Data Center Technician",
   "inds": [
    "tech"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "Very high",
   "gem": true,
   "summary": "Keeps the servers humming inside the giant data centers being built across Georgia.",
   "wage": 60000,
   "day": [
    "Install and replace servers",
    "Run cabling",
    "Monitor power and cooling"
   ],
   "hs": [
    "IT pathway",
    "Electrical basics"
   ],
   "tcsg": "IT Support / Networking / Electrical certificates",
   "usg": null,
   "also": [
    "cloudeng",
    "networkadmin"
   ]
  },
  "accountant": {
   "title": "Accountant / CPA",
   "inds": [
    "pro"
   ],
   "local": false,
   "edu": "bach",
   "years": "4–5 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Tracks money for companies, governments, and families — and every business needs one.",
   "wage": 80000,
   "day": [
    "Prepare financial statements",
    "Do taxes and audits",
    "Advise on money decisions"
   ],
   "hs": [
    "Business pathway",
    "Math",
    "Accounting"
   ],
   "tcsg": "Accounting AAS",
   "usg": "B.B.A. in Accounting",
   "also": [
    "finanalyst",
    "actuary",
    "payrollspec"
   ]
  },
  "finanalyst": {
   "title": "Financial Analyst",
   "inds": [
    "pro"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Analyzes investments and company finances to guide big business decisions.",
   "wage": 95000,
   "day": [
    "Build financial models",
    "Research companies and markets",
    "Present recommendations"
   ],
   "hs": [
    "Statistics",
    "Business",
    "Economics"
   ],
   "tcsg": null,
   "usg": "B.B.A. in Finance",
   "also": [
    "accountant",
    "datascientist",
    "fintechdev"
   ]
  },
  "actuary": {
   "title": "Actuary",
   "inds": [
    "pro"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs + exams",
   "demand": "High",
   "gem": true,
   "summary": "Uses math to measure risk for insurance companies like Aflac. Perfect for students who love math.",
   "wage": 115000,
   "day": [
    "Model risk and probability",
    "Price insurance products",
    "Pass professional exams"
   ],
   "hs": [
    "Calculus",
    "Statistics",
    "AP Math"
   ],
   "tcsg": null,
   "usg": "B.S. in Actuarial Science, Mathematics, or Statistics (e.g., Georgia State)",
   "also": [
    "datascientist",
    "finanalyst",
    "accountant"
   ]
  },
  "fintechdev": {
   "title": "FinTech Developer",
   "inds": [
    "pro",
    "tech"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "Very high",
   "gem": true,
   "summary": "Builds the payment systems behind card swipes and mobile wallets — much of it designed in Atlanta and Columbus.",
   "wage": 120000,
   "day": [
    "Code secure payment software",
    "Protect financial data",
    "Work with banks and merchants"
   ],
   "hs": [
    "AP Computer Science",
    "Business"
   ],
   "tcsg": "Computer Programming AAS",
   "usg": "B.S. in Computer Science; FinTech programs (Georgia State, Kennesaw State, UGA)",
   "also": [
    "softwaredev",
    "cyberanalyst",
    "finanalyst"
   ]
  },
  "payrollspec": {
   "title": "Payroll & Bookkeeping Specialist",
   "inds": [
    "pro"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Makes sure everyone gets paid correctly and on time — in-demand in every industry.",
   "wage": 48000,
   "day": [
    "Process payroll",
    "Reconcile accounts",
    "Use accounting software"
   ],
   "hs": [
    "Accounting",
    "Business pathway"
   ],
   "tcsg": "Accounting / Payroll certificates",
   "usg": null,
   "also": [
    "accountant",
    "hrspecialist"
   ]
  },
  "supplychain": {
   "title": "Supply Chain Analyst",
   "inds": [
    "pro"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Uses data to make global supply chains faster, cheaper, and more reliable.",
   "wage": 78000,
   "day": [
    "Analyze shipping and inventory data",
    "Forecast demand",
    "Recommend improvements"
   ],
   "hs": [
    "Statistics",
    "Business",
    "Excel skills"
   ],
   "tcsg": "Supply Chain Management AAS",
   "usg": "B.B.A. in Supply Chain Management",
   "also": [
    "datascientist",
    "indeng"
   ]
  },
  "hes": {
   "title": "Health Education Specialist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Teaches people and communities how to stay healthy, from nutrition classes to vaccine drives.",
   "wage": 60000,
   "day": [
    "Plan health programs and events",
    "Teach classes in clinics, schools, or workplaces",
    "Track whether programs are working"
   ],
   "hs": [
    "Public Health",
    "Health Science pathway"
   ],
   "tcsg": null,
   "usg": "B.S. in Public Health or Health Promotion",
   "also": [
    "chw",
    "healthmgr",
    "rn"
   ],
   "soc": "21-1091"
  },
  "hcsw": {
   "title": "Healthcare Social Worker",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Helps patients and families handle the hard parts of an illness: insurance, home care, and next steps after the hospital.",
   "wage": 62000,
   "day": [
    "Meet patients and families in the hospital",
    "Plan safe discharges home",
    "Connect people to community resources"
   ],
   "hs": [
    "Mental Health Professional",
    "Psychology"
   ],
   "tcsg": null,
   "usg": "Bachelor's → Master of Social Work (MSW)",
   "also": [
    "mhsw",
    "mhcounselor",
    "rn"
   ],
   "soc": "21-1022"
  },
  "massage": {
   "title": "Massage Therapist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": true,
   "summary": "Uses massage to relieve pain, speed injury recovery, and reduce stress, often alongside chiropractors and physical therapists.",
   "wage": 50000,
   "day": [
    "Assess each client's needs",
    "Give therapeutic massage",
    "Work in spas, clinics, or sports settings"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Sports Medicine"
   ],
   "tcsg": "Massage Therapy diploma",
   "usg": null,
   "also": [
    "pta",
    "athletictrainer",
    "pt"
   ],
   "soc": "31-9011"
  },
  "healthmgr": {
   "title": "Medical & Health Services Manager",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "bach",
   "years": "4+ yrs",
   "demand": "High",
   "gem": true,
   "summary": "Runs the business side of healthcare: managing staff, budgets, and operations for a clinic, department, or hospital.",
   "wage": 110000,
   "day": [
    "Manage schedules, staff, and budgets",
    "Improve patient experience and quality",
    "Keep the practice compliant with health laws"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Business & Entrepreneurship"
   ],
   "tcsg": "Health Information Management as a starting point",
   "usg": "B.S. in Health Informatics & Administration or Healthcare Management",
   "also": [
    "healthinfo",
    "medsec",
    "rn"
   ],
   "soc": "11-9111"
  },
  "medsec": {
   "title": "Medical Secretary",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Keeps a medical office running: scheduling patients, handling records and insurance, and greeting everyone who walks in.",
   "wage": 40000,
   "day": [
    "Schedule appointments",
    "Update patient records",
    "Handle insurance and billing questions"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Business & Entrepreneurship"
   ],
   "tcsg": "Medical Administrative Assistant certificate",
   "usg": null,
   "also": [
    "medassist",
    "healthinfo",
    "healthmgr"
   ],
   "soc": "43-6013"
  },
  "mhsw": {
   "title": "Mental Health Social Worker",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Supports people living with mental illness or addiction and helps them find treatment, housing, and stability.",
   "wage": 52000,
   "day": [
    "Counsel clients one-on-one",
    "Coordinate treatment plans",
    "Connect families to support services"
   ],
   "hs": [
    "Mental Health Professional",
    "Psychology"
   ],
   "tcsg": null,
   "usg": "Bachelor's → Master of Social Work (MSW)",
   "also": [
    "mhcounselor",
    "hcsw",
    "psychtech"
   ],
   "soc": "21-1023"
  },
  "ohsspec": {
   "title": "Occupational Health & Safety Specialist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "bach",
   "years": "4 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Keeps workers safe by inspecting workplaces, preventing injuries, and making sure companies follow safety laws.",
   "wage": 80000,
   "day": [
    "Inspect plants and job sites",
    "Investigate accidents",
    "Train employees on safety"
   ],
   "hs": [
    "Public Health",
    "Engineering & Technology"
   ],
   "tcsg": null,
   "usg": "B.S. in Occupational Safety, Environmental Health, or Engineering",
   "also": [
    "ohstech",
    "hes",
    "qualitytech"
   ],
   "soc": "19-5011"
  },
  "ohstech": {
   "title": "Occupational Health & Safety Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Tests air, noise, and equipment on the job to catch hazards before anyone gets hurt.",
   "wage": 55000,
   "day": [
    "Collect air and noise samples",
    "Check safety equipment",
    "Help write safety reports"
   ],
   "hs": [
    "Public Health",
    "Engineering & Technology"
   ],
   "tcsg": "Occupational safety certificates (ask Lanier Tech)",
   "usg": null,
   "also": [
    "ohsspec",
    "qualitytech"
   ],
   "soc": "19-5012"
  },
  "ophlab": {
   "title": "Ophthalmic Lab Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": true,
   "summary": "Makes the lenses for eyeglasses, cutting, grinding, and fitting them to each prescription.",
   "wage": 38000,
   "day": [
    "Read prescriptions",
    "Cut and polish lenses",
    "Fit lenses into frames"
   ],
   "hs": [
    "Allied Health & Medicine"
   ],
   "tcsg": "Optical / opticianry coursework or on-the-job training",
   "usg": null,
   "also": [
    "optician",
    "ophtech"
   ],
   "soc": "51-9083"
  },
  "ophtech": {
   "title": "Ophthalmic Medical Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "1 yr",
   "demand": "High",
   "gem": true,
   "summary": "Works alongside eye doctors, testing vision, taking eye images, and preparing patients for exams and surgery.",
   "wage": 42000,
   "day": [
    "Run vision and eye-pressure tests",
    "Take images of the eye",
    "Assist during minor procedures"
   ],
   "hs": [
    "Allied Health & Medicine"
   ],
   "tcsg": "Ophthalmic technician certificate",
   "usg": null,
   "also": [
    "optician",
    "ophlab",
    "medassist"
   ],
   "soc": "29-2057"
  },
  "optician": {
   "title": "Dispensing Optician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Helps people choose and fit the right glasses and contact lenses based on their eye doctor's prescription.",
   "wage": 43000,
   "day": [
    "Measure and fit eyewear",
    "Help customers choose frames",
    "Adjust and repair glasses"
   ],
   "hs": [
    "Allied Health & Medicine"
   ],
   "tcsg": "Opticianry diploma or associate degree",
   "usg": null,
   "also": [
    "ophtech",
    "ophlab"
   ],
   "soc": "29-2081"
  },
  "psychtech": {
   "title": "Psychiatric Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": true,
   "summary": "Cares for patients with mental illness, helping with daily activities, monitoring behavior, and supporting treatment.",
   "wage": 36000,
   "day": [
    "Monitor patients and record behavior",
    "Lead group activities",
    "Help patients with daily care"
   ],
   "hs": [
    "Mental Health Professional",
    "Allied Health & Medicine"
   ],
   "tcsg": "Certificate or diploma in mental health / human services",
   "usg": null,
   "also": [
    "mhcounselor",
    "cna",
    "rn"
   ],
   "soc": "29-2053"
  },
  "mhcounselor": {
   "title": "Mental Health & Substance Abuse Counselor",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "4–6 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Helps people work through addiction, anxiety, depression, and other challenges, one conversation at a time.",
   "wage": 50000,
   "day": [
    "Lead individual and group counseling",
    "Build recovery plans",
    "Work with families and doctors"
   ],
   "hs": [
    "Mental Health Professional",
    "Psychology"
   ],
   "tcsg": null,
   "usg": "Bachelor's in Psychology or Human Services → Master's in Counseling",
   "also": [
    "mhsw",
    "psychtech",
    "rehabcounselor"
   ],
   "soc": "21-1018"
  },
  "chw": {
   "title": "Community Health Worker",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "Under 1 yr",
   "demand": "High",
   "gem": true,
   "summary": "A trusted local link between families and healthcare, helping neighbors find care, insurance, and support.",
   "wage": 45000,
   "day": [
    "Visit families and check on needs",
    "Help people sign up for services",
    "Share health information in the community"
   ],
   "hs": [
    "Public Health"
   ],
   "tcsg": "Community health worker certificate",
   "usg": null,
   "also": [
    "hes",
    "hcsw",
    "medassist"
   ],
   "soc": "21-1094"
  },
  "rehabcounselor": {
   "title": "Rehabilitation Counselor",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "6 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Helps people with disabilities or injuries live independently and get back to work.",
   "wage": 45000,
   "day": [
    "Assess each client's goals",
    "Plan training and job placement",
    "Coordinate with doctors and employers"
   ],
   "hs": [
    "Mental Health Professional",
    "Psychology"
   ],
   "tcsg": null,
   "usg": "Bachelor's → Master's in Rehabilitation Counseling",
   "also": [
    "mhcounselor",
    "ot",
    "pt"
   ],
   "soc": "21-1015"
  },
  "cardiotech": {
   "title": "Cardiovascular Technologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "assoc",
   "years": "2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Runs the tests that show how a heart is working, from EKGs and stress tests to heart ultrasounds, and assists in the cardiac cath lab.",
   "wage": 65000,
   "day": [
    "Run EKGs and stress tests",
    "Take ultrasound images of the heart",
    "Assist doctors during heart procedures"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Anatomy & Physiology"
   ],
   "tcsg": "Cardiovascular Technology AAS",
   "usg": null,
   "also": [
    "sonographer",
    "perfusionist",
    "rn"
   ],
   "soc": "29-2031"
  },
  "psychologist": {
   "title": "Clinical Psychologist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "8+ yrs",
   "demand": "High",
   "gem": false,
   "summary": "Diagnoses and treats mental health conditions through therapy, testing, and research.",
   "wage": 90000,
   "day": [
    "Meet with clients for therapy",
    "Give psychological tests",
    "Work in clinics, hospitals, or private practice"
   ],
   "hs": [
    "Mental Health Professional",
    "Psychology"
   ],
   "tcsg": null,
   "usg": "Bachelor's in Psychology → Doctorate (Ph.D. or Psy.D.)",
   "also": [
    "mhcounselor",
    "mhsw",
    "rehabcounselor"
   ],
   "soc": "19-3033"
  },
  "dentalasst": {
   "title": "Dental Assistant",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "1 yr",
   "demand": "High",
   "gem": false,
   "summary": "Works chairside with the dentist, preparing patients, taking X-rays, and keeping instruments ready. One of the fastest ways into a dental office.",
   "wage": 45000,
   "day": [
    "Prepare patients and rooms",
    "Hand instruments during procedures",
    "Take X-rays and impressions"
   ],
   "hs": [
    "Allied Health & Medicine"
   ],
   "tcsg": "Dental Assisting diploma (Lanier Tech offers Dental Hygiene & Dental Assisting)",
   "usg": null,
   "also": [
    "dentalhyg",
    "dentist",
    "dentallab"
   ],
   "soc": "31-9091"
  },
  "dentallab": {
   "title": "Dental Lab Technician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "cert",
   "years": "1–2 yrs",
   "demand": "High",
   "gem": true,
   "summary": "Builds crowns, bridges, dentures, and retainers by hand and with 3D printers, all from a dentist's prescription.",
   "wage": 45000,
   "day": [
    "Read dental impressions and scans",
    "Shape crowns and dentures",
    "Use 3D design and milling tools"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Engineering & Technology"
   ],
   "tcsg": "Dental laboratory coursework or on-the-job training",
   "usg": null,
   "also": [
    "dentalasst",
    "dentist",
    "ophlab"
   ],
   "soc": "51-9081"
  },
  "dietitian": {
   "title": "Dietitian & Nutritionist",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "5–6 yrs",
   "demand": "High",
   "gem": false,
   "summary": "Uses the science of food to help patients manage diabetes, heart disease, sports performance, and more.",
   "wage": 65000,
   "day": [
    "Assess patients' nutrition needs",
    "Build meal plans",
    "Work in hospitals, clinics, schools, or sports"
   ],
   "hs": [
    "Allied Health & Medicine",
    "Public Health"
   ],
   "tcsg": null,
   "usg": "B.S. in Nutrition / Dietetics → master's and supervised internship to become a Registered Dietitian",
   "also": [
    "hes",
    "rn",
    "athletictrainer"
   ],
   "soc": "29-1031"
  },
  "erphysician": {
   "title": "Emergency Medicine Physician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "11+ yrs",
   "demand": "High",
   "gem": false,
   "summary": "The doctor in the emergency room, treating everything from broken bones to heart attacks, fast.",
   "wage": 239000,
   "day": [
    "Treat patients as they arrive",
    "Make quick, life-saving decisions",
    "Lead the ER care team"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Health Science pathway"
   ],
   "tcsg": null,
   "usg": "Pre-med bachelor's → MD or DO → 3–4 year emergency medicine residency",
   "also": [
    "paramedic",
    "physician",
    "pa"
   ],
   "soc": "29-1214"
  },
  "internist": {
   "title": "Internal Medicine Physician",
   "inds": [
    "health"
   ],
   "local": false,
   "edu": "adv",
   "years": "11+ yrs",
   "demand": "High",
   "gem": false,
   "summary": "An adult-medicine doctor who diagnoses complex illnesses and manages long-term conditions like diabetes and heart disease.",
   "wage": 230000,
   "day": [
    "See adult patients in clinic or hospital",
    "Diagnose complex conditions",
    "Coordinate care with specialists"
   ],
   "hs": [
    "Biology",
    "Chemistry",
    "Health Science pathway"
   ],
   "tcsg": null,
   "usg": "Pre-med bachelor's → MD or DO → 3-year internal medicine residency",
   "also": [
    "physician",
    "np",
    "pa"
   ],
   "soc": "29-1216"
  }
 },
 "industries": [
  {
   "id": "mfg",
   "name": "Advanced Manufacturing",
   "color": "#e08a2b",
   "tag": "Build it · make it · move it",
   "blurb": "Design, build, and run the machines and products made right here in Forsyth County — precision parts, welding, automation, and engineering.",
   "growth": "+11%",
   "growthSource": "Industrial engineers, projected 2024–34 (BLS Occupational Outlook Handbook)",
   "careers": [
    "welder",
    "cnc",
    "mechatronics",
    "automationtech",
    "mfgeng",
    "qualitytech",
    "drafter",
    "electricaltech",
    "qcanalyst",
    "opsmgr",
    "dronepilot",
    "robotics",
    "evtech",
    "maintenancetech",
    "mecheng",
    "eleceng",
    "indeng",
    "chemeng"
   ],
   "programs": {
    "fcs": [
     {
      "name": "Engineering & Technology",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "denmark",
       "east",
       "central",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "mfgeng",
       "drafter",
       "automationtech"
      ]
     },
     {
      "name": "Mechatronics",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "mechatronics",
       "automationtech"
      ]
     },
     {
      "name": "Automotive Technology",
      "desc": null,
      "url": null,
      "highSchools": [
       "central"
      ],
      "careers": [
       "cnc",
       "qualitytech"
      ]
     },
     {
      "name": "Heavy Equipment Operations",
      "desc": null,
      "url": null,
      "highSchools": [
       "east"
      ],
      "careers": [
       "qualitytech",
       "opsmgr"
      ]
     },
     {
      "name": "Construction & Carpentry",
      "desc": null,
      "url": null,
      "highSchools": [
       "east"
      ],
      "careers": [
       "opsmgr",
       "qualitytech"
      ]
     }
    ],
    "lanier": [
     {
      "name": "Mechatronics Technology (A.A.S.)",
      "desc": "Blends mechanical, electrical, and computer skills to install and maintain automated production systems.",
      "url": "https://www.laniertech.edu/programs/building-electrical-manufacturing/mechatronics-technology/",
      "careers": [
       "mechatronics",
       "automationtech"
      ]
     },
     {
      "name": "Precision Machining & Manufacturing",
      "desc": null,
      "url": null,
      "careers": [
       "cnc",
       "qualitytech"
      ]
     },
     {
      "name": "Automation Technology (A.A.S.)",
      "desc": null,
      "url": "https://www.laniertech.edu/programs/building-electrical-manufacturing/automation-technology/",
      "careers": [
       "automationtech",
       "mechatronics"
      ]
     },
     {
      "name": "Electrical Systems Technology",
      "desc": null,
      "url": null,
      "careers": [
       "mechatronics",
       "automationtech"
      ]
     },
     {
      "name": "Welding & Joining Technology",
      "desc": "Learn to join metal using multiple welding processes — a high-demand trade across Forsyth County's manufacturers.",
      "url": "https://www.laniertech.edu/programs/building-electrical-manufacturing/welding-and-joining-technology/",
      "careers": [
       "welder"
      ]
     },
     {
      "name": "Drafting Technology",
      "desc": null,
      "url": "https://www.laniertech.edu/programs/building-electrical-manufacturing/drafting-technology/",
      "careers": [
       "drafter"
      ]
     },
     {
      "name": "Building Automation Systems",
      "desc": null,
      "url": null,
      "careers": [
       "automationtech",
       "mechatronics"
      ]
     }
    ],
    "ung": [
     {
      "name": "Engineering (A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "mfgeng",
       "drafter"
      ]
     },
     {
      "name": "Engineering Technology (A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "mfgeng",
       "automationtech"
      ]
     },
     {
      "name": "Technology Management (B.A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "opsmgr",
       "mfgeng"
      ]
     },
     {
      "name": "Digital Design & Fabrication Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "drafter",
       "mfgeng"
      ]
     }
    ]
   },
   "employers": [
    {
     "name": "A.C. Smith Poultry Company",
     "url": null,
     "also": []
    },
    {
     "name": "American BOA Inc",
     "url": "https://americanboas.com/",
     "also": []
    },
    {
     "name": "AV Stumpfl Inc",
     "url": "https://avstumpfl.com/en/",
     "also": []
    },
    {
     "name": "Blastec Inc.",
     "url": "https://www.blastec.com/",
     "also": []
    },
    {
     "name": "Collins Company",
     "url": "https://www.collinscompany.com/",
     "also": []
    },
    {
     "name": "Cross Technologies",
     "url": "https://www.crosstechnologies.com/",
     "also": [
      "tech"
     ]
    },
    {
     "name": "Dependable Tube Bending LLC",
     "url": "http://dependabletubebending.com",
     "also": []
    },
    {
     "name": "Dieffenbacher USA, Inc.",
     "url": "https://dieffenbacher.com/",
     "also": []
    },
    {
     "name": "DMAC Industries, Inc",
     "url": "https://www.d-macindustries.com/",
     "also": []
    },
    {
     "name": "Durham & Taylor Supply Company",
     "url": "https://www.durhamtaylorsupply.com/",
     "also": []
    },
    {
     "name": "Flex Fab Inc.",
     "url": "https://www.flex-fab.com/",
     "also": []
    },
    {
     "name": "FUTURA North America Inc.",
     "url": "https://www.futuraconverting.com/en/home/",
     "also": []
    },
    {
     "name": "Georgia Manufacturing Alliance",
     "url": "https://www.georgiamanufacturingalliance.com/",
     "also": []
    },
    {
     "name": "Georgia Thermal Products",
     "url": "https://www.gathermal.com/",
     "also": []
    },
    {
     "name": "GIK Acoustics",
     "url": "https://www.gikacoustics.com/",
     "also": []
    },
    {
     "name": "Harben",
     "url": "https://www.harben.com/",
     "also": []
    },
    {
     "name": "Kamstrup Water Metering LLC",
     "url": "https://www.kamstrup.com/en-us/find-us",
     "also": []
    },
    {
     "name": "L3 Harris",
     "url": "https://www.l3harris.com/",
     "also": []
    },
    {
     "name": "Mattress Safe",
     "url": "http://mattresssafe.com",
     "also": []
    },
    {
     "name": "Mission Allied Group, LLC.",
     "url": "https://www.industrynet.com/notify/bot/",
     "also": []
    },
    {
     "name": "Motovario Corporation",
     "url": "https://www.motovario.com/",
     "also": []
    },
    {
     "name": "MRI Next Generation Manufacturing",
     "url": "https://mri-inc.net/",
     "also": []
    },
    {
     "name": "Precision Welding Group",
     "url": "https://precisionweldinggroup.com/",
     "also": []
    },
    {
     "name": "River Valley Ingredients",
     "url": "https://rivervalleyingredients.com/",
     "also": []
    },
    {
     "name": "S & S Technical, LLC",
     "url": "https://sstechnical.com/",
     "also": []
    },
    {
     "name": "Scientific Games",
     "url": "https://www.scientificgames.com/",
     "also": [
      "pro"
     ]
    },
    {
     "name": "Siemens Corporation",
     "url": "https://www.siemens.com/us/en.html",
     "also": []
    },
    {
     "name": "Sterling Deaerator Company",
     "url": "https://www.sterlingdeaerator.com/",
     "also": []
    },
    {
     "name": "Swagelok",
     "url": "https://www.swagelok.com/en",
     "also": []
    },
    {
     "name": "SYENSQO",
     "url": "https://www.syensqo.com/",
     "also": [
      "bio"
     ]
    },
    {
     "name": "TAG Signs, LLC",
     "url": "http://tagsigns.com",
     "also": []
    },
    {
     "name": "Techlong International Inc.",
     "url": "https://www.tech-long-intl.com/",
     "also": []
    },
    {
     "name": "United Recycling of Cumming, LLC",
     "url": "https://unitedrecyclinginc.com/",
     "also": []
    }
   ],
   "community": {
    "Medical Device Manufacturing": [
     "3d Dds",
     "A & M Instruments Inc",
     "Biotech Inc",
     "Blu Tech Lenses",
     "Brain Ultimate",
     "Careserv Technologies LLC",
     "DELTA Medical Systems, Inc.",
     "Georgia Brace & Spine",
     "Zimmer Biomet"
    ],
    "Robotics & Automation": [
     "AGILOX North America",
     "Container Automation Systems",
     "Geek+",
     "IMO Automation, LLC",
     "Mujin Corp",
     "Rockwell Automation",
     "Siemens AG",
     "Softwear Government Solutions, Inc",
     "Universal Controls Inc"
    ],
    "Electronics & Semiconductors": [
     "ASMPT SMT Solutions",
     "AV Stumpfl Inc.",
     "Celestica",
     "Cross Technologies, Inc",
     "Flip Electronics",
     "IPTE USA",
     "Ingenico Group",
     "Innovative Circuits Inc",
     "KraftPowercon, Inc",
     "L3 Harris Military Displays",
     "Micron",
     "Nidec Corporation",
     "Ocean Networks",
     "Power Integrations, Inc.",
     "Precision, Inc.",
     "S.E.A. America",
     "International Display Corp",
     "Flight Display Systems"
    ],
    "Precision Tooling & Machining": [
     "Blow Mold Services, LLC",
     "Dave's Tool & Die",
     "Electro Optic US",
     "Fairbanks Scales",
     "Gunnco Pump & Control Inc",
     "Harben, Inc.",
     "Hoover Precision Products, Inc.",
     "ITH Bolting Technology",
     "J O King Inc",
     "Lothar Walther Precision Tool",
     "MRI",
     "Trendelkamp Lp",
     "Vision Mold Works"
    ],
    "Other Manufacturing": [
     "Complete Packaging Solutions & Systems Inc",
     "FSI Solutions / Flanders Scientific",
     "Mesh Engineering & Manufacturing",
     "Pump Measure Control"
    ],
    "Industrial Machinery & Equipment": [
     "Ficep Corporation",
     "Skaltek",
     "VisiConsult X-Ray Systems & Solutions"
    ],
    "Materials & Chemicals": [
     "Leachator Pumping Systems, Inc.",
     "Pirtek Usa Inc",
     "Quaker Houghton",
     "Stryten Energy",
     "Tosoh Specialty Chemicals USA, Inc."
    ],
    "Power & Electrical": [
     "NetZero USA",
     "Panduit",
     "Power Products",
     "Quantus Power Solutions",
     "Siemens AG (Suwanee)",
     "Vertiv",
     "Vossloh Kiepe Inc"
    ],
    "Corporate & Divisional HQs": [
     "AutomationDirect",
     "DataScan",
     "Hansgrohe USA",
     "Hoover Precision Products",
     "Metcam",
     "Sawnee EMC",
     "Scientific Games (Lottery Division)"
    ]
   }
  },
  {
   "id": "health",
   "name": "Healthcare",
   "color": "#c0392b",
   "tag": "Care for your community",
   "blurb": "Help people heal and stay well — nursing, dental, emergency care, therapy, and imaging across Forsyth County's clinics and hospitals.",
   "growth": "+8.4%",
   "growthSource": "Healthcare & social assistance sector, projected 2024–34 (BLS Employment Projections)",
   "careers": [
    "rn",
    "dentalhyg",
    "medassist",
    "paramedic",
    "radtech",
    "pta",
    "healthinfo",
    "phlebotomist",
    "labtech",
    "vettech",
    "pharmtech",
    "physician",
    "anesthesiologist",
    "surgeon",
    "pa",
    "np",
    "crna",
    "perfusionist",
    "surgtech",
    "anesthesiatech",
    "sterileproc",
    "sonographer",
    "resptherapist",
    "pharmacist",
    "pt",
    "athletictrainer",
    "ot",
    "ota",
    "dentist",
    "slp",
    "cna",
    "lpn",
    "medlabtech",
    "hes",
    "hcsw",
    "massage",
    "healthmgr",
    "medsec",
    "mhsw",
    "ohsspec",
    "ohstech",
    "ophlab",
    "ophtech",
    "optician",
    "psychtech",
    "mhcounselor",
    "chw",
    "rehabcounselor",
    "cardiotech",
    "psychologist",
    "dentalasst",
    "dentallab",
    "dietitian",
    "erphysician",
    "internist"
   ],
   "programs": {
    "fcs": [
     {
      "name": "Allied Health & Medicine",
      "desc": null,
      "url": null,
      "highSchools": [
       "denmark",
       "west"
      ],
      "careers": [
       "medassist",
       "rn"
      ]
     },
     {
      "name": "Clinical Lab",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "labtech",
       "phlebotomist"
      ]
     },
     {
      "name": "Sports Medicine",
      "desc": null,
      "url": null,
      "highSchools": [
       "lambert",
       "north"
      ],
      "careers": [
       "paramedic",
       "medassist"
      ]
     },
     {
      "name": "Phlebotomy",
      "desc": null,
      "url": null,
      "highSchools": [
       "lambert"
      ],
      "careers": [
       "phlebotomist"
      ]
     },
     {
      "name": "Mental Health Professional",
      "desc": null,
      "url": null,
      "highSchools": [
       "south"
      ],
      "careers": [
       "medassist"
      ]
     },
     {
      "name": "Public Health",
      "desc": null,
      "url": null,
      "highSchools": [
       "fva",
       "north"
      ],
      "careers": [
       "rn",
       "medassist"
      ]
     },
     {
      "name": "Emergency Medical Services",
      "desc": "A high school CTAE pathway (Alliance Academy) introducing emergency response, patient care, and EMT/EMR fundamentals — a direct feeder into Lanier Tech's EMS Education program.",
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "paramedic"
      ]
     }
    ],
    "lanier": [
     {
      "name": "Associate of Science in Nursing",
      "desc": "Prepares graduates to sit for the NCLEX-RN and begin work as registered nurses.",
      "url": "https://www.laniertech.edu/programs/healthcare/associate-of-science-in-nursing/",
      "careers": [
       "rn"
      ]
     },
     {
      "name": "Practical Nursing",
      "desc": null,
      "url": "https://www.laniertech.edu/programs/healthcare/practical-nursing/",
      "careers": [
       "rn"
      ]
     },
     {
      "name": "Dental Hygiene & Dental Assisting",
      "desc": null,
      "url": null,
      "careers": [
       "dentalhyg"
      ]
     },
     {
      "name": "Medical Assisting",
      "desc": null,
      "url": "https://www.laniertech.edu/programs/healthcare/medical-assisting/",
      "careers": [
       "medassist"
      ]
     },
     {
      "name": "Radiologic Technology / CT",
      "desc": null,
      "url": null,
      "careers": [
       "radtech"
      ]
     },
     {
      "name": "Physical Therapist Assistant (A.A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "medassist"
      ]
     },
     {
      "name": "EMS Education",
      "desc": null,
      "url": null,
      "careers": [
       "paramedic"
      ]
     },
     {
      "name": "Health Information Management",
      "desc": null,
      "url": null,
      "careers": [
       "medassist"
      ]
     }
    ],
    "ung": [
     {
      "name": "Nursing (BSN)",
      "desc": "A four-year bachelor's degree for registered nurses, opening leadership and specialty roles.",
      "url": "https://ung.edu/degrees/bachelors/nursing.php",
      "careers": [
       "rn"
      ]
     },
     {
      "name": "Kinesiology (A.S. & B.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "paramedic"
      ]
     },
     {
      "name": "Clinical Health Sciences (A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "labtech",
       "radtech"
      ]
     },
     {
      "name": "Health Informatics & Administration",
      "desc": null,
      "url": null,
      "careers": [
       "medassist"
      ]
     },
     {
      "name": "Human Services Delivery & Administration",
      "desc": null,
      "url": null,
      "careers": [
       "medassist"
      ]
     }
    ]
   },
   "employers": [
    {
     "name": "4EVERYOUNG Anti Aging Solutions",
     "url": "https://4everyoungantiaging.com/",
     "also": []
    },
    {
     "name": "A Plus Dentistry",
     "url": "https://www.aplusdentistry.com/",
     "also": []
    },
    {
     "name": "ABW Solutions, LLC",
     "url": "https://awbsolutions.xyz/",
     "also": []
    },
    {
     "name": "Bragg Dental",
     "url": "https://www.braggdental.com/",
     "also": []
    },
    {
     "name": "Central EMS",
     "url": "https://www.centralems.com/",
     "also": []
    },
    {
     "name": "Children's Healthcare of Atlanta Forsyth",
     "url": "https://www.choa.org/",
     "also": []
    },
    {
     "name": "Comfort Keepers",
     "url": "https://www.comfortkeepers.com/",
     "also": []
    },
    {
     "name": "ConfiDENT Cumming, LLC.",
     "url": "https://confidentsmiles4u.com/cumming/",
     "also": []
    },
    {
     "name": "Cumming Pediatric Dentistry & Orthodontics",
     "url": "https://www.cummingpedoortho.com/",
     "also": []
    },
    {
     "name": "Dermani MedSpa - Cumming",
     "url": "https://dermanimedspa.com/",
     "also": []
    },
    {
     "name": "Encompass Health Rehabilitation Hospital",
     "url": "https://www.encompasshealth.com/",
     "also": []
    },
    {
     "name": "Georgia Implants and Dentures",
     "url": "https://georgiaimplantsanddentures.com/",
     "also": []
    },
    {
     "name": "HOPE Primary Care & Dentistry",
     "url": "https://hopepcp.com/",
     "also": []
    },
    {
     "name": "Hello Family Dental",
     "url": "https://www.myjohnscreekdentist.com/",
     "also": []
    },
    {
     "name": "Homestead Animal Hospital",
     "url": "https://vethomestead.com/",
     "also": [
      "bio"
     ]
    },
    {
     "name": "Kaiser Permanente",
     "url": "https://healthy.kaiserpermanente.org/georgia/front-door",
     "also": [
      "pro"
     ]
    },
    {
     "name": "Magnolia Pharmacy",
     "url": "https://mymagnoliarx.com/",
     "also": [
      "bio"
     ]
    },
    {
     "name": "MDSi Inc",
     "url": "https://www.mdsiinc.com/",
     "also": [
      "tech"
     ]
    },
    {
     "name": "North Atlanta Family Dentistry",
     "url": "https://www.smilegeorgia.com/cumming-ga/",
     "also": []
    },
    {
     "name": "Northeast Georgia Health System",
     "url": "https://www.nghs.com/",
     "also": []
    },
    {
     "name": "Northside Hospital-Forsyth",
     "url": "https://www.northside.com/",
     "also": []
    },
    {
     "name": "Reboot Health (Zivel Cumming)",
     "url": "https://zivel.com/",
     "also": []
    },
    {
     "name": "Sawnee Family Dentistry, PC",
     "url": "https://www.sawneefamilydentistry.com/",
     "also": []
    },
    {
     "name": "Serenity Orthodontics",
     "url": "https://www.serenitysmiles.com/",
     "also": []
    },
    {
     "name": "SmileBox / Lifeway Family Dental",
     "url": "https://smileboxdental.com/",
     "also": []
    },
    {
     "name": "Vickery Animal Hospital",
     "url": "https://www.vickeryanimalhospital.com/",
     "also": [
      "bio"
     ]
    },
    {
     "name": "Wellstar North Fulton Medical Center",
     "url": "https://www.wellstar.org/",
     "also": []
    }
   ],
   "community": {
    "Dental": [
     "A1 Dental",
     "Ace Digital Dental Laboratory LLC",
     "Advanced Dental Associates, LLC",
     "Alec N Elchahal PC",
     "All Smiles Family & Cosmetic Dentistry",
     "All Stars Pediatric Dentistry",
     "Alpha Cosmetic Dentistry Inc",
     "Alpharetta Children's Dentistry",
     "Alpharetta Comprehensive Dentistry",
     "Aspen Dental",
     "Atlanta Oral & Facial Surgery",
     "Avenue Dental",
     "Castleberry Dental",
     "Center for Advanced Dentistry",
     "Children & Teen Dental Group",
     "Comprehensive Dental Care",
     "Cumming Dental Associates",
     "DentFirst",
     "Dental Smiles At Johns Creek",
     "Dental Town",
     "Dentistry At Vickery Creek",
     "Dentistry For Children",
     "Dentistry at Windermere",
     "Dentistry for Children Llc",
     "Dentistry for Smiles",
     "Dr. Skognes",
     "Exceptional Dentistry",
     "Family Dentistry & Orthodontics",
     "Family Dentistry of Forsyth",
     "Great Expressions Dental Centers",
     "Greater Atlanta Oral Facial Surgery, LLC",
     "Hiser Orthodontics",
     "Hope Dentistry Llc",
     "Ideal Dental",
     "Imagix Dental",
     "Inspirational Smiles",
     "Inspiring Smiles",
     "John's Creek Dental Care",
     "Karl Lugus, DDS",
     "Lemons Dental Esthetics",
     "Mark Lipinski Llc",
     "Max Couch, Jr, Dds, Mds",
     "Midway Family Dentistry",
     "Montes Periodontics & Implant Dentistry",
     "Natural Smile Dental Lab Denture repair",
     "North Cumming Dentistry",
     "North Fulton Endodontics, P.C.",
     "North Georgia Dental Care",
     "North Georgia Oral Surgery",
     "North Georgia Smiles",
     "O'Rourke Family and Cosmetic Dentistry",
     "Pediatric Dentistry Of Forsyth",
     "Pinnacle Endodontics Of GA",
     "Pleasant Dentistry",
     "Reznik & Vaine",
     "Sage Dental",
     "Shackelford Dental",
     "Smile Creations Dental",
     "Smile Doctors",
     "Smile Pop",
     "Tim Devine Pc",
     "Village Pediatric Dentistry",
     "Walton Orthodontics",
     "Washburn Family Dentistry",
     "Windemere Orthodontics",
     "Windermere Dental",
     "Windermere Orthodontics",
     "Cumming Dental Management, Inc"
    ],
    "Medical": [
     "Academy Orthopedics",
     "Advanced Urology",
     "Alderdice Sports & Family",
     "AllCare",
     "Allergy and Asthma Consultants, P.C.",
     "Alpha Medical Assoc Profe",
     "Alpha OBGYN",
     "Alpharetta Pediatrics",
     "Ankle & Foot Centers of North Georgia",
     "Arthritis & Total Joint Specialists",
     "Atlanta Allergy & Asthma",
     "Atlanta Bariatrics",
     "Atlanta Cancer Care",
     "Atlanta Center-dermatologic",
     "Atlanta ENT, Sinus & Allergy Associates, P.C.",
     "Atlanta Gastroenterology",
     "Atlanta Heart Specialists",
     "Atlanta Plastic Surgery, PC",
     "Atlanta Vein Specialists",
     "Aura Functional Neurology Center Llc",
     "Bald Ridge Family Practice",
     "Baptist North Family Medicine",
     "Behaviorlink",
     "CPM OB/GYN",
     "Campbell Family Medicine",
     "Cancer and Blood Specialists of GA",
     "CardioVascular Group, P.C.",
     "Children's Cardiology Svc",
     "Children's Cardiovascular Medicine, P.C.",
     "Children's Healthcare of Atlanta Cardiology, Inc.",
     "Children's Medical Group, P.C.",
     "Clayton Robert D MD",
     "Cleaver Dermatology and Aesthetics",
     "Colon & Rectal Clinic",
     "Creekview Pediatrics",
     "Cumming Family Medicine",
     "Cumming Family Medicine Inc",
     "Cumming Pediatric Group",
     "Daulton E. Todd, Jr. MD",
     "Dawson Pediatrics",
     "Derm Clinic MD",
     "Dermatology Associates of Georgia",
     "Digestive Care Physicians LLC",
     "Dominion Orthopaedic Clinic, LLC",
     "Dr. John Lee",
     "Dr. Shannon Mize",
     "ENT of Georgia",
     "Ear, Nose & Throat Institute",
     "Emory Healthcare Inc",
     "Family First Primary Clinic Llc",
     "Family Practice Center, PC",
     "Forefront Dermatology, S.c.",
     "Forsyth Foot & Ankle",
     "GI North Clinic",
     "Genesis Health Center",
     "Georgia Cancer Specialists",
     "Georgia Colon & Rectal Surgical Associates",
     "Georgia Gynecologic Oncology",
     "Georgia Pain & Wellness Center",
     "Georgia Retina PC",
     "Georgia Urology",
     "Georgia's Allergy & Asthma Institute",
     "Goyco Internal Medicine",
     "Heart & Vascular Care",
     "Hemorrhoid Centers of America",
     "Hogan Healthcare Center Pc",
     "Idsga",
     "Indira Devu Md Pc",
     "Infectious Disease Consultants",
     "Infectious Disease Professionals",
     "Infectious Disease Services of GA, PC",
     "Internal Medicine Assoc-John",
     "John's Creek ENT",
     "Johns Creek Gastroenterology",
     "Johns Creek Pediatrics",
     "Johns Creek Primary Care",
     "Johns Creek Surgery",
     "Kidney Care Center Of Georgia",
     "Lakeside Pediatrics",
     "Many Smiles Dental",
     "Marietta Eye Clinic",
     "Milan Eye Center",
     "Modern Obstetrics & Gynecology",
     "My Pain Clinic",
     "NSC Cardiology",
     "North Atlanta Dermatology",
     "North Atlanta Plastic Surgery Group",
     "North Atlanta Primary Care",
     "North Atlanta Vascular & Vein Center",
     "North Atlanta Vascular & Vein-Cummings, GA",
     "North Atlanta Women's Care",
     "North Fulton Neurology",
     "North Point Pulmonary Associates",
     "North Pointe OB/GYN Associates",
     "Northeast Georgia Physicians Group",
     "Northside Anesthesiology Consultants, LLC",
     "Northside ENT Specialists",
     "Northside Family Medicine",
     "Northside Nephrology P.C.",
     "Northside Pulmonary & Sleep Medicine",
     "Northside Urgent Care and Family Medicine",
     "Obstetrics & Gynecology of Atlanta PC",
     "Olansky Dermatology & Aesthetics",
     "One Family Pediatrics, LLC",
     "Paul Internal Medicine",
     "Paul Korb, DDS",
     "Peach Clinic",
     "Peachtree Immediate Care",
     "Peachtree Orthopedics",
     "Peachtree Women's Clinic",
     "Pediatric Associates of Johns Creek, PC",
     "Pediatrix",
     "Perimeter North Family Medicine",
     "Perimeter North Medical Associates",
     "Perlow Urology Practice",
     "Physician's Express Care",
     "Pickford Medical Clinic",
     "Premier Medical Associates",
     "Roswell Pediatric Center, P.C",
     "Scott Griffith Md",
     "Smiles For Kids Children's Dentistry",
     "Souteast Medical Group",
     "South Atlanta Urology and Gynecology",
     "Southern Skin & Beauty Bar",
     "Spectrum Neurosurgical Specialists",
     "Stahl Primary Care",
     "Summit Spine & Joint Centers",
     "Sweet Dreams",
     "Tama Clinic",
     "The Hand & Upper Extremity Center of Georgia",
     "The Little Clinic",
     "The Vein Center",
     "Thomas Lifetime Health Llc",
     "United Pediatrics",
     "Vaccines On The Go Inc",
     "VeinInnovations",
     "Vickery Pediatrics",
     "Village Medical",
     "Vishal Bhalani Md",
     "Vital Neurology Llc"
    ],
    "Imaging": [
     "Advanced Imaging Centers",
     "American Health Imaging",
     "Bako DX",
     "First Impression 3D Imaging",
     "ImageLink",
     "Resurgens Orthopaedics",
     "Women's Imaging Specialists"
    ],
    "Lab": [
     "Clinical Pathology Labs Se",
     "Diagnostic Solutions Laboratory",
     "LabCorp",
     "Omega Molecular Laboratories",
     "Quest Diagnostics",
     "Transmed Co"
    ]
   }
  },
  {
   "id": "bio",
   "name": "Bio & Life Sciences",
   "color": "#9b5bb5",
   "tag": "Science that improves lives",
   "blurb": "Work in biology, chemistry, and laboratory science — the research, testing, and discovery behind medicine, health, and biotechnology.",
   "growth": "+8.7%",
   "growthSource": "Scientific R&D services (physical, engineering & life sciences), projected 2024–34 (BLS Employment Projections)",
   "careers": [
    "radtech",
    "phlebotomist",
    "labtech",
    "biologist",
    "chemist",
    "qcanalyst",
    "researchasst",
    "vettech",
    "pharmtech",
    "pharmacist",
    "medlabtech",
    "vet",
    "foodscientist",
    "chemeng"
   ],
   "programs": {
    "fcs": [
     {
      "name": "Biotechnology",
      "desc": null,
      "url": null,
      "highSchools": [
       "central",
       "lambert",
       "south"
      ],
      "careers": [
       "labtech",
       "researchasst"
      ]
     },
     {
      "name": "Veterinary Science",
      "desc": null,
      "url": null,
      "highSchools": [
       "denmark",
       "central",
       "north"
      ],
      "careers": [
       "vettech"
      ]
     },
     {
      "name": "Clinical Lab",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "labtech",
       "phlebotomist"
      ]
     },
     {
      "name": "Public Health",
      "desc": null,
      "url": null,
      "highSchools": [
       "fva",
       "north"
      ],
      "careers": [
       "labtech"
      ]
     }
    ],
    "lanier": [
     {
      "name": "Phlebotomy",
      "desc": null,
      "url": null,
      "careers": [
       "phlebotomist"
      ]
     },
     {
      "name": "Medical lab support coursework",
      "desc": null,
      "url": null,
      "careers": [
       "labtech"
      ]
     }
    ],
    "ung": [
     {
      "name": "Biology (B.S.)",
      "desc": "Foundation for lab, research, healthcare, and biotechnology careers.",
      "url": "https://ung.edu/degrees/bachelors/biology.php",
      "careers": [
       "biologist",
       "researchasst"
      ]
     },
     {
      "name": "Chemistry (B.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "biologist",
       "researchasst"
      ]
     },
     {
      "name": "Chemistry with Biochemistry Concentration",
      "desc": null,
      "url": null,
      "careers": [
       "researchasst",
       "biologist"
      ]
     },
     {
      "name": "Clinical Health Sciences (A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "labtech"
      ]
     }
    ]
   },
   "employers": [
    {
     "name": "SYENSQO",
     "url": "https://www.syensqo.com/",
     "also": [
      "mfg"
     ]
    },
    {
     "name": "Magnolia Pharmacy",
     "url": "https://mymagnoliarx.com/",
     "also": [
      "health"
     ]
    },
    {
     "name": "Homestead Animal Hospital",
     "url": "https://vethomestead.com/",
     "also": [
      "health"
     ]
    },
    {
     "name": "Vickery Animal Hospital",
     "url": "https://www.vickeryanimalhospital.com/",
     "also": [
      "health"
     ]
    },
    {
     "name": "Children's Healthcare of Atlanta (Research)",
     "url": "https://www.choa.org/",
     "also": []
    },
    {
     "name": "Healthy Vending Options, Inc",
     "url": "https://healthyvendingoptions.net/",
     "also": []
    }
   ],
   "community": {
    "Biopharmaceutical & Devices": [
     "Alimera Sciences",
     "Zimmer Biomet",
     "Hanger",
     "Southern Prosthetic Supply (SPS)",
     "BioTech",
     "Micron",
     "Enveric Biosciences, Inc"
    ],
    "Clinical & Medical Research Services": [
     "In-Quest Medical Research",
     "Fusion Life Sciences Tech"
    ]
   }
  },
  {
   "id": "pro",
   "name": "Professional Services + HQs",
   "color": "#2563b0",
   "tag": "Lead it · grow it · run it",
   "blurb": "Drive business strategy, marketing, finance, and operations for the companies headquartered right here in Forsyth County.",
   "growth": "+7.5%",
   "growthSource": "Professional, scientific & technical services sector, projected 2024–34 (BLS Employment Projections)",
   "careers": [
    "marketing",
    "businessanalyst",
    "financialadvisor",
    "sales",
    "projectmgr",
    "hrspecialist",
    "opsmgr",
    "accountexec",
    "dataanalyst",
    "uxdesigner",
    "graphicdesigner",
    "accountant",
    "finanalyst",
    "actuary",
    "fintechdev",
    "payrollspec",
    "supplychain"
   ],
   "programs": {
    "fcs": [
     {
      "name": "Business & Entrepreneurship",
      "desc": null,
      "url": null,
      "highSchools": [
       "denmark",
       "east",
       "south"
      ],
      "careers": [
       "businessanalyst",
       "opsmgr"
      ]
     },
     {
      "name": "Marketing",
      "desc": null,
      "url": null,
      "highSchools": [
       "denmark",
       "east",
       "central",
       "fva",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "marketing"
      ]
     },
     {
      "name": "Finance & Accounting",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "denmark",
       "lambert",
       "south",
       "west"
      ],
      "careers": [
       "financialadvisor"
      ]
     },
     {
      "name": "Digital Media & Communications",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "east",
       "central",
       "fva",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "marketing",
       "uxdesigner"
      ]
     }
    ],
    "lanier": [
     {
      "name": "Business Management (A.A.S.)",
      "desc": "Practical management training covering operations, HR, and finance — ready for supervisory roles in two years.",
      "url": null,
      "careers": [
       "opsmgr",
       "hrspecialist"
      ]
     },
     {
      "name": "Accounting Technology",
      "desc": null,
      "url": null,
      "careers": [
       "financialadvisor"
      ]
     },
     {
      "name": "Digital Marketing Certificate",
      "desc": "A fast-track credential for launching careers in social media, SEO, content, and digital advertising.",
      "url": null,
      "careers": [
       "marketing"
      ]
     },
     {
      "name": "Project Management Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "projectmgr"
      ]
     }
    ],
    "ung": [
     {
      "name": "Business Administration (B.B.A.)",
      "desc": "A broad foundation in strategy, finance, and management — the gateway to leadership roles across any industry.",
      "url": null,
      "careers": [
       "businessanalyst",
       "opsmgr"
      ]
     },
     {
      "name": "Marketing (B.B.A.)",
      "desc": "Build skills in brand strategy, digital marketing, and consumer behavior for agencies and in-house teams alike.",
      "url": null,
      "careers": [
       "marketing"
      ]
     },
     {
      "name": "Accounting (B.B.A.)",
      "desc": null,
      "url": null,
      "careers": [
       "financialadvisor"
      ]
     },
     {
      "name": "Communication (B.A.)",
      "desc": null,
      "url": null,
      "careers": [
       "marketing",
       "uxdesigner"
      ]
     },
     {
      "name": "Organizational Leadership (B.A.S.)",
      "desc": null,
      "url": null,
      "careers": [
       "hrspecialist",
       "opsmgr"
      ]
     }
    ]
   },
   "employers": [
    {
     "name": "1st Franklin Financial Corporation",
     "url": "https://www.1ffc.com/",
     "also": []
    },
    {
     "name": "AWE! Creative & Marketing",
     "url": "https://prospeo.io/c/awe-creative-marketing",
     "also": []
    },
    {
     "name": "Because Mom Marketing & Social Agency",
     "url": "https://www.becausemommarketing.com/",
     "also": []
    },
    {
     "name": "Better Business Bureau of Metro Atlanta, Athens, & NE Georgia",
     "url": "https://www.bbb.org/",
     "also": []
    },
    {
     "name": "Black Bird Motion Media LLC",
     "url": "https://blackbirdme.com/",
     "also": []
    },
    {
     "name": "Conquest Strategic Marketing",
     "url": "https://conquestsm.com/",
     "also": []
    },
    {
     "name": "Cooper & Company General Contractors, Inc.",
     "url": "https://www.coopergc.com/",
     "also": []
    },
    {
     "name": "Cork & Glass",
     "url": "https://corkandglass.com/",
     "also": []
    },
    {
     "name": "Duffey Southeast Construction, Inc.",
     "url": "https://www.duffeyse.com/",
     "also": []
    },
    {
     "name": "EWISE Marketing & Communications",
     "url": "https://www.ewisecommunications.com/",
     "also": []
    },
    {
     "name": "Forsyth Local",
     "url": null,
     "also": []
    },
    {
     "name": "Keller Williams Realty Community Partners",
     "url": "https://kw.com/",
     "also": []
    },
    {
     "name": "MainStreet400",
     "url": "https://mainstreet400.com/website-design/",
     "also": []
    },
    {
     "name": "Newton Simon Advertising",
     "url": "https://newtonsimon.com/",
     "also": []
    },
    {
     "name": "North Georgia Community Foundation",
     "url": "https://www.ngcf.org/",
     "also": []
    },
    {
     "name": "OUTFRONT Media",
     "url": "https://www.outfrontmedia.com/",
     "also": []
    },
    {
     "name": "Phoenix Benefits Management",
     "url": "https://www.phoenixpbm.com/",
     "also": []
    },
    {
     "name": "Renaissance Marketing",
     "url": "https://www.renaissance-marketing.com/",
     "also": []
    },
    {
     "name": "Riptide LLC",
     "url": "https://www.riptidellc.com/about-3",
     "also": []
    },
    {
     "name": "Sandler Sales Institute",
     "url": "https://www.sandler.com/",
     "also": []
    },
    {
     "name": "Schooley Mitchell of Cumming",
     "url": "https://www.schooleymitchell.com/",
     "also": []
    },
    {
     "name": "Wingman Payments",
     "url": "https://wingmanpayments.com/",
     "also": []
    },
    {
     "name": "Winter Construction",
     "url": "https://www.winter-construction.com/",
     "also": []
    },
    {
     "name": "Working Web Media, LLC",
     "url": "https://www.workingwebmedia.com/",
     "also": []
    },
    {
     "name": "Yonder Agency",
     "url": "https://www.yonderagency.com/",
     "also": []
    }
   ],
   "community": {
    "Corporate & Divisional HQs": [
     "AutomationDirect",
     "Sawnee EMC",
     "Hoover Precision Products",
     "DataScan",
     "Metcam",
     "Scientific Games (Lottery Division)",
     "Hansgrohe USA",
     "PBD Worldwide",
     "Tele-Consultants Inc",
     "Acorn Management Partners, LLC"
    ],
    "Architecture, Engineering & Design Services": [
     "Dynamic Technical Formulations",
     "CSA Group",
     "Green Brothers Earth Works",
     "Choice Refrigerants",
     "Trescal",
     "Kimley-Horn",
     "Proclaim Landscape Associates",
     "Vernier, Inc.",
     "LTIMindtree",
     "Schnabel Engineering",
     "Biosystems, Inc.",
     "Iba America",
     "US Tech",
     "BrightView",
     "Bruks Siwertell",
     "Structural Consulting Group",
     "Momentum PMV",
     "Arcxis",
     "SJH Engineering",
     "Infinity Structures Inc",
     "SAFEbuilt",
     "PMH Associates",
     "Conway & Owen",
     "DLP Construction Co Inc",
     "Apex Designs",
     "BCC engineering",
     "Civil Engineering Company",
     "Landtec Consulting & Surveying",
     "BE-CI",
     "Affiniti",
     "Atlas",
     "Spicer Group",
     "As-Tech Engineering Co",
     "Prodesa USA",
     "Barker Cunningham Barrington PC",
     "Custom Engineering Solutions, Inc",
     "McWhorter & Anderson",
     "Palmer Construction Consultant",
     "Dusty's Trees And Landscape Services",
     "Mold-b-gone",
     "Appalachian Surveying",
     "Fagan Engineering Service Llc",
     "Superior Home Design LLC",
     "FRC Systems International LLC",
     "Cumming Asbestos Testing & Removal Pros",
     "Baran Americas Inc",
     "McClure Surveying Inc",
     "Acr Engineering Inc",
     "Logicircuit, Inc",
     "Engineered Architectural Systems",
     "El Amar Engineering & Construction, Inc",
     "Lazer Pharmaceuticals Llc",
     "Mangan Inc",
     "Ingenium Enterprises",
     "Inteworx.net Inc",
     "Mold Gone 4 Good",
     "Torad Engineering",
     "Jericho Design Group",
     "Premier Engineering, LLC",
     "Summit Engineering Consultant",
     "Higginbotham Design & Engineering",
     "Falcon Design Consultants"
    ],
    "Accounting & Tax Services": [
     "Mudd Lee Llc",
     "Bean & Byte Counters",
     "Reddy CPA",
     "Liberty Tax",
     "SPW & Associates LLC",
     "CITITAX Associates",
     "Rushton",
     "R L Goodrich & Co.",
     "Myers & Barnes Llc",
     "Le Roy Cole & Stephens Llc",
     "Christopher B Smith-CPA-PC",
     "Sikich LLP",
     "Robert A Mcalister Pc",
     "H&R Block",
     "Rainey R Allan PC CPA",
     "Frost & Bare, LLP",
     "Buchanan Clark Schlader LLP",
     "H Richard Lee Jr LLC",
     "Daniel Ahart Tax Service",
     "Cumming Tax Pros",
     "Timothy J. Cagle, CPA",
     "Affordable Accounting & Tax SE",
     "Comprehensive Accounting Services",
     "Adaniel Ahart",
     "Natic Taylor & Co Llc",
     "Surgimed Services Inc",
     "Johnston & Associates Inc",
     "Jon W Newcomer",
     "Worth & Associates, CPAs",
     "Jackson Hewitt",
     "Accurate Tax Partners",
     "Paramount Business Advisors",
     "All Pax Bookkeeping",
     "Reliance Payroll",
     "Tax Shelter Inc",
     "Akins & Amos, Cpas",
     "Grenner & Associates LLC",
     "Keystone Accounting Inc",
     "Putman & Co PC",
     "Cdm Business & Tax Services",
     "Dawsonville Accounting & Tax",
     "Tax Shelter",
     "Manage My Taxes Inc",
     "Lee Mudd Cpa Llc",
     "Regulatory Back Office Inc",
     "Usa Payroll",
     "Payroll Shelter, Inc"
    ],
    "Legal Services": [
     "Underwood Scoggins",
     "Miles Hansford Law Firm",
     "Van Sant Law",
     "O'Kelley & Sorohan LLC",
     "Boling Rice LLC",
     "Tallant Howell Law Firm",
     "Spaulding Injury Law",
     "Susan Mc Carthy",
     "Ballew Law",
     "Bettis Musgrove",
     "Perrie & Associates, LLC",
     "B Phillips & Assoc PC",
     "The Siemon Law Firm, PC",
     "Thomas P. Knox",
     "Marcus A. Rosin Lawyer",
     "Stephen Lewis Attorney At Law",
     "BMW Law Group",
     "Realty Title",
     "Jonathan R Brockman PC",
     "Clements Bernard Walker",
     "Zeliff Watson",
     "Premier Arbitration Service",
     "Rolader & Rolader",
     "James Stuart Teague, P.C.",
     "Bettis Law Group",
     "Herrin & Alexander LLC",
     "Weissman",
     "McMichael & Gray, PC",
     "Bovis, Kyle & Burch, LLC",
     "Pirkle Law Firm",
     "Vaughan Law Firm",
     "Resolve to Solve, Inc",
     "Wilson Legal",
     "Lipscomb, Johnson, Sleister, Dailey & Smith, LLP",
     "Fabian & Assoc",
     "Craig Alan Long LLC",
     "The Manley Firm",
     "William E Porter PC",
     "Humberto Izquierdo Jr Law Ofc",
     "Neville Law",
     "Teiger Law Center, P.C.",
     "Law Offices Of John C. Dabney",
     "Hodges Law Firm, LLC",
     "The Manton Law Firm, LLC",
     "Betty A Nappier Law Office",
     "Forsyth County Business",
     "Carl Chapman Attorney At Law",
     "Bourne Law Firm",
     "Spillers Law Firm",
     "Debra E Paris PC",
     "Izquierdo Law Offices of Humberto Jr PC",
     "Hamilton Law Firm",
     "Weaver Law Firm",
     "By ADF Designs",
     "Venus Ventures, LLC",
     "Tera Reese Beisbier LLC",
     "The McCormick Firm, PC",
     "Hedden Law"
    ],
    "Advertising & Media Services": [
     "Benson Media",
     "Corporate Imaging Concepts",
     "TC Marketing",
     "Extreme Reach",
     "Mmi Creative",
     "United Sales Marketing Group",
     "World Logo",
     "Eyecon Marketing Group",
     "Manalo Marketing Inc",
     "Kelton Group",
     "Forsyth County News",
     "Asn Inc",
     "Directory Marketing Solutions",
     "Touchpoint Marketing Service LLC",
     "M Square Sales & Marketing",
     "Franchise Marketing Systems"
    ],
    "Direct Mail & Print Services": [
     "Associated Printing & Mailing Services"
    ],
    "Management & Business Consulting": [
     "iParametrics",
     "McCallum Group Inc",
     "21 Tango Consulting",
     "CLEAResult",
     "Prokoz Inc",
     "SCORE",
     "Matrix Tbsc, Inc",
     "Safelink Consulting, Inc",
     "Dj Consultants Inc",
     "R & D Strategic Solutions Llc",
     "Leadership Freedom Llc",
     "Essential Concepts Consulting",
     "Ishr Group",
     "Actuarial Resources Corp",
     "Venuequest",
     "Juncos Consulting",
     "Oldham Consulting",
     "Mastercompliance Llc",
     "Refocus Consulting LLC",
     "Rtr Consulting LLC",
     "Dimension Consulting LLC",
     "Autism Advisory Services"
    ],
    "IT & Technical Consulting Services": [
     "Isymmetry, Inc.",
     "Dataset",
     "Motrex",
     "Compunet Consulting Group Inc",
     "NexTec",
     "XL Softek",
     "Corpteq Solutions Inc",
     "Samurai Infotech",
     "Staar Tech Consulting Llc",
     "Remote It Consultants Llc",
     "Redshift Enterprise Consulting Solutions",
     "Aavtek Consulting Llc"
    ],
    "Staffing & HR Consulting Services": [
     "Resourcis",
     "Resourcing Edge",
     "Bridge Staffing"
    ],
    "Appraisal & Valuation Services": [
     "Metro Appraisals Inc",
     "Chattahoochee Valuation Group",
     "Chestatee Appraisals",
     "Market Valuation Service"
    ],
    "Land Surveying & Testing Services": [
     "Elevated Land Services",
     "Xeno Genesis",
     "Geolanta"
    ],
    "Environmental & Scientific Consulting Services": [
     "A & D Environmental Services (GA)",
     "Environ Associates Inc",
     "Rks Green Consulting Group Llc"
    ],
    "Financial & Insurance Services": [
     "StopLoss Specialists",
     "Informa Research Services",
     "Consolidated Banking SVC Inc",
     "Automated Profit Sharing"
    ]
   }
  },
  {
   "id": "tech",
   "name": "Technology + IT",
   "color": "#1a7a3c",
   "tag": "Code it · connect it · secure it",
   "blurb": "Build software, networks, and digital infrastructure for the tech-forward companies growing across Forsyth County.",
   "growth": "+10.1%",
   "growthSource": "Computer & mathematical occupations, projected 2024–34 (BLS Employment Projections)",
   "careers": [
    "mechatronics",
    "automationtech",
    "businessanalyst",
    "sales",
    "projectmgr",
    "softwaredev",
    "networkadmin",
    "cyberanalyst",
    "itsupport",
    "dataanalyst",
    "cloudeng",
    "sysadmin",
    "uxdesigner",
    "dronepilot",
    "gamedev",
    "aieng",
    "graphicdesigner",
    "eleceng",
    "pentester",
    "datascientist",
    "datacentertech",
    "fintechdev"
   ],
   "programs": {
    "fcs": [
     {
      "name": "Computer Science & IT",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "denmark",
       "east",
       "central",
       "fva",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "softwaredev",
       "dataanalyst"
      ]
     },
     {
      "name": "Cybersecurity",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "cyberanalyst"
      ]
     },
     {
      "name": "Digital Media & Communications",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "east",
       "central",
       "fva",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "uxdesigner"
      ]
     },
     {
      "name": "Engineering & Technology",
      "desc": null,
      "url": null,
      "highSchools": [
       "alliance",
       "denmark",
       "east",
       "central",
       "lambert",
       "north",
       "south",
       "west"
      ],
      "careers": [
       "softwaredev",
       "networkadmin"
      ]
     },
     {
      "name": "Drone & Unmanned Aircraft Systems",
      "desc": "A high school CTAE pathway (Alliance Academy) covering drone flight, FAA regulations, and aerial data capture — a growing field across construction, agriculture, and public safety.",
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "dronepilot"
      ]
     },
     {
      "name": "Game Design",
      "desc": "Introduces students to game mechanics, design principles, and basic programming through hands-on game development projects.",
      "url": null,
      "highSchools": [
       "alliance",
       "fva"
      ],
      "careers": [
       "gamedev"
      ]
     },
     {
      "name": "Artificial Intelligence",
      "desc": "A high school CTAE pathway (Denmark High School) introducing machine learning concepts, data, and AI tools — a foundation for computer science and data-focused careers.",
      "url": null,
      "highSchools": [
       "denmark"
      ],
      "careers": [
       "aieng",
       "dataanalyst"
      ]
     },
     {
      "name": "Cloud Computing",
      "desc": "A high school CTAE pathway (Denmark High School) covering cloud infrastructure, virtualization, and the platforms (AWS, Azure, Google Cloud) businesses run on today.",
      "url": null,
      "highSchools": [
       "denmark"
      ],
      "careers": [
       "cloudeng"
      ]
     },
     {
      "name": "Graphic Design",
      "desc": "Builds visual design skills — branding, layout, and digital media — using industry-standard design software.",
      "url": null,
      "highSchools": [
       "alliance"
      ],
      "careers": [
       "graphicdesigner",
       "uxdesigner"
      ]
     }
    ],
    "lanier": [
     {
      "name": "Computer Information Systems",
      "desc": "Hands-on preparation for IT support, networking, and systems administration roles.",
      "url": null,
      "careers": [
       "itsupport",
       "networkadmin"
      ]
     },
     {
      "name": "Networking Technology",
      "desc": "Build and maintain the network infrastructure that keeps businesses connected and secure.",
      "url": null,
      "careers": [
       "networkadmin"
      ]
     },
     {
      "name": "Cybersecurity (A.A.S.)",
      "desc": "Hands-on training to protect systems, detect threats, and respond to cyberattacks.",
      "url": null,
      "careers": [
       "cyberanalyst"
      ]
     },
     {
      "name": "Web Development Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "softwaredev",
       "uxdesigner"
      ]
     },
     {
      "name": "IT Support Specialist Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "itsupport"
      ]
     }
    ],
    "ung": [
     {
      "name": "Computer Science (B.S.)",
      "desc": "A rigorous degree preparing graduates for software engineering, AI, and data science careers.",
      "url": "https://ung.edu/degrees/bachelors/computer-science.php",
      "careers": [
       "softwaredev"
      ]
     },
     {
      "name": "Information Technology (B.S.)",
      "desc": "Broad IT education covering systems, networking, databases, and project management.",
      "url": null,
      "careers": [
       "networkadmin",
       "itsupport"
      ]
     },
     {
      "name": "Cybersecurity Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "cyberanalyst"
      ]
     },
     {
      "name": "Data Analytics Certificate",
      "desc": null,
      "url": null,
      "careers": [
       "dataanalyst"
      ]
     }
    ]
   },
   "employers": [
    {
     "name": "AT&T",
     "url": "https://www.att.com/",
     "also": [
      "pro"
     ]
    },
    {
     "name": "CarShield",
     "url": "https://www.carshield.com/",
     "also": []
    },
    {
     "name": "Comcast",
     "url": "https://corporate.comcast.com/",
     "also": [
      "pro"
     ]
    },
    {
     "name": "Cybersecurity Auditing Technologies, LLC",
     "url": "https://theorg.com/org/cybersecurity-auditing-technologies-llc",
     "also": []
    },
    {
     "name": "Eclipse Networks",
     "url": "https://www.eclipse-networks.com/",
     "also": []
    },
    {
     "name": "Forsyth County Public Library",
     "url": "https://www.forsythpl.org/",
     "also": []
    },
    {
     "name": "Georgia United Credit Union",
     "url": "https://www.gucu.org/",
     "also": []
    },
    {
     "name": "Interstate Telecommunication, Inc.",
     "url": "https://www.interstatenetworks.com/",
     "also": []
    },
    {
     "name": "Joonik, LLC.",
     "url": "https://www.joonik.com/",
     "also": []
    },
    {
     "name": "MDSi Inc",
     "url": "https://www.mdsiinc.com/",
     "also": [
      "health"
     ]
    },
    {
     "name": "Macrovey",
     "url": "https://www.macrovey.com/",
     "also": []
    },
    {
     "name": "Sturgeon Technology Services, LLC",
     "url": "https://www.celestica.com/our-expertise/services/celestica-services",
     "also": []
    },
    {
     "name": "Syclone IT",
     "url": "https://syclone.net/",
     "also": []
    },
    {
     "name": "Technali, LLC",
     "url": "https://www.technali.com/",
     "also": []
    },
    {
     "name": "Transcend Networks",
     "url": "https://www.transcendnetworks.com/",
     "also": []
    },
    {
     "name": "Tuesday AI Edge",
     "url": "https://tuesdayaia.com/",
     "also": []
    },
    {
     "name": "Undocked, Inc.",
     "url": "https://www.undocked.net/",
     "also": []
    },
    {
     "name": "Verin Technology Consulting",
     "url": "https://www.verinconsulting.com/",
     "also": []
    }
   ],
   "community": {
    "Electronics & Semiconductors": [
     "ASMPT SMT Solutions",
     "Celestica",
     "Flip Electronics",
     "IPTE USA",
     "Ingenico Group",
     "Innovative Circuits Inc",
     "KraftPowercon, Inc",
     "Micron",
     "Nidec Corporation",
     "Ocean Networks",
     "Power Integrations, Inc.",
     "S.E.A. America",
     "Siemens Energy AG"
    ],
    "Robotics & Automation": [
     "AGILOX North America",
     "Container Automation Systems",
     "Geek+",
     "IMO Automation, LLC",
     "Mujin Corp",
     "Rockwell Automation",
     "Siemens AG",
     "Softwear Government Solutions, Inc",
     "Todo Robotics Llc",
     "Universal Controls Inc"
    ],
    "Software & Services": [
     "AutomationDirect",
     "DataScan",
     "Isymmetry, Inc.",
     "Dataset",
     "Motrex",
     "Compunet Consulting Group Inc",
     "NexTec",
     "XL Softek",
     "Corpteq Solutions Inc",
     "Samurai Infotech",
     "Staar Tech Consulting Llc",
     "Remote It Consultants Llc",
     "Redshift Enterprise Consulting Solutions",
     "Aavtek Consulting Llc"
    ]
   }
  }
 ],
 "dreams": [
  {
   "id": "doctor",
   "label": "a doctor",
   "emoji": "🩺",
   "careers": [
    "physician",
    "anesthesiologist",
    "surgeon",
    "pa",
    "np",
    "crna",
    "perfusionist",
    "surgtech",
    "anesthesiatech",
    "sterileproc",
    "radtech",
    "sonographer",
    "resptherapist",
    "paramedic",
    "labtech",
    "pharmacist"
   ]
  },
  {
   "id": "nurse",
   "label": "a nurse",
   "emoji": "💉",
   "careers": [
    "rn",
    "lpn",
    "cna",
    "np",
    "crna",
    "medassist",
    "surgtech",
    "phlebotomist",
    "resptherapist",
    "paramedic",
    "healthinfo"
   ]
  },
  {
   "id": "sports",
   "label": "in sports",
   "emoji": "🏈",
   "careers": [
    "athletictrainer",
    "pt",
    "pta",
    "ot",
    "ota",
    "physician",
    "dataanalyst",
    "marketing"
   ]
  },
  {
   "id": "scientist",
   "label": "a scientist",
   "emoji": "🔬",
   "careers": [
    "biologist",
    "chemist",
    "researchasst",
    "labtech",
    "medlabtech",
    "qcanalyst",
    "pharmacist",
    "foodscientist",
    "chemeng",
    "vet"
   ]
  },
  {
   "id": "engineer",
   "label": "an engineer",
   "emoji": "🛠",
   "careers": [
    "mecheng",
    "eleceng",
    "indeng",
    "chemeng",
    "mfgeng",
    "mechatronics",
    "automationtech",
    "robotics",
    "electricaltech",
    "drafter",
    "cnc",
    "qualitytech",
    "evtech"
   ]
  },
  {
   "id": "computers",
   "label": "in computers",
   "emoji": "💻",
   "careers": [
    "softwaredev",
    "cyberanalyst",
    "pentester",
    "aieng",
    "dataanalyst",
    "datascientist",
    "cloudeng",
    "sysadmin",
    "networkadmin",
    "itsupport",
    "gamedev",
    "uxdesigner"
   ]
  },
  {
   "id": "business",
   "label": "in business",
   "emoji": "📈",
   "careers": [
    "accountant",
    "finanalyst",
    "financialadvisor",
    "actuary",
    "businessanalyst",
    "projectmgr",
    "opsmgr",
    "hrspecialist",
    "sales",
    "accountexec",
    "fintechdev",
    "supplychain"
   ]
  },
  {
   "id": "creative",
   "label": "creative",
   "emoji": "🎨",
   "careers": [
    "graphicdesigner",
    "uxdesigner",
    "marketing",
    "gamedev",
    "accountexec",
    "drafter",
    "dronepilot"
   ]
  },
  {
   "id": "hands",
   "label": "hands-on",
   "emoji": "🔧",
   "careers": [
    "welder",
    "cnc",
    "mechatronics",
    "electricaltech",
    "automationtech",
    "maintenancetech",
    "qualitytech",
    "dentalhyg",
    "radtech",
    "vettech",
    "surgtech"
   ]
  },
  {
   "id": "animals",
   "label": "with animals",
   "emoji": "🐾",
   "careers": [
    "vet",
    "vettech",
    "biologist",
    "researchasst",
    "labtech"
   ]
  }
 ],
 "schools": {
  "fcs": {
   "short": "FCS",
   "name": "Forsyth County Schools",
   "sub": "Career pathways (high school)",
   "stage": "Start here in high school",
   "color": "#c9982c",
   "about": "Forsyth County Schools offer career, technical, and agricultural education (CTAE) pathways that let students explore an industry, earn credentials, and build experience before they graduate.",
   "site": "https://www.forsyth.k12.ga.us/",
   "siteLabel": "forsyth.k12.ga.us",
   "programsUrl": "https://www.forsyth.k12.ga.us/ctae",
   "logo": "img/logos/fcs.png"
  },
  "lanier": {
   "short": "LT",
   "name": "Lanier Technical College",
   "sub": "Diplomas, certificates & associate degrees",
   "stage": "Hands-on technical training",
   "color": "#5d9731",
   "about": "Lanier Tech provides hands-on, career-focused diplomas and associate degrees, often with direct ties to local employers and short timelines to enter the workforce.",
   "site": "https://www.laniertech.edu/",
   "siteLabel": "laniertech.edu",
   "programsUrl": "https://www.laniertech.edu/programs/all-programs-of-study/",
   "logo": "img/logos/lanier.png"
  },
  "ung": {
   "short": "UNG",
   "name": "University of North Georgia",
   "sub": "Associate & bachelor's degrees",
   "stage": "4-year & advanced degrees",
   "color": "#1f3d7c",
   "about": "UNG offers associate and bachelor's degrees for students pursuing professional and advanced roles, including transfer pathways from technical and high-school programs.",
   "site": "https://ung.edu/",
   "siteLabel": "ung.edu",
   "programsUrl": "https://ung.edu/degrees/",
   "logo": "img/logos/ung.png",
   "logoFill": true
  }
 },
 "highSchools": {
  "alliance": {
   "name": "Alliance Academy for Innovation",
   "url": "https://alliance.forsyth.k12.ga.us/"
  },
  "denmark": {
   "name": "Denmark High School",
   "url": "https://dhs.forsyth.k12.ga.us/"
  },
  "east": {
   "name": "East Forsyth High School",
   "url": "https://efhs.forsyth.k12.ga.us/"
  },
  "central": {
   "name": "Forsyth Central High School",
   "url": "https://fchs.forsyth.k12.ga.us/"
  },
  "fva": {
   "name": "Forsyth Virtual Academy",
   "url": "https://ace.forsyth.k12.ga.us/forsyth-virtual-academy"
  },
  "lambert": {
   "name": "Lambert High School",
   "url": "https://lhs.forsyth.k12.ga.us/"
  },
  "north": {
   "name": "North Forsyth High School",
   "url": "https://nfhs.forsyth.k12.ga.us/"
  },
  "south": {
   "name": "South Forsyth High School",
   "url": "https://sfhs.forsyth.k12.ga.us/"
  },
  "west": {
   "name": "West Forsyth High School",
   "url": "https://wfhs.forsyth.k12.ga.us/"
  }
 },
 "eduLevels": {
  "cert": {
   "label": "Certificate",
   "long": "Short-term certificate or license",
   "time": "Under 1 year",
   "order": 1
  },
  "assoc": {
   "label": "Diploma / Associate",
   "long": "Technical diploma or associate degree",
   "time": "1–2 years",
   "order": 2
  },
  "bach": {
   "label": "Bachelor's",
   "long": "Bachelor's degree",
   "time": "4 years",
   "order": 3
  },
  "adv": {
   "label": "Graduate",
   "long": "Graduate or professional degree",
   "time": "6+ years",
   "order": 4
  }
 },
 "highDemand": {
  "name": "Georgia High-Demand Career List",
  "note": "Rows provided so far: Health Science (Cardiovascular Technologists through Therapists, All Other) and part of Human Services. Add more rows to mark more careers.",
  "occupations": [
   {
    "cluster": "Health Science",
    "title": "Cardiovascular Technologists and Technicians",
    "soc": "29-2031"
   },
   {
    "cluster": "Health Science",
    "title": "Clinical and Counseling Psychologists",
    "soc": "19-3033"
   },
   {
    "cluster": "Health Science",
    "title": "Clinical Laboratory Technologists and Technicians",
    "soc": "29-2018"
   },
   {
    "cluster": "Health Science",
    "title": "Dental Assistants",
    "soc": "31-9091"
   },
   {
    "cluster": "Health Science",
    "title": "Dental Hygienists",
    "soc": "29-1292"
   },
   {
    "cluster": "Health Science",
    "title": "Dental Laboratory Technicians",
    "soc": "51-9081"
   },
   {
    "cluster": "Health Science",
    "title": "Dentists, General",
    "soc": "29-1021"
   },
   {
    "cluster": "Health Science",
    "title": "Diagnostic Medical Sonographers",
    "soc": "29-2032"
   },
   {
    "cluster": "Health Science",
    "title": "Dietitians and Nutritionists",
    "soc": "29-1031"
   },
   {
    "cluster": "Health Science",
    "title": "Emergency Medicine Physicians",
    "soc": "29-1214"
   },
   {
    "cluster": "Health Science",
    "title": "Family Medicine Physicians",
    "soc": "29-1215"
   },
   {
    "cluster": "Health Science",
    "title": "General Internal Medicine Physicians",
    "soc": "29-1216"
   },
   {
    "cluster": "Health Science",
    "title": "Health Education Specialists",
    "soc": "21-1091"
   },
   {
    "cluster": "Health Science",
    "title": "Health Technologists and Technicians, All Other",
    "soc": "29-2099"
   },
   {
    "cluster": "Health Science",
    "title": "Healthcare Diagnosing or Treating Practitioners, All Other",
    "soc": "29-1299"
   },
   {
    "cluster": "Health Science",
    "title": "Healthcare Social Workers",
    "soc": "21-1022"
   },
   {
    "cluster": "Health Science",
    "title": "Licensed Practical and Licensed Vocational Nurses",
    "soc": "29-2061"
   },
   {
    "cluster": "Health Science",
    "title": "Massage Therapists",
    "soc": "31-9011"
   },
   {
    "cluster": "Health Science",
    "title": "Medical and Health Services Managers",
    "soc": "11-9111"
   },
   {
    "cluster": "Health Science",
    "title": "Medical Assistants",
    "soc": "31-9092"
   },
   {
    "cluster": "Health Science",
    "title": "Medical Equipment Preparers",
    "soc": "31-9093"
   },
   {
    "cluster": "Health Science",
    "title": "Medical Records Specialists",
    "soc": "29-2072"
   },
   {
    "cluster": "Health Science",
    "title": "Medical Secretaries and Administrative Assistants",
    "soc": "43-6013"
   },
   {
    "cluster": "Health Science",
    "title": "Mental Health and Substance Abuse Social Workers",
    "soc": "21-1023"
   },
   {
    "cluster": "Health Science",
    "title": "Nurse Practitioners",
    "soc": "29-1171"
   },
   {
    "cluster": "Health Science",
    "title": "Nursing Assistants",
    "soc": "31-1131"
   },
   {
    "cluster": "Health Science",
    "title": "Occupational Health and Safety Specialists",
    "soc": "19-5011"
   },
   {
    "cluster": "Health Science",
    "title": "Occupational Health and Safety Technicians",
    "soc": "19-5012"
   },
   {
    "cluster": "Health Science",
    "title": "Occupational Therapists",
    "soc": "29-1122"
   },
   {
    "cluster": "Health Science",
    "title": "Occupational Therapy Assistants",
    "soc": "31-2011"
   },
   {
    "cluster": "Health Science",
    "title": "Ophthalmic Laboratory Technicians",
    "soc": "51-9083"
   },
   {
    "cluster": "Health Science",
    "title": "Ophthalmic Medical Technicians",
    "soc": "29-2057"
   },
   {
    "cluster": "Health Science",
    "title": "Opticians, Dispensing",
    "soc": "29-2081"
   },
   {
    "cluster": "Health Science",
    "title": "Pharmacists",
    "soc": "29-1051"
   },
   {
    "cluster": "Health Science",
    "title": "Pharmacy Technicians",
    "soc": "29-2052"
   },
   {
    "cluster": "Health Science",
    "title": "Phlebotomists",
    "soc": "31-9097"
   },
   {
    "cluster": "Health Science",
    "title": "Physical Therapist Assistants",
    "soc": "31-2021"
   },
   {
    "cluster": "Health Science",
    "title": "Physical Therapists",
    "soc": "29-1123"
   },
   {
    "cluster": "Health Science",
    "title": "Physician Assistants",
    "soc": "29-1071"
   },
   {
    "cluster": "Health Science",
    "title": "Physicians, All Other",
    "soc": "29-1229"
   },
   {
    "cluster": "Health Science",
    "title": "Psychiatric Technicians",
    "soc": "29-2053"
   },
   {
    "cluster": "Health Science",
    "title": "Radiologic Technologists and Technicians",
    "soc": "29-2034"
   },
   {
    "cluster": "Health Science",
    "title": "Registered Nurses",
    "soc": "29-1141"
   },
   {
    "cluster": "Health Science",
    "title": "Respiratory Therapists",
    "soc": "29-1126"
   },
   {
    "cluster": "Health Science",
    "title": "Speech-Language Pathologists",
    "soc": "29-1127"
   },
   {
    "cluster": "Health Science",
    "title": "Substance Abuse, Behavioral Disorder, and Mental Health Counselors",
    "soc": "21-1018"
   },
   {
    "cluster": "Health Science",
    "title": "Surgical Technologists",
    "soc": "29-2055"
   },
   {
    "cluster": "Health Science",
    "title": "Therapists, All Other",
    "soc": "29-1129"
   },
   {
    "cluster": "Human Services",
    "title": "Athletes and Sports Competitors",
    "soc": "27-2021"
   },
   {
    "cluster": "Human Services",
    "title": "Clergy",
    "soc": "21-2011"
   },
   {
    "cluster": "Human Services",
    "title": "Coaches and Scouts",
    "soc": "27-2022"
   },
   {
    "cluster": "Human Services",
    "title": "Community and Social Service Specialists, All Other",
    "soc": "21-1099"
   },
   {
    "cluster": "Human Services",
    "title": "Community Health Workers",
    "soc": "21-1094"
   },
   {
    "cluster": "Human Services",
    "title": "Counselors, All Other",
    "soc": "21-1019"
   },
   {
    "cluster": "Human Services",
    "title": "Interior Designers",
    "soc": "27-1025"
   },
   {
    "cluster": "Human Services",
    "title": "Rehabilitation Counselors",
    "soc": "21-1015"
   },
   {
    "cluster": "Human Services",
    "title": "Skincare Specialists",
    "soc": "39-5094"
   },
   {
    "cluster": "Human Services",
    "title": "Social and Community Service Managers",
    "soc": "11-9151"
   }
  ]
 },
 "tcsgPrograms": {
  "health": {
   "source": "TCSG Pathway Explorer: Healthcare Programs",
   "note": "Programs and links from the TCSG healthcare programs list. Distances are straight-line miles from the center of Forsyth County to each college's closest campus.",
   "colleges": [
    {
     "name": "Lanier Technical College",
     "city": "Gainesville",
     "site": "https://www.laniertech.edu/",
     "nearestCampus": "Cumming",
     "miles": 2,
     "programs": [
      {
       "name": "Associate of Science in Nursing Degree",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Practical Nursing Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "AAS in Allied Health Professions Degree Program",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Nurse Aide Fast Track Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Health Care Assistant Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Dental Assisting Diploma",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Associate of Science – Dental Hygienist Degree",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Radiologic Technology Degree",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Computed Tomography Specialist Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Physical Therapist Assistant Degree",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "AAS in Allied Health Professions Degree Program – Paramedicine",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "EMS Professions Diploma",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Paramedicine Diploma",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Advanced Emergency Medical Technician Certificate (AEMT)",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Emergency Medical Technician Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Phlebotomy Technician Fast Track Certificate",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Health Information Coding Diploma",
       "url": "https://www.laniertech.edu/programs/"
      },
      {
       "name": "Data Analytics Specialist Certificate",
       "url": "https://www.laniertech.edu/programs/"
      }
     ],
     "logo": "img/logos/lanier.png"
    },
    {
     "name": "Gwinnett Technical College",
     "city": "Lawrenceville",
     "site": "https://www.gwinnetttech.edu/",
     "nearestCampus": "Alpharetta",
     "miles": 14,
     "programs": [
      {
       "name": "Bioscience Technology AAS; Good Laboratory Practices Technician certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Cardiovascular Technology AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Dental Assisting diploma",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Diagnostic Medical Sonography AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Echocardiography Technology AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Paramedicine AAS and diploma",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Paramedicine Accelerated certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "EMS Professions diploma",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Emergency Medical Responder certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Radiologic Technology AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Computed Tomography Clinical Specialist certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "MRI Specialist certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Respiratory Care AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Surgical Technology AAS",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Central Processing Technician",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Endoscope Reprocessing Technician certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Practical Nurse certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Nurse Aide Fast Track certificate",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Medical Assisting diploma",
       "url": "https://gwinnetttech.edu/programs/"
      },
      {
       "name": "Healthcare Assistant certificate",
       "url": "https://gwinnetttech.edu/programs/"
      }
     ],
     "logo": "img/logos/gwinnett.png",
     "logoBg": "#0a2c74"
    },
    {
     "name": "Chattahoochee Technical College",
     "city": "Marietta",
     "site": "https://www.chattahoocheetech.edu/",
     "nearestCampus": "Canton",
     "miles": 21,
     "programs": [
      {
       "name": "Dental Assisting",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "EMT/AEMT",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Health Care Management",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Mammography",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Medical Assisting",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Certified Nurse Assistant (CNA)",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Nursing",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "LPN to RN Bridge – Nursing",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Occupational Therapy Assistant",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Paramedicine",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Phlebotomy Technician",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Physical Therapist Assistant",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Practical Nursing",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Radiography",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Social Work Assistant",
       "url": "https://www.chattahoocheetech.edu/"
      },
      {
       "name": "Surgical Technology",
       "url": "https://www.chattahoocheetech.edu/"
      }
     ],
     "logo": "img/logos/chattahoochee.png"
    },
    {
     "name": "Georgia Piedmont Technical College",
     "city": "Clarkston",
     "site": "https://www.gptc.edu/",
     "nearestCampus": "Clarkston",
     "miles": 30,
     "programs": [
      {
       "name": "Associate of Applied Science in Allied Health Professions",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Contact Lens Technician Technical Certificate",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Health Information Management Coding Diploma",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Health Information Management Technology Associate of Applied Science Degree",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Medical Laboratory Technology Associate of Applied Science Degree",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Nurse Aide Accelerated Technical Certificate",
       "url": null
      },
      {
       "name": "Nurse Aide Fast Track Technical Certificate",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Optical Laboratory Technician Technical Certificate",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Phlebotomy Technician Technical Certificate",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Practical Nursing Certificate,",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Revenue Cycle Specialist Technical Certificate",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      },
      {
       "name": "Surgical Technology Associate of Applied Science Degree",
       "url": "https://www.gptc.edu/college-catalog/current/programs/type/all"
      }
     ],
     "logo": "img/logos/georgia-piedmont.png"
    },
    {
     "name": "Athens Technical College",
     "city": "Athens",
     "site": "https://www.athenstech.edu/",
     "nearestCampus": "Monroe",
     "miles": 38,
     "programs": [
      {
       "name": "Addictions Specialist TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Advanced Emergency Medical Technician TCC (AEMT)",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Allied Health Professions Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Computed Tomography Specialist TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Coronal Polishing TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Dental Assisting Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Dental Hygiene Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "EMS Professions Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Emergency Medical Technician TCC (EMT)",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/cataloghttps://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Health Information Coding Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Health Information Management Technology Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Healthcare Assistant TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Magnetic Resonance Imaging Specialist TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Nursing Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Nursing Bridge Program Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Paramedicine Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Paramedicine Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Phlebotomy Technology Specialist TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Physical Therapist Assistant Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Practical Nursing Diploma",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Practical Nursing Evening Program",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Practical Nursing TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Pre-Nursing TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Pre-hospital EMS Operations TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Radiologic Technology Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Radiology/EFDA Certificate Dental Assisting TCC",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      },
      {
       "name": "Surgical Technology Associate Degree",
       "url": "https://athenstech.smartcatalogiq.com/2026-2027-catalog-with-current-changes/catalog"
      }
     ],
     "logo": "img/logos/athens.png"
    },
    {
     "name": "Atlanta Technical College",
     "city": "Atlanta",
     "site": "https://atlantatech.edu/",
     "nearestCampus": "Atlanta",
     "miles": 39,
     "programs": [
      {
       "name": "Central Sterile Supply Processing Technician Advanced TCC",
       "url": null
      },
      {
       "name": "Advanced Dental Assisting TCC",
       "url": null
      },
      {
       "name": "Basic Dental Assisting TCC",
       "url": null
      },
      {
       "name": "Dental Assisting Diploma",
       "url": null
      },
      {
       "name": "Dental Hygiene AAS",
       "url": null
      },
      {
       "name": "Health Information Coding Diploma",
       "url": null
      },
      {
       "name": "Health Information Management Technology AAS",
       "url": null
      },
      {
       "name": "Health Information Specialist TCC",
       "url": null
      },
      {
       "name": "Health Information Systems TCC",
       "url": null
      },
      {
       "name": "Patient Account Specialist TCC",
       "url": null
      },
      {
       "name": "Medical Assisting Diploma",
       "url": null
      },
      {
       "name": "Associate of Science Degree in Nursing",
       "url": null
      },
      {
       "name": "Hemodialysis Patient Care Specialist TCC",
       "url": null
      },
      {
       "name": "LPN to RN Bridge",
       "url": null
      },
      {
       "name": "Nurse Aide TCC",
       "url": null
      },
      {
       "name": "Paramedicine",
       "url": null
      },
      {
       "name": "Pharmacy Assistant Diploma",
       "url": null
      },
      {
       "name": "Pharmacy Assistant TCC",
       "url": null
      },
      {
       "name": "Pharmacy Technology AAS",
       "url": null
      },
      {
       "name": "Phlebotomy Technician TCC",
       "url": null
      },
      {
       "name": "Physical Therapist Assistant AAS",
       "url": null
      },
      {
       "name": "Radiologic Technology",
       "url": null
      }
     ],
     "logo": "img/logos/atlanta.png"
    },
    {
     "name": "North Georgia Technical College",
     "city": "Clarkesville",
     "site": "https://www.northgatech.edu/",
     "nearestCampus": "Clarkesville",
     "miles": 43,
     "programs": [
      {
       "name": "Associate of Science in Nursing (ASN) Degree",
       "url": "https://northgatech.edu/academic-programs/"
      },
      {
       "name": "Practical Nursing Certificate",
       "url": "https://northgatech.edu/academic-programs/"
      },
      {
       "name": "Medical Assisting AAS Degree",
       "url": "https://northgatech.edu/academic-programs/"
      },
      {
       "name": "Pharmacy Technology Diploma",
       "url": "https://northgatech.edu/academic-programs/"
      },
      {
       "name": "Health Care Science Certificate",
       "url": "https://northgatech.edu/academic-programs/"
      }
     ],
     "logo": "img/logos/north-georgia.png"
    },
    {
     "name": "West Georgia Technical College",
     "city": "Waco",
     "site": "https://www.westgatech.edu/",
     "nearestCampus": "Douglasville",
     "miles": 49,
     "programs": [
      {
       "name": "Registered Nursing ADN Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Nursing LPN to ADN Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Business Healthcare Technology AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Business Healthcare Technology Diploma",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Healthcare Billing and Coding Specialist Certificate",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Coronal Polishing",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Dental Assisting - Advanced",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Dental Hygiene AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Diagnostic Medical Sonography Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "HIMT Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Healthcare Information Technology Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Healthcare Management AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Healthcare Assistant",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Healthcare Professional",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Medical Coding/Insurance Data Technical Certificate of Credit MC71",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Medical Laboratory Technology AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Phlebotomy Technology Specialist Certificate",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Nurse Aid Accelerated Certificate",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Geriatric Care Asst. Certificate",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Pharmacy Technology AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Associate of Applied Science in Allied Health Professional Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Radiologic Technology AAS Degree (RT23)",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Surgical Technology AAS Degree",
       "url": "https://www.westgatech.edu/"
      },
      {
       "name": "Paramedicine Degree",
       "url": "https://www.westgatech.edu/"
      }
     ],
     "logo": "img/logos/west-georgia.png"
    },
    {
     "name": "Georgia Northwestern Technical College",
     "city": "Rome",
     "site": "https://www.gntc.edu/",
     "nearestCampus": "Calhoun",
     "miles": 51,
     "programs": [
      {
       "name": "CNA (Nurse Aid Accelerated (NAA1) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Patient Care Assistant (PC21) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Dental Assisting (DA12) Diploma",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Diagnostic Medical Sonography (DMS3) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Adult Echocardiography (EC33) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Paramedicine (PT13) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "EMS Professions (EP12) Diploma",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Paramedicine (PT12) Diploma",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Advanced Emergency Medical Technician (AEMT) (EMH1) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Emergency Medical Responder (EMR) (EB71) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Paramedicine Accelerated (PAF1) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Health Information Management Technology (HI13) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Health Information Coding (HI12) Diploma",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Health Information Technician (HI61) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Healthcare Management (HC23) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Healthcare Assistant (HA21) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Healthcare Science (HS21) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Allied Health Professions (AFA3) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Medical Assisting (MA22) Diploma",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Clinical Office Assistant (CA91) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Nursing (NU33) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Phlebotomy Technician (PT21) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Practical Nursing (PN21) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Radiologic Technology (RT23) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Mammography (MA11) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Respiratory Care (RCT3) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Central Sterile Supply Processing Tech (Basic) (CJ91) Certificate",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Surgical Technology (ST13) Degree",
       "url": "https://www.gntc.edu/programs/"
      },
      {
       "name": "Vascular (VA13) Degree",
       "url": "https://www.gntc.edu/programs/"
      }
     ],
     "logo": "img/logos/georgia-northwestern.png"
    },
    {
     "name": "Southern Crescent Technical College",
     "city": "Griffin",
     "site": "https://www.sctech.edu/",
     "nearestCampus": "McDonough",
     "miles": 54,
     "programs": [
      {
       "name": "Nursing (ASN)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Practical Nursing (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Nurse Aide (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Radiologic Technology (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Radiologic Technologist Assistant (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Computed Tomography Specialist (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Magnetic Resonance Imaging Specialist (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Cardiovascular Technology (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Electrocardiography Technology (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Respiratory Care (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Paramedicine (Diploma)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "EMS Professions (Diploma)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Emergency Medical Technician (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Advanced Emergency Medical Technician (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Emergency Medical Responder (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Surgical Technology (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Central Sterile Supply Processing Tech, Advanced (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Allied Health Professions (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Medical Assisting (Diploma)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Phlebotomy Technician (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Health Care Assistant (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Advanced Dental Assisting (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Health Care Management (AAS)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Medical Office Support Specialist (TCC)",
       "url": "https://www.sctech.edu/"
      },
      {
       "name": "Medical Information Specialist (TCC)",
       "url": "https://www.sctech.edu/"
      }
     ],
     "logo": "img/logos/southern-crescent.png"
    },
    {
     "name": "Central Georgia Technical College",
     "city": "Warner Robins / Macon",
     "site": "https://www.centralgatech.edu/",
     "nearestCampus": "Milledgeville",
     "miles": 94,
     "programs": [
      {
       "name": "Dental Assisting",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Dental Hygiene",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Medical Assisting",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Nursing",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Paramedicine",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Physical Therapist Assistant",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Surgical Technology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Health Sciences Technical Certificates of Credit",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Biotechnology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Cardiovascular Technology, Associate of Applied Science Degree",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Dental Assisting Diploma",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Hemodialysis Patient Care Specialist TCC",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Medical Laboratory Technology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Orthopedic Technology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Pharmacy Technology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Polysomnography",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Radiologic Technology",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Surgical Technology Associate Degree",
       "url": "https://www.centralgatech.edu/academics"
      },
      {
       "name": "Health Care Assistant TCCs",
       "url": "https://www.centralgatech.edu/academics"
      }
     ],
     "logo": "img/logos/central-georgia.jpg"
    },
    {
     "name": "Augusta Technical College",
     "city": "Augusta",
     "site": "https://www.augustatech.edu/",
     "nearestCampus": "Thomson",
     "miles": 107,
     "programs": [
      {
       "name": "Associate Degree Nursing",
       "url": null
      },
      {
       "name": "Allied Health Professions, Associate of Applied Science",
       "url": null
      },
      {
       "name": "Practical Nursing, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Nurse Aide, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Nurse Aide Accelerated, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Cardiovascular Technology, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Dental Assisting, Diploma",
       "url": null
      },
      {
       "name": "Diagnostic Medical Sonography, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Echocardiography, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Health Care Assistant, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Health Information Management Technology, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "LPN to RN Transition to Professional Nursing, Associate Degree Nursing",
       "url": null
      },
      {
       "name": "Medical Assisting, Diploma",
       "url": null
      },
      {
       "name": "Medical Coding, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Medical Office Support Specialist, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Physicians Practice Management, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Occupational Therapy Assistant, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Pharmacy Technology, Diploma",
       "url": null
      },
      {
       "name": "Pharmacy Technology, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Radiologic Technology, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Computed Tomography Specialist, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Magnetic Resonance Imaging Specialist, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Respiratory Care, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Surgical Technology, Associate of Applied Science Degree",
       "url": null
      },
      {
       "name": "Central Sterile Supply Processing Technician Advanced, Technical Certificate of Credit",
       "url": null
      },
      {
       "name": "Vascular Technology, Associate of Applied Science Degree",
       "url": null
      }
     ],
     "logo": "img/logos/augusta.jpg",
     "logoFill": true
    },
    {
     "name": "Oconee Fall Line Technical College",
     "city": "Sandersville / Dublin",
     "site": "https://www.oftc.edu/",
     "nearestCampus": "Sandersville",
     "miles": 114,
     "programs": [
      {
       "name": "Nursing Degree",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Associate of Applied Science Degree in Allied Health Professions",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Associate of Science Degree",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Basic Pharmacy Technology Technical Certificate",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Interdisciplinary Studies – Allied Health Associate of Applied Science Degree",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Nurse Aide Technical Certificate",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Pharmacy Associate of Applied Science Degree",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Pharmacy Diploma",
       "url": "https://oftc.edu/departments/"
      },
      {
       "name": "Practical Nursing Technical Certificate",
       "url": "https://oftc.edu/departments/"
      }
     ],
     "logo": "img/logos/oconee-fall-line.png"
    },
    {
     "name": "Columbus Technical College",
     "city": "Columbus",
     "site": "https://www.columbustech.edu/",
     "nearestCampus": "Columbus",
     "miles": 129,
     "programs": [
      {
       "name": "Advanced Dental Assisting Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Allied Health Professions, Associate of Applied Science",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Basic Dental Assisting Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Central Service Assistant",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Practical Nursing Certificate,",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Surgical Technology, Associate of Applied Science Degree",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Therapeutic Massage Therapy",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Dental Assisting, Diploma",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Coronal Polishing Certification",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Radiology/EFDA Certification Dental Assisting Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Dental Hygiene, Associate of Applied Science",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Diagnostic Medical Sonography, Associate of Applied Science",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Health Care Assistant Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Healthcare Professional Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Healthcare Science Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Health Science, Associate of Science",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Medical Assisting, Diploma",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Medical Coding Specialist Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Healthcare Informatics Specialist",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Medical Front Office Assistant Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Acute Care Nurse Aide",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Nurse Aide Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Geriatric Care Assistant",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Nurse Aide Accelerated Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Nurse Aide Fast Track",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Nursing LPN Bridge Option, Associate Degree in Nursing",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Associate Degree in Nursing (RN)",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "PCT Career Launch Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Paramedicine, Associate of Applied Science",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "EMS Profession",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Paramedicine, Diploma,",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Emergency Medical Responder",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Advanced Emergency Medical Technician Certificate (AEMT)",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Emergency Medical Technician Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Paramedicine Accelerated Certificate,",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Pharmacy Technology, Associate of Applied Science,",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Pharmacy Technology, Diploma",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Pharmacy Technology Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Accelerated Phlebotomy Technician",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Phlebotomy Technician Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Radiologic Technology, Associate of Applied Sciences",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Computed Tomography Specialist Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Mammography Certificate",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Residential Care Attendant",
       "url": "https://www.columbustech.edu/programsofstudy/"
      },
      {
       "name": "Respiratory Care, Associate of Applied Science Degree,",
       "url": "https://www.columbustech.edu/programsofstudy/"
      }
     ],
     "logo": "img/logos/columbus.png"
    },
    {
     "name": "South Georgia Technical College",
     "city": "Americus",
     "site": "https://www.southgatech.edu/",
     "nearestCampus": "Americus",
     "miles": 149,
     "programs": [
      {
       "name": "Practical Nursing",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Nurse Aide",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Patient Care Assistant (PC21) Certificate",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Health Care Assistant",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Medical Assisting",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Phlebotomy Technician",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Emergency Medical Technician",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      },
      {
       "name": "Advanced Emergency Medical Technician",
       "url": "https://www.southgatech.edu/college-catalog/current/departments"
      }
     ],
     "logo": "img/logos/south-georgia.png"
    },
    {
     "name": "Southeastern Technical College",
     "city": "Vidalia",
     "site": "https://www.southeasterntech.edu/",
     "nearestCampus": "Swainsboro",
     "miles": 153,
     "programs": [
      {
       "name": "ASN Traditional Option Degree",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "ASN Bridge Pathway Option Degree",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Practical Nursing Certificate",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Nurse Aide Accelerated",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Allied Health Professions Degree",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Laboratory Technology Degree",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Radiologic Technology AAS Degree (RT23)",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Mammography",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Dental Hygiene Degree",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Assisting Diploma",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Advanced Medical Assisting",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Fundamentals of Medical Assisting",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Accelerated Phlebotomy Technician",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Healthcare Assistant",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Healthcare Professional",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Paramedicine AAS",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Paramedicine Diploma",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Paramedicine Accelerated",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "EMS Professions Diploma",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Emergency Medical Technician",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      },
      {
       "name": "Advanced EMT",
       "url": "https://catalog.southeasterntech.edu/college-catalog/current/programs"
      }
     ],
     "logo": "img/logos/southeastern.png"
    },
    {
     "name": "Wiregrass Georgia Technical College",
     "city": "Valdosta",
     "site": "https://www.wiregrass.edu/",
     "nearestCampus": "Fitzgerald",
     "miles": 181,
     "programs": [
      {
       "name": "Dental Hygiene, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Dental Assisting, Diploma Diploma",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Medical Assisting, Diploma Diploma",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Medical Laboratory Technology, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Geriatric Care Assistant, TCC",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Nursing, ASN Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Transitions in Nursing, ASN Bridge Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Paramedicine, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "EMS Professions, Diploma Diploma",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Paramedicine, Diploma Diploma",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Pharmacy Technology, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Practical Nursing, Certificate",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Radiologic Technology, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      },
      {
       "name": "Surgical Technology, AAS Degree",
       "url": "https://www.wiregrass.edu/course-catalog/current/programs"
      }
     ],
     "logo": "img/logos/wiregrass.png"
    },
    {
     "name": "Albany Technical College",
     "city": "Albany",
     "site": "https://www.albanytech.edu/",
     "nearestCampus": "Albany",
     "miles": 183,
     "programs": [
      {
       "name": "Dental Assisting",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/dental-assisting"
      },
      {
       "name": "EMT/Paramedicine",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/paramedicine-emt"
      },
      {
       "name": "Geriatric Care Assistant",
       "url": "https://www.albanytech.edu/college-catalog/2025-2026-college-catalog/programs/geriatric-care-assistant"
      },
      {
       "name": "Health Information Management",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/health-information-techno"
      },
      {
       "name": "Healthcare Assistant",
       "url": "https://www.albanytech.edu/college-catalog/current/programs/health-care-assistant"
      },
      {
       "name": "Medical Assisting",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/support-services-healthcare"
      },
      {
       "name": "Nurse Aide Accelerated",
       "url": "https://www.albanytech.edu/college-catalog/current/programs/nurse-aide"
      },
      {
       "name": "Nursing - Associate Degree",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/nursing"
      },
      {
       "name": "Pharmacy Technology",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/pharmacy-technology"
      },
      {
       "name": "Phlebotomy",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/phlebotomy"
      },
      {
       "name": "Practical Nursing",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/nursing"
      },
      {
       "name": "Pre-Nursing Certificate",
       "url": "https://www.albanytech.edu/college-catalog/2025-2026-college-catalog/programs/pre-nursing"
      },
      {
       "name": "Radiologic Technology",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/advanced-medical-imaging"
      },
      {
       "name": "Surgical Technology",
       "url": "https://www.albanytech.edu/college-catalog/current/colleges/healthcare/surgical-technology"
      }
     ],
     "logo": "img/logos/albany.png"
    },
    {
     "name": "Ogeechee Technical College",
     "city": "Statesboro",
     "site": "https://www.ogeecheetech.edu/",
     "nearestCampus": "Statesboro",
     "miles": 183,
     "programs": [
      {
       "name": "Nursing Associate of Science (NU93)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Nurse Aide Certificate (CN21)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Health Care Assistant Certificate (Nursing Track) (HA21)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Nurse Aide Accelerated Certificate (NAA1)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Geriatric Care Assistant Certificate (GC51)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Allied Health Professions AAS (AFA3)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Practical Nursing Certificate (PN21)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Medical Assisting Diploma (MA22)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Medical Office Support Specialist Certificate (MF31)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Dental Assisting Diploma (DA12)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Radiologic Technology AAS Degree (RT23)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Diagnostic Medical Sonography AAS Degree (DMS3)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Echocardiography AAS Degree (EC23)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Paramedicine Diploma (PT12)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "EMS Professions Diploma (EP12)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Emergency Medical Responder Certificate (EB71)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Emergency Medical Technician Certificate (ED91)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Advanced Emergency Medical Technician Certificate (EMH1)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Phlebotomy Technician Certificate (PT21)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Health Information Management Technology AAS Degree (HI13)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Veterinary Technology AAS Degree (VT23)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Veterinary Technician Assistant Certificate (VA11)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Veterinary Technology Sonographer Certificate (VT11)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      },
      {
       "name": "Funeral Service Education AAS Degree (FS23)",
       "url": "https://www.ogeecheetech.edu/academics/academic-programs"
      }
     ],
     "logo": "img/logos/ogeechee.png"
    },
    {
     "name": "Coastal Pines Technical College",
     "city": "Waycross",
     "site": "https://www.coastalpines.edu/",
     "nearestCampus": "Hazlehurst",
     "miles": 185,
     "programs": [
      {
       "name": "Business Healthcare Technology",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Medical Assisting",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Neuromuscular Massage Therapy",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Nursing (ASN)",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Paramedicine",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Phlebotomy",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Practical Nursing and Related",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Radiologic Technology",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Respiratory Care",
       "url": "https://catalog.coastalpines.edu/classes"
      },
      {
       "name": "Surgical Technology",
       "url": "https://catalog.coastalpines.edu/classes"
      }
     ],
     "logo": "img/logos/coastal-pines.png",
     "logoBg": "#1f3e7c"
    },
    {
     "name": "Southern Regional Technical College",
     "city": "Thomasville",
     "site": "https://www.southernregional.edu/",
     "nearestCampus": "Tifton",
     "miles": 195,
     "programs": [
      {
       "name": "Associate of Science in Nursing",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Allied Health Professions",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Practical Nursing, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Nurse Aide, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Nurse Aide Accelerated, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Paramedicine, AAS",
       "url": null
      },
      {
       "name": "EMS Professions, Diploma",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Emergency Medical Technician: EMT, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Advanced Emergency Medical Technician, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Emergency Medical Responder, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Radiologic Technology, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Echocardiography, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Laboratory Technology, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Respiratory Care, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Surgical Technology, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Clinic Assistant (Phlebotomy), TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Accelerated Phlebotomy Technician, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Central Sterile Supply Processing Tech, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Allied Health Professions, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Assisting, Diploma",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Advanced Medical Assisting, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Fundamentals of Medical Assisting, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Health Information Management Technology, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Health Information Coding, Diploma",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Business Healthcare Technology, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Business Healthcare Technology, Diploma",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Billing Clerk, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Medical Front Office Assistant, TCC",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      },
      {
       "name": "Interdisciplinary Studies, AAS",
       "url": "https://southernregional.edu/college-catalog/current/programs"
      }
     ],
     "logo": "img/logos/southern-regional.png"
    },
    {
     "name": "Savannah Technical College",
     "city": "Savannah",
     "site": "https://www.savannahtech.edu/",
     "nearestCampus": "Rincon",
     "miles": 214,
     "programs": [
      {
       "name": "Associate of Applied Science in Allied Health Professional AFA3",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Associate of Science Nursing NU83",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Practical Nursing Certificate PN21",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Dental Assisting Diploma DA12",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Dental Hygiene Associate of Science Degree DH23",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Surgical Technology Associate of Applied Science Degree ST13",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Medical Assisting Diploma MA22",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Paramedicine Associate of Applied Science Degree PT13",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Paramedicine Diploma PT12",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Phlebotomy Technician Technical Certificate of Credit PT21",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Geriatric Care Assistant Technical Certificate of Credit GC11",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Nurse Aid Fast Track Technical Certificate NAF5",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Health Care Science Technical Certificate of Credit HS21",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      },
      {
       "name": "Medical Coding/Insurance Data Technical Certificate of Credit MC71",
       "url": "https://www.savannahtech.edu/academics/all-programs/"
      }
     ],
     "logo": "img/logos/savannah.png"
    }
   ]
  }
 }
};
