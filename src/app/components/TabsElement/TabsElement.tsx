import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import BasicTab from "./BasicTab";
import TabWithIcon from "./TabWithIcon";

const TabsElement = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Tabs"
        sx={{ bgcolor: "#0057e7", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent className="tabElement">
        <BasicTab></BasicTab>
        <TabWithIcon></TabWithIcon>
      </CardContent>
    </Card>
  );
};

export default TabsElement;
