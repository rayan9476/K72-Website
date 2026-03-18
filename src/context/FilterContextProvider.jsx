import { useState } from "react";
import { FilterContext } from "./FilterContext.js";

export function FilterContextProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
