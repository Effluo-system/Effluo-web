import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getPrs } from '../../../services/consoleService';
import { Box, Container } from '@mui/material';
import CustomTable from '../components/CustomTable';
import { GridColDef } from '@mui/x-data-grid';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { PullRequest } from '../../../types/prs';

const PullRequests = () => {
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'repository',
      headerName: 'Repository',
      width: 200,
      valueGetter: (_, row) => row?.repository?.full_name,
    },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 130 },
    {
      field: 'assignees',
      headerName: 'Assignees',
      width: 200,
      sortable: false,
    },
    {
      field: 'labels',
      headerName: 'Labels',
      sortable: false,
      width: 200,
    },
    {
      field: 'number',
      headerName: 'Number',
      width: 100,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      width: 150,
    },
  ];

  useEffect(() => {
    if (token) {
      const fetchPrs = async () => {
        try {
          setLoading(true);
          const res = await getPrs(token);
          if (res) {
            setPrs(res);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchPrs();
    }
  }, [token]);

  return !loading ? (
    <Container>
      <Box mt={5}>
        <CustomTable headers={columns} rows={prs} />
      </Box>
    </Container>
  ) : (
    <PageLoadingAnimation removebg />
  );
};

export default PullRequests;
