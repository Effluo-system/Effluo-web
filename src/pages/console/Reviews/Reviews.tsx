import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef } from '@mui/x-data-grid';
import { getReviews } from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import CustomAlert from '../components/CustomAlert';
import { Review } from '../../../types/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'body', headerName: 'Body', width: 200 },
    { field: 'created_by_user_login', headerName: 'Reviewer', width: 200 },
    {
      field: 'pull_request',
      headerName: 'Pull Request ID',
      width: 200,
      valueGetter: (_, row) => row?.id,
    },
  ];

  useEffect(() => {
    if (token) {
      const fetchReviews = async () => {
        try {
          setIsLoading(true);
          const res = await getReviews(token);
          if (res) {
            setReviews(res);
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
          <CustomTable headers={columns} rows={reviews} />
        )}
      </Box>
    </Container>
  );
};

export default Reviews;
