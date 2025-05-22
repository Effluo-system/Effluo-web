export interface CustomTableProps {
  headers: GridColDef[];
  rows: any;
  autoHeight?: boolean;
}

export interface AlertProps {
  message?: string;
  resourceName?: string;
}
