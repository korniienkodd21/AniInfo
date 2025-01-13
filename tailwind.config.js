/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/**/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            xsm: "360px",
            smPlus: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
         },
         container: {
            padding: "2rem",
            center: true,
         },
         fontSize: {
            base: "14px",
            small: "12px",
            medium: "16px",
            large: "18px",
            vlarge: "22px",
         },
         borderRadius: {
            base: "10px",
            small: "5px",
         },
         colors: {
            "dark-slate-blue": "#293043",
            "deep-space-blue": "#171C2C",
            "raspberry-pink": "#A61F67",
         },
      },
   },
   plugins: [],
};
