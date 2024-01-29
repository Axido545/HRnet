import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    done: false,
};

const employeeSlice = createSlice({
    initialState,
    name: "userState",
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload];
            state.done = true;
        },
    }
})

export const { addUser } = employeeSlice.actions;
export default employeeSlice.reducer;
