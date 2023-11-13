
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0;
`
const Wrapper = styled.div`
  width: 90%;
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
  }
  span{
    flex-basis: 50%;
    font-size: 24px;
    line-height: 30px;
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
      line-height: 25px;
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
const Connect = styled.ul`
  width: 100%;
  margin-top: 100px; 
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  li{
    flex-basis: 30%;
    text-align: end;
    a{
      svg{
        font-size: 25px;
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
        width: 5%;
        height: 3px;
        background-color: #F3962F;
        left: 49.7%; top: 0;; transform: translate(-50%, -50%);
    }
    p{
      font-size: 2rem;
      font-weight: bold;
    }
    @media screen and (max-width: 768px){
      visibility: hidden;
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
            <p>노력하는 개발자 최유리 입니다&#58;&#41;</p>
            <span>
            비전공자로서 개발자의 길을 걸으며 늦게 시작했지만, 오히려 그 때문에 더 열심히 노력하고 있습니다.<br/>
             '늦게 배운 도둑질이 날새는 줄 모른다'는 이 속담을 모토 삼아 후회 대신 더욱 열심히 노력하며, 개발자로서의 제 역량을 키워나가고 있습니다.<br/>개발이라는 분야에 뛰어든 이후로, 저는 이 일에 푹 빠져들어 시간 가는 줄 모르고 매일을 새며 배우고, 성장하였습니다. <br/>그 결과, 늦게 시작한 만큼 더욱 깊고 풍부한 지식을 갖게 되었으며, 이를 바탕으로 더욱 탁월한 개발자가 되기 위해 노력하고 있습니다.
            </span>
            <Connect>
              <li><a target='_blank' href="mailto:example@example.com" rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} /></a></li>
              <li><a target='_blank' href="https://github.com/" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a target='_blank' href="https://www.notion.so/invite/186eaa0917b9c13f171c811a198748e69e9bc87e" rel='noreferrer'><FontAwesomeIcon icon={faSquareCheck} /></a></li>
            </Connect>
          </Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default AboutItem