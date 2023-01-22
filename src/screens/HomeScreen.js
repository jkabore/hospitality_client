import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Room from "../components/Room";
import { DatePicker } from "antd";
import moment from "moment";
//import "antd/dist/antd.css";


const { RangePicker } = DatePicker;
const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [duplicateRooms, setduplicateRooms] = useState([]);
  const [searchkey, setsearchkey] = useState("");
  const [type, settype] = useState("all");

  useEffect(() => {
    const getRooms = async () => {
      try {
        setloading(true);
        const room = await (
          await axios.get(
            `${process.env.REACT_APP_PROD_API}/api/rooms/getallrooms`
          )
        ).data;

        setRooms(room);
        setduplicateRooms(room);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };
    getRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterBySearch = async () => {
    const tempRooms = duplicateRooms.filter((room) =>
      room.name.toLowerCase().includes(searchkey.toLocaleLowerCase())
    );
    setRooms(tempRooms);
  };

  const filterByType = async (e) => {
    settype(e);

    if (e !== "all") {
      const tempRooms = duplicateRooms.filter((room) => {
        return room.type.toLowerCase() === e.toLowerCase();
      });
      console.log(tempRooms);
      setRooms(tempRooms);
    } else {
      setRooms(duplicateRooms);
    }
  };
  function filterByDate(val, dates) {
    setfromdate(moment(dates[0]).format("MM-DD-YYYY"));
    settodate(moment(dates[1]).format("MM-DD-YYYY"));

    let temp = [];
    let availability = false;
    for (let room of duplicateRooms) {
      if (room.currentbookings > 0) {
        for (let booking of room.currentbookings) {
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.todate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability || room.currentbookings.length === 0) {
        temp.push(room);
      }
      setRooms(temp);
    }
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row bs p-3 m-5">
          <div className="col-md-4">
            <RangePicker
              style={{ height: "38px" }}
              onChange={filterByDate}
              format="MM-DD-YYYY"
              className="m-2"
              disabledDate={(current) => current.isBefore(moment().subtract(1,"day"))}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control  m-2"
              placeholder="Search Rooms"
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control m-2"
              value={type}
              onChange={(e) => {
                filterByType(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="penthouse">Penthouse</option>
              <option value="king">King</option>
              <option value="queen">Queen</option>
              <option value="double">Double</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          rooms.map((room, index) => {
            return (
              <div className="col-md-8" data-aos="zoom-in" key={index}>
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
