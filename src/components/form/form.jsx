import "./form.css"
import Modal from "../../components/modal/modal";
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
import { useDispatch } from "react-redux";

export default function form() {
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [dob, setDob] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [department, setDepartment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('fname:', firstname);
        console.log('lname:', lastname);
        console.log('sdate:', startDate);
        console.log('dob:', dob);
        console.log('street:', street);
        console.log('city:', city);
        console.log('state:', state);
        console.log('zipCode:', zipCode);
        console.log('department:', department);
        const user = { firstname, lastname, startDate, dob, street, city, state, zipCode, department }
        dispatch(addUser(user))

    }
    return <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box className="formField" marginBottom={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormGroup>
                    <TextField label="First Name" id="firstName" variant="outlined" onChange={e => setFirstname(e.target.value)} />
                    <TextField label="Last Name" id="lastName" variant="outlined" onChange={e => setLastname(e.target.value)} />
                    <DatePicker label="Start Date" id="startDate" variant="outlined" value={selectedDate} onChange={(date) => setStartDate(date)} />
                    <DatePicker label="Date of Birth" id="dob" variant="outlined" value={selectedDate} onChange={(date) => setDob(date)} />
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Address
                            </Typography>
                            <TextField label="Street" id="street" variant="outlined" onChange={e => setStreet(e.target.value)} />
                            <TextField label="City" id="city" variant="outlined" onChange={e => setCity(e.target.value)} />
                            <FormControl fullWidth>
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
                            </FormControl>
                            <TextField label="Zip Code" id="zipCode" variant="outlined" onChange={e => setZipCode(e.target.value)} />
                        </CardContent>
                    </Card>
                    <FormControl fullWidth>
                        <InputLabel id="department-select-label">Département</InputLabel>
                        <Select
                            labelId="department-select-label"
                            id="department"
                            label="Département"
                            value={department || ""}
                            onChange={e => setDepartment(e.target.value)}                   >
                            <MenuItem value="Sales">Sales</MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Engineering">Engineering</MenuItem>
                            <MenuItem value="Human Resources">Human Resources</MenuItem>
                            <MenuItem value="Legal">Legal</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className="saveBtn" variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                    <Modal />
                </FormGroup>
            </LocalizationProvider>
        </Box>
    </form >
}