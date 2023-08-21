/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "LimeGreen": "hsl(163, 72%, 41%)",
        "BrightRed": "hsl(356, 69%, 56%)",

        "Facebook": "hsl(208, 92%, 53%)",
        "Twitter": "hsl(203, 89%, 53%)",
        "InstagramOne": "hsl(37, 97%, 70%)",
        "InstagramTwo": "hsl(329, 70%, 58%)",
        "YouTube": "hsl(348, 97%, 39%)",

        "lightToggle": "hsl(230, 22%, 74%)",
        "darkTogColOne": "hsl(210, 78%, 56%)",
        "darkTogColTwo": "hsl(146, 68%, 55%)", 

        "darkBg": "hsl(230, 17%, 14%)",
        "darkTopBg": "hsl(232, 19%, 15%)",
        "darkCardBg": "hsl(228, 28%, 20%)",
        "darkCardHoverBg": "hsl(228, 40%, 23%)",
        "darkGreyText": "hsl(228, 34%, 66%)",
        "darkMainTextCol": "hsl(0, 0%, 100%)",

        "lightBg": "hsl(0, 0%, 100%)",
        "lightTopBg": "hsl(225, 100%, 98%)",
        "lightCardBg": "hsl(227, 47%, 96%)",
        "lightCardHoverBg": "hsl(232, 33%, 91%)",
        "lightGrayText": "hsl(228, 12%, 44%)",
        "lightMainTextCol": "hsl(230, 17%, 14%)"
    },
  }
},
  plugins: [],
  darkMode: "class",
}


