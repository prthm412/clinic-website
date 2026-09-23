export type Service = {
  slug: string;
  name: string;
  category: string;
  homeDesc: string; // short, for the home page grid
  desc: string; // longer, for the services page
  who: string;
};

export const services: Service[] = [
  {
    slug: "sports-injury-rehab",
    name: "Sports Injury Rehab",
    category: "Sports",
    homeDesc:
      "Get back to your sport safely, with a plan built around your training goals.",
    desc: "Rehabilitation programs built around your sport, from acute injury through to full return-to-play.",
    who: "Athletes and active individuals recovering from strains, sprains, or overuse injuries.",
  },
  {
    slug: "post-surgery-recovery",
    name: "Post-Surgery Recovery",
    category: "Post-Surgical",
    homeDesc:
      "Structured rehabilitation to rebuild strength and range of motion after surgery.",
    desc: "Structured, staged rehabilitation to safely rebuild strength, mobility, and confidence after surgery.",
    who: "Anyone recovering from orthopedic, ligament, or joint replacement surgery.",
  },
  {
    slug: "back-neck-pain",
    name: "Back & Neck Pain",
    category: "Orthopedic",
    homeDesc: "Targeted, hands-on treatment for acute and chronic spinal pain.",
    desc: "Hands-on treatment and targeted exercise for acute and chronic spinal pain, posture issues, and joint stiffness.",
    who: "Anyone with ongoing back, neck, or joint pain affecting daily life.",
  },
  {
    slug: "neuro-rehab",
    name: "Neuro Rehab",
    category: "Neurological",
    homeDesc: "Movement-focused therapy for neurological conditions and recovery.",
    desc: "Movement-focused therapy to rebuild function after stroke, nerve injury, or neurological conditions.",
    who: "Patients recovering from stroke, nerve damage, or living with a neurological condition.",
  },
  {
    slug: "geriatric-care",
    name: "Geriatric Care",
    category: "Geriatric",
    homeDesc: "Gentle, effective care focused on mobility, balance, and independence.",
    desc: "Gentle, effective therapy focused on mobility, balance, fall prevention, and independence.",
    who: "Older adults managing arthritis, balance concerns, or general mobility decline.",
  },
  {
    slug: "pediatric-physiotherapy",
    name: "Pediatric Physiotherapy",
    category: "Pediatric",
    homeDesc:
      "Developmental and injury-related care tailored for younger patients.",
    desc: "Developmental and injury-related physiotherapy tailored to younger patients, in a comfortable setting.",
    who: "Children with developmental delays, injuries, or postural concerns.",
  },
  {
    slug: "home-physiotherapy",
    name: "Home Physiotherapy",
    category: "Home Care",
    homeDesc: "Full physiotherapy sessions delivered at your home when a clinic visit isn't practical.",
    desc: "The same hands-on assessment and treatment you'd get in-clinic, brought to your home for patients who can't travel easily.",
    who: "Patients with limited mobility, post-surgical patients early in recovery, or anyone who prefers home-based care.",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    category: "Orthopedic",
    homeDesc: "Focused treatment for knee pain, from ligament issues to everyday wear and tear.",
    desc: "Assessment and hands-on treatment for knee pain arising from injury, arthritis, or overuse, paired with a strengthening plan.",
    who: "Anyone with persistent or recent-onset knee pain affecting movement or daily activity.",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    category: "Orthopedic",
    homeDesc: "Targeted care for shoulder pain and stiffness, including impingement and rotator cuff issues.",
    desc: "Hands-on treatment and guided exercise for shoulder pain, stiffness, and impingement, aimed at restoring full pain-free movement.",
    who: "Anyone with shoulder pain, reduced range of motion, or a recurring shoulder injury.",
  },
];