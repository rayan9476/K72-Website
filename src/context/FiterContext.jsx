import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext(null);

export function FilterContextProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
