import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from '../features/departments/departmentsSlice';
import contractsReducer from '../features/contracts/contractsSlice';

const store = configureStore({
    reducer: {
        departments: departmentReducer,
        contracts: contractsReducer,
    },
});

export default store;