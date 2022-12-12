import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Appbar from './components/Appbar';
import { Container } from 'react-bootstrap'



function App() {
  return (
    <div className='body'>
    <Appbar />
    <Container>
    <Routes>
    <Route path ="/" element={<Home />} />
    </Routes>
    </Container>
    </div>
  );
}

export default App;
