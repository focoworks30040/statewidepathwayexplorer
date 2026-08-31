/* Glynn County — target industries and aligned education programs.
 *
 * This is the only file you edit to change what the Glynn County page shows.
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
  "slug": "glynn",
  "county": "Glynn",
  "sample": true,
  "industries": [
    {
      "id": "logistics-port",
      "name": "Logistics and Port Operations",
      "companies": 157,
      "blurb": "The Port of Brunswick is one of the busiest vehicle-handling ports in the country, with freight and warehousing work around it.",
      "ctae": [
        {
          "name": "Distribution and Logistics",
          "org": "Brunswick High School"
        },
        {
          "name": "Supply Chain Management",
          "org": "Golden Isles College and Career Academy"
        }
      ],
      "technical": [
        {
          "name": "Commercial Truck Driving",
          "org": "Coastal Pines Technical College",
          "award": "Certificate"
        },
        {
          "name": "Logistics and Supply Chain",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        },
        {
          "name": "Industrial Systems Technology",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Business Administration — Logistics",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "hospitality-tourism",
      "name": "Hospitality and Tourism",
      "companies": 381,
      "blurb": "The Golden Isles resorts, restaurants and visitor economy employ more people here than any other sector.",
      "ctae": [
        {
          "name": "Culinary Arts",
          "org": "Glynn Academy"
        },
        {
          "name": "Hospitality and Tourism",
          "org": "Brunswick High School"
        }
      ],
      "technical": [
        {
          "name": "Culinary Arts",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        },
        {
          "name": "Hotel and Restaurant Management",
          "org": "Coastal Pines Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Hospitality and Tourism Management",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "health-care",
      "name": "Health Care",
      "companies": 246,
      "blurb": "Southeast Georgia Health System anchors clinical work for the county and the surrounding coastal region.",
      "ctae": [
        {
          "name": "Therapeutic Services — Patient Care",
          "org": "Glynn Academy"
        },
        {
          "name": "Health Science",
          "org": "Brunswick High School"
        }
      ],
      "technical": [
        {
          "name": "Practical Nursing",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        },
        {
          "name": "Radiologic Technology",
          "org": "Coastal Pines Technical College",
          "award": "Associate"
        },
        {
          "name": "Medical Assisting",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Nursing, BSN",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        },
        {
          "name": "Health Informatics",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "marine-trades",
      "name": "Marine Trades and Manufacturing",
      "companies": 93,
      "blurb": "Boatyards, marine repair and coastal manufacturing that depend on skilled hands and marine-specific training.",
      "ctae": [
        {
          "name": "Manufacturing — Mechatronics",
          "org": "Golden Isles College and Career Academy"
        },
        {
          "name": "Welding",
          "org": "Brunswick High School"
        }
      ],
      "technical": [
        {
          "name": "Marine Engine Technology",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        },
        {
          "name": "Welding and Joining Technology",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        },
        {
          "name": "Industrial Mechanics",
          "org": "Coastal Pines Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Coastal Ecology",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "public-safety",
      "name": "Public Safety",
      "companies": 41,
      "blurb": "Law enforcement, fire service and emergency medical work across the county and the barrier islands.",
      "ctae": [
        {
          "name": "Law Enforcement Services",
          "org": "Glynn Academy"
        },
        {
          "name": "Firefighting",
          "org": "Golden Isles College and Career Academy"
        }
      ],
      "technical": [
        {
          "name": "Emergency Medical Technician",
          "org": "Coastal Pines Technical College",
          "award": "Certificate"
        },
        {
          "name": "Paramedicine",
          "org": "Coastal Pines Technical College",
          "award": "Associate"
        },
        {
          "name": "Criminal Justice Technology",
          "org": "Coastal Pines Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Criminal Justice",
          "org": "College of Coastal Georgia",
          "award": "Bachelor's"
        }
      ],
      "image": null
    }
  ]
};
