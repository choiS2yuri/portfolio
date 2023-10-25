import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
  box-sizing: border-box;
  padding-top: 300px;
`
const Title = styled.pre`
  height: 100%;
  color: #F3962F;
  font-size: 70px;
  display: inline;
`

function MainItem() {
    const txt = "Hello, I'm\n Choi Yu Ri"
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
          setText(text + txt[count]);
          setCount(count + 1);
    
          // 텍스트가 모두 출력되면 count와 text를 초기화
          if (count === txt.length) {
            setCount(0);
            setText('');
          }
        }, 250);
    
        return () => clearInterval(interval);
      }, [count,text]);
  
  return (
    <>
      <Wrap>
        <Wrapper>
          <Title>{text}</Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default MainItem

    