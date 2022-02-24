import React, { useState } from "react";
import { JiraIcon, AtlassianIcon } from "@atlaskit/logo";
import Page from "@atlaskit/page";
import DashboardIcon from "@atlaskit/icon/glyph/dashboard";
import GearIcon from "@atlaskit/icon/glyph/settings";
import Nav, { AkContainerTitle, AkNavigationItem } from "@atlaskit/navigation";
import { NavLink } from "react-router-dom";

const navLinks = [
  ["/home", "Home", DashboardIcon],
  ["/setting", "Settings", GearIcon],
];

function Navbar(props) {
  const [state, setState] = useState({
    isOpen: true,
    menuLoading: true,
    width: "100vh",
  });

  const resize = (resizeState) => {
    setState({
      isOpen: resizeState.isOpen,
      width: resizeState.width,
    });
  };

  console.log("test");
  return (
    <Page
      navigationWidth={304}
      navigation={
        <Nav
          //   containerTheme={presetThemes.global}
          containerHeaderComponent={() => (
            <AkContainerTitle
              icon={<JiraIcon label="jiraicon" size="medium" />}
              text="Atlaskit"
            />
          )}
          globalPrimaryIcon={
            <AtlassianIcon label="Atlassian icon" size="xlarge" />
          }
          isOpen={state.isOpen}
          onResize={resize}
          onResizeStart={(e) => console.log("resizeStart", e)}
          width={state.width}
          hasScrollHintTop
        >
          {navLinks.map((link) => {
            const [url, title, Icon] = link;
            return (
              <NavLink
                key={url}
                to={url}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                onClick={props.drawerClosed}
              >
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                />
              </NavLink>
            );
          })}
        </Nav>
      }
    ></Page>
  );
}

export default Navbar;
