const ScheduleList = ({
  speciality = "",
  startHour = "",
  endHour = "",
  doctorInCharge = "",
}) => {
  return (
    <div>
      <div className="flex justify-between p-2 bg-gradient-to-t from-white via-slate-100 to-white text-xl font-medium">
        <p>{speciality}</p>
        <p>
          {startHour} &minus; {endHour}
        </p>
      </div>
      <p className="py-2 ps-4 text-sm font-semibold tracking-wide">
        {doctorInCharge}
      </p>
    </div>
  );
};

ScheduleList.propTypes;

export default ScheduleList;
