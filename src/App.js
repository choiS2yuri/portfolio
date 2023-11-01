import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import HeightBar from './components/HeightBar';
import Footer from './components/Footer';
import Aside from './components/Aside';




function App() {

  return (
    <>
      <Header />
      <HeightBar />
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/about' element={<AboutItem />} />
          <Route path='/skills' element={<SkillsItem />} />
          <Route path='/project' element={<ProjectItem/>} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      <Aside />
      <Footer /> 
    </>
  );
}

export default App;
