import dayjs from "dayjs";

const WeeklyTemp = ({ fiveDayInfo }: any) => {
  return (
    <div className="flex gap-x-5">
      {fiveDayInfo.map((dayInfo: any) => {
        const date = dayjs(dayInfo.day).format("dddd");
        return (
          <div key={dayInfo.day}>
            <div>{date}</div>
            <div>{dayInfo.dailyAvgTemp}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyTemp;
