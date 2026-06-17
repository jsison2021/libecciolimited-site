// Downtown Louisville imagery (Wikimedia Commons, freely licensed).
// Swap these URLs to change the site's hero/section photography in one place.
// Any new host must also be added to `images.remotePatterns` in next.config.ts.

export const louisville = {
  skylineNight: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/55/Louisville_Skyline_2021_%283%29.jpg",
    alt: "Downtown Louisville skyline at night, reflected in the Ohio River",
  },
  skylineDusk: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Louisville_Skyline.jpg",
    alt: "Downtown Louisville skyline at dusk over the Ohio River",
  },
  oldLouisville: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Werne%27s_Row_4th_and_Hill%2C_Old_Louisville.jpg",
    alt: "Historic Victorian rowhouses in Old Louisville, Kentucky",
  },
} as const;
