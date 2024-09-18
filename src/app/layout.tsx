import * as React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

import Provider from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Admina",
  description: "MVP Theme",
};

// const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(authOptions))!;

  return (
    <html>
      <body suppressHydrationWarning={true} style={{backgroundColor:"#f5f5f5"}}>
        <Provider session={session}>
          <Dashboard children={children} />
        </Provider>
      </body>
    </html>
  );
}
