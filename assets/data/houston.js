/* Houston County — target industries and aligned education programs.
 *
 * This is the only file you edit to change what the Houston County page shows.
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
  "slug": "houston",
  "county": "Houston",
  "sample": true,
  "industries": [
    {
      "id": "aerospace-aviation",
      "name": "Aerospace and Aviation",
      "companies": 174,
      "blurb": "Aircraft maintenance, avionics and engineering work built around Robins Air Force Base and its contractor base.",
      "ctae": [
        {
          "name": "Aircraft Maintenance",
          "org": "Houston County Career Academy"
        },
        {
          "name": "Engineering and Technology",
          "org": "Veterans High School"
        },
        {
          "name": "Aviation Ground Operations",
          "org": "Warner Robins High School"
        }
      ],
      "technical": [
        {
          "name": "Aviation Maintenance Technology",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Avionics Technology",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Aircraft Structural Technology",
          "org": "Central Georgia Technical College",
          "award": "Certificate"
        }
      ],
      "university": [
        {
          "name": "Aviation Science and Management",
          "org": "Middle Georgia State University — Warner Robins",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "defense-cyber",
      "name": "Defense and Cybersecurity",
      "companies": 96,
      "blurb": "Information security and systems work supporting the base's mission and the contractors around it.",
      "ctae": [
        {
          "name": "Cybersecurity",
          "org": "Houston County High School"
        },
        {
          "name": "Computer Science",
          "org": "Northside High School"
        }
      ],
      "technical": [
        {
          "name": "Cybersecurity",
          "org": "Central Georgia Technical College",
          "award": "Associate"
        },
        {
          "name": "Networking Specialist",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Information Technology",
          "org": "Middle Georgia State University — Warner Robins",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "logistics",
      "name": "Logistics and Distribution",
      "companies": 203,
      "blurb": "Warehousing, freight and supply chain operations along the I-75 corridor through middle Georgia.",
      "ctae": [
        {
          "name": "Distribution and Logistics",
          "org": "Perry High School"
        },
        {
          "name": "Supply Chain Management",
          "org": "Houston County Career Academy"
        }
      ],
      "technical": [
        {
          "name": "Commercial Truck Driving",
          "org": "Central Georgia Technical College",
          "award": "Certificate"
        },
        {
          "name": "Logistics and Supply Chain",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Industrial Systems Technology",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Logistics and Supply Chain Management",
          "org": "Middle Georgia State University — Warner Robins",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "health-care",
      "name": "Health Care",
      "companies": 312,
      "blurb": "Houston Healthcare and the practices around it make health care the county's largest civilian employer.",
      "ctae": [
        {
          "name": "Therapeutic Services — Patient Care",
          "org": "Warner Robins High School"
        },
        {
          "name": "Health Science",
          "org": "Perry High School"
        }
      ],
      "technical": [
        {
          "name": "Practical Nursing",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Surgical Technology",
          "org": "Central Georgia Technical College",
          "award": "Associate"
        },
        {
          "name": "Medical Assisting",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        }
      ],
      "university": [
        {
          "name": "Nursing, BSN",
          "org": "Middle Georgia State University — Warner Robins",
          "award": "Bachelor's"
        },
        {
          "name": "Respiratory Therapy",
          "org": "Middle Georgia State University — Warner Robins",
          "award": "Bachelor's"
        }
      ],
      "image": null
    },
    {
      "id": "advanced-manufacturing",
      "name": "Advanced Manufacturing",
      "companies": 88,
      "blurb": "Fabrication, machining and industrial maintenance roles supplying both defense and commercial customers.",
      "ctae": [
        {
          "name": "Manufacturing — Mechatronics",
          "org": "Houston County Career Academy"
        },
        {
          "name": "Welding",
          "org": "Northside High School"
        }
      ],
      "technical": [
        {
          "name": "Precision Machining",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Welding and Joining Technology",
          "org": "Central Georgia Technical College",
          "award": "Diploma"
        },
        {
          "name": "Industrial Mechanics",
          "org": "Central Georgia Technical College",
          "award": "Certificate"
        }
      ],
      "university": [],
      "image": null
    }
  ]
};
