"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Signup from "./signup/page";
import Dashboard from "./components/Dashboard/Dashboard";

const LayoutSelector = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();


  if (pathname === "/signup") {
    return <Signup />;
  }

  return <Dashboard>{children}</Dashboard>;
};

export default LayoutSelector;
