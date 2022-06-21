import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import JobBoard from './pages/JobBoard';
import Apply from './pages/Apply';
import Applied from './components/Applied';
import JobAdd from './pages/JobAdd';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobBoard />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/applied" element={<Applied />} />
        <Route path="/addjob" element={<JobAdd />} />
      </Routes>
    </>
  );
}

export default App;
