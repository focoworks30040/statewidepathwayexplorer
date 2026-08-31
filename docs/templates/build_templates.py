#!/usr/bin/env python3
"""Build the two curation workbooks for the Statewide Pathway Explorer."""

from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.utils import get_column_letter

OUT = "/home/user/statewidepathwayexplorer/docs/templates"

# ---------------------------------------------------------------- palette
INK        = "1A1A1A"
HDR_FILL   = "1F3A5F"   # deep navy header
HDR_FONT   = "FFFFFF"
EX_FILL    = "FFF6D9"   # example rows
LOCK_FILL  = "EDF0F3"   # do-not-edit / derived
NOTE_FILL  = "F7F3E8"
ACCENT     = "B4232A"

FONT = "Arial"

thin = Side(style="thin", color="C9CFD6")
BORDER = Border(left=thin, right=thin, top=thin, bottom=thin)


def style_header(ws, row, ncols):
    for c in range(1, ncols + 1):
        cell = ws.cell(row=row, column=c)
        cell.font = Font(name=FONT, size=10, bold=True, color=HDR_FONT)
        cell.fill = PatternFill("solid", fgColor=HDR_FILL)
        cell.alignment = Alignment(vertical="center", wrap_text=True)
        cell.border = BORDER
    ws.row_dimensions[row].height = 34


def widths(ws, mapping):
    for col, w in mapping.items():
        ws.column_dimensions[col].width = w


def title_block(ws, title, subtitle, ncols):
    ws["A1"] = title
    ws["A1"].font = Font(name=FONT, size=15, bold=True, color=INK)
    ws["A2"] = subtitle
    ws["A2"].font = Font(name=FONT, size=10, italic=True, color="5C6672")
    ws.row_dimensions[1].height = 22
    ws.row_dimensions[2].height = 18


# ---------------------------------------------------------------- shared reference data
INDUSTRIES = [
    "Advanced Manufacturing",
    "Healthcare",
    "Bio & Life Sciences",
    "Professional Services & HQ",
    "Technology & IT",
]

SUBSECTORS = [
    ("Advanced Manufacturing", "Automotive & EV"),
    ("Advanced Manufacturing", "Aerospace & Defense"),
    ("Advanced Manufacturing", "Food & Beverage Processing"),
    ("Advanced Manufacturing", "Industrial Machinery"),
    ("Advanced Manufacturing", "Textiles & Flooring"),
    ("Advanced Manufacturing", "Forest Products & Packaging"),
    ("Advanced Manufacturing", "Metals & Fabrication"),
    ("Healthcare", "Hospitals & Health Systems"),
    ("Healthcare", "Allied Health"),
    ("Healthcare", "Nursing"),
    ("Healthcare", "Long-Term & Senior Care"),
    ("Healthcare", "Behavioral Health"),
    ("Bio & Life Sciences", "Pharmaceutical Manufacturing"),
    ("Bio & Life Sciences", "Medical Devices"),
    ("Bio & Life Sciences", "Agricultural Biotechnology"),
    ("Bio & Life Sciences", "Animal Health"),
    ("Bio & Life Sciences", "Clinical Research & Labs"),
    ("Professional Services & HQ", "Corporate Headquarters"),
    ("Professional Services & HQ", "Finance & Insurance"),
    ("Professional Services & HQ", "Accounting & Legal"),
    ("Professional Services & HQ", "Engineering & Design"),
    ("Professional Services & HQ", "Logistics & Supply Chain Management"),
    ("Technology & IT", "Software Development"),
    ("Technology & IT", "Cybersecurity"),
    ("Technology & IT", "Data Centers"),
    ("Technology & IT", "Fintech & Payments"),
    ("Technology & IT", "IT Support & Networking"),
]

CREDENTIALS = [
    "Technical Certificate of Credit",
    "Diploma",
    "Associate",
    "Bachelor's",
    "Master's",
    "Apprenticeship",
    "Non-credit / Continuing Ed",
]

DELIVERY = ["In person", "Hybrid", "Online"]
YESNO = ["Yes", "No", "Unknown"]
PROG_STATUS = ["Example", "Draft", "Needs review", "Ready for import"]
CONFIDENCE = ["High", "Medium", "Low"]
SYSTEMS = ["TCSG", "USG", "Private", "Other"]

REGIONS = [
    "1 - Northwest Georgia", "2 - Georgia Mountains", "3 - Atlanta Regional",
    "4 - Three Rivers", "5 - Northeast Georgia", "6 - Middle Georgia",
    "7 - Central Savannah River", "8 - River Valley", "9 - Heart of Georgia Altamaha",
    "10 - Southwest Georgia", "11 - Southern Georgia", "12 - Coastal Georgia",
]

TCSG = [
    "Albany Technical College", "Athens Technical College", "Atlanta Technical College",
    "Augusta Technical College", "Central Georgia Technical College",
    "Chattahoochee Technical College", "Coastal Pines Technical College",
    "Columbus Technical College", "Georgia Northwestern Technical College",
    "Georgia Piedmont Technical College", "Gwinnett Technical College",
    "Lanier Technical College", "North Georgia Technical College",
    "Oconee Fall Line Technical College", "Ogeechee Technical College",
    "Savannah Technical College", "South Georgia Technical College",
    "Southeastern Technical College", "Southern Crescent Technical College",
    "Southern Regional Technical College", "West Georgia Technical College",
    "Wiregrass Georgia Technical College",
]

USG = [
    "Augusta University", "Georgia Institute of Technology", "Georgia State University",
    "University of Georgia", "Georgia Southern University", "Kennesaw State University",
    "University of West Georgia", "Valdosta State University", "Albany State University",
    "Clayton State University", "Columbus State University", "Fort Valley State University",
    "Georgia College & State University", "Georgia Southwestern State University",
    "Middle Georgia State University", "Savannah State University",
    "University of North Georgia", "Abraham Baldwin Agricultural College",
    "Atlanta Metropolitan State College", "College of Coastal Georgia",
    "Dalton State College", "East Georgia State College", "Georgia Gwinnett College",
    "Georgia Highlands College", "Gordon State College", "South Georgia State College",
]

COUNTIES = [
    "Appling", "Atkinson", "Bacon", "Baker", "Baldwin", "Banks", "Barrow", "Bartow",
    "Ben Hill", "Berrien", "Bibb", "Bleckley", "Brantley", "Brooks", "Bryan", "Bulloch",
    "Burke", "Butts", "Calhoun", "Camden", "Candler", "Carroll", "Catoosa", "Charlton",
    "Chatham", "Chattahoochee", "Chattooga", "Cherokee", "Clarke", "Clay", "Clayton",
    "Clinch", "Cobb", "Coffee", "Colquitt", "Columbia", "Cook", "Coweta", "Crawford",
    "Crisp", "Dade", "Dawson", "Decatur", "DeKalb", "Dodge", "Dooly", "Dougherty",
    "Douglas", "Early", "Echols", "Effingham", "Elbert", "Emanuel", "Evans", "Fannin",
    "Fayette", "Floyd", "Forsyth", "Franklin", "Fulton", "Gilmer", "Glascock", "Glynn",
    "Gordon", "Grady", "Greene", "Gwinnett", "Habersham", "Hall", "Hancock", "Haralson",
    "Harris", "Hart", "Heard", "Henry", "Houston", "Irwin", "Jackson", "Jasper",
    "Jeff Davis", "Jefferson", "Jenkins", "Johnson", "Jones", "Lamar", "Lanier",
    "Laurens", "Lee", "Liberty", "Lincoln", "Long", "Lowndes", "Lumpkin", "Macon",
    "Madison", "Marion", "McDuffie", "McIntosh", "Meriwether", "Miller", "Mitchell",
    "Monroe", "Montgomery", "Morgan", "Murray", "Muscogee", "Newton", "Oconee",
    "Oglethorpe", "Paulding", "Peach", "Pickens", "Pierce", "Pike", "Polk", "Pulaski",
    "Putnam", "Quitman", "Rabun", "Randolph", "Richmond", "Rockdale", "Schley",
    "Screven", "Seminole", "Spalding", "Stephens", "Stewart", "Sumter", "Talbot",
    "Taliaferro", "Tattnall", "Taylor", "Telfair", "Terrell", "Thomas", "Tift",
    "Toombs", "Towns", "Treutlen", "Troup", "Turner", "Twiggs", "Union", "Upson",
    "Walker", "Walton", "Ware", "Warren", "Washington", "Wayne", "Webster", "Wheeler",
    "White", "Whitfield", "Wilcox", "Wilkes", "Wilkinson", "Worth",
]
assert len(COUNTIES) == 159, f"expected 159 counties, got {len(COUNTIES)}"


def build_reference_sheet(wb):
    """Shared lookup sheet — the source for every dropdown."""
    ws = wb.create_sheet("Reference")
    ws.sheet_properties.tabColor = "8A939E"

    title_block(ws, "Reference lists", "Dropdown sources. Add rows at the bottom of a list to extend it; do not reorder or delete columns.", 8)

    headers = ["Industry", "Sub-sector", "Credential type", "Delivery mode",
               "Yes/No", "Status", "Confidence", "System", "Region", "Institution"]
    for i, h in enumerate(headers, start=1):
        ws.cell(row=4, column=i, value=h)
    style_header(ws, 4, len(headers))

    cols = {
        1: INDUSTRIES,
        2: [s for _, s in SUBSECTORS],
        3: CREDENTIALS,
        4: DELIVERY,
        5: YESNO,
        6: PROG_STATUS,
        7: CONFIDENCE,
        8: SYSTEMS,
        9: REGIONS,
        10: TCSG + USG,
    }
    for c, vals in cols.items():
        for r, v in enumerate(vals, start=5):
            cell = ws.cell(row=r, column=c, value=v)
            cell.font = Font(name=FONT, size=10)

    widths(ws, {"A": 26, "B": 32, "C": 28, "D": 14, "E": 11, "F": 17,
                "G": 12, "H": 11, "I": 26, "J": 38})
    ws.freeze_panes = "A5"

    # sub-sector -> industry map, for reference
    ws2 = wb.create_sheet("Sub-sector map")
    ws2.sheet_properties.tabColor = "8A939E"
    title_block(ws2, "Sub-sector map", "Which industry each sub-sector belongs to. Use this when filling the sub-sector columns.", 2)
    ws2.cell(row=4, column=1, value="Industry")
    ws2.cell(row=4, column=2, value="Sub-sector")
    style_header(ws2, 4, 2)
    for r, (ind, sub) in enumerate(SUBSECTORS, start=5):
        ws2.cell(row=r, column=1, value=ind).font = Font(name=FONT, size=10)
        ws2.cell(row=r, column=2, value=sub).font = Font(name=FONT, size=10)
    widths(ws2, {"A": 30, "B": 36})
    ws2.freeze_panes = "A5"
    return ws


def add_dv(ws, formula, cell_range, allow_blank=True):
    dv = DataValidation(type="list", formula1=formula, allow_blank=allow_blank, showDropDown=False)
    dv.error = "Pick a value from the list, or add it to the Reference sheet first."
    dv.errorTitle = "Not on the list"
    ws.add_data_validation(dv)
    dv.add(cell_range)


# =================================================================
# WORKBOOK 1 — PROGRAM CURATION
# =================================================================
def build_programs():
    wb = Workbook()
    ws = wb.active
    ws.title = "Instructions"
    ws.sheet_properties.tabColor = ACCENT

    lines = [
        ("Program Curation Template", "h1"),
        ("Statewide Pathway Explorer — technical college and university programs aligned to the five target industries", "sub"),
        ("", ""),
        ("What this is for", "h2"),
        ("One row per program. The goal is roughly 300-600 programs that genuinely serve the five target industries "
         "-- not the full 600+ TCSG catalog. Quality beats coverage.", "p"),
        ("", ""),
        ("Start here", "h2"),
        ("Do the four showcase counties first: Forsyth, Jackson, Houston, Ware. Curate every relevant program at "
         "Lanier Tech, Athens Tech, Central Georgia Tech, and Coastal Pines before going wider. Finishing four "
         "counties end-to-end will expose problems with this template while fixing them is still cheap.", "p"),
        ("", ""),
        ("The one column that matters most: CIP code", "h2"),
        ("CIP is the federal Classification of Instructional Programs code. It is what lets the site compute -- rather "
         "than guess -- which occupations a program leads to, and therefore which industries and which counties it "
         "serves. Every college publishes it in their catalog. A row without a CIP code cannot be aligned "
         "automatically and will need manual mapping later, so please do not skip it.", "p"),
        ("Format: six digits with a period, e.g. 48.0508. Keep it as text so leading zeros survive.", "p"),
        ("", ""),
        ("How to fill it in", "h2"),
        ("1. Work one institution at a time, straight from their online catalog. Do not work from memory.", "p"),
        ("2. Yellow rows are worked examples. Delete them before the final import.", "p"),
        ("3. Grey columns are calculated -- do not type in them.", "p"),
        ("4. Dropdown columns only accept values from the Reference tab. To add a new option, add it to Reference first.", "p"),
        ("5. Set Status to 'Ready for import' only when the QC column reads OK and you have checked the row.", "p"),
        ("6. Put anything uncertain in Notes rather than guessing. An empty cell is easier to fix than a wrong one.", "p"),
        ("", ""),
        ("Which programs to include", "h2"),
        ("Include a program if a graduate would plausibly be hired into one of the five industries in Georgia. "
         "Include general education or transfer degrees only when they are a named feeder into a target occupation. "
         "When genuinely unsure, include it and set Status to 'Needs review'.", "p"),
        ("", ""),
        ("Verification", "h2"),
        ("Fill Verified date and Verified by whenever you check a row against the live catalog. These become the "
         "'last verified' date shown publicly on the site, which is what makes colleges trust the listing.", "p"),
        ("", ""),
        ("Important note on the example rows", "h2"),
        ("The yellow example rows show the expected format. Their CIP codes and program details are illustrative and "
         "have NOT been verified against college catalogs -- verify anything you keep.", "p"),
        ("", ""),
        ("Tabs in this workbook", "h2"),
        ("Programs -- the data entry sheet.  Progress -- live counts, no editing.  Reference / Sub-sector map -- dropdown sources.", "p"),
    ]
    r = 1
    for text, kind in lines:
        c = ws.cell(row=r, column=1, value=text)
        if kind == "h1":
            c.font = Font(name=FONT, size=16, bold=True, color=INK)
            ws.row_dimensions[r].height = 24
        elif kind == "sub":
            c.font = Font(name=FONT, size=10.5, italic=True, color="5C6672")
        elif kind == "h2":
            c.font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
            ws.row_dimensions[r].height = 20
        else:
            c.font = Font(name=FONT, size=10.5, color=INK)
            c.alignment = Alignment(wrap_text=True, vertical="top")
            ws.row_dimensions[r].height = 15 * (1 + len(text) // 105)
        r += 1
    ws.column_dimensions["A"].width = 112
    ws.sheet_view.showGridLines = False

    # ---------------- Programs sheet
    ps = wb.create_sheet("Programs")
    ps.sheet_properties.tabColor = "1F3A5F"

    headers = [
        "Ref", "Institution", "System", "Campus", "Campus county", "Program name",
        "CIP code", "Credential type", "Length (months)", "Delivery mode",
        "Primary industry", "Sub-sector", "Secondary industry", "HOPE Career Grant",
        "Primary SOC", "Secondary SOC", "Catalog URL", "Short description",
        "Verified date", "Verified by", "Status", "QC check",
    ]
    for i, h in enumerate(headers, start=1):
        ps.cell(row=1, column=i, value=h)
    style_header(ps, 1, len(headers))

    examples = [
        ["EX-001", "Lanier Technical College", "TCSG", "Jackson Campus", "Jackson",
         "Industrial Systems Technology", "47.0303", "Associate", 21, "In person",
         "Advanced Manufacturing", "Industrial Machinery", "", "Yes",
         "49-9041", "49-9043", "https://www.laniertech.edu/", "Maintains and repairs automated production equipment.",
         "2026-08-12", "AG", "Example", None],
        ["EX-002", "Lanier Technical College", "TCSG", "Forsyth Campus", "Forsyth",
         "Computer Programming", "11.0201", "Associate", 18, "Hybrid",
         "Technology & IT", "Software Development", "", "Yes",
         "15-1251", "", "https://www.laniertech.edu/", "Application development in current languages and frameworks.",
         "2026-08-12", "AG", "Example", None],
        ["EX-003", "Central Georgia Technical College", "TCSG", "Warner Robins Campus", "Houston",
         "Aviation Maintenance Technology", "47.0607", "Diploma", 18, "In person",
         "Advanced Manufacturing", "Aerospace & Defense", "", "Yes",
         "49-3011", "", "https://www.centralgatech.edu/", "Airframe and powerplant maintenance; feeds the Robins AFB ecosystem.",
         "2026-08-12", "AG", "Example", None],
        ["EX-004", "Coastal Pines Technical College", "TCSG", "Waycross Campus", "Ware",
         "Welding and Joining Technology", "48.0508", "Diploma", 12, "In person",
         "Advanced Manufacturing", "Metals & Fabrication", "", "Yes",
         "51-4121", "", "https://coastalpines.edu/", "Structural and pipe welding for manufacturing and rail.",
         "2026-08-12", "AG", "Example", None],
        ["EX-005", "Coastal Pines Technical College", "TCSG", "Waycross Campus", "Ware",
         "Practical Nursing", "51.3901", "Diploma", 12, "In person",
         "Healthcare", "Nursing", "", "Yes",
         "29-2061", "", "https://coastalpines.edu/", "Prepares students for NCLEX-PN licensure.",
         "2026-08-12", "AG", "Example", None],
        ["EX-006", "Middle Georgia State University", "USG", "Warner Robins Campus", "Houston",
         "Information Technology", "11.0103", "Bachelor's", 48, "Hybrid",
         "Technology & IT", "Cybersecurity", "Professional Services & HQ", "No",
         "15-1212", "15-1244", "https://www.mga.edu/", "IT and cyber degree serving the Robins AFB workforce.",
         "2026-08-12", "AG", "Example", None],
        ["EX-007", "Athens Technical College", "TCSG", "Athens Campus", "Clarke",
         "Mechatronics", "15.0405", "Technical Certificate of Credit", 9, "In person",
         "Advanced Manufacturing", "Automotive & EV", "", "Yes",
         "17-3024", "", "https://www.athenstech.edu/", "Electromechanical systems; feeds EV battery manufacturing.",
         "2026-08-12", "AG", "Example", None],
    ]

    for ri, row in enumerate(examples, start=2):
        for ci, val in enumerate(row, start=1):
            cell = ps.cell(row=ri, column=ci, value=val)
            cell.font = Font(name=FONT, size=10)
            cell.fill = PatternFill("solid", fgColor=EX_FILL)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top", wrap_text=(ci in (6, 18)))
        ps.cell(row=ri, column=7).number_format = "@"

    LAST = 401
    for ri in range(2 + len(examples), LAST + 1):
        for ci in range(1, len(headers) + 1):
            cell = ps.cell(row=ri, column=ci)
            cell.font = Font(name=FONT, size=10)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top")
        ps.cell(row=ri, column=7).number_format = "@"

    # QC formula for every data row
    for ri in range(2, LAST + 1):
        f = (f'=IF(COUNTA(B{ri}:U{ri})=0,"",'
             f'IF(ISBLANK(F{ri}),"Missing program name",'
             f'IF(ISBLANK(G{ri}),"Missing CIP code",'
             f'IF(ISBLANK(B{ri}),"Missing institution",'
             f'IF(ISBLANK(E{ri}),"Missing campus county",'
             f'IF(ISBLANK(K{ri}),"Missing industry",'
             f'IF(ISBLANK(H{ri}),"Missing credential type","OK")))))))')
        cell = ps.cell(row=ri, column=22, value=f)
        cell.font = Font(name=FONT, size=10, bold=True)
        cell.fill = PatternFill("solid", fgColor=LOCK_FILL)
        cell.border = BORDER

    add_dv(ps, "=Reference!$J$5:$J$52", f"B2:B{LAST}")
    add_dv(ps, "=Reference!$H$5:$H$8", f"C2:C{LAST}")
    add_dv(ps, "=Reference!$C$5:$C$11", f"H2:H{LAST}")
    add_dv(ps, "=Reference!$D$5:$D$7", f"J2:J{LAST}")
    add_dv(ps, "=Reference!$A$5:$A$9", f"K2:K{LAST}")
    add_dv(ps, "=Reference!$B$5:$B$31", f"L2:L{LAST}")
    add_dv(ps, "=Reference!$A$5:$A$9", f"M2:M{LAST}")
    add_dv(ps, "=Reference!$E$5:$E$7", f"N2:N{LAST}")
    add_dv(ps, "=Reference!$F$5:$F$8", f"U2:U{LAST}")

    widths(ps, {"A": 9, "B": 30, "C": 9, "D": 20, "E": 15, "F": 34, "G": 11,
                "H": 24, "I": 14, "J": 13, "K": 24, "L": 25, "M": 22, "N": 16,
                "O": 12, "P": 12, "Q": 26, "R": 42, "S": 13, "T": 12, "U": 16, "V": 20})
    ps.freeze_panes = "F2"
    ps.auto_filter.ref = f"A1:V{LAST}"

    # ---------------- Progress sheet
    pg = wb.create_sheet("Progress")
    pg.sheet_properties.tabColor = "5C6672"
    title_block(pg, "Curation progress", "All figures calculate from the Programs tab. Nothing here needs editing.", 4)

    pg.cell(row=4, column=1, value="Overall")
    pg.cell(row=4, column=1).font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    rows = [
        ("Programs entered", f'=COUNTA(Programs!$F$2:$F${LAST})'),
        ("Rows passing QC", f'=COUNTIF(Programs!$V$2:$V${LAST},"OK")'),
        ("Rows with a problem", '=$B$5-$B$6'),
        ("Missing a CIP code", f'=COUNTIF(Programs!$V$2:$V${LAST},"Missing CIP code")'),
        ("Ready for import", f'=COUNTIF(Programs!$U$2:$U${LAST},"Ready for import")'),
        ("Target (low end of range)", 300),
    ]
    r = 5
    for label, val in rows:
        pg.cell(row=r, column=1, value=label).font = Font(name=FONT, size=10)
        c = pg.cell(row=r, column=2, value=val)
        c.font = Font(name=FONT, size=10, bold=True)
        c.alignment = Alignment(horizontal="right")
        c.number_format = "#,##0"
        r += 1
    pg.cell(row=r, column=1, value="Percent of target").font = Font(name=FONT, size=10)
    c = pg.cell(row=r, column=2, value="=IF($B$10=0,0,$B$5/$B$10)")
    c.font = Font(name=FONT, size=10, bold=True)
    c.number_format = "0.0%"
    c.alignment = Alignment(horizontal="right")

    r += 2
    pg.cell(row=r, column=1, value="By industry").font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    r += 1
    for ind in INDUSTRIES:
        pg.cell(row=r, column=1, value=ind).font = Font(name=FONT, size=10)
        c = pg.cell(row=r, column=2, value=f'=COUNTIF(Programs!$K$2:$K${LAST},$A{r})')
        c.font = Font(name=FONT, size=10)
        c.alignment = Alignment(horizontal="right")
        r += 1

    r += 1
    pg.cell(row=r, column=1, value="By showcase county").font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    r += 1
    for county in ["Forsyth", "Jackson", "Houston", "Ware"]:
        pg.cell(row=r, column=1, value=county).font = Font(name=FONT, size=10)
        c = pg.cell(row=r, column=2, value=f'=COUNTIF(Programs!$E$2:$E${LAST},$A{r})')
        c.font = Font(name=FONT, size=10)
        c.alignment = Alignment(horizontal="right")
        r += 1

    widths(pg, {"A": 34, "B": 14})
    pg.sheet_view.showGridLines = False

    build_reference_sheet(wb)
    wb.save(f"{OUT}/program-curation-template.xlsx")
    print("wrote program-curation-template.xlsx")


# =================================================================
# WORKBOOK 2 — COUNTY TARGET INDUSTRIES
# =================================================================
def build_counties():
    wb = Workbook()
    ws = wb.active
    ws.title = "Instructions"
    ws.sheet_properties.tabColor = ACCENT

    lines = [
        ("County Target Industry Template", "h1"),
        ("Statewide Pathway Explorer — target industries for all 159 Georgia counties", "sub"),
        ("", ""),
        ("What this is for", "h2"),
        ("One row per county, all 159 pre-loaded. For each county, record up to three target industries in priority "
         "order, plus where that information came from. This drives which programs appear on each county page, so "
         "the source column matters as much as the answer.", "p"),
        ("", ""),
        ("Start here", "h2"),
        ("Fill the four showcase counties first -- Forsyth, Jackson, Houston, Ware -- then work outward by region. "
         "Those four already have draft values you should verify with the EDA directly.", "p"),
        ("", ""),
        ("Where to look, in order of preference", "h2"),
        ("1. The county or regional target industry study (most authoritative -- ask the EDA for the PDF).", "p"),
        ("2. The EDA's own website, usually an 'Industries' or 'Target Sectors' page.", "p"),
        ("3. The Regional Commission's comprehensive economic development strategy (CEDS).", "p"),
        ("4. Georgia Department of Economic Development regional materials.", "p"),
        ("5. Existing major employers, as a last resort -- mark Confidence as Low if this is all you have.", "p"),
        ("", ""),
        ("Rules", "h2"),
        ("Only use the five industries in the dropdown. If a county's stated target is something else entirely "
         "(agriculture, tourism, film, logistics as its own sector), record it in Notes rather than forcing it into "
         "one of the five. A pattern of counties that do not fit is itself a finding worth knowing about.", "p"),
        ("Every filled row needs a source. A target industry with no source cannot be published, because the site "
         "shows provenance publicly.", "p"),
        ("Set Confidence honestly. Low confidence is useful -- it tells us which counties to ask about first.", "p"),
        ("", ""),
        ("Do not edit", "h2"),
        ("County name, Slug, and QC check are calculated or fixed. Everything else is yours to fill.", "p"),
        ("", ""),
        ("Note on the pre-filled showcase counties", "h2"),
        ("The four showcase rows are marked DRAFT and are starting points for your EDA conversations, not verified "
         "facts. Replace the source with the real document once you have it, then change Confidence to High.", "p"),
    ]
    r = 1
    for text, kind in lines:
        c = ws.cell(row=r, column=1, value=text)
        if kind == "h1":
            c.font = Font(name=FONT, size=16, bold=True, color=INK)
            ws.row_dimensions[r].height = 24
        elif kind == "sub":
            c.font = Font(name=FONT, size=10.5, italic=True, color="5C6672")
        elif kind == "h2":
            c.font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
            ws.row_dimensions[r].height = 20
        else:
            c.font = Font(name=FONT, size=10.5, color=INK)
            c.alignment = Alignment(wrap_text=True, vertical="top")
            ws.row_dimensions[r].height = 15 * (1 + len(text) // 105)
        r += 1
    ws.column_dimensions["A"].width = 112
    ws.sheet_view.showGridLines = False

    # ---------------- Counties sheet
    cs = wb.create_sheet("Counties")
    cs.sheet_properties.tabColor = "1F3A5F"

    headers = [
        "County", "Slug", "FIPS", "County seat", "Region", "EDA / organization",
        "Target industry 1", "Sub-sector 1", "Target industry 2", "Sub-sector 2",
        "Target industry 3", "Sub-sector 3", "Source document", "Source URL",
        "Source year", "Confidence", "EDA contact name", "EDA contact email",
        "Researched by", "Researched date", "Notes", "QC check",
    ]
    for i, h in enumerate(headers, start=1):
        cs.cell(row=1, column=i, value=h)
    style_header(cs, 1, len(headers))

    seeded = {
        "Forsyth": dict(seat="Cumming", region="3 - Atlanta Regional",
                        eda="Cumming-Forsyth County Chamber of Commerce",
                        t1="Technology & IT", s1="Software Development",
                        t2="Professional Services & HQ", s2="Corporate Headquarters",
                        t3="Healthcare", s3="Hospitals & Health Systems",
                        note="DRAFT - verify with EDA. Lanier Tech Forsyth Campus in Cumming."),
        "Jackson": dict(seat="Jefferson", region="2 - Georgia Mountains",
                        eda="Jackson County Area Chamber of Commerce",
                        t1="Advanced Manufacturing", s1="Automotive & EV",
                        t2="Professional Services & HQ", s2="Logistics & Supply Chain Management",
                        t3="Healthcare", s3="Hospitals & Health Systems",
                        note="DRAFT - verify with EDA. SK Battery America in Commerce; Quick Start + Lanier Tech trained ~2,600."),
        "Houston": dict(seat="Perry", region="6 - Middle Georgia",
                        eda="Development Authority of Houston County",
                        t1="Advanced Manufacturing", s1="Aerospace & Defense",
                        t2="Technology & IT", s2="Cybersecurity",
                        t3="Healthcare", s3="Hospitals & Health Systems",
                        note="DRAFT - verify with EDA. Robins AFB anchors the economy; CGTC and MGSU both in Warner Robins."),
        "Ware": dict(seat="Waycross", region="9 - Heart of Georgia Altamaha",
                     eda="Waycross-Ware County Development Authority",
                     t1="Advanced Manufacturing", s1="Forest Products & Packaging",
                     t2="Healthcare", s2="Hospitals & Health Systems",
                     t3="Professional Services & HQ", s3="Logistics & Supply Chain Management",
                     note="DRAFT - verify with EDA. Coastal Pines main campus in Waycross; CSX rail operations."),
    }

    for ri, county in enumerate(COUNTIES, start=2):
        cell = cs.cell(row=ri, column=1, value=county)
        cell.font = Font(name=FONT, size=10, bold=True)
        cell.fill = PatternFill("solid", fgColor=LOCK_FILL)

        slug = cs.cell(row=ri, column=2, value=f'=LOWER(SUBSTITUTE(A{ri}," ","-"))')
        slug.font = Font(name=FONT, size=10, color="5C6672")
        slug.fill = PatternFill("solid", fgColor=LOCK_FILL)

        s = seeded.get(county)
        for ci in range(3, len(headers)):
            c = cs.cell(row=ri, column=ci)
            c.font = Font(name=FONT, size=10)
            c.border = BORDER
            c.alignment = Alignment(vertical="top")
            if s:
                c.fill = PatternFill("solid", fgColor=EX_FILL)
        cs.cell(row=ri, column=1).border = BORDER
        cs.cell(row=ri, column=2).border = BORDER

        if s:
            vals = {4: s["seat"], 5: s["region"], 6: s["eda"], 7: s["t1"], 8: s["s1"],
                    9: s["t2"], 10: s["s2"], 11: s["t3"], 12: s["s3"],
                    13: "DRAFT - to be confirmed with EDA", 16: "Low", 21: s["note"]}
            for ci, v in vals.items():
                cs.cell(row=ri, column=ci, value=v)

        f = (f'=IF(ISBLANK(G{ri}),"Not started",'
             f'IF(ISBLANK(M{ri}),"Missing source",'
             f'IF(LEFT(M{ri},5)="DRAFT","Draft - verify with EDA",'
             f'IF(ISBLANK(P{ri}),"Missing confidence",'
             f'IF(ISBLANK(H{ri}),"Missing sub-sector","OK")))))')
        qc = cs.cell(row=ri, column=22, value=f)
        qc.font = Font(name=FONT, size=10, bold=True)
        qc.fill = PatternFill("solid", fgColor=LOCK_FILL)
        qc.border = BORDER

    LASTC = len(COUNTIES) + 1
    add_dv(cs, "=Reference!$I$5:$I$16", f"E2:E{LASTC}")
    for col in ("G", "I", "K"):
        add_dv(cs, "=Reference!$A$5:$A$9", f"{col}2:{col}{LASTC}")
    for col in ("H", "J", "L"):
        add_dv(cs, "=Reference!$B$5:$B$31", f"{col}2:{col}{LASTC}")
    add_dv(cs, "=Reference!$G$5:$G$7", f"P2:P{LASTC}")

    widths(cs, {"A": 16, "B": 16, "C": 9, "D": 16, "E": 26, "F": 34,
                "G": 24, "H": 25, "I": 24, "J": 25, "K": 24, "L": 25,
                "M": 32, "N": 26, "O": 12, "P": 12, "Q": 20, "R": 24,
                "S": 14, "T": 15, "U": 46, "V": 18})
    cs.freeze_panes = "C2"
    cs.auto_filter.ref = f"A1:V{LASTC}"

    # ---------------- Progress
    pg = wb.create_sheet("Progress")
    pg.sheet_properties.tabColor = "5C6672"
    title_block(pg, "Research progress", "All figures calculate from the Counties tab. Nothing here needs editing.", 4)

    pg.cell(row=4, column=1, value="Coverage").font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    rows = [
        ("Counties in Georgia", 159),
        ("Counties with a target set", f'=$B$5-COUNTIF(Counties!$V$2:$V${LASTC},"Not started")'),
        ("Counties fully complete", f'=COUNTIF(Counties!$V$2:$V${LASTC},"OK")'),
        ("Draft - needs EDA verification", f'=COUNTIF(Counties!$V$2:$V${LASTC},"Draft - verify with EDA")'),
        ("Not started", f'=COUNTIF(Counties!$V$2:$V${LASTC},"Not started")'),
        ("Missing a source", f'=COUNTIF(Counties!$V$2:$V${LASTC},"Missing source")'),
        ("High confidence", f'=COUNTIF(Counties!$P$2:$P${LASTC},"High")'),
        ("Low confidence - ask the EDA", f'=COUNTIF(Counties!$P$2:$P${LASTC},"Low")'),
    ]
    r = 5
    for label, val in rows:
        pg.cell(row=r, column=1, value=label).font = Font(name=FONT, size=10)
        c = pg.cell(row=r, column=2, value=val)
        c.font = Font(name=FONT, size=10, bold=True)
        c.alignment = Alignment(horizontal="right")
        c.number_format = "#,##0"
        r += 1
    pg.cell(row=r, column=1, value="Percent complete").font = Font(name=FONT, size=10)
    c = pg.cell(row=r, column=2, value="=$B$7/$B$5")
    c.font = Font(name=FONT, size=10, bold=True)
    c.number_format = "0.0%"
    c.alignment = Alignment(horizontal="right")

    r += 2
    pg.cell(row=r, column=1, value="Counties naming each industry as a target").font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    r += 1
    pg.cell(row=r, column=1, value="Industry").font = Font(name=FONT, size=10, bold=True)
    pg.cell(row=r, column=2, value="As #1").font = Font(name=FONT, size=10, bold=True)
    pg.cell(row=r, column=3, value="Any rank").font = Font(name=FONT, size=10, bold=True)
    r += 1
    for ind in INDUSTRIES:
        pg.cell(row=r, column=1, value=ind).font = Font(name=FONT, size=10)
        c1 = pg.cell(row=r, column=2, value=f'=COUNTIF(Counties!$G$2:$G${LASTC},$A{r})')
        c2 = pg.cell(row=r, column=3, value=(
            f'=COUNTIF(Counties!$G$2:$G${LASTC},$A{r})'
            f'+COUNTIF(Counties!$I$2:$I${LASTC},$A{r})'
            f'+COUNTIF(Counties!$K$2:$K${LASTC},$A{r})'))
        for c in (c1, c2):
            c.font = Font(name=FONT, size=10)
            c.alignment = Alignment(horizontal="right")
        r += 1

    r += 1
    pg.cell(row=r, column=1, value="By region").font = Font(name=FONT, size=11.5, bold=True, color=ACCENT)
    r += 1
    for reg in REGIONS:
        pg.cell(row=r, column=1, value=reg).font = Font(name=FONT, size=10)
        c = pg.cell(row=r, column=2, value=f'=COUNTIF(Counties!$E$2:$E${LASTC},$A{r})')
        c.font = Font(name=FONT, size=10)
        c.alignment = Alignment(horizontal="right")
        r += 1

    widths(pg, {"A": 44, "B": 12, "C": 12})
    pg.sheet_view.showGridLines = False

    build_reference_sheet(wb)
    wb.save(f"{OUT}/county-target-industry-template.xlsx")
    print("wrote county-target-industry-template.xlsx")


if __name__ == "__main__":
    import os
    os.makedirs(OUT, exist_ok=True)
    build_programs()
    build_counties()
