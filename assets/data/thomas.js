/* Thomas County — target industries and aligned education programs.
 *
 * This is the only file you edit to change what the Thomas County page shows.
 * It is plain JavaScript, so it works when the page is opened straight from
 * the file system — no server, no build step.
 *
 * Each industry takes:
 *   id         short slug, used in the page address (#industry-health-care)
 *   name       what the card and the detail view are titled
 *   blurb      one sentence on why this industry matters here
 *   companies  number of local employers in this industry, or null for "—"
 *   programs   optional. Leave it out and the card counts the three program
 *              lists below for you, which is usually what you want.
 *   image      path to a photo for the detail view, e.g.
 *              "../assets/img/industries/forsyth-health-care.jpg"
 *              Leave it null and a labelled empty frame shows instead.
 *   imageCaption  optional line printed under the image
 *   ctae       high school CTAE pathways
 *   technical  technical college programs
 *   university university programs offered in this county
 *
 * Every program takes: name, org, and optionally award and url.
 *
 * SAMPLE DATA: the counts and program lists below are placeholders so the
 * page has something to show. Replace them with your figures, then set
 * sample to false to remove the notice at the top of the section.
 */
window.PATHWAY_DATA = {
  "slug": "thomas",
  "county": "Thomas",
  "sample": true,
  "industries": [
    {
      "id": "health-care",
      "name": "Health Care",
      "companies": 214,
      "blurb": "Archbold Medical Center makes Thomasville a regional health care hub drawing patients and staff from across southwest Georgia.",
      "ctae": [
        {
          "name": "Therapeutic Services — Patient Care",
          "org": "Thomas County Central High School"
        },
        {
          "name": "Health Science",
          "org": "Thomasville High School"
        }
      ],
      "technical": [
        {
          "name": "Practical Nursing",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Radiologic Technology",
          "org": "Southern Regional Technical College",
          "award": "Associate"
        },
        {
          "name": "Certified Nurse Assistant",
          "org": "Southern Regional Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Nursing, BSN",
          "org": "Thomas University",
          "award": "Bachelor's"
        },
        {
          "name": "Psychology",
          "org": "Thomas University",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "agriculture",
      "name": "Agriculture and Agribusiness",
      "companies": 286,
      "blurb": "Row crops, timber, plantations and the equipment and processing businesses that serve them.",
      "ctae": [
        {
          "name": "Agriculture Mechanics",
          "org": "Thomas County Central High School"
        },
        {
          "name": "Plant and Animal Science",
          "org": "Thomas County Middle and High"
        },
        {
          "name": "Agribusiness",
          "org": "Thomasville High School"
        }
      ],
      "technical": [
        {
          "name": "Agriculture Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Diesel Equipment Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        }
      ],
      "university": [],
      "image": null
    },
    {
      "id": "advanced-manufacturing",
      "name": "Advanced Manufacturing",
      "companies": 74,
      "blurb": "Food processing and industrial production plants that anchor steady wage work outside the city center.",
      "ctae": [
        {
          "name": "Manufacturing — Mechatronics",
          "org": "Thomas County Central High School"
        },
        {
          "name": "Welding",
          "org": "Bishop Hall Charter School"
        }
      ],
      "technical": [
        {
          "name": "Industrial Systems Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Welding and Joining Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Electrical Systems Technology",
          "org": "Southern Regional Technical College",
          "award": "Certificate"
        }
      ],
      "university": [],
      "image": null
    },
    {
      "id": "construction-trades",
      "name": "Construction and Skilled Trades",
      "companies": 168,
      "blurb": "Building, electrical and HVAC work across a wide rural service area with few competing employers.",
      "ctae": [
        {
          "name": "Construction",
          "org": "Thomas County Central High School"
        },
        {
          "name": "Electrical Systems",
          "org": "Thomasville High School"
        }
      ],
      "technical": [
        {
          "name": "Air Conditioning Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Electrical Systems Technology",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        }
      ],
      "university": [],
      "image": null
    },
    {
      "id": "hospitality-tourism",
      "name": "Hospitality and Tourism",
      "companies": 142,
      "blurb": "Downtown Thomasville, the plantation economy and regional events sustain year-round hospitality work.",
      "ctae": [
        {
          "name": "Culinary Arts",
          "org": "Thomasville High School"
        },
        {
          "name": "Hospitality and Tourism",
          "org": "Thomas County Central High School"
        }
      ],
      "technical": [
        {
          "name": "Culinary Arts",
          "org": "Southern Regional Technical College",
          "award": "Diploma"
        },
        {
          "name": "Hotel and Restaurant Management",
          "org": "Southern Regional Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Business Administration",
          "org": "Thomas University",
          "award": "Bachelor's"
        }
      ],
      "image": null
    }
  ]
};
