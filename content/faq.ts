export type FaqItem = { q: string; a: string };

export const homeFaqs: FaqItem[] = [
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required — you can book directly with us. If you have one from a doctor or the hospital, feel free to bring it along.",
  },
  {
    q: "What should I bring to my first session?",
    a: "Comfortable clothing you can move in, any relevant scan or medical reports, and a list of current medications if applicable.",
  },
  {
    q: "Do you accept insurance?",
    a: "We provide detailed invoices you can submit to most insurers for reimbursement. We do not bill insurers directly at this time.",
  },
];

export const fullFaqs: FaqItem[] = [
  ...homeFaqs,
  {
    q: "Do you treat children and older adults?",
    a: "Yes, we offer dedicated pediatric and geriatric physiotherapy programs tailored to each age group.",
  },
  {
    q: "How do I book an appointment?",
    a: "Fill out the booking form on this site, or contact us directly by phone or WhatsApp. We'll call or message you to confirm your appointment time.",
  },
];