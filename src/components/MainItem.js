import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
  box-sizing: border-box;
  padding-top: 300px;
  @media screen and (max-width: 768px){
    padding-top: 200px;
  }
`
const Title = styled.div`
  height: 100%;
  color: #F3962F;
  font-size: 70px;
  display: inline;
  @media screen and (max-width: 768px){
    font-size: 60px;
  }
`
const Writerstyle = styled.p`
    span{
      text-align: center;
      color: #F3962F;
      font-size: 60px;
      @media screen and (max-width: 768px){
        text-align: center;
        font-size: 45px;
  }
    }
`

function MainItem() {
    // const txt = "안녕하세요."
    // const [text, setText] = useState('');
    // const [count, setCount] = useState(0);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setText(text + txt[count]);
    //       setCount(count + 1);
    //       if (count === txt.length) {
    //         setCount(0);
    //         setText('');
    //       }
    //     }, 250);
    
    //     return () => clearInterval(interval);
    //   }, [count,text]);

  
  return (
    <>
        <Wrapper>
          <Title>Hello I'm <br/>{''}</Title>
            <Writerstyle>
              <Typewriter 
              words={["Choi Yu Ri", "Front End\nDeveloper"]}
              loop={1000} 
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}/>
            </Writerstyle>
        </Wrapper>
    </>
  )
}

export default MainItem

    