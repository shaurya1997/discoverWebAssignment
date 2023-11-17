import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
const NoDataTyproGraphy = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  marginTop: "0.5rem",
  fontSize: "0.8rem",
});
const RowWrapper = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#737988",
    cursor: "pointer",
  },
});
const CommonTable = ({
  columns,
  row,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  color,
  showIcon,
}) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
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
          {row.map((row) => (
            <RowWrapper key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    color: { color },
                    fontSize: "0.75rem",
                  }}
                >
                  {showIcon && column.id === "coin" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <img src={row.icon} alt="logo" height={30} width={30} />{" "}
                      <>{row[column.id]}</>
                    </div>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </RowWrapper>
          ))}
        </TableBody>
      </Table>
      {!row.length && (
        <NoDataTyproGraphy>No Matching Records found</NoDataTyproGraphy>
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        sx={{
          color: "white",
          "& .MuiTablePagination-toolbar": {
            color: "white",
          },
          "& .MuiTablePagination-root .MuiButtonBase-root": {
            color: "white",
          },
          "& .MuiTablePagination-menuItem": {
            color: "white",
          },
        }}
      />
    </>
  );
};
export default CommonTable;
