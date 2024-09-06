import { createSlice } from '@reduxjs/toolkit';

const contractsSlice = createSlice({
    name: 'contracts',
    initialState: [{
            id: 1,
            employeeName: 'John Doe',
            contractType: 'Full-Time',
            startDate: '2023-01-01',
            endDate: '2024-01-01',
            salary: '$50,000',
            position: 'Software Engineer',
        },
        {
            id: 2,
            employeeName: 'Jane Smith',
            contractType: 'Part-Time',
            startDate: '2023-02-01',
            endDate: '2024-02-01',
            salary: '$30,000',
            position: 'Graphic Designer',
        },
        {
            id: 3,
            employeeName: 'Alice Johnson',
            contractType: 'Contract',
            startDate: '2023-03-01',
            endDate: '2024-03-01',
            salary: '$40,000',
            position: 'Project Manager',
        },
        {
            id: 4,
            employeeName: 'Bob Brown',
            contractType: 'Internship',
            startDate: '2023-04-01',
            endDate: '2023-10-01',
            salary: '$10,000',
            position: 'Intern',
        },
        {
            id: 5,
            employeeName: 'Carol White',
            contractType: 'Full-Time',
            startDate: '2023-05-01',
            endDate: '2024-05-01',
            salary: '$60,000',
            position: 'Data Analyst',
        },
    ],
    reducers: {
        addContract: (state, action) => {
            state.push(action.payload);
        },
        updateContract: (state, action) => {
            const index = state.findIndex(contract => contract.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteContract: (state, action) => {
            return state.filter(contract => contract.id !== action.payload);
        },
    },
});

export const { addContract, updateContract, deleteContract } = contractsSlice.actions;
export default contractsSlice.reducer;