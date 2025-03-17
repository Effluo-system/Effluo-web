import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef } from '@mui/x-data-grid';
import { getWorkload } from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import CustomAlert from '../components/CustomAlert';
import { Workload as WorkloadType } from '../../../types/workload';

const Workload = () => {
  const [workload, setWorkload] = useState<WorkloadType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'login', headerName: 'Login', width: 100 },
    {
      field: 'weight',
      headerName: 'Workload',
      width: 200,
    },
  ];

  useEffect(() => {
    if (token) {
      const fetchReviews = async () => {
        try {
          setIsLoading(true);
          const res = await getWorkload(token);
          if (res) {
            // Add index as `id` for each row
            const updatedWorkload = res.map((item: any, index: number) => ({
              id: index.toString(), // Use the index as the unique id
              ...item,
            }));
            setWorkload(updatedWorkload);
          }
        } catch (error) {
          if ((error as Error).message === 'User unauthorized') {
            setError(true);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchReviews();
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
          <CustomTable headers={columns} rows={workload} />
        )}
      </Box>
    </Container>
  );
};

export default Workload;
