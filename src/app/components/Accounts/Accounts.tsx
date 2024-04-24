"use client";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LockIcon from "@mui/icons-material/Lock";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountSettings from "./AccountSetting";
import PasswordSetting from "./PasswordSetting";
import BillingSetting from "./BillingSetting";
import PaymentMethods from "./PaymentMethods";

const Accounts = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ flexGrow: 1, display: "block" }}>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label=" tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            centered={isMobile ? true : false}
          >
            <Tab
              label={isMobile ? "" : "Account"}
              value="0"
              icon={<ManageAccountsIcon />}
              iconPosition="start"
            />
            <Tab
              label={isMobile ? "" : "Security"}
              value="1"
              icon={<LockIcon />}
              iconPosition="start"
            />
            <Tab
              label={isMobile ? "" : "Billing"}
              value="2"
              icon={<DescriptionIcon />}
              iconPosition="start"
            />
          </Tabs>
          <TabPanel value="0" sx={{ p:"24px 0" }}>
            <AccountSettings />
          </TabPanel>
          <TabPanel value="1" sx={{ p:"24px 0" }}>
            <PasswordSetting />
          </TabPanel>
          <TabPanel value="2" sx={{ p:"24px 0" }}>
            <BillingSetting />
            <PaymentMethods />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Accounts;
