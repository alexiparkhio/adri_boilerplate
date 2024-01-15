import React from "react";
import "./MySubComponent.css";
import { useFormContext } from "./components/shared/__providers__/FormProvider";

export const MyForm = () => {
  const { setName, name, setSurname, surname, printValues } = useFormContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Set your name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type="text"
        placeholder="Set your surname"
        value={surname}
        onChange={({ target: { value } }) => setSurname(value)}
      />

      <button onClick={printValues}>Click me!</button>
    </div>
  );
};
