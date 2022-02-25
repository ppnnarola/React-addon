import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./Pages/AppLayout/Header";
import Login from "./Pages/AuthPages/Login";
import Dashboard from "./Pages/Dashboard";
import SettingComponent from "./Pages/SettingComponent";
import ProfileComponent from "./Pages/ProfileComponent";

export const MainRoutes = () => {
  useEffect(() => {}, []);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route element={<Header />}>
            <Route exact path="/" element={<Navigate to="/home" replace />} />
            <Route exact path="/home" element={<Dashboard />} />
            <Route exact path="/setting" element={<SettingComponent />} />
            <Route exact path="/profile" element={<ProfileComponent />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{props.children}</Fragment>;
};

export default MainRoutes;
