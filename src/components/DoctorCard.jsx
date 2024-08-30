const DoctorCard = ({
  doctorImg,
  doctorName = "",
  doctorSpecialist = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`relative rounded-lg shadow-md ${className}`} {...props}>
      <img
        className="max-w-full h-auto mx-auto"
        src={doctorImg}
        alt="doctor image"
      />
      <div className="absolute bottom-2 left-0 w-full bg-sky-50 opacity-90 p-1 md:p-2 lg:p-4 text-center">
        <p className="text-sm md:text-xl lg:text-2xl font-bold">{doctorName}</p>
        <p className="text-xs md:text-md lg:text-lg font-semibold mt-1">
          {doctorSpecialist}
        </p>
      </div>
    </div>
  );
};

DoctorCard.propTypes;

export default DoctorCard;
