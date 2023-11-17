import React from "react";
import VerifyLoginDetails from "../VerifyLoginDetails/VerifyLoginDetails";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import KycDetails from "../KycDetails/KycDetails";
import PortFolio from "../PortFolio/PortFolio";
import FileProof from "../FileProof/FileProof";

const BoxRight = styled(Box)({
  backgroundColor: "rgb(29, 31, 43)",
  color: "rgb(255, 255, 255)",
  width: " 600px",
  borderRadius: "8px",
  height: "min-content",
  padding: "1rem",
});

const RightSection = ({ currentTab }) => {
  const rendarTabData = () => {
    switch (currentTab) {
      case 2:
        return <VerifyLoginDetails />;
      case 3:
        return <KycDetails />;
      case 4:
        return <PortFolio />;
      case 5:
        return <FileProof />;
      default:
        return <div> No Data found</div>;
    }
  };
  return <BoxRight>{rendarTabData(currentTab)}</BoxRight>;
};
export default RightSection;
