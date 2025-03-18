import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Repository } from '../../../types/repositories';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef } from '@mui/x-data-grid';
import { getRepositories } from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import CustomAlert from '../components/CustomAlert';

const Repositories = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 100 },
    {
      field: 'repository',
      headerName: 'Repository',
      minWidth: 200,
      flex: 1,
      valueGetter: (_, row) => row?.full_name,
    },
    { field: 'url', headerName: 'URL', minWidth: 200, flex: 1 },
  ];

  useEffect(() => {
    if (token) {
      const fetchRepositories = async () => {
        try {
          setIsLoading(true);
          const res = await getRepositories(token);
          if (res) {
            setRepos(res);
          }
        } catch (error) {
          if ((error as Error).message === 'User unauthorized') {
            setError(true);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchRepositories();
    }
  }, [token]);

  return isLoading ? (
    <PageLoadingAnimation removebg />
  ) : (
    <Container>
      <Box mt={5}>
        {isError ? (
          <CustomAlert resourceName="repositories" />
        ) : (
          <>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Repositories
            </Typography>
            <CustomTable headers={columns} rows={repos} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Repositories;
