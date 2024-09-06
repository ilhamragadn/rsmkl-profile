import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Carousel = ({ srcImg, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === srcImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [srcImg.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? srcImg.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === srcImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative h-48 md:h-[26rem] lg:h-auto overflow-hidden  rounded-lg shadow-lg">
        <div>
          <img
            src={srcImg[currentIndex]}
            className={`absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
            {...props}
            alt={`carousel-img-${currentIndex}`}
          />
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-1 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          size="3x"
          className="text-gray-300 opacity-40"
        />
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-1 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size="3x"
          className="text-gray-300 opacity-40"
        />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

Carousel.propTypes;

export default Carousel;
