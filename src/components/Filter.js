import { FilterContext } from "context/FilterProvider";
import { PaginationContext } from "context/PaginationProvider";
import React, { useContext } from "react";

const Filter = () => {
  const { filter, setFilter, filterList } = useContext(FilterContext);
  const { resetPage } = useContext(PaginationContext);

  const filterAction = (value, key) => {
    switch (key) {
      case 1:
        setFilter({
          ...filter,
          offset: 1,
          filterMap: {
            ...filter.filterMap,
            color: value.color_id,
            brand: "",
          },
        });
        break;

      case 3:
        setFilter({
          ...filter,
          offset: 1,
          filterMap: {
            ...filter.filterMap,
            brand: value.brand_id,
            color: "",
          },
        });
        break;

      case 2:
        if (value.value === true) {
          changeOrderByPrice(true);
        } else if (value.value === false) {
          changeOrderByPrice(false);
        } else if (value.value === "(A>Z)") {
          changeOrderByTitle(false);
        } else if (value.value === "(Z>A)") {
          changeOrderByTitle(true);
        }
        break;

      default:
        setFilter({
          ...filter,
          offset: 1,
          filterMap: {
            ...filter.filterMap,
            brand: "",
            color: "",
            orderByPrice: "",
          },
        });
        break;
    }
    resetPage();
  };

  const changeOrderByTitle = (boolen) => {
    setFilter({
      ...filter,
      offset: 1,
      filterMap: {
        ...filter.filterMap,
        brand: "",
        color: "",
        orderByTitle: boolen,
      },
    });
  };

  const changeOrderByPrice = (boolen) => {
    setFilter({
      ...filter,
      offset: 1,
      filterMap: {
        ...filter.filterMap,
        brand: "",
        color: "",
        orderByPrice: boolen,
      },
    });
  };
  return (
    <React.Fragment>
      <div className="filter-item">
        <span onClick={filterAction}>Renkler</span>
        <ul>
          {filterList?.color.map((item, itemKey) => (
            <li
              key={itemKey}
              className={item.count === 0 ? "disabled" : ""}
              onClick={() => filterAction(item, 1)}
            >
              {item.color_name} ({item.count})
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-item">
        <span onClick={filterAction}>Sıralama</span>
        <ul>
          {filterList?.sorting.map((item, itemKey) => (
            <li key={itemKey} onClick={() => filterAction(item, 2)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-item">
        <span onClick={filterAction}>Markalar</span>
        <ul>
          {filterList?.brand.map((item, itemKey) => (
            <li
              key={itemKey}
              className={item.count === 0 ? "disabled" : ""}
              onClick={() => filterAction(item, 3)}
            >
              {item.brand_name} ({item.count})
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Filter;
