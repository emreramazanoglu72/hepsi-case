import { FilterContext } from "context/FilterProvider";
import React, { useContext } from "react";

const FilterSelect = () => {
  const { filter, setFilter, filterList } = useContext(FilterContext);
  const filterAction = (item) => {
    var value = item.target.value.toString();
    if (value === "true") {
      changeOrderByPrice(true);
    } else if (value === "false") {
      changeOrderByPrice(false);
    } else if (value === "(A>Z)") {
      changeOrderByTitle(false);
    } else if (value === "(Z>A)") {
      changeOrderByTitle(true);
    }else{
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
    }
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
    <select onChange={filterAction} className="btn dropdown-toggle">
      <option value>Sıralama</option>
      {filterList.sorting.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
