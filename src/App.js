import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/Project';






function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project' element={<Project />} />
        </Routes>
    </>
  );
}

export default App;
