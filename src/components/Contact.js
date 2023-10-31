import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 100%;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex; flex-wrap: wrap;
    padding: 0 2%;
`
const ContainerTitle = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 1.25rem;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 11%;
        height: 3px;
        background-color: #F3962F;
        left: 50%; top: 0;; transform: translate(-50%, -50%);
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
`
const ContentBox = styled.div`
  width: 100%;

`
const ContentItem = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex; justify-content: center;
  a{
    text-align: center; 
    img{
      display: block;
      width: 50%; height: 50%;
      border: 1px solid #F3962F;
      border-radius: 10px;
      margin: 0 auto;
    }
  }
`
function Contact() {
  return (
    <>
      <Container>
        <ContainerWrap>
          <ContainerTitle>
            <Title>Contact</Title>
          </ContainerTitle>
          <ContentBox>
            <ContentItem>
              <Link to={"https://open.kakao.com/o/sqQDdJPf"} >
                <img src={`images/Kakao.jpg`} alt='kakao'/>
              </Link>
            </ContentItem>
          </ContentBox>
        </ContainerWrap>
      </Container>
    </>
  )
}

export default Contact