import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [testState, setTestState] = useState(0);
  return (
    <AppContext.Provider value={{ testState }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
