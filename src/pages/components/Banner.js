import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Banners } from "utils";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      emulateTouch={true}
      showThumbs={false}
      swipeable={true}
    >
      {Banners.map((item, key) => (
        <img key={key} src={item.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
