import AverageTemp from "./AverageTemp";
import Form from "./Form";
import useHome from "./useHome";
import WeeklyTemp from "./WeeklyTemp";

const HomePage = () => {
  const { cityData } = useHome();
  console.log(cityData);
  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp />
      <WeeklyTemp />
    </div>
  );
};

export default HomePage;
