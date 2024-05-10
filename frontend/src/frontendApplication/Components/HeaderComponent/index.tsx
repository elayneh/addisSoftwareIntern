import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { Flex } from "../../basicStyles/Flex";
import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { SideBarProps } from "../SidebarComponent/types";
import { SetStateAction, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./style.css";
import { theme } from "../../Styles/theme";
const HeaderComponent = ({ setShowSideBar, showSideBar }: SideBarProps) => {
  const [anchor, setAnchor] = useState(false);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClickClear = () => {
    setSearchValue("");
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowSearch = () => {
    console.log("search button is clicked");
    setSearchValue("");
  };
  const toggleSideBarShow = (showSideBar: boolean) => {
    setShowSideBar(!showSideBar);
  };
  const toggleDrawer = (value: boolean) => {
    setAnchor(value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSetting = () => {};
  const handleProfile = () => {};
  const handleLogout = () => {};
  return (
    <HeaderContainer>
      <Flex padding={20} color={theme.colors.black[4]}>
        <Flex marginTop={9} style={{ cursor: "pointer" }}>
          {
            <RxHamburgerMenu
              size={30}
              onClick={() => toggleSideBarShow(showSideBar)}
            />
          }
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"} ml={20}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "green",
            }}
          >
            AddisSoftwareSongPlayer
          </Typography>
        </Flex>
      </Flex>
      <Flex
        color={theme.colors.black[4]}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pl={120}
      >
        <FormControl sx={{ width: "50%" }}>
          <OutlinedInput
            type={"text"}
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                {searchValue && (
                  <IconButton onClick={handleClickClear} edge="end">
                    <IoMdClose />
                  </IconButton>
                )}
              </InputAdornment>
            }
            sx={{
              borderRadius: "50px 0 0 50px",
              background: `${theme.colors.background[8]}`,
              height: "40px",
            }}
          />
        </FormControl>
        <Button
          variant="outlined"
          color="info"
          style={{
            borderRadius: "0px 50px 50px 0px",
            justifyContent: "center",
            marginLeft: -42,
            height: 40,
          }}
        >
          <IconButton
            onClick={() => handleClickShowSearch()}
            className="search-icon"
          >
            {<CiSearch />}
          </IconButton>
        </Button>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Badge badgeContent={"5+"} color="error">
            <GoBell color="action" size={20} />
          </Badge>
          <IconButton
            onClick={() => toggleDrawer(true)}
            className="avatar-icon"
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 40, height: 40, marginLeft: 0 }}
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </IconButton>
        </Flex>
      </Flex>
      <Flex>
        <SwipeableDrawer
          anchor={"right"}
          open={anchor}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
          PaperProps={{
            style: {
              width: "170px",
              background: "#FFF",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "10px",
              padding: "10px",
            },
          }}
        >
          <Flex flexDirection={"column"} style={{ gap: 0 }}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              style={{ paddingTop: 10 }}
            >
              <Flex flexDirection={"column"}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
                <Typography style={{ fontSize: 10 }}>{name}</Typography>
                <Typography style={{ fontSize: 10 }}>{email}</Typography>
              </Flex>
              <Flex>
                <IconButton
                  className="iconButton"
                  onClick={() => toggleDrawer(false)}
                >
                  <IoMdClose size={20} className="IoMdClose" />
                </IconButton>
              </Flex>
            </Flex>
            <ProfileButton
              onClick={() => {
                handleProfile();
                toggleDrawer(false);
              }}
              style={{ fontSize: 10 }}
            >
              Profile
            </ProfileButton>
            <Divider />
            <ProfileButton
              onClick={() => {
                handleSetting();
                toggleDrawer(false);
              }}
              style={{ fontSize: 10 }}
            >
              Settings
            </ProfileButton>
            <Divider />
            <ProfileButton
              onClick={() => {
                handleClickOpen();
                toggleDrawer(false);
              }}
              style={{ fontSize: 10 }}
            >
              Logout
            </ProfileButton>
          </Flex>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              style: {
                width: "500px",
                height: "90px",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
                paddingRight: "0px",
              },
            }}
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Confirm to delete?
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{ marginTop: "auto", marginBottom: "-50px", gap: 30 }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                color="error"
                style={{
                  width: "130px",
                  height: "45px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogout}
                variant="outlined"
                color="success"
                style={{
                  width: "130px",
                  height: "40px",
                }}
                autoFocus
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </SwipeableDrawer>
      </Flex>
    </HeaderContainer>
  );
};

const HeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${theme.colors.white[8]};
  color: ${theme.colors.black[4]};
  width: 100%;
  left: 0;
  top: 0;
  height: 70px;
  z-index: 5;
`;

const Divider = styled("hr")`
  border: none;
  border-top: 1px solid #e1e4e8;
  margin: 5px 0;
`;

const ProfileButton = styled(Button)`
  && {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    color: black;
    text-transform: none;
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    transition: background-color 0.3s;
    border-radius: 0;
  }
  &&:hover {
    background-color: #f6f8fa;
  }
`;

export default HeaderComponent;
