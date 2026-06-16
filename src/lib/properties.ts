export type PropertyStatus =
  | "For Sale"
  | "For Lease"
  | "In Development"
  | "Sold";

export type PropertyType =
  | "Residential"
  | "Multifamily"
  | "Commercial"
  | "Mixed-Use"
  | "Historic";

export interface Property {
  slug: string;
  name: string;
  neighborhood: string;
  address: string;
  status: PropertyStatus;
  type: PropertyType;
  price: string;
  priceValue: number; // for sorting; 0 when not applicable
  year: number;
  beds?: number;
  baths?: number;
  sqft: number;
  lot?: string;
  featured?: boolean;
  summary: string;
  description: string[];
  features: string[];
  hero: string;
  gallery: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Add real properties here. Until an entry exists, the portfolio and home page
// render a "coming soon" state automatically — no placeholder listings.
//
// Example of the expected shape (uncomment and replace with real data):
//
// {
//   slug: "unique-url-slug",
//   name: "Property Name",
//   neighborhood: "Neighborhood",
//   address: "Street, Louisville, KY 40202",
//   status: "For Sale",
//   type: "Residential",
//   price: "$0",            // or "Price on request"
//   priceValue: 0,
//   year: 2024,
//   beds: 3,
//   baths: 2,
//   sqft: 2000,
//   lot: "0.2 acres",       // optional
//   featured: true,         // shows on the home page
//   summary: "One-line summary.",
//   description: ["First paragraph.", "Second paragraph."],
//   features: ["Feature one", "Feature two"],
//   hero: "https://…",       // image URL (whitelist the host in next.config.ts)
//   gallery: ["https://…", "https://…"],
// },
// ─────────────────────────────────────────────────────────────────────────────
export const properties: Property[] = [];

export const propertyStatuses: PropertyStatus[] = [
  "For Sale",
  "For Lease",
  "In Development",
  "Sold",
];

export const propertyTypes: PropertyType[] = [
  "Residential",
  "Multifamily",
  "Commercial",
  "Mixed-Use",
  "Historic",
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeatured(): Property[] {
  return properties.filter((p) => p.featured);
}
