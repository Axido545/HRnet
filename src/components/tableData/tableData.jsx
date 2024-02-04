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
];


export default function TableData() {
    const users = useSelector(state => state.userState.users);
    console.log(users.firstName)
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users.map((row) => ({
                    ...row,
                    id: row.id
                }))}
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
}