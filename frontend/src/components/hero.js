import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css";
const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block mx-auto  img-hero"
          src={process.env.PUBLIC_URL + "/carousel-img1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>New Collection</h3>
          <p>%100 cotton</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto img-hero"
          src={process.env.PUBLIC_URL + "/carousel-img2.jpg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Refreshing</h3>
          <p>Made for the planet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto img-hero"
          src={process.env.PUBLIC_URL + "/carousel-img3.jpg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>New Styles</h3>
          <p>Like nothing you have seen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
