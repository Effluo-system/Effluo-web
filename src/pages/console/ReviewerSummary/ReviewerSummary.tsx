import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLoadingAnimation from '../../../components/PageLoading/PageLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { GridColDef, GridRowId } from '@mui/x-data-grid';
import {
  deleteSummary,
  getReviewSummary,
} from '../../../services/consoleService';
import CustomTable from '../components/CustomTable';
import CustomAlert from '../components/CustomAlert';
import { ReviewerSummary as Summary } from '../../../types/summary';

const ReviewerSummary = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.token)!;
  const [isError, setError] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'review_summary',
      headerName: 'Reviewer Summary',
      minWidth: 500,
      flex: 1,
      renderCell: (params) => {
        // Make the JSON string nicely spaced and formatted with line breaks
        const reviewSummary = JSON.stringify(
          params.row.review_summary,
          null,
          2
        ); // Pretty-print JSON with 2 spaces indentation
        return (
          <pre
            style={{
              whiteSpace: 'pre-wrap', // Ensure the text wraps
              wordBreak: 'break-word', // Break words if they are too long
              maxWidth: '100%', // Ensure the content fills the cell width
              overflowX: 'auto', // Allow horizontal scroll if needed
            }}
          >
            {reviewSummary}
          </pre>
        );
      },
    },
    {
      field: 'repo',
      headerName: 'Repo ID',
      width: 200,
      valueGetter: (_, row) => row?.repo?.id,
    },
  ];

  useEffect(() => {
    if (token) {
      const fetchReviews = async () => {
        try {
          setIsLoading(true);
          const res = await getReviewSummary(token);
          if (res) {
            setSummaries(res);
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

  const onDeleteClick = async (
    id: GridRowId
  ): Promise<
    'Successfully deleted the entry' | 'Failed to delete the entry'
  > => {
    if (token) {
      const res = await deleteSummary(id.toString(), token);
      if (res?.affected && res?.affected > 0) {
        return 'Successfully deleted the entry';
      } else {
        return 'Failed to delete the entry';
      }
    }
    return 'Failed to delete the entry';
  };

  return isLoading ? (
    <PageLoadingAnimation removebg />
  ) : (
    <Container>
      <Box mt={5}>
        {isError ? (
          <CustomAlert resourceName="reviewer summary" />
        ) : (
          <>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Reviewer Summaries
            </Typography>
            <CustomTable
              headers={columns}
              rows={summaries}
              deleteFunction={onDeleteClick}
              autoHeight
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default ReviewerSummary;
