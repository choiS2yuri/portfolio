import React, { useEffect, useRef, useState  } from 'react'
import styled, { keyframes } from 'styled-components'


const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 80%; height: 100%;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
  box-sizing: border-box;
  /* :nth-child(1){
    font-size: 70px;
  }
  :nth-child(2){
    animation: blink 0.5s infinite;
    font-size: 2.5rem;
} */
  /* @keyframes blink {
      to {opacity: 0;}} */
`
const blink = keyframes`
  to {
    opacity: 0;
  }
`;
const AnimatedText = styled.div`
  font-size: 70px;
  &:nth-child(2) {
    animation: ${blink} 0.5s infinite;
    font-size: 2.5rem;
  }
`;
function MainBoard() {

  // const [word, setWord] = useState('');
  // let sentence = '안녕하세요. \n 최유리입니다'
  // let i = 0; 
  // const [count, setCount] = useState(0);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const textArray = ["Choi yuri", "Front end developer"];
  const speed = 50;
  const target = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let txt = sentence[i++];
  //     setWord((prevText) => (txt === "\n" ? prevText + "<br />" : prevText + txt));
  //     if (i > sentence.length) {
  //       setWord('');
  //       i = 0;
  //     }
  //   },200);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  useEffect(() => {
    function txtnum() {
      setJ((prevJ) => (prevJ === textArray.length - 1 ? 0 : prevJ + 1));
    }

    function type() {
      if (i < textArray[j].length) {
        target.current.innerHTML += textArray[j].charAt(i);
        setI((prevI) => prevI + 1);
        setTimeout(type, speed);
      } else {
        remove();
      }
    }

    function remove() {
      if (i >= 0) {
        target.current.innerHTML = target.current.innerHTML.slice(0, i);
        setI((prevI) => prevI - 1);
        setTimeout(remove, speed);
      } else {
        type();
        txtnum();
      }
    }
    type();
  }, [i, j, textArray]);

  return (
    <>
      <Wrap>
        <Wrapper>
          {/* <p dangerouslySetInnerHTML={{ __html: word}}></p><span>|</span> */}
          return 
          <AnimatedText id="type" ref={target}></AnimatedText>;
        </Wrapper>
      </Wrap>
    </>
  )
}

export default MainBoard