import React, { useEffect } from "react";
import { Tabs } from "antd";
import jwt_decode from "jwt-decode";

import MyBookings from "../components/MyBookings";

const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
const decoded = token ? jwt_decode(token) : null;

const ProfileScreen = () => {
  useEffect(() => {
    if (decoded === null) {
   
      window.location.href("/login");
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5 ml-3">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Profile`,
            key: "1",
            children: (
              <div className="row">
                <div className="col-md-6 bs m-2 p-3">
                  <h1>Name : {decoded?.name}</h1>
                  <h1>Email : {decoded?.email}</h1>
                  <h1>Admin Access : {decoded?.isAdmin ? "Yes" : "No"}</h1>
                  <div className="text-right">
                    <button className="btn btn-primary">
                      Get Admin Access
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            label: `Bookings`,
            key: "2",
            children: (
              <div className="row">
                <MyBookings />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ProfileScreen;
