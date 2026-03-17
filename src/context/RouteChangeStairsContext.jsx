import { createContext, useState } from "react";
export const RouteChangeStairsContext = createContext(false);

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
