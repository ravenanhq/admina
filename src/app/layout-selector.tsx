"use client";

import React from "react";
import { usePathname } from "next/navigation";
import LoginForm from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const LayoutSelector = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const authPages = ["/login"];

  return authPages.includes(pathname) ? <LoginForm /> : <Dashboard>{children}</Dashboard>;
};

export default LayoutSelector;
