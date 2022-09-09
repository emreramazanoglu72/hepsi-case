import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocalStorage } from "react-use";
import { Languages } from "utils";

const Language = () => {
  const { t, i18n } = useTranslation();

  const [langStore, setLangStore] = useLocalStorage("lang");
  const [langauge, setLanguage] = useState(
    langStore ? langStore : Languages[0]
  );
  const selectLang = (lang) => {
    i18n.changeLanguage(lang.value);
    setLangStore(lang);
    setLanguage(lang);
  };
  return (
    <div className="languageArea">
      <div className="language">
        <div className="head">
          <span>{t(`language.${langauge.label}`)}</span>
          <RiArrowDropDownLine />
        </div>
        <div className="list">
          {Languages.map((lang, key) => (
            <div key={key} className="item" onClick={() => selectLang(lang)}>
              {t(`language.${lang.label}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
