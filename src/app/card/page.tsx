"use client";
import React from "react";
import BasicCard from "../components/BasicCard/BasicCard";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";
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
