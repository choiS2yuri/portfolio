import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import HeightBar from './components/HeightBar';
import Footer from './components/Footer';
import Aside from './components/Aside';
import { useRef } from 'react';
import AboutItem from './components/AboutItem';
import SkillsItem from './components/SkillsItem';
import ProjectItem from './components/ProjectItem';
import Contact from './components/Contact';



function App() {

  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const content3Ref = useRef<HTMLDivElement>(null);
  const content4Ref = useRef<HTMLDivElement>(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent4Click = () => {
    content4Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
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
