import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    LinearProgress,
} from "@mui/material";

import React from "react";

const Summary = () => {
    return (
        <Card
            style={{
                width: "100%",
                borderRadius: "10px",
                borderBottom: "3px solid #33bebe",
            }}
        >
            <CardHeader
                title="Summary"
                titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
                sx={{ marginTop: "20px" }}
            />
            <CardContent sx={{ display: "flex" }}>
                <div
                    style={{
                        display: "flex",
                        margin: "2px 10px 0 0",
                        background: "#5c69ff",
                        padding: "0 3px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                    }}
                >
                    <AttachMoneyOutlinedIcon
                        fontSize="large"
                        sx={{ color: "#fff", width: "26px", margin: "1px 4px" }}
                    />
                </div>

                <div style={{ alignItems: 'center', width: '100%' }}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" style={{ fontSize: '16px' }}>Income</Typography>
                        <Typography variant="body1">$500</Typography> {/* Change the price value as per your requirement */}
                    </div>
                    <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={{
                            height: '10px',
                            borderRadius: '20px',
                            backgroundColor: '#E8E8E8',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: '20px',
                                backgroundColor: '#007BFF',
                            },
                        }}
                    />
                </div>

            </CardContent>
            <CardContent sx={{ display: "flex" }}>
                <div
                    style={{
                        display: "flex",
                        margin: "2px 10px 0 0",
                        background: "#4cb846",
                        padding: "0 3px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                    }}
                >
                    <AttachMoneyOutlinedIcon
                        fontSize="large"
                        sx={{ color: "#fff", width: "26px", margin: "1px 4px" }}
                    />
                </div>
                <div style={{ alignItems: 'center', width: '100%' }}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" style={{ fontSize: '16px' }}>Profit</Typography>
                        <Typography variant="body1">$800</Typography> {/* Change the price value as per your requirement */}
                    </div>
                    <LinearProgress
                        variant="determinate"
                        value={90}
                        sx={{
                            height: '10px',
                            borderRadius: '20px',
                            backgroundColor: '#E8E8E8',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: '20px',
                                backgroundColor: '#16a86b',
                            },
                        }}
                    />
                </div>
            </CardContent>
            <CardContent sx={{ display: "flex" }}>
                <div
                    style={{
                        display: "flex",
                        margin: "2px 10px 0 0",
                        background: "#f8952c",
                        padding: "0 3px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                    }}
                >
                    <MeetingRoomOutlinedIcon
                        fontSize="large"
                        sx={{ color: "#fff", width: "26px", margin: "1px 4px" }}
                    />
                </div>
            <div style={{ alignItems: 'center', width: '100%' }}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" style={{ fontSize: '16px' }}>Expenses</Typography>
                        <Typography variant="body1">$700</Typography> {/* Change the price value as per your requirement */}
                    </div>
                    <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{
                            height: '10px',
                            borderRadius: '20px',
                            backgroundColor: '#E8E8E8',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: '20px',
                                backgroundColor: '#f8952c',
                            },
                        }}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Summary;
