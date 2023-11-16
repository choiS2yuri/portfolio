import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

                //     <h3 className="text-center font-blod text-xl sm:text-2xl lg:text-3xl">포트폴리오</h3>
                // </div>
                // <div className="mt-8">
                //     <Project />

const Wrap = styled.div`
 width: 100%; 
 padding: 50px 2% 32px; margin-top: 50px; 
`

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fff;
  /* border-radius: 10px;
  border: 1px solid #ddd; */
`
const Title = styled.div`
  text-align: center; font-weight: bold;
  font-size: 3rem;
`
const Container = styled.div`
  margin-top: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`
const List = styled.ul`
  display: flex;
  margin: 1rem 0;
  width: 100%;
`
const ListItem = styled.li`
    background-color: ${({isClick}) => (isClick ? '#F3962F' : '#fff')};
    color: ${({isClick}) => (isClick ? '#fff' : '#000')};
    font-weight: ${({isClick}) => (isClick ? 'bold' : 'normal')};;
    cursor: pointer;
    margin-right: 1rem;
    border: 1px solid #ddd;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
`
const ProjectList = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 2rem;
  padding: 3rem 2rem 4rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap:wrap;
  border: 1px solid #ddd;
  gap: 2%;
`
const ProjectItem = styled.div`
  flex-basis: 40%;
  position: relative;
  img{
    display: inline-block;
    width: 100%; height: 90%;
  }
`
const ProjectDesc = styled.div`
  flex-basis: 50%;
  line-height: 30px;
  h3{
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }
  p{
    width: 80%;
    margin: 0 auto;
    svg{
      margin-right: 10px;
    }
  }
`

function Project() {
  const menuArray = ["전체", "클론", "프로젝트", "웹앱"];
  const menuType = ["전체", "Clone", "Project", "Webapp"];
  const [isClick, setIsClick] = useState(0);
  const [cateGory, setCateGory] = useState("전체");

  const data =[
    {
        type : "Clone",
        img : "./../images/2.jpg",
        title : "할리스커피",
        desc : "클론코딩으로 html,css로 구현했습니다.",
        keyword: ["#심플", "#깰끔", "커피"],
        color: ["darkred", "orange" , "orangered"],
        date: "5일",
        contribution: "100%"
    },  
    {   
        type : "Project",
        img : "./../images/1.jpg",
        title : "greenping",
        desc : "캠핑 관련 정보 및 서비스 제공을 하고 커뮤니티를 기반으로 소통하는 사이트",
        keyword: ["#편리한","#여행","#캠핑"],
        color: ["lightgreen","gray","green"],
        date: "27일",
        contribution: "20%"
    },
    {
        type : "Clone",
        img : "./../images/3.jpg",
        title : "써브웨이",
        desc : "클론코딩입니다",
        keyword: ["#맛있는","#반응형","차은우"],
        color: ["green","yellow","white"],
        date: "10일",
        contribution: "100%"
    },
    {
        type : "Clone",
        img : "./../images/4.jpg",
        title : "반올림피자샵",
        desc : "클론코딩으로 html,css로 구현했습니다.",
        keyword: ["#대구기업","#리디자인","#깔끔한"],
        color: ["blue","yellow","white"],
        date: "15일",
        contribution: "100%"
    },
    {
        type : "Webapp",
        img : "./../images/5.jpg",
        title : "부산축제정보",
        desc : "공공데이터 API를 활용한 부산축제정보 안내 사이트입니다.",
        keyword: ["#여행정보","#부산"],
        color: ["lightskyblue","blue","white"],
        date: "5일",
        contribution: "100%"
    },
    {
        type : "Webapp",
        img : "./../images/6.jpg",
        title : "기초상식퀴즈",
        desc : "직접만들 JSON파일로 제작한 퀴즈 사이트",
        keyword: ["#기초상식","#코딩공부","#미니프로젝트"],
        color: ["darkgreen","indigo","white"],
        date: "2일",
        contribution: "100%"
    },        
    {
        type : "Webapp",
        img : "./../images/7.jpg",
        title : "택배조회서비스",
        desc : "택배조회서비스 key를 발급받아 만든 국.내외 택배조회 서비스",
        keyword: ["#택배조회","#편리한","#미니프로젝트"],
        color: ["orange","indigo","pink"],
        date: "3일",
        contribution: "100%"
    },
    {
        type : "Webapp",
        img : "./../images/8.jpg",
        title : "오늘의 운세정보",
        desc : "오늘의 운세정보를 확인할 수 있는 사이트",
        keyword: ["#운세정보","#재미있는","#미니프로젝트"],
        color: ["pink","white"],
        date: "3일",
        contribution: "100%"
    },
    {
        type : "Project",
        img : "./../images/9.jpg",
        title : "최유리포트폴리오",
        desc : "포트폴리오 제작했습니다.",
        keyword: ["#운세정보","#재미있는","#미니프로젝트"],
        color: ["orange","white"],
        date: "10일",
        contribution: "100%"
    }

]


useEffect(() => {
  window.scrollTo(0, 0);
}, []); 
  return (
    <>
      <Header />
        <>
          <Wrap>
            <Wrapper>
              <Title>프로젝트</Title>
            </Wrapper>
            <Container>
              <List>
                {
                 menuArray.map((e,i)=>{
                   return(
                   <ListItem key={i}
                   onClick={() => {
                    setIsClick(i);
                    setCateGory(menuType[i]);
                   }}
                   isClick={isClick === i}>{e}</ListItem>
                   )
                  })
                }
              </List>
            </Container>
            <Container>
                {
                   data.filter((e)=> cateGory === "전체" || cateGory === e.type).map((e,i)=>{
                    return(
                      <ProjectList key={i}>
                        <ProjectItem>
                          <img src={e.img} alt={e.title} />
                        </ProjectItem>
                        <ProjectDesc>
                          <h3>{e.title}</h3>
                          <p>
                          <FontAwesomeIcon icon={faSquareCheck} />
                            설명 : {e.desc}
                          </p>
                          <p>
                          <FontAwesomeIcon icon={faSquareCheck} />
                            기간 : {e.date}
                          </p>
                          <p>
                          <FontAwesomeIcon icon={faSquareCheck} />
                            기여도 : {e.contribution}
                          </p>
                        </ProjectDesc>
                      </ProjectList>
                    )
                   })
                }
            </Container>
          </Wrap>
        </>
      <Footer />
    </>

  )
}

export default Project