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

export default function form() {



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    })
    const [selectedDate, setSelectedDate] = useState(null);
    const [department, setDepartment] = useState('');
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setDepartment(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulaire soumis :', formData);
    }
    return <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box className="formField" marginBottom={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormGroup>
                    <TextField label="First Name" id="firstName" variant="outlined" onChange={handleChange}
                    />
                    <TextField label="Last Name" id="lastName" variant="outlined" onChange={handleChange}
                    />
                    <DatePicker label="Start Date" id="startDate" variant="outlined" value={selectedDate} onChange={handleDateChange} />
                    <DatePicker label="Date of Birth" id="dateOfBirth" variant="outlined" value={selectedDate} onChange={handleDateChange} />
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Address
                            </Typography>
                            <TextField label="Street" id="street" variant="outlined" value={formData.street} onChange={handleChange} />
                            <TextField label="City" id="city" variant="outlined" value={formData.city} onChange={handleChange} />
                            <FormControl fullWidth>
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                    labelId="state-select-label"
                                    id="state"
                                    label="State"
                                    onChange={handleChange}
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state.abbreviation} value={state.abbreviation} >
                                            {state.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField label="Zip Code" id="zipCode" variant="outlined" value={formData.zipCode} onChange={handleChange} />
                        </CardContent>
                    </Card>
                    <FormControl fullWidth>
                        <InputLabel id="department-select-label">Departement</InputLabel>
                        <Select
                            labelId="department-select-label"
                            id="department"
                            label="Department"
                            value={department}
                            onChange={handleChange}                        >
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