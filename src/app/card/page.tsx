"use client";
import React from "react";
import { Collapse, Grid } from "@mui/material";
import BasicCard from "../components/BasicCard/BasicCard";
import CollapseCard from "../components/CollapseCard/CollapseCard";
import RemoveCard from "../components/RemoveCard/RemoveCard";
import HorizontalCard from "../components/HorizontalCard/Horizontal";
import GroupCard from "../components/GroupCard /GroupCard";
import TextAlignCard from "../components/TextAlignCard/TextAlignCard";

export default function Cards() {
  return (
    <>
      <h2 style={{ paddingTop: "30px", paddingBottom: "30px" }}>Cards</h2>
      <BasicCard />
      <h2 style={{ paddingTop: "30px", paddingBottom: "30px" }}>Horizontal</h2>
      <HorizontalCard />
      <h2 style={{ paddingTop: "30px", paddingBottom: "30px" }}>Card Group</h2>
      <GroupCard />
      <h2 style={{ paddingTop: "30px", paddingBottom: "30px" }}>Textalign </h2>
      <TextAlignCard />
    </>
  );
}
