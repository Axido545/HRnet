import "./tableData.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
// function createData(firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode) {
//     return { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode };
// }

// const rows = [
//     createData("john", "doe", "11/12", "44", "10/10/01", "123 Main Street", "Anytown", "CA (Californie)", "90210")

// ];

export default function TableData() {
    const users = useSelector(state => state.userState.users);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell >Last Name</TableCell>
                        <TableCell >Start Date</TableCell>
                        <TableCell >Departement</TableCell>
                        <TableCell >Date Of Birth</TableCell>
                        <TableCell >Street</TableCell>
                        <TableCell >City</TableCell>
                        <TableCell >State</TableCell>
                        <TableCell >Zip Code</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.firstName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell >{row.lastName}</TableCell>
                            <TableCell >{row.startDate}</TableCell>
                            <TableCell >{row.department}</TableCell>
                            <TableCell >{row.dateOfBirth}</TableCell>
                            <TableCell >{row.street}</TableCell>
                            <TableCell >{row.city}</TableCell>
                            <TableCell >{row.state}</TableCell>
                            <TableCell >{row.zipCode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}