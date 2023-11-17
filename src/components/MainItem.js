import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
  box-sizing: border-box;
  padding-top: 200px;
  @media screen and (max-width: 768px){
    padding-top: 200px;
  }
`
const Title = styled.div`
  height: 100%;
  display: inline;
  p{
    font-weight:  900;
    color: #F3962F;
    font-size: 120px;
    letter-spacing: 10px;
    span{

    }
    @media screen and (max-width: 768px){
        font-size: 70px;
        font-weight: 900;
        letter-spacing: 3px;

      }
  }
`
const Writerstyle = styled.p`
  font-size: 180px;
  font-weight: 900;
  letter-spacing: 5px;
    span{
      text-align: center;
      color: #fff;
      background-color: orange;
      font-size: 100px;
      line-height: 80px;
      font-weight: 900;
      @media screen and (max-width: 768px){
        text-align: center;
        font-size: 60px;
        line-height: 60px;
        font-weight: 900;
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
          <Title>
            <p>Hello I'm
             <span>{''}</span></p>
          </Title>
            <Writerstyle>
              <Typewriter 
              words={["Choi Yu Ri", "Front End\nDeveloper"]}
              loop={1000} 
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}
              className="bold-text"/>
            </Writerstyle>
        </Wrapper>
    </>
  )
}

export default MainItem

    