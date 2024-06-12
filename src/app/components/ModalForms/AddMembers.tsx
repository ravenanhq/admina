import React, { useEffect, useState } from "react";
import { Button, Popover, TextField, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import members from "./members.json";

const AddMember = ({ anchorEl, close, onMembersSelected }) => {
  const [data, setData] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    console.log(members);
    setData(members);
    console.log(setData);
  });

  const handleSave = () => {
    onMembersSelected(selectedMembers);
    close();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Stack spacing={3} sx={{ width: "200px" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={data}
            getOptionLabel={(data) => data.name}
            onChange={(event, newValue) => setSelectedMembers(newValue)}
            value={selectedMembers}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Members"
                placeholder="Add Members"
                sx={{ fontSize: "14px" }}
              />
            )}
          />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Popover>
  );
};

export default AddMember;
