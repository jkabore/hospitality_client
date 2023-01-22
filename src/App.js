import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";

import PageNotFound from "./components/PageNotFound";
import PrivateRoute, { Admin } from "./components/PrivateRoute";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/home"
            exact
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/book/:roomid/:fromdate/:todate"
            exact
            element={
              <PrivateRoute>
                <BookingScreen />
              </PrivateRoute>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route
            path="/profile"
            exact
            element={
              <PrivateRoute>
                <ProfileScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            exact
            element={
              <PrivateRoute>
                <Admin>
                  <AdminScreen />
                </Admin>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
