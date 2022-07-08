const AverageTemp = ({
  firstDay,
  lastDay,
}: {
  firstDay: any;
  lastDay: any;
}) => {
  return (
    <div>
      <div>
        {firstDay} - {lastDay}
      </div>
      <div>10c</div>
    </div>
  );
};

export default AverageTemp;
