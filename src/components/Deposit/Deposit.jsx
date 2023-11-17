import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Typography } from "@mui/material";
import { balanceTableColumns, tableDataBalances } from "../Utils/constant";
import CommonTable from "../CommonTable/CommonTable";
const Deposit = () => {
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
    }, 1000);
  }, []);

  return loader ? (
    <Grid sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <CircularProgress />
    </Grid>
  ) : (
    <>
      <Typography>Deposit</Typography>
      <CommonTable
        columns={balanceTableColumns}
        row={tableDataBalances}
        count={tableDataBalances.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        color= {"white"}
        showIcon={true}
      />
    </>
  );
};
export default Deposit;
