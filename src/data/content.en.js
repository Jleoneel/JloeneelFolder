import * as es from './content.es.js'

// Capa en inglés: reutiliza imágenes, stacks y estructura del contenido en español
const merge = (base, over) => base.map((item, i) => ({ ...item, ...over[i] }))
const retitle = (shots, titles) => shots.map((s, i) => ({ ...s, title: titles[i][0], tab: titles[i][1] ?? s.tab }))

export const profile = { ...es.profile, role: 'Software Engineer', location: 'Portoviejo, Manabí — Ecuador' }
export const apartalo = es.apartalo

export const stats = merge(es.stats, [
  { label: 'Systems built', note: 'from scratch to production' },
  { label: 'Clients & institutions', note: 'public and private' },
  { label: 'Automated tests', note: 'in the APÁRTALO monorepo' },
  { label: 'Years in production', note: 'since March 2025' },
])

export const stack = merge(es.stack, [
  { group: 'Languages' },
  { group: 'Frontend' },
  { group: 'Backend & data' },
  { group: 'Infrastructure' },
  { group: 'Tooling' },
])

const [apartaloP, extasis, sith, perro, caba, iess] = es.projects

export const projects = [
  {
    ...apartaloP,
    kicker: 'Own product · SaaS',
    period: '08/2026 — Present',
    role: 'Founder & full stack developer',
    headline: 'WhatsApp booking for barbershops, in natural language, no app or sign-up.',
    summary:
      'Multi-tenant platform with active paying customers. Each barbershop runs with its own isolated data, roles and settings; the platform admin panel is fully separate. Customers write the way they would to a person, and the system books the appointment.',
    highlights: [
      'Hybrid conversational engine: fixed rules when intent is clear, AI only when the message is ambiguous — with per-use cost tracking.',
      "Integration with Meta's official WhatsApp API: webhooks, interactive messages and receipt images for deposits.",
      'Database-level constraint that prevents double bookings for the same barber and time slot, even under concurrent load.',
      'Encrypted per-tenant access tokens, plus reminders and cleanups as scheduled jobs.',
      'Monorepo with 430+ automated tests, CI with GitHub Actions and deployment on Oracle Cloud with Docker, Nginx and HTTPS.',
    ],
    metrics: [
      ['430+', 'automated tests'],
      ['+100', 'appointments booked at a real barbershop'],
      ['0', 'apps for the customer to install'],
    ],
    status: 'Production · paying customers',
    screens: retitle(apartaloP.screens, [
      ['Business dashboard: appointments, revenue and today’s schedule', 'Dashboard'],
      ['Per-barber schedule with the status of each appointment', 'Schedule'],
      ['Booking detail with a deposit pending verification', 'Deposits'],
      ['WhatsApp conversation history with the bot', 'WhatsApp'],
      ['Customers registered automatically from WhatsApp', 'Customers'],
      ['Business settings, hours and reminders', 'Settings'],
      ['Platform panel: every tenant and its subscription', 'Platform'],
      ['Tenant detail inside the platform panel', 'Tenant'],
    ]),
    phones: retitle(apartaloP.phones, [
      ['The customer says hi and gets the options menu'],
      ['Service selection with interactive messages'],
      ['Barber and day picked with one tap'],
      ['Only truly available time slots are offered'],
      ['Confirmation and automatic reminder'],
      ['The appointment shows up in the barbershop’s schedule'],
    ]),
  },
  {
    ...extasis,
    kicker: 'Freelance · Karaoke bar',
    role: 'Full stack developer',
    headline: 'Inventory, sales shifts, cash closings and real profitability per product.',
    summary: 'A complete management system, from requirements gathering to deployment. Designed like an accounting ledger.',
    pull: 'Nothing gets overwritten. Everything can be audited.',
    highlights: [
      'Immutable inventory: every movement is recorded; corrections are entered as adjustments with a mandatory reason.',
      'Payments use database-level locking so two simultaneous operations never touch the same balance.',
      'Each sale freezes its price and cost at that moment: real profitability per product, period and seller.',
      'Dual tokens, Argon2, role-based access, login attempt limits and auditing on sensitive actions.',
      'Automatic backups to Oracle Object Storage and continuous deployment.',
    ],
    status: 'Production',
    screens: retitle(extasis.screens, [
      ['Daily dashboard: sales, pending closings and stock alerts', 'Dashboard'],
      ['Shift closing review before inventory is deducted', 'Closing'],
      ['Real profitability per product with cost frozen per sale', 'Profitability'],
      ['Sales reports by period', 'Reports'],
      ['Shift supervision and review status', 'Shifts'],
      ['Immutable ledger of inventory movements', 'Inventory'],
      ['Supplier purchases', 'Purchases'],
      ['Sign-in', 'Sign-in'],
    ]),
  },
  {
    ...sith,
    kicker: 'Public sector · Verdi Cevallos Balda Hospital',
    role: 'Full stack developer',
    headline: 'HR management system with real digital signatures from the Central Bank.',
    summary:
      'Personnel actions, leave and vacation management for the Portoviejo public hospital, with a 5-signer approval flow across 3 hierarchy levels. In use on the institution’s internal network.',
    highlights: [
      'Digital signatures with .p12 certificates issued by the Central Bank of Ecuador, embedded in the PDFs the system generates.',
      'Import of the institutional staff roster from Excel, syncing positions, units and employees.',
      'Real-time role-based notifications and automatic emails at every approval stage.',
      'Deployed with PM2 and Nginx on the hospital’s Proxmox infrastructure.',
    ],
    status: 'In use · intranet',
    screens: retitle(sith.screens, [
      ['Personnel actions dashboard', 'Dashboard'],
      ['5-signer approval flow across 3 levels', 'Approval'],
      ['PDF with digital signatures and verification QR', 'Signature'],
      ['Uploading the .p12 digital certificate', 'Certificate'],
      ['Department heads by organizational unit', 'Heads'],
      ['New vacation request', 'Request'],
      ['Vacation report', 'Report'],
      ['Institutional sign-in', 'Sign-in'],
    ]),
  },
  {
    ...perro,
    kicker: 'Freelance · Pool hall',
    role: 'Full stack developer',
    headline: 'Time-based table rental, consumption, cash register and inventory in one system.',
    summary:
      'Daily operations for a pool hall: the rate runs in real time and freezes at checkout. Nothing works without an open register; at closing, the system computes the difference between what was recorded and what was counted.',
    pull: 'The clock runs in real time; the price freezes at checkout.',
    highlights: [
      'Automatic ID card reading with the browser camera and Google Cloud Vision OCR.',
      'Rate computed by time of use, frozen at checkout and not editable afterwards.',
      'Payments use database-level locking against simultaneous operations.',
      'Deployed on Oracle Cloud with Docker, Nginx and HTTPS.',
    ],
    status: 'Production',
    screens: retitle(perro.screens, [
      ['Live dashboard: tables, sessions and the shift’s register', 'Dashboard'],
      ['Real-time table status', 'Tables'],
      ['Active sessions with the rate running', 'Sessions'],
      ['Open register with the shift’s cash sales', 'Register'],
      ['Financial and operational reports', 'Reports'],
      ['Customers registered via ID card reading', 'Customers'],
      ['Open tabs per table', 'Sales'],
      ['Sign-in', 'Sign-in'],
    ]),
  },
  {
    ...caba,
    kicker: 'Thesis · Technical University of Manabí',
    role: 'Full stack developer',
    headline: 'From quote request to lab report, for a university laboratory.',
    summary:
      'A system for UTM’s Biological and Agri-food Analysis Center. It covers the full lifecycle of a lab analysis and lets clients track their sample without signing up.',
    highlights: [
      'Unique code and QR per sample: clients check its status in real time from any device.',
      'Visual production board for analysts, with equipment calibration alerts.',
      'Reagent inventory with consumption tied to each analysis and minimum stock alerts.',
      'Automatic PDF and Word reports, charts and Excel export.',
    ],
    status: 'Deployed',
    screens: retitle(caba.screens, [
      ['Production board by sample status', 'Production'],
      ['Sample detail and analysis progress', 'Sample'],
      ['Public QR tracking, no sign-up needed', 'QR tracking'],
      ['Quotes with external or student price lists', 'Quotes'],
      ['Reagent inventory with minimum stock alerts', 'Reagents'],
      ['Equipment with overdue calibration alerts', 'Equipment'],
      ['Reports and statistics', 'Reports'],
      ['Analysis services catalog', 'Services'],
      ['Sign-in', 'Sign-in'],
    ]),
  },
  {
    ...iess,
    kicker: 'Public sector · IESS General Hospital',
    role: 'Full stack developer',
    headline: 'Web modules for hospital management, on top of a production system.',
    summary:
      'A module for visualizing and analyzing patient admissions in the Emergency department, and a module for the Referrals area that sped up previously manual processes. Plus technical support for several hospital areas.',
    status: 'Support',
  },
]

export const experience = merge(es.experience, [
  { period: '08/2026 — Now', role: 'Founder & full stack developer', type: 'Own product', note: 'Multi-tenant WhatsApp booking SaaS with active paying customers.' },
  { role: 'Freelance full stack developer', org: 'ÉXTASIS Karaoke Bar', note: 'Auditable inventory, sales shifts, cash closings and profitability.' },
  { role: 'Full stack developer', org: 'Verdi Cevallos Balda Hospital', type: 'Public sector', note: 'SITH: HR management with digital signatures and hierarchical approval.' },
  { role: 'Freelance full stack developer', org: 'El Perro Viejo Pool Hall', note: 'Time-based tables, register, inventory and ID OCR.' },
  { role: 'Full stack developer — Thesis', org: 'Technical University of Manabí', type: 'Academic', note: 'CABA: end-to-end management for the analysis lab.' },
  { role: 'Full stack developer', org: 'IESS General Hospital, Manta', type: 'Public sector', note: 'Emergency statistics and Referrals modules; technical support.' },
])

export const education = merge(es.education, [
  { title: 'Software Engineer (B.Eng.)', org: 'Technical University of Manabí', note: 'SENESCYT registration 1009-2026-3425563' },
])

export const testimonials = merge(es.testimonials, [
  {
    quote: 'The system he developed improved control over daily operations, reduced manual handling of information and made the business easier to run.',
    extra: 'He showed responsibility, professionalism, initiative and commitment in carrying out the assigned work.',
    position: 'Owner',
    org: 'El Perro Viejo Pool Hall',
    built: 'Management system: table rental, consumption, inventory and sales.',
    date: 'July 2026',
  },
  {
    quote: 'He carried out the assigned work responsibly, demonstrating technical skills in line with the project’s requirements.',
    position: 'IT Management Coordinator',
    org: 'Dr. Verdi Cevallos Balda General Hospital',
    built: 'Web system for personnel actions, hourly leave and vacations, deployed on the intranet.',
    date: 'April 2026',
  },
  {
    quote: 'Developed a web module for the Referrals area, optimizing and speeding up previously manual processes.',
    extra: 'He carried out the assigned work responsibly, demonstrating technical skills in line with institutional requirements.',
    position: 'Head of IT Department',
    org: 'IESS General Hospital, Manta',
    built: 'Web modules for Emergency statistics and Referrals.',
    date: '2025',
  },
])
