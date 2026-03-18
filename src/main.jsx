import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "src/styles/index.css";
import Stairsanimation from "./components/common/Stairsanimation.jsx";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import { FilterContextProvider } from "./context/FilterContextProvider.jsx";
import ReadyContextProvider from "./context/ReadyContextProvider.jsx";
import RouteChangeStairsContextProvider from "./context/RouteChangeStairsContextProvider.jsx";
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
