import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCod: "",
    }
})


export default employeeSlice.reducer;
