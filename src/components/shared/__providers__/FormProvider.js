import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export const FromProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const printValues = () => {
    alert(`Hello, ${name} ${surname}!`);
  };

  const value = {
    name,
    setName,
    surname,
    setSurname,
    printValues,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
