import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Index from './routes';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
        <Router >
          <Nav />
          <Index />
        </Router>
    </div>
  );
}

export default App;
