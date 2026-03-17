import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Stairsanimation from "./components/common/Stairsanimation.jsx";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import { FilterContextProvider } from "./context/FiterContext.jsx";
import ReadyContextProvider from "./context/ReadyContext.jsx";
import RouteChangeStairsContextProvider from "./context/RouteChangeStairsContext.jsx";
import RouteChangeStairs from "./components/common/RouteChangeStairs.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairsanimation>
        <RouteChangeStairsContextProvider>
          <RouteChangeStairs>
            <ReadyContextProvider>
              <FilterContextProvider>
                <Root />
              </FilterContextProvider>
            </ReadyContextProvider>
          </RouteChangeStairs>
        </RouteChangeStairsContextProvider>
      </Stairsanimation>
    </BrowserRouter>
  </StrictMode>,
);
