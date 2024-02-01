import "./tableData.css";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        type: 'string',
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        type: 'string',
    },
    {
        field: 'startDate',
        headerName: 'Start Date',
        type: 'date',
    },
    {
        field: 'department',
        headerName: 'Department',
        type: 'string',
    },
    {
        field: 'dob',
        headerName: 'Date of Birth',
        type: 'date',
    },
    {
        field: 'street',
        headerName: 'Street',
        type: 'string',
    },
    {
        field: 'city',
        headerName: 'City',
        type: 'string',
    },
    {
        field: 'state',
        headerName: 'State',
        type: 'string',
    },
    {
        field: 'zipCode',
        headerName: 'Zip Code',
        type: 'string',
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

export default function TableData() {
    const users = useSelector(state => state.userState.users);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users.map((row) => ({ ...row, id: row.firstName }))}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );


    //                 {users.map((row) => (
    //                     <TableRow
    //                         key={row.firstName}
    //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                     >
    //                         <TableCell component="th" scope="row">
    //                             {row.firstName}
    //                         </TableCell>
    //                         <TableCell >{row.lastName}</TableCell>
    //                         <TableCell >{row.startDate}</TableCell>
    //                         <TableCell >{row.department}</TableCell>
    //                         <TableCell >{row.dateOfBirth}</TableCell>
    //                         <TableCell >{row.street}</TableCell>
    //                         <TableCell >{row.city}</TableCell>
    //                         <TableCell >{row.state}</TableCell>
    //                         <TableCell >{row.zipCode}</TableCell>
    //                     </TableRow>
    //                 ))}


}