import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Ftx from "../assets/ftx.png";
import { Box, Grid, Typography } from "@mui/material";
const WhiteButton = styled(Button)({
  color: "white",
});
const StyledMenu = styled(Menu)({
  backgroundColor: "",
});
const AccountFirstTypography = styled(Typography)({
  fontSize: "0.7rem",
});
const AccountSecondTypography = styled(Typography)({
  fontSize: "0.7rem",
  color: "rgb(133 135 147)",
});
const BorderGrid = styled(Grid)({
  height: "1px",
  marginBottom: "1.5rem",
  marginTop: "1.5rem",
  backgroundColor: "rgb(133 135 147)",
});
const AccountBox = styled(Box)({
  backgroundColor: "rgb(73 77 88)",
  height: "230px",
  width: "230px",
  position: "absolute",
  right: "10px",
  top: "50px",
  borderRadius: "8px",
  padding: "16px",
  cursor: "pointer",
});
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [anchorLanguage, setAnchorLanguage] = React.useState(null);
  const open = Boolean(anchorLanguage)
  const handleAccountClick = (event) => {
    setAnchorEl(!anchorEl);
  };
  const handleClickLanguage = (event) => {
    setAnchorLanguage(event.currentTarget);
  };
  const handleClose = (e,name) => {
    setAnchorEl(null);
    setAnchorLanguage(e.target.value);
  };

  return (
    <div className="header">
      <img src={Ftx} alt="FTX" className="ftx-img" />
      <div className="right-item">
        <WhiteButton>Privacy</WhiteButton>
        <WhiteButton>FAQ</WhiteButton>
        <WhiteButton
          endIcon={<ArrowDropDownIcon />}
          id="fade-menu-language"
          onClick={handleClickLanguage}
          aria-controls={open ? "fade-menu-language" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <svg
            className="language-icons"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="TranslateIcon"
          >
            <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"></path>
          </svg>
          English
        </WhiteButton>
        <StyledMenu
          id="fade-menu-language"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorLanguage}
          open={Boolean(anchorLanguage)}
          onClose={handleClose}
        >
          <MenuItem value="English" onClick={handleClose} sx={{color:"white"}}>
            English
          </MenuItem>
          <MenuItem value="Español" onClick={handleClose} sx={{color:"white"}}>
            Español
          </MenuItem>
          <MenuItem value="Français" onClick={handleClose} sx={{color:"white"}}>
            Français
          </MenuItem>
        </StyledMenu>
        <WhiteButton
          endIcon={<ArrowDropDownIcon />}
          onClick={handleAccountClick}
        >
          My Account
        </WhiteButton>
      </div>
      {anchorEl && (
        <AccountBox>
          <Grid sx={{ display: "flex", padding: "0.5rem", gap: "0.25rem" }}>
            <AccountFirstTypography>Account Id</AccountFirstTypography>{" "}
            <AccountSecondTypography>117523233</AccountSecondTypography>
          </Grid>
          <Grid sx={{ display: "flex", padding: "0.5rem", gap: "0.25rem" }}>
            <AccountFirstTypography> EmailId</AccountFirstTypography>{" "}
            <AccountSecondTypography>xyz@gmail.com</AccountSecondTypography>
          </Grid>
          <Grid sx={{ display: "flex", padding: "0.5rem", gap: "0.25rem" }}>
            <AccountFirstTypography> Platform</AccountFirstTypography>{" "}
            <AccountSecondTypography>asuydhkas</AccountSecondTypography>
          </Grid>
          <BorderGrid></BorderGrid>
          <Typography sx={{ padding: "0.25rem" }}> Setting</Typography>{" "}
          <Typography sx={{ padding: "0.25rem" ,color:"rgb(213 69 104)"}}>Logout</Typography>
        </AccountBox>
      )}
    </div>
  );
};
export default Header;
