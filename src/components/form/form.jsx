import "./form.css"
import { FormGroup } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { states } from "../../utils/state"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUser, modalHandle } from "../../redux/employeeSlice";
import FormHelperText from '@mui/material/FormHelperText';
import ModalAxido from "modal-axido/dist";

export default function Form() {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.userState.done)

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [dob, setDob] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [streetError, setStreetError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");
    const [departmentError, setDepartmentError] = useState("");

    const validateForm = () => {
        let isValid = true;

        if (!firstname) {
            setFirstnameError("First Name is required");
            isValid = false;
        } else {
            setFirstnameError("");
        }

        if (!lastname) {
            setLastnameError("Last Name is required");
            isValid = false;
        } else {
            setLastnameError("");
        }

        if (!street) {
            setStreetError("Street is required");
            isValid = false;
        } else {
            setStreetError("");
        }

        if (!city) {
            setCityError("City is required");
            isValid = false;
        } else {
            setCityError("");
        }

        if (!state) {
            setStateError("State is required");
            isValid = false;
        } else {
            setStateError("");
        }

        if (!zipCode) {
            setZipCodeError("Zip Code is required");
            isValid = false;
        } else {
            setZipCodeError("");
        }

        if (!department) {
            setDepartmentError("Department is required");
            isValid = false;
        } else {
            setDepartmentError("");
        }

        return isValid;
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => {
        dispatch(modalHandle(false))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('fname:', firstname);
            console.log('lname:', lastname);
            console.log('sdate:', startDate);
            console.log('dob:', dob);
            console.log('street:', street);
            console.log('city:', city);
            console.log('state:', state);
            console.log('zipCode:', zipCode);
            console.log('department:', department);
            const user = {
                id: new Date().getTime(),
                firstname,
                lastname,
                startDate,
                dob,
                street,
                city,
                state,
                zipCode,
                department
            }
            console.log('form dispatch addUser:', user);
            dispatch(addUser(user))
            dispatch(modalHandle(true));

        }
    }

    return <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box className="formField" marginBottom={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormGroup>
                    <TextField error={!!firstnameError} helperText={firstnameError} label="First Name" id="firstName" variant="outlined" onChange={e => setFirstname(e.target.value)} />
                    <TextField error={!!lastnameError} helperText={lastnameError} label="Last Name" id="lastName" variant="outlined" onChange={e => setLastname(e.target.value)} />
                    <DatePicker label="Start Date" id="startDate" variant="outlined" value={startDate} onChange={(date) => setStartDate(date)} />
                    <DatePicker label="Date of Birth" id="dob" variant="outlined" value={dob} onChange={(date) => setDob(date)} />
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Address</Typography>
                            <TextField error={!!streetError} helperText={streetError} label="Street" id="street" variant="outlined" onChange={e => setStreet(e.target.value)} />
                            <TextField error={!!cityError} helperText={cityError} label="City" id="city" variant="outlined" onChange={e => setCity(e.target.value)} />
                            <FormControl fullWidth error={!!stateError}>
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                    labelId="state-select-label"
                                    id="state"
                                    label="State"
                                    value={state || ""}
                                    onChange={e => setState(e.target.value)}
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state.abbreviation} value={state.name} >
                                            {state.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{stateError}</FormHelperText>
                            </FormControl>
                            <TextField error={!!zipCodeError} helperText={zipCodeError} label="Zip Code" id="zipCode" variant="outlined" onChange={e => setZipCode(e.target.value)} />
                        </CardContent>
                    </Card>
                    <FormControl fullWidth error={!!departmentError}>
                        <InputLabel id="department-select-label">Département</InputLabel>
                        <Select
                            labelId="department-select-label"
                            id="department"
                            label="Département"
                            value={department || ""}
                            onChange={e => setDepartment(e.target.value)}
                        >
                            <MenuItem value="Sales">Sales</MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Engineering">Engineering</MenuItem>
                            <MenuItem value="Human Resources">Human Resources</MenuItem>
                            <MenuItem value="Legal">Legal</MenuItem>
                        </Select>
                        <FormHelperText>{departmentError}</FormHelperText>
                    </FormControl>
                    <Button className="saveBtn" variant="contained" color="primary" type="submit" onClick={() => dispatch(modalHandle(true))}>
                        Save
                    </Button>
                    <ModalAxido textModal="Employee Created" isOpen={open} handleClose={handleClose} />
                </FormGroup>
            </LocalizationProvider>
        </Box>
    </form >
}