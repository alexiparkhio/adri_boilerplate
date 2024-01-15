import "./App.css";
import { FromProvider } from "./components/shared/__providers__/FormProvider";
import { MyForm } from "./MySubComponent";

function App() {
  const name = "Adria";

  return (
    <div className="App">
      <FromProvider>
        <MyForm name={name} />
      </FromProvider>
    </div>
  );
}

export default App;
