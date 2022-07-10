const AverageTemp = ({
  firstDay,
  lastDay,
  avgTemp,
}: {
  firstDay: any;
  lastDay: any;
  avgTemp: any;
}) => {
  return (
    <div>
      <div>
        {firstDay} - {lastDay}
      </div>
      <div>{avgTemp}c</div>
    </div>
  );
};

export default AverageTemp;
