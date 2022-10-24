
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Form() {

    const formik = useFormik({
        initialValues: {
            employeeId: 'LA-IND-',
            department: '',
            designation: '',
            employeeName: '',
            emailId: '',
            mobileNumber: '',
            employeeStatus: '',
            dateJoined: '2022-10-10',
            dateExited: '2022-10-10',
            branch: ''
        },
        validationSchema: Yup.object({
            employeeId: Yup.string().required('Required').matches(/[LA-IND-]-[\d]/gm, 'Improper Employee ID Format, Follow: LA-IND-<number>'),
            department: Yup.string().required('Required'),
            designation: Yup.string().required('Required'),
            employeeName: Yup.string().required('Required'),
            emailId: Yup.string().email().required('Required'),
            dateJoined: Yup.string().required('Required'),
            employeeStatus: Yup.string().required('Required'),
            branch: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <Box sx={{maxWidth: '80%', margin: 'auto', py: 3}}>
            <Paper sx={{p: 5}} variant="outlined">
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="employeeId" 
                                label="Employee ID" 
                                variant="outlined" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.employeeId}
                                error={formik.touched.employeeId && formik.errors.employeeId}
                                helperText={formik.touched.employeeId && formik.errors.employeeId ? formik.errors.employeeId : null}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{minWidth: 250}} fullWidth>
                                <InputLabel id="department-label">Department</InputLabel>
                                <Select
                                    labelId="department-label"
                                    id="department"
                                    label="Department"
                                    value={formik.values.department}
                                    onChange={formik.handleChange('department')}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.department && formik.errors.department}
                                >
                                    <MenuItem value={10}>Administration</MenuItem>
                                    <MenuItem value={20}>Sales</MenuItem>
                                    <MenuItem value={30}>Human Resources</MenuItem>
                                    <MenuItem value={40}>IT & Support</MenuItem>
                                </Select>
                                <FormHelperText error>{formik.touched.department && formik.errors.department ? formik.errors.department : null}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{minWidth: 250}} fullWidth>
                                <InputLabel id="designation-label">Designation</InputLabel>
                                <Select
                                    labelId="designation-label"
                                    id="designation"
                                    label="Designation"
                                    value={formik.values.designation}
                                    onChange={formik.handleChange('designation')}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.designation && formik.errors.designation}
                                >
                                    <MenuItem value={10}>Assistant Manager</MenuItem>
                                    <MenuItem value={20}>Manager</MenuItem>
                                    <MenuItem value={30}>Executive</MenuItem>
                                    <MenuItem value={40}>Team Lead</MenuItem>
                                </Select>
                                <FormHelperText error>{formik.touched.designation && formik.errors.designation ? formik.errors.designation : null}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="employeeName" 
                                label="Employee Name" 
                                variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.employeeName}
                                error={formik.touched.employeeName && formik.errors.employeeName}
                                helperText={formik.touched.employeeName && formik.errors.employeeName ? formik.errors.employeeName : null}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="emailId" 
                                label="Email ID" 
                                variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.emailId} 
                                error={formik.touched.emailId && formik.errors.emailId}
                                helperText={formik.touched.emailId && formik.errors.emailId ? formik.errors.emailId : null}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="mobileNumber" 
                                label="Mobile Number" 
                                variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.mobileNumber} 
                                error={formik.touched.mobileNumber && formik.errors.mobileNumber}
                                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber ? formik.errors.mobileNumber : null}
                            />
                            {formik.touched.mobileNumber && formik.errors.mobileNumber ? <p>Required</p> : null}
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{minWidth: 250}} fullWidth>
                                <InputLabel id="status-label">Employee Status</InputLabel>
                                <Select
                                    labelId="status-label"
                                    id="employeeStatus"
                                    label="Employee Status"
                                    value={formik.values.employeeStatus}
                                    onChange={formik.handleChange('employeeStatus')}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employeeStatus && formik.errors.employeeStatus}
                                >
                                    <MenuItem value={10}>Active</MenuItem>
                                    <MenuItem value={20}>In-Active</MenuItem>
                                </Select>
                                <FormHelperText error>{formik.touched.employeeStatus && formik.errors.employeeStatus ? formik.errors.employeeStatus : null}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{minWidth: 250}} fullWidth>
                                <InputLabel id="branch-label">Branch</InputLabel>
                                <Select
                                    labelId="branch-label"
                                    id="branch"
                                    label="Branch"
                                    value={formik.values.branch}
                                    onChange={formik.handleChange('branch')}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.branch && formik.errors.branch}
                                >
                                    <MenuItem value={10}>Ernakulam</MenuItem>
                                    <MenuItem value={20}>Calicut</MenuItem>
                                    <MenuItem value={30}>Kottayam</MenuItem>
                                </Select>
                                <FormHelperText error>{formik.touched.branch && formik.errors.branch ? formik.errors.branch : null}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="date"
                                id="dateJoined"
                                label="Date Joined"
                                variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dateJoined}
                                error={formik.touched.dateJoined && formik.errors.dateJoined}
                                helperText={formik.touched.dateJoined && formik.errors.dateJoined ? formik.errors.dateJoined : null} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type="date"
                                id="dateExited"
                                label="Date Exited"
                                variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dateExited}
                                error={formik.touched.dateExited && formik.errors.dateExited}
                                helperText={formik.touched.dateExited && formik.errors.dateExited ? formik.errors.dateExited : null}  
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    )
}