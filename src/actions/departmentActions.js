export const addDepartment = (department) => ({
    type: 'ADD_DEPARTMENT',
    payload: department,
});

export const deleteDepartment = (id) => ({
    type: 'DELETE_DEPARTMENT',
    payload: id,
});