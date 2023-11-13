
import React from 'react'
// import { useState } from 'react'
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
    p{
        text-align: end;
    }
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
    @media screen and (max-width: 768px){
      visibility: hidden;
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;

`

const ContentItem = styled.div`
    flex-basis: 45%;
    margin: 10px;
    height: 25rem;
    border: 1px solid #ddd;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
    box-sizing: border-box; 
    img{
      display: inline-block;
      width: 100%; height: 100%;
      transition: 0.3s;
    }
    @media screen and (min-width: 640px){
        flex-basis: 30%;
    }
    @media screen and (min-width: 1024px){
        flex-basis: 18.4%;
    }
`

const Description = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    transform: translateY(100%);
    transition: 0.3s;
`;
function ProjectItem() {
    // const [isOpen, setIsOpen] = useState(false)

    const data =[
        {
            type : "Clone",
            img : "./../images/2.jpg",
            title : "할리스커피",
            desc : "클론코딩으로 html,css로 구현했습니다."
        },  
        {   
            type : "Project",
            img : "./../images/1.jpg",
            title : "greenping",
            desc : "캠핑 관련 정보 및 서비스 제공을 하고 커뮤니티를 기반으로 소통하는 사이트"
        },
        {
            type : "Clone",
            img : "./../images/3.jpg",
            title : "써브웨이",
            desc : "클론코딩입니다"
        },
        {
            type : "Clone",
            img : "./../images/4.jpg",
            title : "반올림피자샵",
            desc : "클론코딩으로 html,css로 구현했습니다."
        }
    ]



  return (
    <>
    <Container id="project">
        <ContainerWrap>
            <ContainerTitle>
                <Title>PROJECT</Title>
            </ContainerTitle>
            <ContentGrid>
                    {
                        data.map((e,i)=>{
                            return(
                                <ContentItem key={i}>
                                  <img src={e.img} alt={e.title} />
                                  <Description>{e.desc}</Description>
                                </ContentItem>
                            )
                        })
                    }
              </ContentGrid>
              <p><Link to={'/project'}>더보기+</Link></p>
        </ContainerWrap>
    </Container>
</>
  )
}

export default ProjectItem