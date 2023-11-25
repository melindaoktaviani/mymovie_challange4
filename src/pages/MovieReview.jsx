// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-bootstrap";
import Avangers from "../assets/avangers.jpg";
import Trolls from "../assets/trolls.jpg";

function MovieReview() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="d-block w-100" src={Avangers} alt="avangers" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Trolls} alt="trolls" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MovieReview;
