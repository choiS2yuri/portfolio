import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Wrapbar = styled.div`
  width: 5%;
  height: 1000vh;
  position: fixed;
  background-color: #F3962F;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
  div {
    position: relative;
  }
`;

const Heading = styled.h2`
  position: absolute;
  top: ${(props) => (props.position ? `${props.position}px` : '0')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
`;

function HeightBar({moveToArtist}) {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const headingsRef = [useRef(), useRef(), useRef(), useRef()];

  // {menuActive ? "right-0":"-right-72"}
  useEffect(() => {
    const handleScroll = () => {
      headingsRef.forEach((ref, index) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          setIsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = top >= 0 && top <= window.innerHeight;
            return newVisible;
          })
        }
      }
  )}

    // 컴포넌트가 마운트된 상태에서만 스크롤 이벤트 리스너를 등록

      window.addEventListener('scroll', handleScroll);
    

    // 언마운트 시 스크롤 이벤트 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Wrapbar>
        {/* <div id='about'>
          <Heading visible={isVisible[0]} position={1113}>ABOUT</Heading>
        </div>
        <div id='skills'>
          <Heading  visible={isVisible[1]} position={1918}>SKILLS</Heading>
        </div>
        <div id='project'>
          <Heading visible={isVisible[2]}  position={2724}>PROJECT</Heading>
        </div>
        <div id='contact'>
          <Heading visible={isVisible[3]} position={3687}>CONTACT</Heading>
        </div> */}
      </Wrapbar>
    </>
  )
}

export default HeightBar