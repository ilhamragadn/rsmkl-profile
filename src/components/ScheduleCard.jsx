const ScheduleCard = ({ day = "", children }) => {
  return (
    <div className="shadow rounded-b-md h-min">
      <p className="text-3xl font-bold text-white text-center p-2 bg-gradient-to-tr from-emerald-300 to-indigo-500 tracking-wider rounded-t-md">
        {day}
      </p>
      {children}
    </div>
  );
};

ScheduleCard.propTypes;

export default ScheduleCard;
