import { createSlice } from '@reduxjs/toolkit';

const departmentsSlice = createSlice({
    name: 'departments',
    initialState: [{
            id: 1,
            name: 'Human Resources',
            employees: 25,
            head: 'John Doe',
            location: 'B1',
            budget: '$1,200,000',
        },
        {
            id: 2,
            name: 'Engineering',
            employees: 40,
            head: 'Jane Smith',
            location: 'B2',
            budget: '$3,500,000',
        },
        {
            id: 3,
            name: 'Marketing',
            employees: 30,
            head: 'Sara Johnson',
            location: 'A1',
            budget: '$2,000,000',
        },
        {
            id: 4,
            name: 'Sales',
            employees: 35,
            head: 'Mike Lee',
            location: 'A2',
            budget: '$2,500,000',
        },
        {
            id: 5,
            name: 'IT',
            employees: 20,
            head: 'Linda Brown',
            location: 'B2',
            budget: '$1,800,000',
        },
        {
            id: 6,
            name: 'Finance',
            employees: 15,
            head: 'Robert Green',
            location: '1',
            budget: '$1,500,000',
        },
        {
            id: 7,
            name: 'Operations',
            employees: 50,
            head: 'Angela White',
            location: 'A1',
            budget: '$4,000,000',
        },
        {
            id: 8,
            name: 'Legal',
            employees: 10,
            head: 'Edward Grey',
            location: 'A2',
            budget: '$900,000',
        }
    ],
    reducers: {
        addDepartment: (state, action) => {
            state.push(action.payload);
        },
        deleteDepartment: (state, action) => {
            return state.filter(department => department.id !== action.payload);
        },
        updateDepartment: (state, action) => {
            const index = state.findIndex(department => department.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addDepartment, deleteDepartment, updateDepartment } = departmentsSlice.actions;
export default departmentsSlice.reducer;