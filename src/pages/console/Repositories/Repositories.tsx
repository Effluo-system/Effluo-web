import { Box, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Repository } from '../../../types/repositories';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef } from '@mui/x-data-grid';
import { getRepositories } from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import useCustomStyles from './useStyles';

const Repositories = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);
  const { alertSX } = useCustomStyles();

  console.log(isError);
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
          <Stack
            sx={{ height: '80vh' }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box sx={alertSX.box}>
              <Typography variant="h2" sx={alertSX.text}>
                Unauthorized. You need to be the repository owner to view
                repositories
              </Typography>
            </Box>
          </Stack>
        ) : (
          <CustomTable headers={columns} rows={repos} />
        )}
      </Box>
    </Container>
  );
};

export default Repositories;
