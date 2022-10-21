import { createContext, useReducer } from "react";
import tipReducer from "../reducers/tipReducer";

export const TipContext = createContext(null);

export const TipContextProvider = ({ children }) => (
  <TipContext.Provider
    value={useReducer(tipReducer, {
      bill: 0,
      tipPercent: 0,
      numberOfPeople: 0,
    })}
  >
    {children}
  </TipContext.Provider>
);
