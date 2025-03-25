const NewsCard = ({ imgSrc, title, body, children }) => {
  return (
    <div className="w-80 max-w-sm max-h-[25rem] h-fit overflow-hidden bg-gray-50 rounded-lg shadow-md">
      <div className="flex">
        <div>
          <img
            src={imgSrc}
            alt="foto artikel"
            className="rounded-t-lg shadow w-80 h-[12rem]"
          />
          <div className="m-4">
            <p className="font-semibold text-xl text-center capitalize tracking-tight line-clamp-2">
              {title}
            </p>
            <p className="text-sm text-gray-400 text-justify mt-2 leading-tight line-clamp-3">
              {body}
            </p>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes;

export default NewsCard;
