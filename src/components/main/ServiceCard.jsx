const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-neutral-200 rounded-lg shadow-lg p-4 text-sky-950 flex flex-col justify-center items-center">
      <div className="text-base md:text-xl">{icon}</div>
      <p className="mt-1 md:mt-2 font-bold text-lg md:text-xl tracking-wide text-center">
        {title}
      </p>
    </div>
  );
};

ServiceCard.propTypes;

export default ServiceCard;
