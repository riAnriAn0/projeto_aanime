import { BrowserRouter as Router} from 'react-router-dom';
import Index from './routes';
import Nav from './components/Nav';
import Container from './components/Container';

function App() {
  return (
        <Router >
          <Container >
            <Nav />
            <Index />
          </Container>
        </Router>
  );
}

export default App;
