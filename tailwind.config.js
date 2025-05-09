module.exports = {
    theme: {
      extend: {
        animation: {
          "slide-up": "slide-up 0.4s ease-out",
        },
        keyframes: {
          "slide-up": {
            "0%": { transform: "translateY(100%)" },
            "100%": { transform: "translateY(0)" },
          },
        },
      },
    },
    plugins: [],
  };
  