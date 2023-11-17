import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { styled } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import ClearIcon from "@mui/icons-material/Clear";
import { balanceTableColumns, tableDataBalances } from "../Utils/constant";
import CommonTable from "../CommonTable/CommonTable";

const BalanceGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const IconButtonWrap = styled(IconButton)({
  "&:hover": {
    background: "rgb(55 61 75)",
    color: "rgb(43 222 242)",
  },
});
const SeatchButtonWrap = styled(IconButton)({
  "&:hover": {
    color: "rgb(43 222 242)",
  },
});
const CrossButtonWrap = styled(IconButton)({
  "&:hover": {
    color: "red",
  },
});

const Balances = () => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(tableDataBalances);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setData(
        tableDataBalances.filter(
          (item) => item.allBalances > 0 && item.subAccountBalances > 0
        )
      );
    } else {
      setData(tableDataBalances);
    }
  }, [checked]);

  useEffect(() => {
    if (value.length) {
      setData(
        tableDataBalances.filter((item) =>
          item?.coin?.toLocaleLowerCase().includes(value?.toLowerCase())
        )
      );
    } else {
      setData(tableDataBalances);
    }
  }, [value]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = () => {
    setShowInput(!showInput);
  };
  const handleIconClick = () => {
    setShowInput(!showInput);
    setValue("");
  };
  return (
    <Box>
      <BalanceGrid>
        {showInput ? (
          <Grid>
            <TextField
              size="small"
              variant="standard"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ input: { color: "white" } }}
            />
            <CrossButtonWrap
              onClick={handleIconClick}
              sx={{ color: "white" }}
            >
              <ClearIcon />
            </CrossButtonWrap>
          </Grid>
        ) : (
          <Typography variant="body1">Balances</Typography>
        )}
        <Grid sx={{ gap: "0.25rem", display: "flex", alignItems: "center" }}>
          <Tooltip title="Search">
            <SeatchButtonWrap sx={{ color: "white" }} onClick={handleClick}>
              <SearchIcon />
            </SeatchButtonWrap>
          </Tooltip>
          <Tooltip title="Download csv">
            <IconButtonWrap sx={{ color: "white" }}>
              <CloudDownloadIcon />
            </IconButtonWrap>
          </Tooltip>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                sx={{ color: "white" }}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Hide Zero balances"
          />
        </Grid>
      </BalanceGrid>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "0.5rem",
          background: "rgb(36 40 56)",
          color: "white",
        }}
      >
        <CommonTable
          columns={balanceTableColumns}
          row={data}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          color={"white"}
          showIcon={true}
        />
      </TableContainer>
    </Box>
  );
};
export default Balances;
