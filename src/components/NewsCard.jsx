import ReadMoreBtn from "../utils/ReadMoreBtn";

const NewsCard = ({ imgSrc, title, body }) => {
  return (
    <div className="w-80 max-w-sm overflow-hidden bg-gray-50 rounded-lg shadow-md">
      <div className="flex h-full">
        <div>
          <img
            src={imgSrc}
            alt="foto artikel"
            className="rounded-t-lg shadow"
          />
          <div className="m-4">
            <p className="font-semibold text-xl text-justify capitalize leading-6">
              {title}
            </p>
            <p className="text-sm text-justify text-gray-400 mt-2 leading-tight">
              {body}
            </p>
            <div className="mt-2">
              <ReadMoreBtn goTo="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes;

export default NewsCard;
