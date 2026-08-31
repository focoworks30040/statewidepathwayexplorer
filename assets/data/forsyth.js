/* Forsyth County — target industries and aligned education programs.
 *
 * This is the only file you edit to change what the Forsyth County page shows.
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
  "slug": "forsyth",
  "county": "Forsyth",
  "sample": true,
  "industries": [
    {
      "id": "health-care",
      "name": "Health Care",
      "companies": 486,
      "blurb": "The county's largest employer base, anchored by Northside Hospital Forsyth and a dense network of clinics and practices.",
      "ctae": [
        {
          "name": "Therapeutic Services — Patient Care",
          "org": "West Forsyth High School"
        },
        {
          "name": "Therapeutic Services — Sports Medicine",
          "org": "South Forsyth High School"
        },
        {
          "name": "Emergency Medical Responder",
          "org": "Forsyth Central High School"
        }
      ],
      "technical": [
        {
          "name": "Practical Nursing",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Radiologic Technology",
          "org": "Lanier Technical College",
          "award": "Associate"
        },
        {
          "name": "Certified Nurse Assistant",
          "org": "Lanier Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Nursing, BSN",
          "org": "University of North Georgia — Cumming",
          "award": "Bachelor's"
        },
        {
          "name": "Kinesiology",
          "org": "University of North Georgia — Cumming",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "information-technology",
      "name": "Information Technology",
      "companies": 241,
      "blurb": "Software, data and IT support roles, most of them tied to employers across the north metro corridor.",
      "ctae": [
        {
          "name": "Computer Science",
          "org": "Lambert High School"
        },
        {
          "name": "Cybersecurity",
          "org": "Denmark High School"
        },
        {
          "name": "Web and Digital Design",
          "org": "North Forsyth High School"
        }
      ],
      "technical": [
        {
          "name": "Computer Programming",
          "org": "Lanier Technical College",
          "award": "Associate"
        },
        {
          "name": "Networking Specialist",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Cybersecurity",
          "org": "Lanier Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Computer Science",
          "org": "University of North Georgia — Cumming",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "advanced-manufacturing",
      "name": "Advanced Manufacturing",
      "companies": 132,
      "blurb": "Precision production and industrial maintenance work, including a growing cluster of suppliers along GA-400.",
      "ctae": [
        {
          "name": "Engineering and Technology",
          "org": "Forsyth Central High School"
        },
        {
          "name": "Manufacturing — Mechatronics",
          "org": "East Forsyth High School"
        }
      ],
      "technical": [
        {
          "name": "Industrial Systems Technology",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Precision Machining",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Welding and Joining Technology",
          "org": "Lanier Technical College",
          "award": "Certificate"
        }
      ],
      "university": [],
      "image": null
    },
    {
      "id": "construction-trades",
      "name": "Construction and Skilled Trades",
      "companies": 612,
      "blurb": "One of the fastest-growing counties in Georgia keeps residential and commercial builders, electricians and HVAC crews in constant demand.",
      "ctae": [
        {
          "name": "Construction",
          "org": "North Forsyth High School"
        },
        {
          "name": "Electrical Systems",
          "org": "Forsyth Central High School"
        }
      ],
      "technical": [
        {
          "name": "Air Conditioning Technology",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Electrical Systems Technology",
          "org": "Lanier Technical College",
          "award": "Diploma"
        },
        {
          "name": "Construction Management",
          "org": "Lanier Technical College",
          "award": "Certificate"
        }
      ],
      "university": [],
      "image": null
    },
    {
      "id": "business-finance",
      "name": "Business and Finance",
      "companies": 398,
      "blurb": "Accounting, insurance, logistics management and professional services firms serving the north metro market.",
      "ctae": [
        {
          "name": "Business and Technology",
          "org": "South Forsyth High School"
        },
        {
          "name": "Marketing and Management",
          "org": "Lambert High School"
        },
        {
          "name": "Financial Services",
          "org": "West Forsyth High School"
        }
      ],
      "technical": [
        {
          "name": "Business Management",
          "org": "Lanier Technical College",
          "award": "Associate"
        },
        {
          "name": "Accounting",
          "org": "Lanier Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Business Administration",
          "org": "University of North Georgia — Cumming",
          "award": "Bachelor's"
        }
      ],
      "image": null
    }
  ]
};
