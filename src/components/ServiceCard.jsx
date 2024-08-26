const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-neutral-200 rounded-lg shadow-lg p-4 text-sky-950 flex flex-col justify-center items-center">
      <div>{icon}</div>
      <span className="mt-4 font-bold text-xl tracking-wide">{title}</span>
    </div>
  );
};

ServiceCard.propTypes;

export default ServiceCard;
