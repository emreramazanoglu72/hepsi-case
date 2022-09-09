import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "context/AppProvider";

const SearchBox = ({ mobile = false }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const { filter, setFilter, resetPage } = useContext(AppContext);
  const searchAction = (text) => {
    setInput(text);
    if (text.length > 1) {
      setInput(text);
      setFilter({ ...filter, search: text });
    } else {
      setFilter({ ...filter, search: "" });
      resetPage();
    }
  };
  const clearInput = () => {
    setFilter({ ...filter, search: "" });
      resetPage();
      setInput("");
  };
  return (
    <div className={`${mobile ? "mobile-search-box" : "search-box"}`}>
      <BsSearch />
      <input
        type="text"
        value={input}
        placeholder={t("global.search")}
        onChange={(text) => searchAction(text.target.value)}
      />
      {filter.search?.length > 1 && <MdOutlineCancel onClick={clearInput} />}
    </div>
  );
};

export default SearchBox;
