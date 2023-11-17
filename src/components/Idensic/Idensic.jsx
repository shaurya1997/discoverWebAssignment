import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
const BoxLeft = styled(Box)({
  color: "black",
  display: "flex",
  justifyContent: "center",
  marginTop: "5rem",
});
const Idensic = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => {
      document.body.style.backgroundColor = "#0B0E16";
    };
  }, []);
  const steps = [
    "Identiy document",
    "Proof of address",
    "Questionnaire",
    "Selfie",
  ];
  return showLoader ? (
    <Loader />
  ) : (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stepper
          activeStep={4}
          alternativeLabel
          sx={{
            width: "60%",
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <BoxLeft>
        <Grid sx={{ textAlign: "center" }}>
          <CheckCircleIcon
            sx={{ color: "rgb(43 222 242)", height: "3rem", width: "3rem" }}
          />
          <Grid>CONGRATULATIONS!</Grid>
        </Grid>
      </BoxLeft>
      <Typography
        sx={{
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "0.5rem",
          color: "black",
        }}
      >
        Your verification was successfull, you have been verified
      </Typography>
    </>
  );
};
export default Idensic;
