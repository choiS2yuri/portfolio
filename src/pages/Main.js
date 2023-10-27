import React from 'react'
import Footer from '../components/Footer'
import AboutItem from '../components/AboutItem'
import ProjectItem from '../components/ProjectItem'
import MainItem from '../components/MainItem'
import SkillsItem from '../components/SkillsItem'



function Main({content1Ref, content2Ref, content3Ref}) {

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollPosition);
  return (
    <>
      <MainItem />
      <AboutItem content1Ref={content1Ref}  />
      <SkillsItem content1Ref={content2Ref} />
      <ProjectItem content1Ref={content3Ref} />
    </>
  )
}

export default Main