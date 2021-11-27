import { createContext, useContext, useReducer } from "react";
import { globalReducer, INIT_GLOBAL_STATE } from "./global.reducer";

const GlobalContext = createContext({
  ...INIT_GLOBAL_STATE,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [global, globalDispatch] = useReducer(globalReducer, INIT_GLOBAL_STATE);

  return (
    <GlobalContext.Provider
      value={{
        global,
        globalDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
