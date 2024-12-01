import { Button, Container } from '@mui/material';
import { h } from '../../services/authService';

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Button onClick={async () => await h()}>H</Button>
    </Container>
  );
};

export default Home;
