import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`
const Title = styled.div`
  p{
   font-size : 30px;
  }
`
const Imgbox = styled.div`
  img{
    display: flex;
    width: 20%; height: 20%;
    left: 500px;
    border: 1px solid #F3962F;
    transform:rotate(30deg)
  }    
  &:hover{
    transform:rotate(0deg)
  }
`

function AboutItem() {
  return (
    <>
      <Wrap>
        <Wrapper>
          <Imgbox>
            <img src={`images/aboutimg.jpg`} alt='profile'/>
          </Imgbox>
          <Title>
            <p>발전하는 개발자 최유리 입니다.</p>
          </Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default AboutItem