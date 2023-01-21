import React from "react";
import { Tabs } from "antd";
import Rooms from "../components/Rooms";
import AddRoom from "../components/AddRoom";
import Users from "../components/Users";
import Bookings from "../components/Bookings";

const AdminScreen = () => {
  return (
    <div className="ml-3 mt-3 mr-3 bs">
      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
        Admin Panel
      </h2>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Bookings`,
            key: "1",
            children: <Bookings />,
          },
          {
            label: `Rooms`,
            key: "2",
            children: <Rooms />,
          },
          {
            label: `Add rooms`,
            key: "3",
            children: <AddRoom />,
          },
          {
            label: `Users`,
            key: "4",
            children: <Users />,
          },
        ]}
      />
    </div>
  );
};

export default AdminScreen;
