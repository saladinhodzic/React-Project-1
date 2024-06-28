import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  //   const [isActive, setIsActive] = useState(() => {
  //     const state = localStorage.getItem(`${id}`);
  //     const parse = JSON.parse(state);
  //     return parse || null;
  //   });

  //   const values = {
  //     isActive,
  //     setIsActive,
  //   };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
