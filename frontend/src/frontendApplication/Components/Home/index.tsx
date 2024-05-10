import styled from "styled-components";
import { Flex } from "../../basicStyles/Flex";
import { theme } from "../../Styles/theme";
import { Container } from "../../basicStyles/Container";
import SideBar from "../SidebarComponent";
import { HomeLayoutComponentProps } from "./types";
import HeaderComponent from "../HeaderComponent";
import { useState } from "react";

export const HomeComponent = (props: HomeLayoutComponentProps) => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <Flex flexDirection={"column"}>
      <HeaderComponent
        setShowSideBar={(value: boolean) => setShowSideBar(value)}
        showSideBar={showSideBar}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Flex overflow={"hidden"}>
        <SideBar
          setShowSideBar={(value: boolean) => setShowSideBar(value)}
          showSideBar={showSideBar}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ContainerStyle
          ml={showSideBar ? "220px" : "70px"}
          p={"0"}
          width={showSideBar ? "85vw" : "97vw"}
          mt={62}
          position={"relative"}
        >
          {" "}
          {props.children}{" "}
        </ContainerStyle>
      </Flex>
    </Flex>
  );
};
const ContainerStyle = styled(Container)`
  background-color: ${theme.colors.white[9]};
  box-sizing: border-box;
  // padding: 1.5rem 3rem;
  overflow-y: auto;
`;
export default HomeComponent;
