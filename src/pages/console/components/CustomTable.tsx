import { DataGrid, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { CustomTableProps } from '../../../types/common';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import useSnackbar from './SnackBar/useSnackbar';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const paginationModel = { page: 0, pageSize: 5 };

export default function CustomTable({
  headers,
  rows,
  autoHeight,
  deleteFunction,
}: CustomTableProps) {
  const [allRows, setAllRows] = useState(rows);
  const [toBeDeleted, setToBeDeleted] = useState<GridRowId | undefined>(
    undefined
  );
  const [isConfirmationShowing, setIsConfirmationShowing] =
    useState<boolean>(false);
  const showSnackbar = useSnackbar();

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
            key={`delete-${id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleClickOpen(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleDeleteClick = async () => {
    if (deleteFunction && toBeDeleted) {
      const msg = await deleteFunction(toBeDeleted);
      showSnackbar(msg);
      if (msg === 'Successfully deleted the entry') {
        setAllRows(rows.filter((row: any) => row?.id !== toBeDeleted));
      }
    }
    handleClose(); // close dialog after deletion
  };

  const handleClickOpen = (id: GridRowId) => {
    setIsConfirmationShowing(true);
    setToBeDeleted(id);
  };

  const handleClose = () => {
    setIsConfirmationShowing(false);
    setToBeDeleted(undefined);
  };

  return (
    <Paper sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={deleteFunction ? allRows : rows}
        columns={deleteFunction ? allHeaders : headers}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowHeight={autoHeight ? () => 'auto' : undefined}
      />
      <Dialog
        open={isConfirmationShowing}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: 'red' }}>
          {'Confirm Delete'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to permanently delete the entry?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteClick}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
