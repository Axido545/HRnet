import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    done: false,
    modalOpen: false,
};

const employeeSlice = createSlice({
    initialState,
    name: "userState",
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload];
            state.done = true;
        },
        modalHandle(state, action) {
            state.done = action.payload;
        },
        resetDone(state) {
            state.done = false;
        },
    },
});

export const { addUser, modalHandle, resetDone } = employeeSlice.actions;
export default employeeSlice.reducer;
