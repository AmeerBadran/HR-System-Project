import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from '../features/departments/departmentsSlice';

const store = configureStore({
    reducer: {
        departments: departmentReducer,
    },
});

export default store;