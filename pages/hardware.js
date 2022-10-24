import Table from '../components/Table';
import { Typography } from '@mui/material';

import Head from 'next/head';

export default function Hardware() {
    return (
        <div>
            <Head>
                <title>miniERP | Hardware</title>
            </Head>
            <Typography variant='h4'my={1}>Hardware</Typography>
            <Table
                endpoint='laptop'
                columns={['Hardware ID', 'Serial No.', 'Status', 'Age', 'Location']}
                objectProperties={['hardware_id', 'laptop_sr_no', 'laptop_status', 'laptop_age', 'laptop_branch']}
            />
        </div>
    )
}