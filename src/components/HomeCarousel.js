import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const HomeCarousel = () => {
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const decoded = token ? jwt_decode(token) : null;
  const navigate = useNavigate();
  const GOTO = () => {
    if (decoded) {
      navigate("/home");
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps

      navigate("/login");
    }
  };
  return (
    <Carousel fade nextLabel="" prevLabel="" indicators={false}>
      <Carousel.Item class="carousel-item active">
        <img
          className="d-block ct-img"
          src="https://ibbiza.s3.us-east-2.amazonaws.com/front.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2
            className="text-center fs-1 fw-b "
            style={{ marginBottom: "20%" }}
          >
            IBIZA OCEANFRONT RESORT
          </h2>
          <MDBBtn color="dark" className="text-center" onClick={GOTO}>
            BOOK NOW
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block ct-img"
          src="https://ibbiza.s3.us-east-2.amazonaws.com/pic1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-center fs-1 fw-b">IBIZA OCEANFRONT RESORT</h2>
          <h1 className="text-center fs-2 fw-b" style={{ marginBottom: "20%" }}>
            Book a luxurious golf getaway
          </h1>

          <MDBBtn color="dark" className="text-center" onClick={GOTO}>
            BOOK NOW
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block ct-img"
          src="https://ibbiza.s3.us-east-2.amazonaws.com/pic2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="text-center fs-1 fw-b">IBIZA OCEANFRONT RESORT</h2>
          <h1 className="text-center fs-2 fw-b" style={{ marginBottom: "20%" }}>
            Forever deserves a worthy destination. Discover our creative wedding
            options.
          </h1>
          <MDBBtn color="dark" className="text-center" onClick={GOTO}>
            BOOK NOW
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block ct-img"
          src="https://ibbiza.s3.us-east-2.amazonaws.com/pic3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="text-center fs-1 fw-b">IBIZA OCEANFRONT RESORT</h2>
          <h1 className="text-center fs-2 fw-b" style={{ marginBottom: "20%" }}>
            Save up to 15% and enjoy a $15 dining credit and late checkout
          </h1>
          <MDBBtn color="dark" className="text-center" onClick={GOTO}>
            BOOK NOW
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
