import React, { useState } from "react";
import { demoData } from "../Utils/constant";
import "./LeftSection.css";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";
const BoxLeft = styled(Box)({
  backgroundColor: "rgb(29, 31, 43)",
  color: "rgb(255, 255, 255)",
  boxShadow: "none",
  borderRadius: "12px",
  padding: "24px 0px",
  maxWidth: "280px",
  height: "max-content",
});

const NavBox = styled(Box)({
  cursor: "pointer",
});
const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent:"space-between"
});
const LeftSection = ({ currentTab, setCurrentTab }) => {
  const [data, setData] = useState(demoData);

  return (
    <BoxLeft>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`nav-item ${currentTab === item.id ? "active" : ""}`}
            onClick={() => setCurrentTab(item.id)}
            style={{
              pointerEvents: item.id === 6 || item.id === 1 ? "none" : "",
            }}
          >
            <NavBox>
              <div>
                <span style={{ marginLeft: "2rem", color: "rgb(21 155 92)" }}>
                  {item.title}
                </span>
              </div>

              <IconWrapper>
                <Grid
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" ,marginTop:"0.25rem"}}
                >
                  <span>{item.icon}</span>
                  <span>{item.heading}</span>
                </Grid>
                <ArrowForwardIosIcon
                  sx={{ height: "0.7rem", width: "0.7rem" }}
                />
              </IconWrapper>
            </NavBox>
            {currentTab === item.id && (
              <p
                style={{
                  marginTop: "0.25rem",
                  color: "rgb(160 155 164)",
                  marginLeft:"1.5rem"
                }}
              >
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </BoxLeft>
  );
};
export default LeftSection;
