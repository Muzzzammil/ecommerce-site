import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroSection.css"; // We'll style this later

const HeroSection = () => {
  return (
    <Carousel className="hero-section">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500?text=Latest+Gadgets"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Your One-Stop Shop for Electronics & Home Appliances!</h2>
          <p>Find the best gadgets, home essentials, and more at unbeatable prices.</p>
          <a href="/shop" className="btn btn-primary">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500?text=Best+Deals+on+Appliances"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Upgrade Your Home with Smart Appliances</h2>
          <p>Save big on high-quality fans, LED lights, and battery chargers.</p>
          <a href="/shop" className="btn btn-primary">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
