import { DataGrid, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { CustomTableProps } from '../../../types/common';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const paginationModel = { page: 0, pageSize: 5 };

export default function CustomTable({
  headers,
  rows,
  autoHeight,
}: CustomTableProps) {
  const [allRows, setAllRows] = useState(rows);

  const allHeaders = [
    ...headers,
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }: { id: GridRowId }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleDeleteClick = (id: GridRowId) => () => {
    setAllRows(rows.filter((row: any) => row?.id !== id));
  };

  return (
    <Paper sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={allRows}
        columns={allHeaders}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowHeight={autoHeight ? () => 'auto' : undefined}
      />
    </Paper>
  );
}
