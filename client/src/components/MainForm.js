import React, { Component } from "react";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

class MainForm extends Component {
  render() {
    return (
      <Carousel interval="3000" controls={false} fade={true} indicators={false}>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image2}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image4}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image5}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image6}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image7}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image8}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image9}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image10}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image11}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid rounded"
            src={image12}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainForm;
