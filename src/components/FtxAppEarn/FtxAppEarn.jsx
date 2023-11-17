import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { fixTableData, ftxTableColums } from "../Utils/constant";
import CommonTable from "../CommonTable/CommonTable";
import styled from "@emotion/styled";
const FtxAppEarn = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const IconButtonWrap = styled(IconButton)({
    "&:hover": {
      background: "rgb(55 61 75)",
      color: "rgb(43 222 242)",
    },
  });
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Ftx App Earn</Typography>
        <Grid sx={{ gap: "0.25rem", display: "flex", alignItems: "center" }}>
          <Tooltip title="Download csv">
            <IconButtonWrap sx={{ color: "white" }}>
              <CloudDownloadIcon />
            </IconButtonWrap>
          </Tooltip>
        </Grid>
      </Grid>
      <CommonTable
        columns={ftxTableColums}
        row={fixTableData}
        count={fixTableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        color={"white"}
      />
    </Box>
  );
};
export default FtxAppEarn;
