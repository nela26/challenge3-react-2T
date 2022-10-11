import React, { createContext, useEffect, useState } from "react";

<<<<<<<< HEAD:src/context/apiProvider.js
export const apiContext = createContext();
========
export const DataContext = createContext();
>>>>>>>> 7c6a023e5c723399a2a0cbeacf599349f3327a6f:src/DataContext.js

const ImgProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const dataConsult = async () => {
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon/?limit=2000")
    const dataImg = await response.json();
    setData(dataImg);
   
  };
  
 dataConsult();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ImgProvider;
