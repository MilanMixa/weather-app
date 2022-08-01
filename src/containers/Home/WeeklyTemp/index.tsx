import dayjs from "dayjs";
import { FiveDayInfo } from "..";

const WeeklyTemp = ({ fiveDayInfo }: { fiveDayInfo: FiveDayInfo[] }) => {
  // console.log(fiveDayInfo, " five day info ");
  return (
    <div className="flex gap-x-5">
      {fiveDayInfo.map((dayInfo: FiveDayInfo) => {
        // console.log(dayInfo, "day info");
        const date = dayjs(dayInfo.day).format("dddd");
        return (
          <div key={dayInfo.day}>
            <div>{date}</div>
            <div>{dayInfo.dailyAvgTemp}c</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyTemp;
