import Form from "../../components/CreateForm";

import { Typography } from '@mui/material';


export default function CreateEmployeePage() {
    return (
        <div>
            <Typography variant='h4' my={1}>Create Employee</Typography>
            <Form/>
        </div>
    )
}