import AverageTemp from "./components/AverageTemp";
import Form from "./components/Form";
// import SearchContextProvider from "./components/Form/Search/SearchContext";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";
import WeeklyTemp from "./components/WeeklyTemp";

function App() {
  return (
    <ReactQueryProvider>
      {/* <SearchContextProvider> */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-white flex justify-center items-center flex-col">
          <Form />
          <AverageTemp />
          <WeeklyTemp />
        </div>
      </div>
      {/* </SearchContextProvider> */}
    </ReactQueryProvider>
  );
}

export default App;
