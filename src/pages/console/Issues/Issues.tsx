import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef } from '@mui/x-data-grid';
import { getIssues } from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import CustomAlert from '../components/CustomAlert';
import { Issue } from '../../../types/issues';

const Issues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'assignees', headerName: 'Assignees', width: 200 },
    { field: 'labels', headerName: 'Labels', width: 200 },
    { field: 'weight', headerName: 'Weight', width: 100 },
    {
      field: 'repo',
      headerName: 'Repo ID',
      width: 200,
      valueGetter: (_, row) => row?.id,
    },
  ];

  useEffect(() => {
    if (token) {
      const fetchIssues = async () => {
        try {
          setIsLoading(true);
          const res = await getIssues(token);
          if (res) {
            setIssues(res);
          }
        } catch (error) {
          if ((error as Error).message === 'User unauthorized') {
            setError(true);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchIssues();
    }
  }, [token]);

  return isLoading ? (
    <PageLoadingAnimation removebg />
  ) : (
    <Container>
      <Box mt={5}>
        {isError ? (
          <CustomAlert resourceName="reviews" />
        ) : (
          <CustomTable headers={columns} rows={issues} />
        )}
      </Box>
    </Container>
  );
};

export default Issues;
