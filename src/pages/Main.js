import React from 'react'
import AboutItem from '../components/AboutItem'
import ProjectItem from '../components/ProjectItem'
import MainItem from '../components/MainItem'
import SkillsItem from '../components/SkillsItem'
import Contact from '../components/Contact'
import { useRef } from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import HeightBar from '../components/HeightBar'
import Footer from '../components/Footer'
import Aside from '../components/Aside'

function Main() {
  
  // const aboutItemRef = useRef({});
  // const skillsItemRef = useRef({});
  // const projectItemRef = useRef({});
  // const contactRef = useRef({});
  // const refArr = [aboutItemRef, skillsItemRef, projectItemRef, contactRef];
  

  
  // useEffect(() => {
  //   console.log(aboutItemRef.current);
  //   console.log(skillsItemRef.current);
  //   console.log(projectItemRef.current);
  //   console.log(contactRef.current);
  // }, []);
  // const moveToArtist = (id) => {
  //   document.getElementById(id).scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // };

  const moveToArtist = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
    <Header moveToArtist={moveToArtist}/>
    <HeightBar moveToArtist={moveToArtist}/>
    <MainItem/>
    <AboutItem  id="about"/>
    <SkillsItem id="skills"/>
    <ProjectItem id="project"/>
    <Contact id="contact"/>
    <Footer />
    </>
  )
}

export default Main