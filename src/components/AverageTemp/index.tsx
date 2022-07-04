import useSearch from "../Search/useSearch";

const AverageTemp = () => {
  const { cityData } = useSearch();
  console.log(cityData);
  return (
    <div>
      <div>30.06.2022 - 05.07.2022</div>
      <div>10c</div>
    </div>
  );
};

export default AverageTemp;
