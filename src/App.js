import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import HeightBar from './components/HeightBar';
import Footer from './components/Footer';
import Aside from './components/Aside';
import { useRef } from 'react';

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
          <Route path='/' element={<Main content1Ref={content1Ref} content2Ref={content2Ref} content3Ref={content3Ref} content4Ref={content4Ref} onContent1Click={onContent1Click} onContent2Click={onContent2Click} onContent3Click={onContent3Click} onContent4Click={onContent4Click} />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      <Aside />
      <Footer /> 
    </>
  );
}

export default App;
