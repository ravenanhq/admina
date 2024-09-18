"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Header from "../Header/Header";
import { usePathname } from "next/navigation";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1023px)");
  const isLoginPage = pathname === "/login";
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Material UI Dashboard</title>
        <meta name="description" content="Description of my page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {isMobile ? (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            marginTop: "30px",
          }}
        >
          <CssBaseline />
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div style={{ paddingTop: theme.spacing(2) }}>{children}</div>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <Box
            component="main"
            className={sidebarOpen ? "sidebar-open" : "sidebar-closed"}
            sx={{
              flexGrow: 1,
              p: isLoginPage ? "0" : 3,
              marginTop: isLoginPage ? "0" : "30px",
            }}
          >
            <div style={{ paddingTop: isLoginPage ? "0" : theme.spacing(2) }}>
              {children}
            </div>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
