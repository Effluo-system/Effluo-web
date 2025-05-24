export interface CustomTableProps {
  headers: GridColDef[];
  rows: any;
  autoHeight?: boolean;
  deleteFunction?: (
    id: GridRowId
  ) => Promise<'Successfully deleted the entry' | 'Failed to delete the entry'>;
}

export interface AlertProps {
  message?: string;
  resourceName?: string;
}

export interface DeleteResult {
  affected: number;
  raw: [];
}
