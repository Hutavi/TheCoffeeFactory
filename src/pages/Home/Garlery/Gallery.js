import React from "react";
import PropTypes from "prop-types";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="container">
        <h1>Sản phẩm yêu thích</h1>
        <div className="gallery-wrap">
          <div className="item item-1" />
          <div className="item item-2" />
          <div className="item item-3" />
          <div className="item item-4" />
          <div className="item item-5" />
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
