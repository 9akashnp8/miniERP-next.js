import Table from '../components/Table';
import { Typography } from '@mui/material';

import Head from 'next/head';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listEmployees } from '../lib/actions/auth';

export default function Employees() {
    const { isAuthenticated } = useSelector(state => state.auth.isAuthenticated)

    // if (typeof window !== 'undefined' && !isAuthenticated) {
    //     console.log(isAuthenticated)
    //     Router.push('/login')
    // }

    return (
        <div>
            <Head>
                <title>miniERP | Employees</title>
            </Head>
            <Typography variant='h4'my={1}>Employees</Typography>
            <Table
                endpoint='employee'
                columns={['Employee ID', 'Employee Name', 'Department', 'Designation', 'Branch']}
                objectProperties={['lk_emp_id', 'emp_name', 'dept_id', 'desig_id', 'loc_id']}            
            />
        </div>
    )
}