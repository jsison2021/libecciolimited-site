// Downtown Louisville imagery, self-hosted in /public/images so it always
// loads (no dependency on an external host). Source files and licensing are
// documented in CREDITS.md. Swap these paths to change the site's photography.

export const louisville = {
  skylineNight: {
    src: "/images/louisville-skyline-night.jpg",
    alt: "Downtown Louisville skyline at night, reflected in the Ohio River",
  },
  skylineDusk: {
    src: "/images/louisville-skyline-dusk.jpg",
    alt: "Downtown Louisville skyline at dusk over the Ohio River",
  },
  oldLouisville: {
    src: "/images/old-louisville-rowhouses.jpg",
    alt: "Historic Victorian rowhouses in Old Louisville, Kentucky",
  },
} as const;
