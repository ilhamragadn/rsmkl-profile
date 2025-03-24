const ReadMoreBtn = ({ goTo, txtBtn }) => {
  return (
    <a href={goTo}>
      <div className="mt-2 bg-sky-600 px-8 py-2 rounded-full shadow-lg text-white text-center">
        <p className="font-medium">{txtBtn}</p>
      </div>
    </a>
  );
};

ReadMoreBtn.propTypes;

export default ReadMoreBtn;
