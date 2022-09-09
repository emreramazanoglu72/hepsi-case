import React from "react";
import { Brands } from "utils";
import Slider from "react-slick";

const BrandList = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 5,
  };

  return (
  <div className="brandlist">
      <h2>Aradığın Markalar</h2>
      <Slider {...settings}>
        {Brands.map((item, key) => (
          <div className="item" key={key}>
            <img src={item.image} />
            <p>{item.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandList;
