import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Tr from "./language/Tr";
import En from "./language/En";
import { Languages } from "utils";
const resources = {
  tr: {
    translation: Tr,
  },
  en: {
    translation: En,
  },
};

const selectLanguage =
  JSON.parse(window.localStorage.getItem("lang")) || Languages[0];
i18n.use(initReactI18next).init({
  resources,
  lng: selectLanguage.value,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
