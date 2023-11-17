import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Grid from "@mui/material/Grid";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
const TypographyKYC = styled(Typography)({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  marginTop: "0.5rem",
});
const KycGrid = styled(Grid)({
  marginTop: "0.5rem",
  marginLeft: "0.5rem",
  width: "75%",
  justifyContent: "space-between",
  marginBottom: "1rem",
});
const KycStatus = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.8rem",
});
const KycDetailsGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
  justifyContent: "space-between",
  padding: "1rem 0.5rem 1rem 0.5rem",
  borderTop: "1px solid rgb(62 66 81)",
});
const LoadingButtonWrap = styled(LoadingButton)({
  width: "100%", 
  background:"rgb(0 152 179)",
  '&:hover':{
    background:"rgb(72 191 212)"
  }
});
const KycDetails = () => {
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/idensic");
    }, 2000);
  };
  const kycData = [
    {
      status: "Not Started",
      description: "Please click on link to begin the KYC process",
      icons: <AdjustIcon />,
    },
    {
      status: "Verified",
      description: "Please click on link to begin the KYC process",
      icons: <CheckCircleIcon />,
    },
    {
      status: "UnVerified",
      description: "Please click on link to begin the KYC process",
      icons: <CheckCircleIcon />,
    },
    {
      status: "Processing",
      description: "Please click on link to begin the KYC process",
      icons: <CheckCircleIcon />,
    },
    {
      status: "On Hold",
      description: "Please click on link to begin the KYC process",
      icons: <CheckCircleIcon />,
    },
    {
      status: "Documents Requested",
      description: "Please click on link to begin the KYC process",
      icons: <AdjustIcon />,
    },
  ];
  return (
    <Box>
      <Typography variant="h5">KYC Process</Typography>
      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        KYC Status: verified
      </Typography>
      <TypographyKYC variant="subtitle2" onClick={handleToggle}>
        KYC Status Explanations{" "}
        {!expanded ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </TypographyKYC>
      <Collapse in={expanded} timeout="auto">
        <KycGrid container spacing={2}>
          <Typography variant="subtitle2">KYC Status</Typography>
          <Typography variant="subtitle2">Explanation of Status</Typography>
        </KycGrid>
        <Grid>
          {kycData.map((item, index) => {
            return (
              <KycDetailsGrid key={index}>
                <KycStatus variant="subtitle2">
                  {item.icons} {item.status}
                </KycStatus>
                <Grid variant="subtitle2">{item.description}</Grid>
              </KycDetailsGrid>
            );
          })}
        </Grid>
      </Collapse>
      <br />
      <Typography variant="subtitle2" sx={{ color: "rgb(160 155 164)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        sapien vel nibh consequat commodo. Fusce bibendum bibendum nunc at
        molestie. Donec tristique molestie gravida. Quisque tincidunt odio vel
        sem convallis tempus ipiscing elit. Donec vel sapien vel nibh consequat
        commodo. Fusce bibendum bibendum nunc at molestie. Donec tristique
        molestie gravida. Quisque tincidunt odio vel sem convallis tempus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <br />
      <br />
      <Typography variant="subtitle2" sx={{ color: "rgb(160 155 164)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        sapien vel nibh consequat commodo. Fusce bibendum bibendum nunc at
        molestie. Donec tristique molestie gravida. Quisque tincidunt odio vel
        sem convallis tempus ipiscing elit. Donec vel sapien vel nibh consequat
        commodo. Fusce bibendum bibendum nunc at molestie. Donec tristique
        molestie gravida. Quisque tincidunt odio vel sem convallis tempus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <br />
      <LoadingButtonWrap
        variant="contained"
        sx={{ width: "100%",background:"rgb(0 152 179)" }}
        loading={loading}
        onClick={handleClick}
      >
        Begin Kyc process
      </LoadingButtonWrap>
    </Box>
  );
};
export default KycDetails;
