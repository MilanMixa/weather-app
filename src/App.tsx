import "./App.css";
import Select from "./components/Form/Select";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider>
      <div className="App">
        <Select />
      </div>
    </ReactQueryProvider>
  );
}

export default App;
