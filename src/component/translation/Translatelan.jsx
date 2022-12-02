import i18next from "i18next";

i18next.init({
  lng: localStorage.getItem("lang") ?? "en",
  debug: true,
  resources: {
    en: {
      translation: {
        login: "Login",
      },
    },
    hi: {
      translation: {
        login: "नमस्ते दुनियाँ",
      },
    },
  },
});
