"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Signup from "./signup/page";
import LoginForm from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const LayoutSelector = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/signup") {
    return <Signup />;
  }

  if (pathname === "/login") {
    return <LoginForm />;
  }

  return <Dashboard>{children}</Dashboard>;
};

export default LayoutSelector;
