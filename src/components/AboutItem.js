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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Title = styled.div`
  flex-basis: 40%;
  p{
   font-size : 30px;
   margin-bottom: 30px;
  }
  span{
    width: 50%;
  }
`
const Imgbox = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  position: relative;

`
const RotatedImg = styled.img`
  width: 30%;
  height: 50%;
  border: 1px solid #F3962F;
  transform: rotate(30deg);
  transition: transform 0.5s;
  &:hover{
    transform:rotate(0deg)
  }
  @media screen and (max-width: 768px){
    flex-basis: 100%;

  }
`

function AboutItem() {
  return (
    <>
      <Wrap>
        <Wrapper>
          <Imgbox>
            <RotatedImg src={`images/aboutimg.jpg`} alt='profile'/>
          </Imgbox>
          <Title>
            <p>노력하는 개발자 최유리 입니다&#58;&#41;</p>
            <span>
            비전공자로서 개발자의 길을 걸으며 늦게 시작했지만, 오히려 그 때문에 더 열심히 노력하고 있습니다.<br/>
             '늦게 배운 도둑질이 날새는 줄 모른다'는 이 속담을 모토 삼아  늦게 시작했음을 후회하는 대신 더욱 열심히 노력하며, 개발자로서의 제 역량을 키워나가고 있습니다.<br/>개발이라는 분야에 뛰어든 이후로, 저는 이 일에 푹 빠져들어 시간 가는 줄 모르고 매일을 새며 배우고, 성장하였습니다. <br/>그 결과, 늦게 시작한 만큼 더욱 깊고 풍부한 지식을 갖게 되었으며, 이를 바탕으로 더욱 탁월한 개발자가 되기 위해 노력하고 있습니다.
            </span>
          </Title>
        </Wrapper>
      </Wrap>
    </>
  )
}

export default AboutItem