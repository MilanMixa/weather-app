import AverageTemp from "../../components/AverageTemp";
import Form from "../Form";
import WeeklyTemp from "../WeeklyTemp";

const HomePage = () => {
  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp />
      <WeeklyTemp />
    </div>
  );
};

export default HomePage;
