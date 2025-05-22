import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRoutes from './routes/routes';
import Layout from './components/MainLayout/MainLayout';
import { ThemeProvider } from '@mui/material';
import themeOptions from './theme/theme';
import { SnackbarProvider } from './pages/console/components/SnackBar/SnackbarProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          hideIconVariant
          maxSnack={3}
        >
          <Layout>
            <AppRoutes />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
