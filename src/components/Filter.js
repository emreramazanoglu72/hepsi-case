import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "context/AppProvider";
import { Filters } from "utils";
import Hr from "./Hr";
import SearchBox from "./SearchBox";

const Filter = () => {
  const { t } = useTranslation();
  const { filter, setFilter } = useContext(AppContext);
  const filterAction = (value, key) => {
    switch (Filters[key].id) {
      case 1:
        setFilter({ ...filter, color: value });
        break;

      case 3:
        setFilter({ ...filter, brand: value });
        break;

      case 2:
        setFilter({ ...filter, sort: value });
        break;

      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <ul className="filter-card">
        <div className="mobile-search mt-1 mb-1">
          <li className="title m-0">{t('global.search')}:</li>
          <br />
          <SearchBox mobile={true} />
        </div>
        {Filters.map((item, key) => (
          <React.Fragment  key={key}>
            <li key={key} className="title">
              {t(`filter.${item.title}`)}
            </li>
            {item.list.map((item, itemKey) => (
              <li
                onClick={() => filterAction(item.value, key)}
                key={itemKey}
                className="item"
              >
                {t(`filter.${item.label}`)}
              </li>
            ))}
            <Hr />
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Filter;
