import { createContext, useState } from "react";

export const ReadyContext = createContext(false);

function ReadyContextProvider({ children }) {
  const [ready, setReady] = useState(false);

  return (
    <ReadyContext.Provider value={{ ready, setReady }}>
      {children}
    </ReadyContext.Provider>
  );
}

export default ReadyContextProvider;
