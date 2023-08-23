import Table from '../components/Table';
import { Typography } from '@mui/material';

import Head from 'next/head';

export default function Employees({isAuthenticated}) {

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