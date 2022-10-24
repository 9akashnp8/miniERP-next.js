import Form from "../../components/CreateForm";

import Typography from '@mui/material/Typography';

import Head from "next/head";


export default function CreateEmployeePage() {
    return (
        <div>
            <Head>
                <title>miniERP | Add Employee</title>
            </Head>
            <Typography variant='h4' my={1}>Add New Employee</Typography>
            <Form/>
        </div>
    )
}