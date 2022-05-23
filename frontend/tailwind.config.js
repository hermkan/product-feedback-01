module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffff",
      "Singapore-Orchid": "#AD1FEA",
      "The-Rainbow-Fish": "#4661E6",
      "Raven-Night": "#373F68",
      "Cotton-Ball": "#F2F4FE",
      "Ghost-White": "#F7F8FD",
      "Jewel-Cave": "#3A4374",
      "Ocean-Night": "#647196",
      "Creamy-peach ": "#F49F85",
      "Blue-Mana": "#62BCFA",
      "Blood-Moon": "#D73737",
      "After-Party-Pink": "#C75AF6",
      Orchid: "#7C91F9",
      Kimberlite: "#656EA3",
      "Steamed-Salmon": "#E98888",
      "Bleached-Silk": "#F2F2F2",
      "Garden-Fairy": "#CDD2EE",
      "Pale-Phthalo-Blue": "#CFD7FF",
      Overlay: "rgba(0, 0, 0, 0.5)",
      "Fresh-Lavender": "rgba(140, 146, 179, .25)",
    },
    fontSize: {
      "body-1": ["16px", { lineHeight: "1.4375rem" }],
      "body-2": ["15px", { lineHeight: "1.375rem" }],
      "body-3": ["13px", { lineHeight: "1.1875rem" }],
      "heading-1": [
        "24px",
        { lineHeight: "2.1875rem", letterSpacing: "-.0.33" },
      ],
      "heading-2": [
        "20px",
        { lineHeight: "1.8125rem", letterSpacing: "-.0.25" },
      ],
      "heading-3": [
        "18px",
        { lineHeight: "1.625rem", letterSpacing: "-.0.25" },
      ],
      "heading-4": ["14px", { lineHeight: "1.25rem", letterSpacing: "-.0.20" }],
    },
    fontFamily: {
      Jost: "Jost, sans-serif",
    },
    extend: {
      borderRadius: {
        default: "10px",
      },
      height: {
        53: "53px",
        72: "72px",
        100: "100px",
        151: "151px",
        178: "178px",
        605: "624px",
        40: "40px",
        200: "200px",
        233: "233px",
        251: "251px",
        600: "600px",
        657: "657px",
        460: "460px",
        708: "708px",
        30: "120px",
        822: "822px",
        860: "860px",
        893: "893px",
      },
      width: {
        69: "69px",
        93: "93px",
        271: "271px",
        0.5: "2.5px",
        375: "375px",
        689: "689px",
        825: "825px",
        134: "134px",
        327: "327px",
        52: "52px",
        450: "450px",
        80: "80%",
      },
      padding: {
        78: "78px",
        156: "156px",
        450: "450px",
      },
    },
    screens: {
      tablet: "679px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
