import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

async function dataFetcher(url) {
  return await axios.get(url).then(res => res.data)
}

export default function BasicTable() {

  const [page, setPage] = useState(1);
  
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  const { data, error } = useSWR(`http://127.0.0.1:8000/api/employee/?page=${page}`, dataFetcher);

  if (error) return <p>Failed to Load</p>
  if (!data) {
    return <p>Loading...</p>
  } else {
    return (
      <Paper elevation={3}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: 'bold'}}>Employee ID</TableCell>
                <TableCell sx={{fontWeight: 'bold'}}>Employee Name</TableCell>
                <TableCell sx={{fontWeight: 'bold'}}>Department</TableCell>
                <TableCell sx={{fontWeight: 'bold'}}>Designation</TableCell>
                <TableCell sx={{fontWeight: 'bold'}}>Branch</TableCell>
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
                  <TableCell>{row.emp_name}</TableCell>
                  <TableCell>{row.dept_id}</TableCell>
                  <TableCell>{row.desig_id}</TableCell>
                  <TableCell>{row.loc_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider/>
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          py={2}
        >
          <Pagination
            page={page}
            count={Math.round(data.count / 10)} 
            showFirstButton 
            showLastButton
            onChange={handleChangePage}
          />
        </Stack>
    </Paper>
    );
  }
}
