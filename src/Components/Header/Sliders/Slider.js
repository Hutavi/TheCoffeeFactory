import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";



const Slider = () => {
  const [widthChange, setWidth] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      setWidth(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sliderInterface">
      <div
        className="img-sliders"
        style={{ transform: "translateX(-" + widthChange * 100 + "%)" }}
      >
        <div className="sliderItem">
          <img src="../../imgSliders/slideshow1.jpg" alt="slideshow-1" />
        </div>
        <div className="sliderItem">
          <img src="../../imgSliders/slideshow2.webp" alt="slideshow-2" />
        </div>
        <div className="sliderItem">
          <img
            src="https://theme.hstatic.net/200000399631/1000761068/14/our-story-h3-2.jpg?v=262"
            alt="slideshow-3"
          />
        </div>
      </div>

      <div className="buttons-move">
        <div
          className={"button-mov" + (widthChange === 0 ? " button-active" : "")}
          onClick={() => setWidth(0)}
        ></div>
        <div
          className={"button-mov" + (widthChange === 1 ? " button-active" : "")}
          onClick={() => setWidth(1)}
        ></div>
        <div
          className={"button-mov" + (widthChange === 2 ? " button-active" : "")}
          onClick={() => setWidth(2)}
        ></div>
      </div>
    </div>
  );
};


Slider.propTypes = {};

export default Slider;
