// import SearchContextProvider from "./components/Form/Search/SearchContext";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";
import HomePage from "./containers/Home";

function App() {
  return (
    <ReactQueryProvider>
      {/* <SearchContextProvider> */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-screen flex justify-center items-center">
        <HomePage />
      </div>
      {/* </SearchContextProvider> */}
    </ReactQueryProvider>
  );
}

export default App;
