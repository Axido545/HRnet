import "./tableData.css";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function TableData() {

    function formatDate(timestamp) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(timestamp).toLocaleDateString(undefined, options);
    }
    const columns = [
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


    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    filterModel: {
                        items: [],
                        quickFilterValues: [],
                    },
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10, 25, 50]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },

                }}

            />
        </Box>
    );
}