import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import BasicTab from "./BasicTab";
import TabWithIcon from "./TabWithIcon";

const TabsElement = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Tabs"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent className="tabElement">
        <BasicTab></BasicTab>
        <TabWithIcon></TabWithIcon>
      </CardContent>
    </Card>
  );
};

export default TabsElement;
