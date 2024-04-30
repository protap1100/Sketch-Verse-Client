// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Kanit': ["Kanit", 'sans-serif'],
        'Platypi': ["Platypi", 'Platypi']
      },
      colors: {
        "primary": "#ff8ea5",       
        "secondary": "#ffb3c2",     
        "btn": "#6057d3",           
        "btn-border": "#3a297b",    
        "border": "#e671a2",        
        "topBackground": "#f0eff4", 
        "hover": "#7fc6cc",
        "accent1": "#ffd966", 
        "accent2": "#8ac4d0", 
        "accent3": "#c9c9ff"    
      }
      
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
