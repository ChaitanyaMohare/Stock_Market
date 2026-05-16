import React, { createContext, useContext, useState } from "react";

const GeneralContext = createContext(null);

export const GeneralContextProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState(null);

  return (
    <GeneralContext.Provider value={{ selectedStock, setSelectedStock }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);

export default GeneralContext;
