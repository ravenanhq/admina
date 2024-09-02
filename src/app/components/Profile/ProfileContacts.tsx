import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ContactData from "../../../profile-contact.json";

const ProfileContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(ContactData);
  }, []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {contacts.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar sx={{ width: 40, height: 40 }}>
              <img
                src={item.avatar}
                alt="Avatar"
                style={{ width: 40, height: 40 }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProfileContacts;
