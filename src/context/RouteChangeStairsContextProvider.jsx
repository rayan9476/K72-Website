import { useState } from "react";
import { RouteChangeStairsContext } from "./RouteChangeStairsContext.js";
export default function RouteChangeStairsContextProvider({ children }) {
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  return (
    <RouteChangeStairsContext.Provider
      value={{ isRouteChanging, setIsRouteChanging }}
    >
      {children}
    </RouteChangeStairsContext.Provider>
  );
}
