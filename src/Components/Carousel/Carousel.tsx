import React, { useRef, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  refs.current = images.map((_, i) => refs.current[i] ?? null);

  const scrollToImage = (i: number) => {
    setCurrentImage(i);
    if (refs.current[i]) {
      refs.current[i]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="order-2 sm:order-2 w-full flex justify-center">
      <div className=" flex justify-center w-full items-center">
        <div className="relative w-3/4">
          <div className="carousel">
            {sliderControl(true)}
            {images.map((img, i) => (
              <div
                className="w-full flex-shrink-0"
                key={img}
                ref={(el) => (refs.current[i] = el)}
              >
                <img
                  src={img}
                  className="w-full object-contain"
                  alt={`Slide ${i + 1}`}
                />
              </div>
            ))}
            {sliderControl(false)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
