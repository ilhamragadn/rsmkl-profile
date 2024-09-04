const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-neutral-200 rounded-lg shadow-lg p-4 text-sky-950 flex flex-col justify-center items-center">
      <div className="text-3xl md:text-4xl">{icon}</div>
      <p className="mt-2 md:mt-4 font-bold text-lg md:text-xl tracking-wide text-center">
        {title}
      </p>
    </div>
  );
};

ServiceCard.propTypes;

export default ServiceCard;
