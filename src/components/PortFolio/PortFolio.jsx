import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Balances from "../Balances/Balances";
import LoadingButton from "@mui/lab/LoadingButton";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../WithDraw/WithDraw";
import FillsData from "../FillsData/FillsData";
import FtxAppEarn from "../FtxAppEarn/FtxAppEarn";
import SportMarginData from "../SpotMarginData/SpotMarginData";
import FundingPayment from "../FundingPayment/FundingPayment";
import P2PTransfers from "../P2PTransfers/P2PTransfers";
import RefferalRebates from "../ReffferalRebates/RefferalRebates";
import BalanceAdjustMent from "../BalanceAdjustMent/BalanceAdjustMent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
const PortFolioGrid = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

const AccountGrid = styled(Button)({
  color: "white",
  outline: "none",
  border: "none",
  background: "rgb(55 61 75)",
  width: "300px",
  padding: "1rem",
  borderRadius: "4px",
  cursor: "pointer",
  justifyContent:"space-between",
  '&:hover':{
    background: "rgb(55 61 75)",
  }
});
const DetailsGrid = styled(Grid)({
  position: "absolute",
  zIndex: "1",
  left: "59.5%",
});

const ButtonWrap = styled(LoadingButton)({
  marginTop: "2rem",
  width: "100%",
  backgroundColor: "#737988",
  fontSize: "0.7rem",
  "&:hover": {
    backgroundColor: "rgb(55, 61, 75)",
  },
});

const PortFolio = () => {
  const [accountName, setAccount] = useState("Main Account");
  const [tab, setTab] = useState("Balances");
  const [download, setDownload] = useState(false);
  const [childTab, setChildTab] = useState("FTX App Earn");
  const [showAccount, setShowAccount] = useState(false);
 
  const tabList = [
    { label: "Balances", value: "Balances" },
    { label: "Deposit", value: "Deposit" },
    { label: "Withdraw", value: "Withdraw" },
    { label: "Positions", value: "Positions" },
    { label: "Fills", value: "Fills" },
    { label: "P2P Transfers", value: "P2P Transfers" },
    { label: "Refferal Rebates", value: "Refferal Rebates" },
    { label: "Balance Adjustment", value: "Balance Adjustment" },
    { label: "Other", value: "Other" },
  ];
  const childTabList = [
    { label: "FTX App Earn", value: "FTX App Earn" },
    { label: "Spot Margin Lends", value: "Spot Margin Lends" },
    { label: "Spot Margin Borrows", value: "Spot Margin Borrows" },
    { label: "Funding Payments", value: "Funding Payments" },
  ];
  const handleTabChange = (e, value) => {
    setTab(value);
  };
  const handleDownLoad = () => {
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 2000);
  };
  const handleChildTabChange = (e, value) => {
    setChildTab(value);
  };
  const handleClick = () => {
    setShowAccount(!showAccount);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PortFolioGrid>
          <Typography sx={{ fontSize: "0.875rem" }}>PortFolio</Typography>
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 16 22"
            style={{ height: "1rem", width: "1rem", marginBottom: "0.25rem" }}
          >
            <svg
              width="16"
              height="22"
              viewBox="0 0 16 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8.00002H13V6.21002C13 3.60002 11.09 1.27002 8.49 1.02002C5.51 0.740018 3 3.08002 3 6.00002V8.00002H0V22H16V8.00002ZM8 17C6.9 17 6 16.1 6 15C6 13.9 6.9 13 8 13C9.1 13 10 13.9 10 15C10 16.1 9.1 17 8 17ZM5 8.00002V6.00002C5 4.34002 6.34 3.00002 8 3.00002C9.66 3.00002 11 4.34002 11 6.00002V8.00002H5Z"
                fill="white"
              ></path>
            </svg>
          </svg>
        </PortFolioGrid>
        <AccountGrid onClick={handleClick}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width:"100%"
            }}
          >
            {accountName} <ArrowDropDownIcon />
          </Grid>
        </AccountGrid>
      </Box>
      {showAccount && (
        <DetailsGrid>
          <Box
            sx={{
              background: "rgb(55 61 75)",
              height: "150px",
              width: "290px",
              borderRadius: "6px",
              padding: "4px",
            }}
          >
            <TextField
              placeholder="Search"
              sx={{
                color: "white",
                marginLeft: "1rem",
                width: "92%",
                marginTop: "2rem",
              }}
              InputProps={{
                style: { color: 'white' },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{color:"white"}}/>
                  </InputAdornment>
                ),
              }}
            />
            <Grid
              sx={{
                marginTop: "1.3rem",
                marginLeft: "1rem",
                cursor:"pointer",
                fontSize:"0.8rem"
              }}
              onClick={()=>setShowAccount(!showAccount)}
            >
              Main Account
            </Grid>
          </Box>
        </DetailsGrid>
      )}
      <ButtonWrap
        variant="contained"
        onClick={handleDownLoad}
        loading={download}
      >
        Download All Core Transactions
      </ButtonWrap>
      <Typography
        variant="body1"
        sx={{ fontSize: "0.75rem", marginTop: "1rem" }}
      >
        Transactions will be downloaded for the User's main account or the
        currently selected subaccount.may not include additional balance
        adjustments.Please download these using the adjustments tab{" "}
      </Typography>
      <TabContext value={tab}>
        <TabList
          onChange={handleTabChange}
          aria-label="lab API tabs example"
          variant="scrollable"
        >
          {tabList.map((item, index) => {
            return (
              <Tab
                label={item.label}
                value={item.value}
                key={index}
                sx={{ color: "white", fontSize: "0.7rem" }}
              />
            );
          })}
        </TabList>
        <TabPanel value="Balances">
          <Balances />
        </TabPanel>
        <TabPanel value="Deposit">
          <Deposit />
        </TabPanel>
        <TabPanel value="Withdraw">
          <Withdraw />
        </TabPanel>
        <TabPanel value="Positions">
          <></>
        </TabPanel>
        <TabPanel value="Fills">
          <FillsData />
        </TabPanel>
        <TabPanel value="P2P Transfers">
          <P2PTransfers />
        </TabPanel>
        <TabPanel value="Refferal Rebates">
          <RefferalRebates />
        </TabPanel>
        <TabPanel value="Balance Adjustment">
          <BalanceAdjustMent />
        </TabPanel>
        <TabPanel value="Other">
          <TabContext value={childTab}>
            <TabList
              onChange={handleChildTabChange}
              aria-label="lab API tabs example"
            >
              {childTabList.map((item, index) => {
                return (
                  <Tab
                    label={item.label}
                    value={item.value}
                    key={index}
                    sx={{ color: "white", fontSize: "0.7rem" }}
                  />
                );
              })}
            </TabList>
            <TabPanel value="FTX App Earn">
              <FtxAppEarn />
            </TabPanel>
            <TabPanel value="Spot Margin Lends">
              <SportMarginData />
            </TabPanel>
            <TabPanel value="Spot Margin Borrows">
              <SportMarginData />
            </TabPanel>
            <TabPanel value="Funding Payments">
              <FundingPayment />
            </TabPanel>
          </TabContext>
        </TabPanel>
      </TabContext>
    </>
  );
};
export default PortFolio;
