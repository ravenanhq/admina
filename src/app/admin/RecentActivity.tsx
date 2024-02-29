import React from "react";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import {
    Card,
    CardContent,
    Typography,
    CardHeader,
  } from "@mui/material";

const RecentAcitivty = () => {
    return (
        <Card
              style={{
                width: "100%",
                borderRadius: "10px",
                borderBottom: "3px solid #33bebe",
              }}
            >
              <CardHeader
                title="Recent Activity"
                titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
                sx={{ marginTop: "20px" }}
              />
              <CardContent
                sx={{ display: "flex" ,padding:"12px 16px"}}
              >
                <div style={{ display: "flex",
                 margin: "2px 10px 0 0",
                 background:"#5c69ff",
                 padding:"0 3px",
                 width:"40px",
                 height:"40px" ,
                 borderRadius:"20px"}}>
                  <AttachMoneyOutlinedIcon fontSize="large" sx={{color:"#fff",width:"26px",margin:"1px 4px"}} />
                </div>
                <div>
                  <Typography variant="h6" style={{fontSize:"16px"}}>Renewed Account with <span style={{color:"#71c8ff",fontSize:"16px"}}> BB_10MBPS_2m</span> Plan</Typography>
                  <Typography component="div" sx={{color:"#b4b4b4"}}>28-12-2024 2.03pm</Typography>
                </div>
              </CardContent>
              <CardContent
                sx={{ display: "flex",padding:"12px 16px" }}
              >
                <div style={{ display: "flex",
                 margin: "2px 10px 0 0",
                 background:"#4cb846",
                 padding:"0 3px",
                 width:"40px",
                 height:"40px" ,
                 borderRadius:"20px"}}>
                  <CloseOutlinedIcon fontSize="large" sx={{color:"#fff",width:"26px",margin:"1px 4px"}}/>
                </div>
                <div>
                  <Typography variant="h6" style={{fontSize:"16px"}}>Closed Issue <span style={{color:"#71c8ff",fontSize:"16px"}}> #1234</span> Plan</Typography>
                  <Typography component="div" sx={{color:"#b4b4b4"}}>28-12-2024 2.03pm</Typography>
                </div>
              </CardContent>
              <CardContent
                sx={{ display: "flex",padding:"12px 16px" }}
              >
                <div style={{ display: "flex",
                 margin: "2px 10px 0 0",
                 background:"#f03636",
                 padding:"0 3px",
                 width:"40px",
                 height:"40px" ,
                 borderRadius:"20px"}}>
                  <MeetingRoomOutlinedIcon fontSize="large" sx={{color:"#fff",width:"26px",margin:"1px 4px"}}/>
                </div>
                <div>
                  <Typography variant="h6" style={{fontSize:"16px"}}>Opened Issue<span style={{color:"#71c8ff",fontSize:"16px"}}> #1234</span> Plan</Typography>
                  <Typography component="div" sx={{color:"#b4b4b4"}}>28-12-2024 2.03pm</Typography>
                </div>
              </CardContent>
            </Card>
    )
}

export default RecentAcitivty;