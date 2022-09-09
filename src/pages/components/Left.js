import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Draver from "components/layouts/Drawer";
import { AppContext } from "context/AppProvider";
import { Filters } from "utils";

const Left = () => {
  const { setFilter, filter } = useContext(AppContext);
  const { t } = useTranslation();
  const changeFilter = (select) => {
    if (select === "true" || select === "false") {
      setFilter({ ...filter, sort: JSON.parse(select) });
    } else {
      setFilter({ ...filter, sort: select });
    }
  };
  return (
    <div className="left">
      <Draver title={t("global.filters")} />
      <select
        defaultValue={"default"}
        onChange={(select) => changeFilter(select.target.value)}
        className="filterSelect selectBox"
      >
        <option value="default" disabled>
          {t("global.sorting")}
        </option>
        {Filters[1].list.map((item, key) => (
          <option key={key} value={item.value}>
            {t(`filter.${item.label}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Left;
