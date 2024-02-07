import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    done: false,
};

const employeeSlice = createSlice({
    name: "userState",
    initialState,
    reducers: {
        addUser(state, action) {
            console.log("addUser reducer - payload:", action.payload);
            state.users = [...state.users, action.payload];
            state.done = true;
            // localStorage.setItem('userState', JSON.stringify(state));

        },
        modalHandle(state, action) {
            console.log("modalHandle reducer - payload:", action.payload);
            state.done = action.payload;
        },
        resetDone(state) {
            console.log("resetDone reducer");
            state.done = false;
        },
    },
});

export const { addUser, modalHandle, resetDone } = employeeSlice.actions;
export default employeeSlice.reducer;
