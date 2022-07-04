import AverageTemp from "./components/AverageTemp";
import Form from "./containers/Form";
// import SearchContextProvider from "./components/Form/Search/SearchContext";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";
import WeeklyTemp from "./containers/WeeklyTemp";
import HomePage from "./containers/HomePage";

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
