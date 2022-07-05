import AverageTemp from "./AverageTemp";
import Form from "./Form";
import WeeklyTemp from "./WeeklyTemp";

const Home = () => {
  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp />
      <WeeklyTemp />
    </div>
  );
};

export default Home;
