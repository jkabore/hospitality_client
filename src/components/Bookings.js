import React, { useEffect, useState } from "react";
import axios from "axios";

import Error from "../components/Error";
import Loader from "../components/Loader";

const Bookings = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const getBookigs = async () => {
      try {
        setloading(true);
        const data = await (
          await axios.get(
            `${process.env.REACT_APP_PROD_API}/api/bookings/getallbookings`
          )
        ).data;
        setbookings(data);

        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };
    getBookigs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="col-md-10">
      <h1>Bookings</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Booking ID</th>
                <th>User ID</th>
                <th>Room</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => {
                return (
                  <tr key={index}>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromdate}</td>
                    <td>{booking.todate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookings;
