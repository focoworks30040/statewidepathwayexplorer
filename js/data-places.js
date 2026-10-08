// Places data for the Georgia Pathway Explorer: regions, employers, and campuses.
//
// Counties are grouped by Georgia's 12 Regional Commissions. Employer lists are a
// starting point of well-known regional employers tagged by sector — not a complete
// directory. Campus coordinates are approximate and used only to find the closest
// campuses to each county.

window.REGIONS = {
  nw: {
    name: "Northwest Georgia",
    industries: ["Flooring & carpet manufacturing", "Solar & clean energy", "Healthcare", "Logistics"],
    counties: ["Bartow", "Catoosa", "Chattooga", "Dade", "Fannin", "Floyd", "Gilmer", "Gordon", "Haralson", "Murray", "Paulding", "Pickens", "Polk", "Walker", "Whitfield"]
  },
  mtn: {
    name: "Georgia Mountains",
    industries: ["Poultry & food processing", "Advanced manufacturing", "Healthcare", "Tourism"],
    counties: ["Banks", "Dawson", "Franklin", "Habersham", "Hall", "Hart", "Lumpkin", "Rabun", "Stephens", "Towns", "Union", "White"]
  },
  atl: {
    name: "Metro Atlanta",
    industries: ["Technology & FinTech", "Healthcare", "Aviation & logistics", "Film & media", "Corporate headquarters"],
    counties: ["Cherokee", "Clayton", "Cobb", "DeKalb", "Douglas", "Fayette", "Forsyth", "Fulton", "Gwinnett", "Henry", "Rockdale"]
  },
  three: {
    name: "Three Rivers",
    industries: ["Automotive manufacturing", "Wire & cable", "Healthcare", "Logistics"],
    counties: ["Butts", "Carroll", "Coweta", "Heard", "Lamar", "Meriwether", "Pike", "Spalding", "Troup", "Upson"]
  },
  ne: {
    name: "Northeast Georgia",
    industries: ["EV & battery manufacturing", "Higher education & research", "Healthcare", "Life sciences"],
    counties: ["Barrow", "Clarke", "Elbert", "Greene", "Jackson", "Jasper", "Madison", "Morgan", "Newton", "Oconee", "Oglethorpe", "Walton"]
  },
  mid: {
    name: "Middle Georgia",
    industries: ["Aerospace & defense", "Healthcare", "Manufacturing", "Agriculture"],
    counties: ["Baldwin", "Bibb", "Crawford", "Houston", "Jones", "Monroe", "Peach", "Pulaski", "Putnam", "Twiggs", "Wilkinson"]
  },
  csra: {
    name: "Central Savannah River Area",
    industries: ["Cybersecurity & defense", "Nuclear energy", "Healthcare & medical education", "Manufacturing"],
    counties: ["Burke", "Columbia", "Glascock", "Hancock", "Jefferson", "Jenkins", "Lincoln", "McDuffie", "Richmond", "Taliaferro", "Warren", "Washington", "Wilkes"]
  },
  river: {
    name: "River Valley",
    industries: ["FinTech & insurance", "Military", "Aerospace manufacturing", "Agriculture"],
    counties: ["Chattahoochee", "Clay", "Crisp", "Dooly", "Harris", "Macon", "Marion", "Muscogee", "Quitman", "Randolph", "Schley", "Stewart", "Sumter", "Talbot", "Taylor", "Webster"]
  },
  hoga: {
    name: "Heart of Georgia Altamaha",
    industries: ["Agriculture", "Forestry & wood products", "Healthcare", "Manufacturing"],
    counties: ["Appling", "Bleckley", "Candler", "Dodge", "Emanuel", "Evans", "Jeff Davis", "Johnson", "Laurens", "Montgomery", "Tattnall", "Telfair", "Toombs", "Treutlen", "Wayne", "Wheeler", "Wilcox"]
  },
  sw: {
    name: "Southwest Georgia",
    industries: ["Agriculture & food processing", "Healthcare", "Defense logistics", "Manufacturing"],
    counties: ["Baker", "Calhoun", "Colquitt", "Decatur", "Dougherty", "Early", "Grady", "Lee", "Miller", "Mitchell", "Seminole", "Terrell", "Thomas", "Worth"]
  },
  sga: {
    name: "Southern Georgia",
    industries: ["Agriculture", "Military", "Healthcare", "Forestry & rail"],
    counties: ["Atkinson", "Bacon", "Ben Hill", "Berrien", "Brantley", "Brooks", "Charlton", "Clinch", "Coffee", "Cook", "Echols", "Irwin", "Lanier", "Lowndes", "Pierce", "Tift", "Turner", "Ware"]
  },
  coast: {
    name: "Coastal Georgia",
    industries: ["Ports & logistics", "EV manufacturing", "Aerospace", "Military", "Tourism"],
    counties: ["Bryan", "Bulloch", "Camden", "Chatham", "Effingham", "Glynn", "Liberty", "Long", "McIntosh", "Screven"]
  }
};

// Employers: [name, place, sectors[]]. Region lists apply to every county in the
// region; county lists add employers located in that county.
window.EMPLOYERS = {
  regions: {
    nw: [
      ["Shaw Industries", "Dalton", ["mfg", "logi"]],
      ["Mohawk Industries", "Calhoun", ["mfg", "logi", "biz"]],
      ["Qcells (Hanwha) solar manufacturing", "Dalton & Cartersville", ["mfg", "energy"]],
      ["Atrium Health Floyd", "Rome", ["health"]],
      ["AdventHealth Redmond", "Rome", ["health"]],
      ["Hamilton Health Care System", "Dalton", ["health"]],
      ["Piedmont Cartersville", "Cartersville", ["health"]],
      ["Georgia Power / Plant Bowen", "Bartow County", ["energy"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    mtn: [
      ["Northeast Georgia Health System", "Gainesville", ["health"]],
      ["Kubota Manufacturing of America", "Gainesville", ["mfg"]],
      ["Pilgrim's Pride", "Gainesville", ["ag", "mfg"]],
      ["Mar-Jac Poultry", "Gainesville", ["ag", "mfg"]],
      ["Fieldale Farms", "Baldwin", ["ag", "mfg"]],
      ["Habersham Medical Center", "Demorest", ["health"]],
      ["Patterson Pump", "Toccoa", ["mfg"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    atl: [
      ["Delta Air Lines & Delta TechOps", "Atlanta", ["aero", "logi", "tech"]],
      ["Hartsfield-Jackson Atlanta International Airport", "Atlanta", ["aero", "logi", "safety"]],
      ["Emory Healthcare", "Atlanta", ["health"]],
      ["Piedmont Healthcare", "Atlanta", ["health"]],
      ["Northside Hospital", "Atlanta", ["health"]],
      ["Wellstar Health System", "Marietta", ["health"]],
      ["Children's Healthcare of Atlanta", "Atlanta", ["health"]],
      ["Grady Health System", "Atlanta", ["health"]],
      ["The Home Depot", "Atlanta", ["biz", "logi", "tech"]],
      ["UPS", "Atlanta", ["logi", "tech"]],
      ["The Coca-Cola Company", "Atlanta", ["biz", "ag", "mfg"]],
      ["Lockheed Martin Aeronautics", "Marietta", ["aero", "mfg"]],
      ["Georgia Power (Southern Company)", "Atlanta", ["energy"]],
      ["Global Payments, Fiserv & FinTech firms", "Atlanta", ["biz", "tech"]],
      ["Microsoft, Google & data center operators", "Metro Atlanta", ["tech"]],
      ["CDC (Centers for Disease Control & Prevention)", "Atlanta", ["health", "tech"]],
      ["Film studios (Trilith, Tyler Perry Studios & more)", "Metro Atlanta", ["film"]],
      ["Chick-fil-A", "College Park", ["biz", "ag"]],
      ["County school districts", "Every county", ["edu"]],
      ["City & county police and fire departments", "Every county", ["safety"]]
    ],
    three: [
      ["Kia Georgia", "West Point", ["mfg"]],
      ["Southwire", "Carrollton", ["mfg", "energy"]],
      ["Yamaha Motor Manufacturing", "Newnan", ["mfg"]],
      ["Piedmont Newnan", "Newnan", ["health"]],
      ["Tanner Health", "Carrollton", ["health"]],
      ["Wellstar West Georgia Medical Center", "LaGrange", ["health"]],
      ["Wellstar Spalding Medical Center", "Griffin", ["health"]],
      ["Interface", "LaGrange", ["mfg"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    ne: [
      ["University of Georgia", "Athens", ["edu", "ag", "tech"]],
      ["Piedmont Athens Regional", "Athens", ["health"]],
      ["St. Mary's Health Care System", "Athens", ["health"]],
      ["Caterpillar", "Athens", ["mfg"]],
      ["SK Battery America", "Commerce", ["mfg", "energy"]],
      ["Takeda & Baxter (biopharma)", "Covington", ["mfg", "health"]],
      ["Meta data center", "Stanton Springs", ["tech"]],
      ["Rivian (planned EV plant)", "Stanton Springs", ["mfg"]],
      ["Piedmont Newton & Piedmont Walton", "Covington & Monroe", ["health"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    mid: [
      ["Robins Air Force Base", "Warner Robins", ["aero", "tech", "mfg"]],
      ["Atrium Health Navicent", "Macon", ["health"]],
      ["Piedmont Macon", "Macon", ["health"]],
      ["Houston Healthcare", "Warner Robins", ["health"]],
      ["GEICO", "Macon", ["biz", "tech"]],
      ["Blue Bird Corporation (school buses & EVs)", "Fort Valley", ["mfg"]],
      ["Perdue Farms", "Perry", ["ag", "mfg"]],
      ["Middle Georgia Regional Airport & aviation firms", "Macon", ["aero", "logi"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    csra: [
      ["Fort Eisenhower & U.S. Army Cyber Command", "Augusta", ["tech", "safety"]],
      ["Wellstar MCG Health / Augusta University", "Augusta", ["health", "edu"]],
      ["Piedmont Augusta", "Augusta", ["health"]],
      ["Charlie Norwood VA Medical Center", "Augusta", ["health"]],
      ["Plant Vogtle (Georgia Power)", "Waynesboro", ["energy"]],
      ["Club Car", "Evans", ["mfg"]],
      ["E-Z-GO (Textron)", "Augusta", ["mfg"]],
      ["Georgia Cyber Innovation & Training Center", "Augusta", ["tech", "edu"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    river: [
      ["Aflac", "Columbus", ["biz", "tech"]],
      ["Global Payments (TSYS)", "Columbus", ["biz", "tech"]],
      ["Synovus", "Columbus", ["biz"]],
      ["Fort Moore", "Columbus", ["safety", "logi"]],
      ["Piedmont Columbus Regional", "Columbus", ["health"]],
      ["St. Francis-Emory Healthcare", "Columbus", ["health"]],
      ["Pratt & Whitney", "Columbus", ["aero", "mfg"]],
      ["Phoebe Sumter Medical Center", "Americus", ["health"]],
      ["Farms & agribusiness", "Across the region", ["ag"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    hoga: [
      ["Fairview Park Hospital", "Dublin", ["health"]],
      ["Carl Vinson VA Medical Center", "Dublin", ["health"]],
      ["Meadows Regional Medical Center", "Vidalia", ["health"]],
      ["Rayonier Advanced Materials", "Jesup", ["mfg", "ag"]],
      ["Vidalia onion growers & agribusiness", "Toombs region", ["ag"]],
      ["Timber & wood products mills", "Across the region", ["ag", "mfg"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    sw: [
      ["Phoebe Putney Health System", "Albany", ["health"]],
      ["Marine Corps Logistics Base Albany", "Albany", ["logi", "mfg", "safety"]],
      ["Procter & Gamble", "Albany", ["mfg"]],
      ["Archbold Medical Center", "Thomasville", ["health"]],
      ["Flowers Foods", "Thomasville", ["ag", "mfg", "biz"]],
      ["Sanderson Farms (Wayne-Sanderson)", "Moultrie", ["ag", "mfg"]],
      ["Port of Bainbridge & agribusiness", "Bainbridge", ["logi", "ag"]],
      ["Peanut, cotton & pecan farms", "Across the region", ["ag"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    sga: [
      ["Moody Air Force Base", "Valdosta", ["aero", "safety"]],
      ["South Georgia Medical Center", "Valdosta", ["health"]],
      ["Tift Regional Medical Center", "Tifton", ["health"]],
      ["Coffee Regional Medical Center", "Douglas", ["health"]],
      ["Memorial Satilla Health", "Waycross", ["health"]],
      ["CSX Rice Yard", "Waycross", ["logi"]],
      ["UGA Tifton Campus & ABAC research farms", "Tifton", ["ag", "edu"]],
      ["Farms, forestry & food processing", "Across the region", ["ag", "mfg"]],
      ["Local school districts", "Every county", ["edu"]]
    ],
    coast: [
      ["Georgia Ports Authority (Port of Savannah)", "Savannah", ["logi"]],
      ["Gulfstream Aerospace", "Savannah", ["aero", "mfg"]],
      ["Hyundai Motor Group Metaplant America", "Ellabell", ["mfg", "energy"]],
      ["Memorial Health University Medical Center", "Savannah", ["health"]],
      ["St. Joseph's/Candler", "Savannah", ["health"]],
      ["JCB North America", "Pooler", ["mfg"]],
      ["Fort Stewart & Hunter Army Airfield", "Hinesville & Savannah", ["safety", "logi", "aero"]],
      ["Naval Submarine Base Kings Bay", "St. Marys", ["safety", "mfg"]],
      ["Southeast Georgia Health System", "Brunswick", ["health"]],
      ["Federal Law Enforcement Training Centers", "Glynco", ["safety"]],
      ["Film productions & studios", "Savannah", ["film"]],
      ["Local school districts", "Every county", ["edu"]]
    ]
  },
  counties: {
    Fulton: [["Mercedes-Benz USA & Porsche Cars North America HQs", "Sandy Springs & Atlanta", ["biz", "mfg"]], ["NCR Voyix & Atlanta Tech Square startups", "Atlanta", ["tech", "biz"]]],
    Cobb: [["Wellstar Kennestone Hospital", "Marietta", ["health"]], ["Lockheed Martin Aeronautics", "Marietta", ["aero", "mfg"]]],
    Gwinnett: [["Northside Hospital Gwinnett", "Lawrenceville", ["health"]], ["Gwinnett County Public Schools (largest district in GA)", "Gwinnett", ["edu"]]],
    DeKalb: [["Emory University Hospital & CDC", "Atlanta", ["health"]], ["DeKalb Medical / Emory Decatur", "Decatur", ["health"]]],
    Clayton: [["Delta Air Lines world headquarters", "Atlanta airport", ["aero", "logi"]]],
    Fayette: [["Trilith Studios", "Fayetteville", ["film"]], ["Piedmont Fayette Hospital", "Fayetteville", ["health"]]],
    Douglas: [["Google data center", "Lithia Springs", ["tech"]]],
    Henry: [["Distribution centers along I-75", "McDonough", ["logi"]], ["Piedmont Henry Hospital", "Stockbridge", ["health"]]],
    Rockdale: [["Piedmont Rockdale", "Conyers", ["health"]]],
    Cherokee: [["Northside Hospital Cherokee", "Canton", ["health"]]],
    Forsyth: [["Northside Hospital Forsyth", "Cumming", ["health"]]],
    Chatham: [["Gulfstream Aerospace", "Savannah", ["aero", "mfg"]], ["Garden City Terminal", "Garden City", ["logi"]]],
    Bryan: [["Hyundai Motor Group Metaplant America", "Ellabell", ["mfg"]]],
    Effingham: [["Port-related distribution centers", "Rincon", ["logi"]]],
    Liberty: [["Fort Stewart", "Hinesville", ["safety", "logi"]]],
    Camden: [["Naval Submarine Base Kings Bay", "St. Marys", ["safety"]]],
    Glynn: [["Port of Brunswick (auto imports)", "Brunswick", ["logi"]], ["Federal Law Enforcement Training Centers", "Glynco", ["safety"]]],
    Bulloch: [["Georgia Southern University", "Statesboro", ["edu"]], ["East Georgia Regional Medical Center", "Statesboro", ["health"]]],
    Richmond: [["Wellstar MCG Health", "Augusta", ["health"]], ["Fort Eisenhower", "Augusta", ["tech", "safety"]]],
    Columbia: [["Club Car", "Evans", ["mfg"]]],
    Burke: [["Plant Vogtle", "Waynesboro", ["energy"]]],
    Bibb: [["Atrium Health Navicent The Medical Center", "Macon", ["health"]], ["GEICO regional office", "Macon", ["biz"]]],
    Houston: [["Robins Air Force Base", "Warner Robins", ["aero"]], ["Perdue Farms", "Perry", ["ag"]]],
    Peach: [["Blue Bird Corporation", "Fort Valley", ["mfg"]], ["Fort Valley State University", "Fort Valley", ["edu", "ag"]]],
    Baldwin: [["Georgia College & State University", "Milledgeville", ["edu"]], ["Atrium Health Navicent Baldwin", "Milledgeville", ["health"]]],
    Clarke: [["University of Georgia", "Athens", ["edu"]], ["Caterpillar", "Athens", ["mfg"]]],
    Jackson: [["SK Battery America", "Commerce", ["mfg"]]],
    Newton: [["Takeda & Baxter", "Covington", ["mfg", "health"]]],
    Hall: [["Northeast Georgia Medical Center", "Gainesville", ["health"]], ["Kubota Manufacturing of America", "Gainesville", ["mfg"]]],
    Habersham: [["Fieldale Farms", "Baldwin", ["ag"]]],
    Stephens: [["Patterson Pump", "Toccoa", ["mfg"]]],
    Whitfield: [["Shaw Industries", "Dalton", ["mfg"]], ["Qcells solar module plant", "Dalton", ["mfg", "energy"]], ["Hamilton Medical Center", "Dalton", ["health"]]],
    Gordon: [["Mohawk Industries headquarters", "Calhoun", ["mfg", "biz"]]],
    Bartow: [["Qcells solar plant", "Cartersville", ["mfg", "energy"]], ["Toyo Tire", "White", ["mfg"]]],
    Floyd: [["Atrium Health Floyd", "Rome", ["health"]], ["Suzuki Manufacturing of America", "Rome", ["mfg"]]],
    Walker: [["Roper Corporation (Whirlpool)", "LaFayette", ["mfg"]]],
    Troup: [["Kia Georgia", "West Point", ["mfg"]], ["Wellstar West Georgia Medical Center", "LaGrange", ["health"]]],
    Coweta: [["Yamaha Motor Manufacturing", "Newnan", ["mfg"]], ["Piedmont Newnan", "Newnan", ["health"]]],
    Carroll: [["Southwire", "Carrollton", ["mfg"]], ["Tanner Medical Center", "Carrollton", ["health"]]],
    Spalding: [["Wellstar Spalding Medical Center", "Griffin", ["health"]]],
    Muscogee: [["Aflac", "Columbus", ["biz"]], ["Global Payments (TSYS)", "Columbus", ["biz", "tech"]], ["Pratt & Whitney", "Columbus", ["aero"]]],
    Chattahoochee: [["Fort Moore", "Fort Moore", ["safety"]]],
    Sumter: [["Phoebe Sumter Medical Center", "Americus", ["health"]]],
    Dougherty: [["Phoebe Putney Memorial Hospital", "Albany", ["health"]], ["Marine Corps Logistics Base Albany", "Albany", ["logi"]], ["Procter & Gamble", "Albany", ["mfg"]]],
    Thomas: [["Archbold Memorial Hospital", "Thomasville", ["health"]], ["Flowers Foods headquarters", "Thomasville", ["ag", "biz"]]],
    Colquitt: [["Sanderson Farms (Wayne-Sanderson)", "Moultrie", ["ag"]], ["Colquitt Regional Medical Center", "Moultrie", ["health"]]],
    Decatur: [["Port of Bainbridge", "Bainbridge", ["logi"]]],
    Lowndes: [["Moody Air Force Base", "Valdosta", ["aero"]], ["South Georgia Medical Center", "Valdosta", ["health"]]],
    Tift: [["Tift Regional Medical Center", "Tifton", ["health"]], ["UGA Tifton Campus", "Tifton", ["ag"]]],
    Coffee: [["Coffee Regional Medical Center", "Douglas", ["health"]]],
    Ware: [["CSX Rice Yard", "Waycross", ["logi"]], ["Memorial Satilla Health", "Waycross", ["health"]]],
    Laurens: [["Carl Vinson VA Medical Center", "Dublin", ["health"]], ["Fairview Park Hospital", "Dublin", ["health"]]],
    Toombs: [["Meadows Regional Medical Center", "Vidalia", ["health"]]],
    Wayne: [["Rayonier Advanced Materials", "Jesup", ["mfg"]]],
    Crisp: [["Crisp Regional Hospital", "Cordele", ["health"]]]
  }
};

// TCSG campuses: [college, campus city, lat, lon]
window.TCSG = {
  colleges: {
    albany: { name: "Albany Technical College", url: "https://www.albanytech.edu", signature: ["Nursing", "Commercial Truck Driving", "Precision Agriculture", "Welding"] },
    athens: { name: "Athens Technical College", url: "https://www.athenstech.edu", signature: ["Veterinary Technology", "Biotechnology", "Respiratory Care", "Nursing"] },
    atlanta: { name: "Atlanta Technical College", url: "https://atlantatech.edu", signature: ["Health Information", "Film & Video Production", "Electrical Construction", "Culinary Arts"] },
    augusta: { name: "Augusta Technical College", url: "https://www.augustatech.edu", signature: ["Cybersecurity", "Nuclear Energy Technology", "Respiratory Care", "Aviation Maintenance"] },
    central: { name: "Central Georgia Technical College", url: "https://www.centralgatech.edu", signature: ["Aviation Maintenance", "Nursing", "Industrial Systems", "Cybersecurity"] },
    chatt: { name: "Chattahoochee Technical College", url: "https://www.chattahoocheetech.edu", signature: ["Nursing", "Cybersecurity", "Mechatronics", "Film Production"] },
    coastalpines: { name: "Coastal Pines Technical College", url: "https://www.coastalpines.edu", signature: ["Nursing", "Welding", "Industrial Systems", "Commercial Truck Driving"] },
    columbus: { name: "Columbus Technical College", url: "https://www.columbustech.edu", signature: ["Surgical Technology", "Cybersecurity", "Precision Machining", "Nursing"] },
    gntc: { name: "Georgia Northwestern Technical College", url: "https://www.gntc.edu", signature: ["Industrial Systems", "Radiologic Technology", "Nursing", "Welding"] },
    piedmont: { name: "Georgia Piedmont Technical College", url: "https://www.gptc.edu", signature: ["Aviation Maintenance", "Nursing", "Cybersecurity", "Automotive"] },
    gwinnett: { name: "Gwinnett Technical College", url: "https://www.gwinnetttech.edu", signature: ["Respiratory Care", "Surgical Technology", "Cybersecurity", "Radiologic Technology"] },
    lanier: { name: "Lanier Technical College", url: "https://www.laniertech.edu", signature: ["Industrial Systems", "Nursing", "Firefighting & EMS", "Welding"] },
    northga: { name: "North Georgia Technical College", url: "https://www.northgatech.edu", signature: ["Lineworker", "Nursing", "Veterinary Technology", "Welding"] },
    ofl: { name: "Oconee Fall Line Technical College", url: "https://www.oftc.edu", signature: ["Nursing", "Industrial Systems", "Commercial Truck Driving", "Welding"] },
    ogeechee: { name: "Ogeechee Technical College", url: "https://www.ogeecheetech.edu", signature: ["Veterinary Technology", "Forest Technology", "Nursing", "Industrial Systems"] },
    savannah: { name: "Savannah Technical College", url: "https://www.savannahtech.edu", signature: ["Aviation Maintenance", "Logistics", "Industrial Systems", "Surgical Technology"] },
    southga: { name: "South Georgia Technical College", url: "https://www.southgatech.edu", signature: ["Aviation", "Nursing", "Commercial Truck Driving", "Precision Agriculture"] },
    southeastern: { name: "Southeastern Technical College", url: "https://www.southeasterntech.edu", signature: ["Nursing", "Welding", "Industrial Systems", "Commercial Truck Driving"] },
    crescent: { name: "Southern Crescent Technical College", url: "https://www.sctech.edu", signature: ["Nursing", "Diesel Technology", "Logistics", "Welding"] },
    southern: { name: "Southern Regional Technical College", url: "https://www.southernregional.edu", signature: ["Nursing", "Agricultural Technology", "Industrial Systems", "Welding"] },
    westga: { name: "West Georgia Technical College", url: "https://www.westgatech.edu", signature: ["Automotive Manufacturing", "Nursing", "Electrical Lineworker", "Industrial Systems"] },
    wiregrass: { name: "Wiregrass Georgia Technical College", url: "https://www.wiregrass.edu", signature: ["Nursing", "Industrial Systems", "Welding", "Cybersecurity"] }
  },
  campuses: [
    ["albany", "Albany", 31.578, -84.156],
    ["athens", "Athens", 33.951, -83.357], ["athens", "Elberton", 34.111, -82.867], ["athens", "Greensboro", 33.575, -83.182], ["athens", "Monroe", 33.794, -83.713],
    ["atlanta", "Atlanta", 33.711, -84.408],
    ["augusta", "Augusta", 33.444, -82.026], ["augusta", "Thomson", 33.470, -82.504], ["augusta", "Waynesboro", 33.090, -82.016], ["augusta", "Grovetown", 33.450, -82.198],
    ["central", "Macon", 32.806, -83.689], ["central", "Warner Robins", 32.613, -83.624], ["central", "Milledgeville", 33.080, -83.232],
    ["chatt", "Marietta", 33.952, -84.550], ["chatt", "Canton", 34.237, -84.491], ["chatt", "Jasper", 34.468, -84.429], ["chatt", "Dallas", 33.924, -84.841], ["chatt", "Austell", 33.813, -84.634],
    ["coastalpines", "Waycross", 31.213, -82.354], ["coastalpines", "Brunswick", 31.150, -81.491], ["coastalpines", "Jesup", 31.607, -81.885], ["coastalpines", "Alma", 31.539, -82.462], ["coastalpines", "Baxley", 31.778, -82.348], ["coastalpines", "Hazlehurst", 31.870, -82.595],
    ["columbus", "Columbus", 32.493, -84.950],
    ["gntc", "Rome", 34.257, -85.165], ["gntc", "Calhoun", 34.503, -84.951], ["gntc", "Dalton", 34.770, -84.970], ["gntc", "Rock Spring", 34.811, -85.247], ["gntc", "Ringgold", 34.916, -85.109], ["gntc", "Rockmart", 34.003, -85.046],
    ["piedmont", "Clarkston", 33.810, -84.241], ["piedmont", "Covington", 33.597, -83.860], ["piedmont", "Conyers", 33.668, -84.017],
    ["gwinnett", "Lawrenceville", 33.958, -84.022], ["gwinnett", "Alpharetta", 34.075, -84.294],
    ["lanier", "Oakwood", 34.228, -83.884], ["lanier", "Cumming", 34.207, -84.140], ["lanier", "Winder", 33.992, -83.720], ["lanier", "Commerce", 34.204, -83.457], ["lanier", "Dawsonville", 34.421, -84.119],
    ["northga", "Clarkesville", 34.613, -83.525], ["northga", "Blairsville", 34.876, -83.958], ["northga", "Blue Ridge", 34.864, -84.324],
    ["ofl", "Sandersville", 32.981, -82.810], ["ofl", "Dublin", 32.540, -82.904],
    ["ogeechee", "Statesboro", 32.449, -81.783],
    ["savannah", "Savannah", 32.022, -81.120], ["savannah", "Hinesville", 31.847, -81.596], ["savannah", "Rincon", 32.296, -81.235],
    ["southga", "Americus", 32.072, -84.233], ["southga", "Cordele", 31.963, -83.782],
    ["southeastern", "Vidalia", 32.218, -82.413], ["southeastern", "Swainsboro", 32.597, -82.333],
    ["crescent", "Griffin", 33.247, -84.264], ["crescent", "Thomaston", 32.888, -84.326], ["crescent", "Jackson", 33.294, -83.966], ["crescent", "McDonough", 33.447, -84.147],
    ["southern", "Thomasville", 30.836, -83.979], ["southern", "Moultrie", 31.180, -83.789], ["southern", "Tifton", 31.450, -83.508], ["southern", "Bainbridge", 30.904, -84.575],
    ["westga", "Carrollton", 33.580, -85.077], ["westga", "LaGrange", 33.039, -85.031], ["westga", "Douglasville", 33.751, -84.747], ["westga", "Newnan", 33.381, -84.800], ["westga", "Waco", 33.703, -85.185],
    ["wiregrass", "Valdosta", 30.833, -83.280], ["wiregrass", "Fitzgerald", 31.715, -83.253], ["wiregrass", "Douglas", 31.509, -82.850], ["wiregrass", "Nashville", 31.207, -83.250]
  ]
};

// USG institutions: [id, campus city, lat, lon]
window.USG = {
  schools: {
    gatech: { name: "Georgia Institute of Technology", type: "Research university", url: "https://www.gatech.edu", signature: ["Engineering", "Computer Science", "Aerospace", "Industrial Engineering"] },
    uga: { name: "University of Georgia", type: "Research university", url: "https://www.uga.edu", signature: ["Agriculture", "Veterinary Medicine", "Pharmacy", "Business"] },
    gsu: { name: "Georgia State University", type: "Research university", url: "https://www.gsu.edu", signature: ["FinTech", "Nursing", "Film & Media", "Actuarial Science"] },
    augusta: { name: "Augusta University", type: "Research university", url: "https://www.augusta.edu", signature: ["Medicine (MCG)", "Dentistry", "Physician Assistant", "Cybersecurity"] },
    gaso: { name: "Georgia Southern University", type: "Comprehensive university", url: "https://www.georgiasouthern.edu", signature: ["Engineering", "Logistics & Supply Chain", "Nursing", "Construction Management"] },
    ksu: { name: "Kennesaw State University", type: "Comprehensive university", url: "https://www.kennesaw.edu", signature: ["Engineering", "Cybersecurity", "Computer Science", "Nursing"] },
    uwg: { name: "University of West Georgia", type: "Comprehensive university", url: "https://www.westga.edu", signature: ["Nursing", "Education", "Business", "Computer Science"] },
    valdosta: { name: "Valdosta State University", type: "Comprehensive university", url: "https://www.valdosta.edu", signature: ["Nursing", "Education", "Business", "Speech-Language Pathology"] },
    albanystate: { name: "Albany State University", type: "State university", url: "https://www.asurams.edu", signature: ["Nursing", "Education", "Criminal Justice", "Health Sciences"] },
    clayton: { name: "Clayton State University", type: "State university", url: "https://www.clayton.edu", signature: ["Nursing", "Aviation Management", "Supply Chain", "Film"] },
    columbusstate: { name: "Columbus State University", type: "State university", url: "https://www.columbusstate.edu", signature: ["Cybersecurity", "Computer Science", "Nursing", "Education"] },
    fvsu: { name: "Fort Valley State University", type: "State university", url: "https://www.fvsu.edu", signature: ["Agriculture", "Veterinary Technology", "Education", "Biology"] },
    gcsu: { name: "Georgia College & State University", type: "State university", url: "https://www.gcsu.edu", signature: ["Nursing", "Business", "Education", "Music Therapy"] },
    gsw: { name: "Georgia Southwestern State University", type: "State university", url: "https://www.gsw.edu", signature: ["Nursing", "Education", "Business", "Computer Science"] },
    mga: { name: "Middle Georgia State University", type: "State university", url: "https://www.mga.edu", signature: ["Aviation & Flight", "Aviation Maintenance", "Information Technology", "Nursing"] },
    savstate: { name: "Savannah State University", type: "State university", url: "https://www.savannahstate.edu", signature: ["Marine Science", "Engineering Technology", "Business", "Film"] },
    ung: { name: "University of North Georgia", type: "State university", url: "https://ung.edu", signature: ["Cybersecurity", "Nursing", "Military leadership", "Physical Therapy"] },
    abac: { name: "Abraham Baldwin Agricultural College", type: "State college", url: "https://www.abac.edu", signature: ["Agriculture", "Forestry & Wildlife", "Nursing", "Ag Business"] },
    atlm: { name: "Atlanta Metropolitan State College", type: "State college", url: "https://www.atlm.edu", signature: ["Health Sciences", "Business", "Computer Science", "Criminal Justice"] },
    ccga: { name: "College of Coastal Georgia", type: "State college", url: "https://www.ccga.edu", signature: ["Nursing", "Business", "Education", "Coastal Ecology"] },
    dalton: { name: "Dalton State College", type: "State college", url: "https://www.daltonstate.edu", signature: ["Nursing", "Business", "Industrial Operations", "Education"] },
    ggc: { name: "Georgia Gwinnett College", type: "State college", url: "https://www.ggc.edu", signature: ["Nursing", "Information Technology", "Business", "Education"] },
    ghc: { name: "Georgia Highlands College", type: "State college", url: "https://www.highlands.edu", signature: ["Nursing", "Dental Hygiene", "Business", "Health Sciences"] },
    gordon: { name: "Gordon State College", type: "State college", url: "https://www.gordonstate.edu", signature: ["Nursing", "Education", "Business", "Biology"] },
    sgsc: { name: "South Georgia State College", type: "State college", url: "https://www.sgsc.edu", signature: ["Nursing", "Business", "Biology", "Education"] }
  },
  campuses: [
    ["gatech", "Atlanta", 33.776, -84.398], ["gatech", "Savannah", 32.071, -81.163],
    ["uga", "Athens", 33.948, -83.377], ["uga", "Tifton", 31.474, -83.528], ["uga", "Griffin", 33.264, -84.284],
    ["gsu", "Atlanta", 33.753, -84.385], ["gsu", "Alpharetta", 34.067, -84.287], ["gsu", "Clarkston", 33.807, -84.230], ["gsu", "Decatur", 33.711, -84.241], ["gsu", "Dunwoody", 33.940, -84.336], ["gsu", "Newton", 33.580, -83.836],
    ["augusta", "Augusta", 33.471, -81.989],
    ["gaso", "Statesboro", 32.421, -81.785], ["gaso", "Savannah (Armstrong)", 31.977, -81.139], ["gaso", "Hinesville", 31.848, -81.612], ["gaso", "Swainsboro", 32.596, -82.341],
    ["ksu", "Kennesaw", 34.038, -84.582], ["ksu", "Marietta", 33.938, -84.520],
    ["uwg", "Carrollton", 33.573, -85.098], ["uwg", "Newnan", 33.380, -84.795],
    ["valdosta", "Valdosta", 30.848, -83.290],
    ["albanystate", "Albany", 31.569, -84.140],
    ["clayton", "Morrow", 33.581, -84.338],
    ["columbusstate", "Columbus", 32.502, -84.940],
    ["fvsu", "Fort Valley", 32.540, -83.892],
    ["gcsu", "Milledgeville", 33.080, -83.231],
    ["gsw", "Americus", 32.062, -84.211],
    ["mga", "Macon", 32.811, -83.732], ["mga", "Cochran", 32.391, -83.351], ["mga", "Dublin", 32.546, -82.917], ["mga", "Eastman", 32.198, -83.177], ["mga", "Warner Robins", 32.613, -83.598],
    ["savstate", "Savannah", 32.023, -81.058],
    ["ung", "Dahlonega", 34.528, -83.985], ["ung", "Gainesville", 34.252, -83.876], ["ung", "Cumming", 34.207, -84.144], ["ung", "Blue Ridge", 34.866, -84.321], ["ung", "Watkinsville", 33.862, -83.409],
    ["abac", "Tifton", 31.484, -83.528],
    ["atlm", "Atlanta", 33.711, -84.403],
    ["ccga", "Brunswick", 31.183, -81.484], ["ccga", "Kingsland", 30.800, -81.690],
    ["dalton", "Dalton", 34.770, -84.940],
    ["ggc", "Lawrenceville", 33.980, -84.000],
    ["ghc", "Rome", 34.250, -85.180], ["ghc", "Cartersville", 34.165, -84.800], ["ghc", "Marietta", 33.951, -84.517], ["ghc", "Dallas", 33.924, -84.841], ["ghc", "Douglasville", 33.751, -84.747],
    ["gordon", "Barnesville", 33.053, -84.155],
    ["sgsc", "Douglas", 31.508, -82.850], ["sgsc", "Waycross", 31.213, -82.354]
  ]
};
