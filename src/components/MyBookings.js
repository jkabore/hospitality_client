import React, { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

import Loader from "../components/Loader";

import jwt_decode from "jwt-decode";
import { Tag } from "antd";

const user = JSON.parse(localStorage.getItem("currentUser"));
const MyBookings = () => {
  const [mybookings, setmybookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const decoded = jwt_decode(token);

  useEffect(() => {
    const getBookings = async () => {
      try {
        setloading(true);
        const data = await (
          await axios.post(
            `${process.env.REACT_APP_PROD_API}/api/bookings/getbookingsbyuserid`,
            {
              userid: decoded.id,
            }
          )
        ).data;
        setmybookings(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };
    getBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function cancelBooking(bookingid, roomid) {
    try {
      setloading(true);
      await axios.post("/api/bookings/cancelbooking", {
        bookingid: bookingid,
        userid: user._id,
        roomid: roomid,
      });
      setloading(false);
      Swal.fire(
        "Congrats",
        "Your Room has cancelled succeessfully",
        "success"
      ).then((result) => {
        window.location.href = "/profile";
      });
    } catch (error) {
      Swal.fire("Oops", "Something went wrong", "error").then((result) => {
        window.location.href = "/profile";
      });
      setloading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : mybookings.length === 0 ? (
        <p className=" ml-2">Empty please book your room!</p>
      ) : (
        mybookings.map((booking, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-12 my-auto">
                <div className="bs m-1 p-2">
                  <h1>{booking.room}</h1>
                  <p>BookingId : {booking._id}</p>
                  <p>TransactionId : {booking.transactionId}</p>
                  <p>
                    <b>Check In : </b>
                    {booking.fromdate}
                  </p>
                  <p>
                    <b>Check Out : </b>
                    {booking.todate}
                  </p>
                  <p>
                    <b>Amount : </b> ${booking.totalAmount}
                  </p>
                  <p>
                    <b>Status</b> :{" "}
                    {booking.status === "booked" ? (
                      <Tag color="green">Confirmed</Tag>
                    ) : (
                      <Tag color="red">Cancelled</Tag>
                    )}
                  </p>
                  <div className="text-right">
                    {booking.status === "booked" && (
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          cancelBooking(booking._id, booking.roomid)
                        }
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyBookings;
