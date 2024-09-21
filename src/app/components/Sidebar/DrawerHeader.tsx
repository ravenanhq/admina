import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import MenuListIcon from "../../../Icons/menu-list-icon.svg";
import Image from "next/image";

const LogoSymbol = "/assets/images/mobile-logo.png";
const Logo = "/assets/images/logo.png";

const DrawerHeaderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface DrawerHeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ open, setOpen }) => {
  const handleMenuHide = () => setOpen(false);
  const handleMenuOpen = () => setOpen(true);

  return (
    <DrawerHeaderWrapper
      sx={{
        justifyContent: "center",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      ></ListItemIcon>
      {open ? (
        <Image src={Logo} alt="Logo" width="135" height="26" />
      ) : (
        <Image
          src={LogoSymbol}
          alt="customer support"
          width="24"
          height="22"
          style={{ marginLeft: !open ? "20px" : "" }}
        />
      )}
      <div style={{ cursor: "pointer" }}>
        {open ? (
          <MenuListIcon
            onClick={handleMenuHide}
            style={{
              color: "#fff",
              borderRadius: "25px",
              position: "relative",
              right: "-100px",
              top: "5px",
              fontSize: "20px",
            }}
          />
        ) : (
          <MenuListIcon
            style={{
              position: "relative",
              left: "50px",
              top: "5px",
              fontSize: "20px",
            }}
            onClick={handleMenuOpen}
          />
        )}
      </div>
    </DrawerHeaderWrapper>
  );
};

export default DrawerHeader;
