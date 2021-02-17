module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "50%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-up-03-in": "slide-up 0.3s ease-in",
        "slide-up-03-out": "slide-up 0.3s ease-out",
        "slide-up-06-in": "slide-up 0.6s ease-in",
        "slide-up-06-out": "slide-up 0.6s ease-out",
        "slide-left-06-out": "slide-left 0.6s ease-out",
        "slide-up-1-in": "slide-up 1s ease-in",
        "slide-up-1-out": "slide-up 1s ease-out",
        "fade-in-06": "fade 0.6s ease-in",
        "fade-out-06": "fade 0.6s ease-out",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black_text_color: "var(--color-black-text-color)",
        white_text_color: "var(--color-white-text-color)",
        "primary-background": "var(--color-app-bg-color)",
        "sec-background": "var(--color-secondary)",
        "white-text": "var(--color-white-text-color)",
        "black-text": "var(--color-black-text-color)",
        "button-text-color": "var(--color-button-text-color)",
        "button-color": "var(--color-button-color)",
      },
      backgroundImage: (theme) => ({
        "theme-img": "var(--app-bg-img)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  variants: {
    extend: {
      borderRadius: ["first", "last"],
      borderStyle: ["first", "last"],
    },
  },
  plugins: [],
};
