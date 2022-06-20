import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import JobBoard from './pages/JobBoard';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobBoard />} />
      </Routes>
    </>
  );
}

export default App;
