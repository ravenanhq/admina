import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled } from "@mui/material/styles";

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
    <DrawerHeaderWrapper>
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faA}
          size="lg"
          style={{
            fontSize: "24px",
            marginLeft: "15px",
            paddingTop: "0px",
            color: "#007bff",
            marginTop: "-3px",
          }}
        />
      </ListItemIcon>
      <ListItemText
        sx={{
          opacity: open ? 1 : 0,
          marginLeft: "1px",
        }}
        className="headerLogo"
      >
        ADMINA
      </ListItemText>
      <div style={{ cursor: "pointer" }}>
        {open ? (
          <KeyboardArrowLeftIcon
            onClick={handleMenuHide}
            style={{
              background: "#000",
              color: "#fff",
              borderRadius: "25px",
              position: "relative",
              right: "-18px",
              fontSize: "20px",
            }}
          />
        ) : (
          <KeyboardArrowRightIcon
            style={{
              background: "#000",
              color: "#fff",
              borderRadius: "25px",
              position: "relative",
              left: "14px",
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
