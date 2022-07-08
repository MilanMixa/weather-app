// import SearchContextProvider from "./components/Form/Search/SearchContext";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";
import SearchContextProvider from "./components/Search/SearchContext";
import SelectContextProvider from "./components/Select/SelectContext";
import HomePage from "./containers/Home";

function App() {
  return (
    <ReactQueryProvider>
      <SearchContextProvider>
        <SelectContextProvider>
          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-screen flex justify-center items-center">
            <HomePage />
          </div>
        </SelectContextProvider>
      </SearchContextProvider>
    </ReactQueryProvider>
  );
}

export default App;
