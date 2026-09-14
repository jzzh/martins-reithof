import type { IconName } from "../components/icon-paths";

export const site = {
  name: "Martin's Reithof",
  owner: "Martin Kopecký",
  claim: "Fairness · Respekt · Leidenschaft",
  address: {
    street: "Katzenrütistrasse 324",
    zip: "8153",
    city: "Rümlang",
    country: "Schweiz",
  },
  phoneStable: { label: "077 448 19 56", href: "tel:+41774481956", display: "077 448 19 56" },
  phoneMartin: { label: "076 606 76 21", href: "tel:+41766067621" },
  email: { label: "info@martins-reithof.ch", href: "mailto:info@martins-reithof.ch" },
  instagram: { label: "Martin's Reithof", href: "https://www.instagram.com/" },
};

export const openingHours = [
  { day: "Montag – Freitag", time: "09:00 – 12:00 & 13:30 – 17:00" },
  { day: "Samstag – Sonntag", time: "09:00 – 17:00 (durchgehend)" },
  { day: "Allgemeine Feiertage", time: "09:00 – 17:00 (durchgehend)" },
];

export interface Offer {
  id: string;
  icon: IconName;
  title: string;
  text: string;
  highlight?: string;
  details?: string[];
  cta?: { label: string; href: string };
  featured?: boolean;
}

export const offers: Offer[] = [
  {
    id: "ponyreiten",
    icon: "heart",
    title: "Ponyreiten",
    text: "Für die Jüngsten stehen unsere braven und zuverlässigen Ponys und ausgewählten Pferde bereit. Die Kinder lernen spielerisch und mit viel Spass den Umgang mit den Tieren.",
    highlight: "Fördert Selbstbewusstsein, Koordination und Beweglichkeit.",
  },
  {
    id: "spazieren",
    icon: "horseshoe",
    title: "Pony- & Pferdespazieren",
    text: "Ein gemeinsamer Ausflug in den nahegelegenen Wald. Das Pony oder Pferd wird von einer mitlaufenden erwachsenen Person (z. B. Eltern) geführt. Eine Begleitperson seitens des Stalls kann separat gebucht werden.",
    details: ["Miete ist immer zur vollen Stunde möglich (z. B. 13:00, 14:00, 15:00)."],
  },
  {
    id: "ausritt",
    icon: "compass",
    title: "Ausritt",
    text: "Geführte Ausritte für Einsteiger und Geübte – raus aus dem Stall und hinein in die Natur rund um Rümlang.",
    details: [
      "60 Minuten · 1 ReiterIn — CHF 90.–",
      "60 Minuten · 2 ReiterInnen — CHF 140.–",
      "60 Minuten · ab 3 ReiterInnen — CHF 60.– pro Person",
    ],
  },
  {
    id: "ponyclub",
    icon: "star",
    title: "Ponyclub",
    text: "Abwechslungsreiches Programm für alle ponybegeisterten Kinder von 5–12 Jahren: Ausreiten, Reitstunden, Springen, Voltige, Gymkhana und Theorie.",
    highlight: "Jeden Mittwoch, 13:30 – 16:00 Uhr",
    details: [
      "CHF 60.00 inkl. Zvieri",
      "Mitnehmen: Reithelm oder Velohelm, festes Schuhwerk, Trinkflasche",
      "Anmeldung bei Martin: 076 606 76 21",
    ],
    cta: { label: "Jetzt anmelden", href: "tel:+41766067621" },
    featured: true,
  },
  {
    id: "reitlager",
    icon: "calendar",
    title: "Reitlager",
    text: "Eine unvergessliche Woche rund um Pferde, Spiel und Spass in den Ferien – mit zweimal täglich Reiten, viel Bewegung und kindgerechtem Grundwissen.",
    highlight: "Nächste Ausgabe: 12. – 16. Oktober 2026",
    details: [
      "Montag – Freitag, täglich 09:00 – 17:00 Uhr",
      "CHF 550.– pro Person, inkl. Mittagessen und Zvieri",
      "Barzahlung bei verbindlicher Buchung, ab 8 Buchungen",
      "Freitag 16:30 Uhr Apéro für Kinder und Eltern",
    ],
    cta: { label: "Platz sichern", href: "tel:+41766067621" },
    featured: true,
  },
  {
    id: "pferde-mieten",
    icon: "horse",
    title: "Pferde mieten",
    text: "Quasi ein eigenes Pferd: Miete ein Tier für einen längeren Zeitraum und übernimm Pflege, Betreuung und Training nach deinen Vorlieben – unter Einhaltung der Sicherheits- und Stallregeln.",
    highlight: "Unfall- und Haftpflichtversicherung ist Sache der Reitperson.",
  },
  {
    id: "geburtstage",
    icon: "gift",
    title: "Kindergeburtstage & Anlässe",
    text: "Ob Kindergeburtstag oder besonderer Anlass – wir stehen Ihnen gerne mit Rat und Tat zur Seite und finden gemeinsam das passende Angebot.",
    cta: { label: "077 448 19 56", href: "tel:+41774481956" },
  },
];

export interface PriceRow {
  label: string;
  price: string;
}

export const priceGroups: { title: string; note?: string; rows: PriceRow[] }[] = [
  {
    title: "Spazierreiten",
    rows: [
      { label: "60 Minuten · Pony", price: "CHF 30.00" },
      { label: "60 Minuten · Pferd", price: "CHF 40.00" },
    ],
  },
  {
    title: "Ausritt",
    note: "Preise pro Ausritt",
    rows: [
      { label: "60 Minuten · 1 ReiterIn", price: "CHF 90.00" },
      { label: "60 Minuten · 2 ReiterInnen", price: "CHF 140.00" },
      { label: "60 Minuten · ab 3 ReiterInnen", price: "CHF 60.00" },
    ],
  },
];

export const nav = [
  { label: "Aktuelles", href: "#aktuelles" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Angebote", href: "#angebote" },
  { label: "Preise", href: "#preise" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Kontakt", href: "#kontakt" },
];
