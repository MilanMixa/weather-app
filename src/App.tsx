import ReactQueryProvider from "./components/Providers/ReactQueryProvider";
import SearchContextProvider from "./components/Search/SearchContext";
import SelectContextProvider from "./components/Select/SelectContext";
import HomePage from "./containers/Home";

function App() {
  return (
    <ReactQueryProvider>
      <SearchContextProvider>
        <SelectContextProvider>
          <HomePage />
        </SelectContextProvider>
      </SearchContextProvider>
    </ReactQueryProvider>
  );
}

export default App;
