/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_7e: "#ffffff7e",
          A700_3f: "#ffffff3f",
          A700: "#ffffff",
          A700_87: "#ffffff87",
          A700_00: "#ffffff00",
        },
        green: {
          200: "#a8ef9c",
          300: "#74ef80",
          400: "#45dc76",
          500: "#33b568",
          600: "#27a35a",
          700: "#1d974f",
          800: "#058a36",
          900: "#0a6f30",
          A700: "#13ab4b",
          "700_02": "#1c9a45",
          "700_03": "#229751",
          "700_01": "#1c934c",
          A400_3f: "#31d8753f",
          "600_03": "#269b56",
          "900_01": "#0b7030",
          "600_02": "#269b55",
          "600_01": "#27a65a",
          "900_02": "#1b6439",
          "200_cc": "#a8ef9ccc",
          A200: "#57f289",
          "400_90": "#43d46b90",
          A400: "#32d875",
          A400_f4: "#31d875f4",
          "900_33": "#2a5d3233",
          "400_01": "#43c277",
          "200_00": "#a8ef9c00",
          "500_01": "#35d067",
          "900_66": "#2a5d3266",
        },
        lime: {
          100: "#f1ffbd",
          300: "#e2ff6f",
          400: "#daf760",
          800: "#aaa617",
          A200: "#d4f938",
          A200_b2_01: "#d5fa39b2",
          "300_cc": "#e2ff6fcc",
          A200_66: "#ebff2566",
          "300_00": "#e2ff6f00",
          A200_33: "#ebff2533",
          A200_b2: "#d4f938b2",
          "300_3f": "#e2ff6f3f",
          A200_02: "#ebff25",
          A200_03: "#d8ff35",
          A200_01: "#d5fa39",
          "800_01": "#af982b",
          "400_7e": "#daf7607e",
        },
        red: { 400: "#f45f5f", A200: "#ff6554" },
        gray: {
          50: "#fbfbfb",
          100: "#f3f3f3",
          200: "#e7e7ea",
          300: "#dddddd",
          400: "#bbbbc3",
          500: "#a9a9a9",
          700: "#666673",
          800: "#3c3c3b",
          900: "#19191d",
          "800_01": "#393939",
          "500_01": "#a591aa",
          "500_02": "#a0a0ac",
          "900_02": "#141414",
          "900_01": "#1b1b1f",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_01": "#0e0e0f",
          "900_0c": "#0000000c",
          "900_66": "#0f0f0f66",
          "900_66_01": "#00000066",
        },
        teal: { 400: "#28b5a2", 700: "#1d7b6e", "400_01": "#29b57e" },
        blue_gray: {
          100: "#d8d8dd",
          400: "#8c8c8c",
          900: "#343434",
          "900_01": "#32333a",
          "400_01": "#808090",
        },
        light_green: { 500: "#78e65d" },
      },
      backgroundImage: {
        gradient: "linear-gradient(50deg ,#d4f938,#32d875)",
        gradient1: "radial-gradient(#57f289,#000000)",
        gradient2: "linear-gradient(143deg ,#d4f938b2,#d5fa39b2)",
        gradient3: "linear-gradient(180deg ,#ebff2566,#ebff2566,#ebff2566)",
        gradient4: "linear-gradient(179deg ,#daf760,#31d875f4)",
        gradient5: "linear-gradient(180deg ,#ffffff00,#ffffff,#ffffff00)",
        gradient6: "radial-gradient(#ebff25,#a8ef9c00)",
        gradient7: "linear-gradient(270deg ,#ffffff7e,#ffffff7e,#ffffff7e)",
        gradient8: "radial-gradient(#a8ef9c,#a8ef9c00)",
        gradient9: "linear-gradient(180deg ,#00000066,#2a5d3266)",
        gradient10: "linear-gradient(232deg ,#d4f938,#31d875f4)",
      },
      boxShadow: {
        bs3: "0px 0px  10px 0px #ffffff7f",
        bs: "0px 0px  16px 0px #a8ef9ccc",
        bs2: "0px 0px  40px 0px #e2ff6fcc",
        bs1: "0px 0px  10px 0px #ebff2533",
        bs4: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { neurialgrotesk: "Neurial Grotesk" },
      textShadow: { ts: "0px 0px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")]
}