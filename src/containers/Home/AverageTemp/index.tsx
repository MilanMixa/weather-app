import dayjs from "dayjs";

const AverageTemp = ({
  firstDay,
  lastDay,
  avgTemp,
}: {
  firstDay: string;
  lastDay: string;
  avgTemp: number;
}) => {
  const formatedFirstDay: string = dayjs(firstDay).format("MMM DD -");
  const formatedLastDay: string = dayjs(lastDay).format("DD YYYY");

  return (
    <div>
      <div>
        {formatedFirstDay} {formatedLastDay}
      </div>
      <div>{avgTemp}c</div>
    </div>
  );
};

export default AverageTemp;
