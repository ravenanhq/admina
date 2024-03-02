"use client";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { NavbarProvider } from "@/contexts/NavbarContext";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from 'next/navigation'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1023px)");
  const isLoginPage = pathname === "/login";
  
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
      <NavbarProvider>
        {isMobile ? (
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginTop: "30px",
            }}
          >
            <CssBaseline />
            <Header />
            <Sidebar />
            <div style={{ paddingTop: theme.spacing(2) }}>
              {" "}
              {/* Use theme spacing for consistent spacing */}
              {children}
            </div>
          </Box>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: isLoginPage ? "0" : 3,
                marginTop: isLoginPage ? "0" : "30px",
              }}
            >
              <div style={{ paddingTop:isLoginPage ? "0" : theme.spacing(2) }}>
                {" "}
                {/* Use theme spacing for consistent spacing */}
                {children}
              </div>
            </Box>
          </Box>
        )}
      </NavbarProvider>
    </>
  );
};

export default Dashboard;
