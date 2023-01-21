import React, { useState} from "react";
import { Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Room = ({ room, fromdate, todate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row m-3 p-3 bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="img-fluid" alt="room" />
      </div>
      <div className="col-md-8 m-l-auto">
        <h1>{room.name}</h1>
        <p>Parking , Reception , Free Wifi</p>
        <p>
          <b>Max Count : {room.maxcount}</b>
        </p>
        <p>
          <b>Phonenumber : </b>
          {room.phonenumber}
        </p>
        <p>
          <b>Type : {room.type}</b>
        </p>
        <p>
          {" "}
          <b>
            From: {fromdate} to {todate}
          </b>
        </p>
        <div style={{ float: "right" }}>
          {fromdate && todate && (
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-dark m-2">Book Now</button>
            </Link>
          )}

          <button className="btn btn-danger m-2" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" data--aos="zoom-in">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel nextLabel="" prevLabel="" indicators={false}>
            {room.imageurls.map((url, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    src={url}
                    className="img-fluid"
                    style={{ height: "400px" }}
                    alt="url"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
