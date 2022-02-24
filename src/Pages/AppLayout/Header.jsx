import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "@atlaskit/mobile-header";
import Navbar from "./Navbar";

function Header(props) {
  const [state, setState] = useState({
    drawerState: "none",
    isOpen: true,
  });

  const navOpened = () => {
    setState({ drawerState: "navigation", isOpen: true });
  };

  const drawerClosed = () => {
    setState({ drawerState: "none", isOpen: false });
  };

  return (
    <div>
      <MobileHeader
        drawerState={state.drawerState}
        menuIconLabel="Menu"
        navigation={(isOpen) =>
          isOpen && <Navbar drawerClosed={drawerClosed} />
        }
        pageHeading="React Addon Test"
        onNavigationOpen={navOpened}
        onDrawerClose={drawerClosed}
      />
      <Outlet />
    </div>
  );
}

export default Header;
