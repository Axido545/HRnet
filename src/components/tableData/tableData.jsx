import "./tableData.css";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function TableData() {

    function formatDate(timestamp) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(timestamp).toLocaleDateString(undefined, options);
    }
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            type: 'number',
        },
        {
            field: 'firstname',
            headerName: 'First name',
            type: 'string',
        },
        {
            field: 'lastname',
            headerName: 'Last name',
            type: 'string',
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            type: 'date',
            valueFormatter: (params) => formatDate(params.value),

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
            valueFormatter: (params) => formatDate(params.value),

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
            type: 'number',
        },
    ];
    const users = useSelector(state => state.userState.users);

    console.log('tableData useSelector', users);
    console.log('tableau:', users.map((row) => ({ ...row, id: row.id })));

    const localStorageContent = JSON.parse(localStorage.getItem('userState'));
    console.log("Contenu du localStorage:", localStorageContent);

    const rows = localStorageContent?.users || [];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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