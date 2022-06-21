import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import JobBoard from './pages/JobBoard';
import Apply from './pages/Apply';
import Applied from './components/Applied';
import JobAdd from './pages/JobAdd';
import Applications from './pages/Applications';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobBoard />} />
        <Route path="apply/:id" element={<Apply />} />
        <Route path="applied/:id" element={<Applied />} />
        <Route path="addjob" element={<JobAdd />} />
        <Route path="applications" element={<Applications />} />
      </Routes>
    </>
  );
}

export default App;
