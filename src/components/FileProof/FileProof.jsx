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
const TypographyKYC = styled(Typography)({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
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
  background: "rgb(0 152 179)",
  "&:hover": {
    background: "rgb(72 191 212)",
  },
});
const FileProof = () => {
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const kycData = [
    {
      status: "Not Started",
      description: "Please click on link to begin the KYC process",
      icons: <AdjustIcon />,
    },
    {
      status: "Claims (s) Submitted",
      description:
        "Please click on link to begin the KYC process, Customers who have agreed with the amounts or quantities set forth on the Debtors' schedule as amended on June 27, 2023",
      icons: <CheckCircleIcon />,
    },
    {
      status: "Agreed Scheduled Claim (s)",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      icons: <CheckCircleIcon />,
    },
    {
      status: "Need Attention",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia",
      icons: <CheckCircleIcon />,
    },
  ];
  return (
    <Box>
      <Typography variant="h5">File Proof of Claim</Typography>
      <TypographyKYC variant="subtitle2">
        FTX Trading Ltd. Claim Status: Agreed Scheduled Claims (2)
      </TypographyKYC>
      <TypographyKYC variant="subtitle2" onClick={handleToggle}>
        Claims Status Explanation
        {!expanded ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </TypographyKYC>
      <Collapse in={expanded} timeout="auto">
        <KycGrid container spacing={2}>
          <Typography variant="subtitle2">Claims Status</Typography>
          <Typography variant="subtitle2">Explanation of Status</Typography>
        </KycGrid>
        <Grid>
          {kycData.map((item, index) => {
            return (
              <KycDetailsGrid key={index}>
                <KycStatus variant="subtitle2">
                  {item.icons} {item.status}
                </KycStatus>
                <Grid variant="subtitle2" sx={{ width: "50%" }}>
                  {item.description}
                </Grid>
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
      <LoadingButtonWrap
        variant="contained"
        sx={{ width: "100%", background: "rgb(0 152 179)" }}
        loading={loading}
        onClick={handleClick}
      >
        File Proof of Claims
      </LoadingButtonWrap>
    </Box>
  );
};
export default FileProof;
