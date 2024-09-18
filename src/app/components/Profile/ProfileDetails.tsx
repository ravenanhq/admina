import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoneIcon from "@mui/icons-material/Done";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const ProfileDetails = () => {
  return (
    <Card
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "0",
      }}
    >
      <CardContent>
        <Typography variant="subtitle1">About</Typography>

        <List
          sx={{
            paddingTop: "0px",
            paddingBottom: "0px",
            marginBottom: "0",
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
          className="list-group list-group-flush rounded-3 list-unstyled"
        >
          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon
                style={{ minWidth: "30px", color: "#333333" }}
              />
            </ListItemIcon>
            <ListItemText primary="Full Name" secondary="User" />
          </ListItem>
          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <DoneIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Status" secondary="Active" />
          </ListItem>
          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <GitHubIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Role" secondary="Admin" />
          </ListItem>

          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <LocationOnIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Country" secondary="India" />
          </ListItem>

          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <LanguageIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Languages" secondary="English" />
          </ListItem>

          <Typography variant="subtitle2" style={{ marginTop: "1rem" }}>
            Contacts
          </Typography>

          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <CallIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Contact" secondary="(123) 456-7890" />
          </ListItem>

          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" secondary="@user" />
          </ListItem>
          <ListItem
            divider
            sx={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <ListItemIcon>
              <MailIcon style={{ minWidth: "30px", color: "#333333" }} />
            </ListItemIcon>
            <ListItemText primary="Email" secondary="demo@gmail.com" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
