
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  padding: 5rem 0;
`
const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const ContainerTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 5rem;
    position: relative;
    p{
      font-size: 2rem;
      font-weight: bold;
    }
    @media screen and (max-width: 680px){
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
`
const Title = styled.div`
  flex-basis: 40%;

  p{
    font-size : 30px;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
  }
  span{
    font-size: 22px; 
    line-height: 40px;
    span{
      background: linear-gradient(to top, #F3962F, #fff, #fff );
    }
  }
  @media screen  and (max-width: 680px){
    flex-basis: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
      margin: 20px 0 40px;
      flex-basis: 100%;
      font-size: 25px;
    }
    span{
      font-size: 18px;
      line-height: 30px;
      flex-basis: 100%;
    }
  }
`

const Imgbox = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  img{
    width: 40%;
    height: 65%;
    border: 1px solid #F3962F;
    transform: rotate(30deg);
    transition: transform 0.5s;
    &:hover{
      transform:rotate(0deg)
    }
    @media screen and (max-width: 680px){
      width: 60%; height: 80%;
      transform: rotate(0deg);
      &:hover{
      transform:rotate(30deg)
      }
    }
  }
  @media screen and (max-width: 680px){
    flex-basis: 100%;
  }
`
const SnsLink = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  p{
    width: 80%;
    text-align: right;
    margin-top:30px;
    font-size: 18px;
    font-weight: normal;
    line-height: 22px;
    color: #9b9b9b;
    svg{
      margin-right: 10px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 680px){
      
      p{
        font-size: 15px;
        svg{
          font-size: 10px;
        }
      }
    }
`
const Connect = styled.ul`
  width: 100%;
  margin-top: 50px; 
  box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  li{
    flex-basis: 30%;
    text-align: end;
    a{
      svg{
        font-size: 25px;
      }
      img{
        width: 25px;
        height: 25px;
      }
    }
  }
`


function AboutItem() {
  const email = 'choiyr5256@gmail.com';

  return (
    <>
      <Wrap id="about">
        <Wrapper>
          <ContainerTitle>
            <p>ABOUT</p>
          </ContainerTitle>
          <Imgbox>
            <img src={`images/aboutimg.jpg`} alt='profile'/>
          </Imgbox>
          <Title>
            <p>노력하는 개발자 최유리입니다&#58;&#41;</p>
            <span> 
            늦게 시작한 개발자지만, 그것이 오히려 저에게는 더 큰 동기부여가 되었습니다.<span> '늦게 배운 도둑질이 날새는 줄 모른다'</span> 라는 속담을 모토로 삼아 후회하는 대신, 더욱 열심히 노력하며 개발자로서의 역량을 키워나가고 있습니다. 제 자신을 더욱 향상시키고 탁월한 개발자로 성장하기 위해 최선을 다하고 있습니다.
            </span>
            <SnsLink>
              <p>
                <FontAwesomeIcon icon={faLandmark} />&#40;혼합+디지털컨버전스&#41;React를 활용한 프론트엔드<br/>개발자 양성&#40;SPA프로젝트 개발 &#41;A&#95;-900시간<br/>2023년 6월 28일~ 11월 30일
              </p>
              <p>
                <FontAwesomeIcon icon={faLandmark} />&#40;그린 온라인캠프&#41;웹퍼블리싱 & 웹개발을 위한 코딩 기초&#95;2023년 7월 5일~ 8월 2일
              </p>
            </SnsLink>
            <Connect>
              <li><a href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} /></a></li>
              <li><a target='_blank' href="https://github.com/choiS2yuri/choiS2yuri"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a target='_blank' href="https://bronze-suggestion-c47.notion.site/8aa8cf9ce4ea411e84c787f036917f48?pvs=4"><img src={`images/notion.jpg`} /></a></li>
            </Connect>  
          </Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default AboutItem
