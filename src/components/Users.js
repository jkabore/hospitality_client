import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
const Users = () => {
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await (
          await axios.get(
            `${process.env.REACT_APP_PROD_API}/api/users/allusers`
          )
        ).data;
        setusers(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="row">
      {loading && <Loader />}

      <div className="col-md-10">
        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>isAdmin</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
