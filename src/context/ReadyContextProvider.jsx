import { useState } from "react";
import { ReadyContext } from "./ReadyContext";

function ReadyContextProvider({ children }) {
  const [ready, setReady] = useState(false);

  return (
    <ReadyContext.Provider value={{ ready, setReady }}>
      {children}
    </ReadyContext.Provider>
  );
}

export default ReadyContextProvider;
