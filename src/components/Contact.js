import { faKickstarterK } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
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
    margin-top: 7rem;
    text-align: center;
    margin-bottom: 1.25rem;
    position: relative;

`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
`
const ContentBox = styled.div`
  width: 100%;
  margin: 0 auto;
  p{
    text-align: center;
    display: flex; justify-content: center;
    svg{
      border: 1px solid #fff;
      background-color: #F3962F;
      padding: 1rem;
      border-radius: 50%;
      font-size: 30px;
      color: #fff;
    }
    span{
      font-size: 35px;
      margin-left: 8px;
      margin-top: 7px;
    }
  }

`
const ContentItem = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex; justify-content: center;
  a{
    text-align: center; 
    img{
      display: block;
      width: 50%; height: 90%;
      /* border: 5px solid #F3962F; */
      /* border-radius: 10px; */
      margin: 0 auto;
    }
  }
`
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }); 
  
  return (
    <>
      <Container id="contact">
        <ContainerWrap>
          <ContainerTitle>
            <Title>Contact</Title>
          </ContainerTitle>
          <ContentBox>
            <ContentItem>
              <a href='https://open.kakao.com/o/sqQDdJPf' target='_blank' rel='noreferrer'>
                <img src={`images/Kakao.jpg`} alt='kakao'/>
              </a>
            </ContentItem>
            <p>
              <FontAwesomeIcon icon={faKickstarterK} />
              <span>1:1 문의하기</span>
            </p>
          </ContentBox>
        </ContainerWrap>
      </Container>
    </>
  )
}

export default Contact