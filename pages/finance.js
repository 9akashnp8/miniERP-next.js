import Table from '../components/Table';
import Head from 'next/head';

import Typography from '@mui/material/Typography';

export default function Employees() {
    return (
        <div>
            <Head>
                <title>miniERP | Payments</title>
            </Head>
            <Typography variant='h4' my={1}>Finance</Typography>
            <Table
                endpoint='payment'
                columns={['Payment ID', 'Service', 'Payment Month', 'Payment Status', 'Amount', 'Invoice No.', 'Invoice Date', 'Payment Date']}
                objectProperties={['payment_id', 'service', 'payment_for_month', 'payment_status', 'amount', 'invoice_no', 'invoice_date', 'payment_date']}
            />
        </div>
    )
}