
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 50px 0; */
`
const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Title = styled.div`
  flex-basis: 40%;
  margin: auto 0;
  p{
    font-size : 30px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  span{
    flex-basis: 43%;
    font-size: 20px;
    line-height: 40px;
    span{
      background: linear-gradient(to top,#F3962F, #fff, #fff );
    }
  }
  @media screen  and (max-width: 768px){
    flex-basis: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
      margin-top: 60px;
      flex-basis: 100%;
    }
    span{
      font-size: 18px;
      line-height: 24px;
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
  @media screen and (max-width: 768px){
    flex-basis: 100%;
    &:hover{
    transform:rotate(0deg)
    }
  }
`
const RotatedImg = styled.img`
  width: 30%;
  height: 60%;
  border: 1px solid #F3962F;
  transform: rotate(30deg);
  transition: transform 0.5s;
  &:hover{
    transform:rotate(0deg)
  }
  @media screen and (max-width: 768px){
    width: 60%; height: 80%;
    transform: rotate(0deg);
    &:hover{
    transform:rotate(30deg)
    }
  }
`
const SnsLink = styled.div`
  flex-basis: 40%;
  p{
    margin-top:30px;
    font-size: 18px;
    font-weight: normal;
    line-height: 22px;
    color: #9b9b9b;
    svg{
      margin-right: 10px;
    }
  }

`
const Connect = styled.ul`
  width: 100%;
  margin-top: 100px; 
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
const ContainerTitle = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-top: 6.5rem;
    margin-bottom: 1.25rem;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 7%;
        height: 3px;
        background-color: #F3962F;
        left: 50%; top: 0; transform: translate(-50%, -50%);
    }
    p{
      font-size: 2rem;
      font-weight: bold;
    }
    @media screen and (max-width: 768px){
      &::after {
        content: "";
        width: 4px;
        height: 100%;
        background-color: #f3962f;
        left: 39%; top: 0; transform: translate(0, 0);
      }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
    &::after {
      content: "";
      width: 4px; 
      height: 20%;
      background-color: #f3962f;
      left: 44%; 
      top: 0;
      transform: translate(0, 0); 
    }
  }
`

function AboutItem() {
  return (
    <>
      <Wrap id="about">
        <Wrapper>
          <ContainerTitle>
            <p>ABOUT</p>
          </ContainerTitle>
          <Imgbox>
            <RotatedImg src={`images/aboutimg.jpg`} alt='profile'/>
          </Imgbox>
          <Title>
            <p>노력하는 개발자 최유리입니다&#58;&#41;</p>
            <span> 
            늦게 시작한 개발자지만, 그것이 오히려 저에게는 더 큰 동기부여가 되었습니다.<span> '늦게 배운 도둑질이 날새는 줄 모른다'</span> 라는 속담을 모토로 삼아 후회하는 대신, 더욱 열심히 노력하며 개발자로서의 역량을 키워나가고 있습니다. 제 자신을 더욱 향상시키고 탁월한 개발자로 성장하기 위해 최선을 다하고 있습니다.
            </span>
            <SnsLink>
              <p>
                <FontAwesomeIcon icon={faLandmark} />&#40;혼합+디지털컨버전스&#41;React를 활용한 프론트엔드 개발자 양성&#40;SPA프로젝트 개발 &#41;A&#95;-900시간
              </p>
            </SnsLink>
            <Connect>
              <li><a target='_blank' href="mailto:choiyr5256@gmail.com" rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} /></a></li>
              <li><a target='_blank' href="https://github.com/" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a target='_blank' href="https://www.notion.so/8aa8cf9ce4ea411e84c787f036917f48?pvs=4" rel='noreferrer'><img src={`images/notion.jpg`} /></a></li>
            </Connect>
          </Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default AboutItem
