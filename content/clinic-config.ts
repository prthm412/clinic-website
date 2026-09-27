export const clinicConfig = {
  name: "The2Physios",
  tagline: "Two physios, one clear plan for your recovery.",
  trademarkNumber: 7917813, // Trademark registration number

  contact: {
    address:
      "Promhex Multispeciality Hospital, Block A, Ansal Golf Links 1, Greater Noida, Uttar Pradesh 201308",
    phone: "9716947809", // display format, e.g. "+91 98765 43210"
    whatsappNumber: "9716947809", // same number, international format digits only, no + or spaces — e.g. "919876543210" — for wa.me links
    email: "ashish.shrivastava24@gmail.com",
  },

  hours: {
    display: "9:00 AM – 8:00 PM",
    note: "Closed Sundays"
  },

  hospital: {
    name: "Promhex Multispeciality Hospital",
    department: "The Physiotherapy Department",
  },

  team: {
    physio1: {
      slug: "ashish-shrivastava",
      image: "/images/team/physio1.jpeg",
      name: "Dr. Ashish Shrivastava",
      university: "BPT (IPH), University of Delhi",
      qualifications: "MPT (Orthopaedics)",
      specialization: "Fellowship in Orthopaedics Rehabilitation",
      certifications: "MDCPT, CMT",
      yearsExperience: "10+",
    },
    physio2: {
      slug: "rohit-dhyani",
      image: "/images/team/physio2.jpeg",
      name: "Dr. Rohit Dhyani",
      university: "BPT (IPH), University of Delhi",
      qualifications: "MPT (Orthopaedics)",
      specialization: "Fellowship in Orthopaedics Manual Therapy",
      certifications: "MDCPT, CMT",
      yearsExperience: "10+",
    },
  },

  social: {
    instagram: "https://instagram.com/the2physio",
    facebook: null as string | null,
  },

  domain: "the2physios.in",
} as const;

export const currentYear = new Date().getFullYear();