import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/Project';
import Aside from './components/Aside';





function App() {

  return (
    <>
        <Aside />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project' element={<Project />} />
        </Routes>
    </>
  );
}

export default App;
