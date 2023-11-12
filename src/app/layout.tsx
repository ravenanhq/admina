"use client";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { NavbarProvider } from "@/contexts/NavbarContext";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1023px)");

  return (
    <html>
      <Head>
        <title>Material UI Dashboard</title>
        <meta name="description" content="Description of my page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NavbarProvider>
          {isMobile ? (
            <Box component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginTop: "30px",
            }}>
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
                  p: 3,
                  marginTop: "30px",
                }}
              >
                <div style={{ paddingTop: theme.spacing(2) }}>
                  {" "}
                  {/* Use theme spacing for consistent spacing */}
                  {children}
                </div>
              </Box>
            </Box>
          )}
        </NavbarProvider>
      </body>
    </html>
  );
}
