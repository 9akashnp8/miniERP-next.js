import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import useSWR from 'swr';

async function dataFetcher(url) {
  return await axios.get(url).then(res => res.data)
}

export default function BasicTable() {

  const { data, error } = useSWR('http://127.0.0.1:8000/api/employee/', dataFetcher);

  console.log(data);

  if (error) return <p>Failed to Load</p>
  if (!data) {
    return <p>Loading...</p>
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell align="center">Employee Name</TableCell>
              <TableCell align="center">Department</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="center">Branch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.results.map((row) => (
              <TableRow
                key={row.emp_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.lk_emp_id}
                </TableCell>
                <TableCell align="center">{row.emp_name}</TableCell>
                <TableCell align="center">{row.dept_id}</TableCell>
                <TableCell align="center">{row.desig_id}</TableCell>
                <TableCell align="center">{row.loc_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
