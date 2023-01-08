import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  // const [shuffle, setShuffle] = useState([]);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (current < 0) {
      setCurrent(lastIndex);
    }
    if (current > lastIndex) {
      setCurrent(0);
    }
    let sliders = setInterval(() => {
      setCurrent(current + 1);
    }, 3000);
    return () => clearInterval(sliders);
  }, [current, slides.length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <div className="left-arrow" onClick={prevSlide}>
        {" "}
        ◀︎{" "}
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        {" "}
        ▶︎{" "}
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div key={slide.id}>
            {index === current && (
              <img 
                src={slide.image}
                alt="restaurant-photos"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
