import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";



import jwt_decode from "jwt-decode";



const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const decoded = token ? jwt_decode(token) : null;
  useEffect(() => {
    if (decoded ) {
   
      window.location.assign("/home");
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decoded]);

  const login = async () => {
    const user = {
      email,
      password,
    };

    try {
      setloading(true);
      const result = await (
        await axios.post(
          `${process.env.REACT_APP_PROD_API}/api/users/login`,
          user
        )
      ).data;

      localStorage.setItem("currentUser", JSON.stringify(result));
      setloading(false);
      window.location.assign("/home");
    } catch (error) {
      seterror(true);
      setloading(false);
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loader />}
          {error && <Error error="Invalid Credentials" />}
          {success && <Success success="User Login Successfull" />}
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control mt-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button
              onClick={login}
              className="btn btn-success mt-3 mb-3 rounded-pill"
            >
              LOGIN
            </button>
            <br />
            <a style={{ color: "black" }} href="/register" className="mt-2">
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
