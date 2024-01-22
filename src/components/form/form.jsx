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






export default function form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Employee Created!")
    }

    return <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box className="formField" marginBottom={2}>

            <FormGroup>
                <TextField label="First Name" id="first-name" variant="outlined" />
                <TextField label="Last Name" id="last-name" variant="outlined" />
                <TextField label="Date of Birth" id="date-of-birth" variant="outlined" />
                <TextField label="Start Date" id="start-date" variant="outlined" />
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Address
                        </Typography>

                        <TextField label="Street" id="street" variant="outlined" />
                        <TextField label="City" id="city" variant="outlined" />
                        <TextField label="State" id="state" variant="outlined" />
                        <TextField label="Zip Code" id="zip-code" variant="outlined" />
                    </CardContent>

                </Card>

                <TextField select label="Department" id="department" variant="outlined" fullWidth>
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Engineering">Engineering</MenuItem>
                    <MenuItem value="Human Resources">Human Resources</MenuItem>
                    <MenuItem value="Legal">Legal</MenuItem>
                </TextField>
                <Button className="saveBtn" variant="contained" color="primary" type="submit">
                    Save
                </Button>            <Modal />
            </FormGroup>
        </Box>

    </form >
}