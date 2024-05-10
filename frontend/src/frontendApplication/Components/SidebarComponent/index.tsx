/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { theme } from "../../Styles/theme";
import { SideBarMenuItem } from "./SidebarMenuItem";
import { SideBarProps } from "./types";
import { useEffect } from "react";
import { DashboardMenu } from "./../../../utils/util/constants";

const SideBar = ({ setShowSideBar, showSideBar }: SideBarProps) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1147) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SideBarContainer
      style={{
        minWidth: showSideBar ? "150px" : "40px"
        
      }}
    >
      <SidebarBodyContainer>
        {DashboardMenu.map(({ icon, label, to, sideBarCount }, index) => (
          <SideBarMenuItem
            icon={icon}
            iconSize={20}
            key={index}
            label={label}
            showLabel={showSideBar}
            to={to}
            sideBarCount={sideBarCount}
          />
        ))}
      </SidebarBodyContainer>
    </SideBarContainer>
  );
};

export default SideBar;
const SideBarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.black[3]};
  color: ${theme.colors.white[4]};
  position: fixed;
  transition: all 100ms ease-in-out;
  top: 70px;
  height: 100%;
  z-index: 5;
`;
const SidebarBodyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-inline: 7px;
  margin-bottom: auto;
  margin-top: 40px;
`;
