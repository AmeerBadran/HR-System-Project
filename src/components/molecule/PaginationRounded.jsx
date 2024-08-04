import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// eslint-disable-next-line react/prop-types
export default function PaginationRounded({ count = 10, onPageChange }) {
  const handlePageChange = (event, value) => {
    if (onPageChange) {
      onPageChange(value);
    }
  };
  return (<div className="mt-7 flex justify-center">
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
        sx={{
          '.MuiPaginationItem-root': {
            color: '#FFFFFF',
          },
          '.MuiPaginationItem-outlined': {
            borderColor: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#555555',
            },
          },
          '.MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#555555',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#777777',
            },
          },
        }}
      />
    </Stack>
  </div>
  );
}
