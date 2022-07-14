import dayjs from "dayjs";

const AverageTemp = ({
  firstDay = undefined,
  lastDay,
  avgTemp,
}: {
  firstDay: string | undefined;
  lastDay: string | undefined;
  avgTemp: number;
}) => {
  const formatedFirstDay: string = dayjs(firstDay).format("MMM DD -");
  const formatedLastDay: string = dayjs(lastDay).format("DD YYYY");

  return (
    <div>
      {firstDay && (
        <>
          <div>
            {formatedFirstDay} {formatedLastDay}
          </div>
          <div>{avgTemp}c</div>
        </>
      )}
    </div>
  );
};

export default AverageTemp;
