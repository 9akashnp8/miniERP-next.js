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

export default function BasicTable({endpoint, columns, objectProperties}) {

  const [page, setPage] = useState(1);
  
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  const { data, error } = useSWR(`http://127.0.0.1:8000/api/${endpoint}/?page=${page}`, dataFetcher);

  if (error) return <p>Failed to Load: {error.message}</p>
  if (!data) {
    return <p>Loading...</p>
  } else {
    return (
      <Paper elevation={3}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return <TableCell key={column} sx={{fontWeight: 'bold'}}>{column}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.results.map((row, index) => (
                <TableRow key={index}>
                  {objectProperties.map((property, index) => {
                    return <TableCell key={index}>{row[property]}</TableCell>
                  })}
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
