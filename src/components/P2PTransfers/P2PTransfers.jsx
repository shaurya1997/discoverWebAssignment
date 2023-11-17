import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommonTable from "../CommonTable/CommonTable";
import { p2pTransfersColumns } from "../Utils/constant";
import styled from "@emotion/styled";
const P2PTransfers = () => {
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  const IconButtonWrap = styled(IconButton)({
    "&:hover": {
      background: "rgb(55 61 75)",
      color: "rgb(43 222 242)",
    },
  });
  return loader ? (
    <Grid sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <CircularProgress />
    </Grid>
  ) : (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>P2P Transfers</Typography>
        <Grid sx={{ gap: "0.25rem", display: "flex", alignItems: "center" }}>
          <Tooltip title="Download csv">
            <IconButtonWrap sx={{ color: "white" }}>
              <CloudDownloadIcon />
            </IconButtonWrap>
          </Tooltip>
          <IconButton sx={{ color: "white" }}>
            <CalendarTodayIcon />
          </IconButton>
        </Grid>
      </Grid>
      <CommonTable
        columns={p2pTransfersColumns}
        row={[]}
        count={0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        color={"white"}
      />
    </>
  );
};
export default P2PTransfers;
