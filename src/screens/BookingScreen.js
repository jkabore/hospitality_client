import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
const BookingScreen = () => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const [room, setroom] = useState();
  const { roomid, fromdate, todate } = useParams();

  const fromDates = moment(fromdate).format("MM-DD-YYYY");
  const toDates = moment(todate).format("MM-DD-YYYY ");

  const totalDays = moment
    .duration(moment(toDates).diff(moment(fromDates)))
    .asDays();

  const token = JSON.parse(localStorage.getItem("currentUser")).token;
  const decoded = jwt_decode(token);

  const [totalAmount, settotalAmount] = useState();

  useEffect(() => {
    const getRooms = async () => {
      try {
        setloading(true);
        const data = await (
          await axios.post(
            `${process.env.REACT_APP_PROD_API}/api/rooms/getroombyid`,
            { roomid }
          )
        ).data;

        setroom(data);
        settotalAmount(data.rentperday * totalDays);
        console.log("Amount:", totalAmount);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };
    getRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToken = async (token) => {
    const bookingDetails = {
      userid: decoded.id,
      room,
      fromdate,
      todate,
      totalDays,
      totalAmount,
      token,
    };

    try {
      setloading(true);
      await axios.post(
        `${process.env.REACT_APP_PROD_API}/api/bookings/bookroom`,
        bookingDetails
      );
      Swal.fire(
        "Congrats",
        "Your Room has booked succeessfully",
        "success"
      ).then((result) => {
        window.location.href = "/profile";
      });
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
      Swal.fire("Oops", "Something went wrong , please try later", "error");
    }
  };

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="row p-3 mb-5 bs" data-aos="flip-right" duration="2000">
          <div className="col-md-6 my-auto">
            <div>
              <h1> {room.name}</h1>
              <img src={room.imageurls[0]} style={{ height: "400px" }} />
            </div>
          </div>
          <div className="col-md-6 text-right">
            <div>
              <h1>
                <b>Booking Details</b>
              </h1>
              <hr />

              <p>
                <b>Name</b> :{decoded.name}{" "}
              </p>
              <p>
                <b>From Date</b> :{fromdate}{" "}
              </p>
              <p>
                <b>To Date</b> : {todate}
              </p>
              <p>
                <b>Max Count </b>: {room.maxcount}
              </p>
            </div>

            <div className="mt-5">
              <h1>
                <b>Amount</b>
              </h1>
              <hr />
              <p>
                Total Days :{totalDays} <b></b>
              </p>
              <p>
                Rent Per Day : <b>{room.rentperday}</b>
              </p>
              <h1>
                <b>Total Amount : $ {totalAmount}</b>
              </h1>
            </div>

            <StripeCheckout
              currency="USD"
              amount={totalAmount * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPEKEY}
            >
              <button className="btn btn-primary">Pay Now</button>
            </StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingScreen;
