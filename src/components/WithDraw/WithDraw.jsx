import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { tableDataWithDraw, withDrawTableColums } from "../Utils/constant";
import styled from "@emotion/styled";
const Withdraw = () => {
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
        <Typography>Withdrawals</Typography>
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
      <Table>
        <TableHead>
          <TableRow>
            {withDrawTableColums.map((column) => (
              <TableCell
                key={column.id}
                sx={{ color: "rgb(191 179 179)", fontSize: "0.75rem" }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDataWithDraw.map((row) => (
            <TableRow key={row.id}>
              {withDrawTableColums.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    color:
                      column.id === "destination" ? "rgb(55 121 147)" : "white",
                    fontSize: "0.75rem",
                  }}
                >
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableDataWithDraw.length}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{ color: "white" }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
export default Withdraw;
