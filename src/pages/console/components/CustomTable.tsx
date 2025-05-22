import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { CustomTableProps } from '../../../types/common';

const paginationModel = { page: 0, pageSize: 5 };

export default function CustomTable({
  headers,
  rows,
  autoHeight,
}: CustomTableProps) {
  return (
    <Paper sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={headers}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowHeight={autoHeight ? () => 'auto' : undefined}
      />
    </Paper>
  );
}
