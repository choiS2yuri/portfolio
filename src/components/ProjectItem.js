import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex; flex-wrap: wrap;
    padding: 0 2%;
    @media screen and (max-width: 768px){
      margin: 0 20px;
    }
`
const ContainerTitle = styled.div`  
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-top: 7rem;
    position: relative;
    p{
        margin-bottom: 2rem;
        text-align: end;
        font-size: 18px;
        @media screen and (max-width: 768px){
            visibility: visible;
        }
        a{
            &:hover{
                color: #F3962F;
                font-weight: bold;
            }
        }
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5rem;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;

`

const ContentItem = styled.div`
    flex-basis: 18.4%;
    margin-bottom: 50px;
    height: 20rem;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: 0.3s;
    position: relative; 
    img{
      display: inline-block;
      width: 100%; height: 100%;
      transition: 0.3s;
    }
    @media screen and (max-width: 767px){
        flex-basis: calc(40% - 2px);
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        flex-basis: calc(27% - 15px);
    }
`

const Description = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    /* color: #fff;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')}; */
    opacity: 0;
    transform: translateY(100%);
    transition: 0.3s;
`;
function ProjectItem() {

    const data =[
        {
            type : "Clone",
            img : "./../images/2.jpg",
            title : "할리스커피",
            desc : "클론코딩으로 html,css로 구현했습니다.",
            keyword: ["#심플", "#깰끔", "커피"],
            color: ["#b5121b", "#6f6f6f" , "#de898e"],
            date: "5일",
            original : "https://chois2yuri.github.io/horryscoffe/",
            contribution: "100%"
        },  
        {   
            type : "Project",
            img : "./../images/1.jpg",
            title : "greenping",
            desc : "캠핑 관련 정보 및 서비스 제공을 하고 커뮤니티를 기반으로 소통하는 사이트",
            keyword: ["#편리한","#여행","#캠핑"],
            color: ["#beffa4","#2ed090","#ddd"],
            date: "27일",
            original : "https://project-greenping-aql4akyqb-kkkkinderjoy.vercel.app/",
            git: "https://github.com/kkkkinderjoy/project_greenping.git",
            contribution: "20%"
        },
        {
            type : "Clone",
            img : "./../images/3.jpg",
            title : "써브웨이",
            desc : "클론코딩입니다",
            keyword: ["#맛있는","#반응형","차은우"],
            color: ["#009223","#ffc300","#292929"],
            date: "10일",
            original : "https://subway-henna.vercel.app/",
            contribution: "100%"
        },
        {
            type : "Clone",
            img : "./../images/4.jpg",
            title : "반올림피자샵",
            desc : "클론코딩으로 html,css로 구현했습니다.",
            keyword: ["#대구기업","#리디자인","#깔끔한"],
            color: ["#00a1e9","#ffe100","#dfdfdf"],
            date: "15일",
            original : "",
            contribution: "100%"
        },
        {
            type : "Webapp",
            img : "./../images/5.jpg",
            title : "부산축제정보",
            desc : "공공데이터 API를 활용한 부산축제정보 안내 사이트입니다.",
            keyword: ["#여행정보","#부산"],
            color: ["#e9f1f6","lightskyblue","#333"],
            date: "5일",
            original : "https://festival-kappa.vercel.app/",
            contribution: "100%"
        },
        {
            type : "Webapp",
            img : "./../images/6.jpg",
            title : "기초상식퀴즈",
            desc : "직접만들 JSON파일로 제작한 퀴즈 사이트",
            keyword: ["#기초상식","#코딩공부","#미니프로젝트"],
            color: ["green","blue","gray"],
            date: "2일",
            original : "https://quiz-teal-beta.vercel.app/",
            contribution: "100%"
        },        
        {
            type : "Webapp",
            img : "./../images/7.jpg",
            title : "택배조회서비스",
            desc : "택배조회서비스 key를 발급받아 만든 국.내외 택배조회 서비스",
            keyword: ["#택배조회","#편리한","#미니프로젝트"],
            color: ["#818cf8","#fb923c","#ec4899"],
            date: "3일",
            original : "https://parcel-psi-bay.vercel.app/",
            contribution: "100%"
        },
        {
            type : "Webapp",
            img : "./../images/8.jpg",
            title : "오늘의 운세정보",
            desc : "오늘의 운세정보를 확인할 수 있는 사이트",
            keyword: ["#운세정보","#재미있는","#미니프로젝트"],
            color: ["F9A8D4","#F472B6"],
            date: "3일",
            contribution: "100%"
        },
        {
            type : "Project",
            img : "./../images/9.jpg",
            title : "최유리포트폴리오",
            desc : "포트폴리오 제작했습니다.",
            keyword: ["#운세정보","#재미있는","#미니프로젝트"],
            color: ["orange","black","#ddd"],
            date: "10일",
            contribution: "100%"
        },
        {
            type: "Webapp",
            img: "https://placeholder.com/100",
            title: "2048미니게임",
            desc: "직접 제작해본 2048게임입니다.",
            color: ["pink", "lightskyblue","gray"],
            date: "?일",
            contribution: "100%"
        }
    
    ]
    



  return (
    <>
    <Container id="project">
        <ContainerWrap>
            <ContainerTitle>
                <Title>PROJECT</Title>
                <p><Link to={'/project'}>더보기+</Link></p>
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
        </ContainerWrap>
    </Container>
</>
  )
}

export default ProjectItem