import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled, { StyleSheetManager } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import Aside from '../components/Aside'


const Wrap = styled.div`
 width: 100%; 
 padding: 50px 0 32px;  
 margin: 50px auto 0;
`

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fff;
  /* border-radius: 10px;
  border: 1px solid #ddd; */
`
const Title = styled.div`
  text-align: center; 
  font-weight: bold;
  font-size: 3rem;
`
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-basis: 20%;
  }
  @media (max-width: 768px) {

  }
`
const List = styled.ul`
  display: flex;
  margin: 1rem 0;
  width: 100%;
`
const ListItem = styled.li`
    background-color: ${({isclick}) => (isclick ? '#F3962F' : '#fff')};
    color: ${({isclick}) => (isclick ? '#fff' : '#000')};
    font-weight: ${({isclick}) => (isclick ? 'bold' : 'normal')};;
    cursor: pointer;
    margin-right: 1rem;
    border: 1px solid #ddd;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
`
const ProjectList = styled.div`
  width: 100%;
  height: auto;
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
    button{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      padding: 10px 20px;
      color: #b0b0b0;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        background-color: #dedede;
      }
    }
    svg{
      margin-right: 10px;
    }
  }
`

function Project() {
  const menuArray = ["전체", "클론", "프로젝트", "웹앱"];
  const menuType = ["전체", "Clone", "Project", "Webapp"];
  const [isclick, setIsClick] = useState(0);
  const [cateGory, setCateGory] = useState("전체");
  const [count, setCount] = useState();

  const data =[
    {
      type : "Project",
      img : "./../images/9.jpg",
      title : "최유리포트폴리오",
      desc : "React와 styled-components를 활용해 제작하였습니다.",
      keyword: ["about","#프론트엔드","#개발자"],
      color: ["orange","black","#ddd"],
      date: "14일",
      original : "https://project-greenping-aql4akyqb-kkkkinderjoy.vercel.app/",
      git: "https://github.com/kkkkinderjoy/project_greenping.git",
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
      img : "./../images/4.jpg",
      title : "반올림피자샵",
      desc : "클론코딩으로 html,css,js로 구현했습니다.",
      keyword: ["#대구기업","#리디자인","#깔끔한"],
      color: ["#00a1e9","#ffe100","#dfdfdf"],
      date: "15일",
      original : "https://banolim.vercel.app/",
      git: "https://github.com/choiS2yuri/banolim",
      contribution: "100%"
    },
    {
        type : "Clone",
        img : "./../images/3.jpg",
        title : "써브웨이",
        desc : "클론코딩으로 html,css,js로 구현했습니다.",
        keyword: ["#맛있는","#반응형","차은우"],
        color: ["#009223","#ffc300","#292929"],
        date: "10일",
        original : "https://subway-henna.vercel.app/",
        git: "https://github.com/choiS2yuri/subway",
        contribution: "100%"
    },
    {
      type : "Clone",
      img : "./../images/2.jpg",
      title : "할리스커피",
      desc : "클론코딩으로 html,css로 구현했습니다.",
      keyword: ["#심플", "#깰끔", "커피"],
      color: ["#b5121b", "#6f6f6f" , "#de898e"],
      date: "5일",
      original : "https://chois2yuri.github.io/horryscoffe/",
      git: "https://github.com/choiS2yuri/horryscoffe",
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
        git: "https://github.com/choiS2yuri/quiz",
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
        git: "https://github.com/choiS2yuri/parcel",
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
      git: "https://github.com/choiS2yuri/-festival",
      contribution: "100%"
     },
    {
        type : "Webapp",
        img : "./../images/8.jpg",
        title : "오늘의 운세정보",
        desc : "오늘의 운세정보를 확인할 수 있는 사이트",
        keyword: ["#운세정보","#재미있는","#미니프로젝트"],
        color: ["#F9A8D4","#F472B6"],
        date: "3일",
        original: "https://lucky-steel.vercel.app/",
        git: "https://github.com/choiS2yuri/lucky",
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


useEffect(() => {
  window.scrollTo(0, 0);
}, []); 



const handleClick = (index) => {
  setIsClick(index);
  setCateGory(menuType[index]);
  const totalcount = data.filter(
    item => menuType[index] === "전체" || menuType[index] === item.type
  ).length;
  setCount(totalcount);
}

// useEffect(() => {
//   setCount(data.length);
//   console.log(count)
// }, [count]);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isclick'}>
      <>
      <Aside />
        <Header />
          <>
            <Wrap>
              <Wrapper>
                <Title>프로젝트</Title>
              </Wrapper>
              <Container>
                <List>
                  {/* {
                  menuArray.map((e,i)=>{
                    return(
                      <ListItem
                        key={i}
                        onClick={() => handleClick(i)}
                        isClick={isClick === i}>
                        {e} 
                        ({count})
                      </ListItem>
                    )
                    })
                  } */}
                  { menuArray.map((e,i) => {
                    const itemCount = data.filter(
                      item => menuType[i] === "전체" || menuType[i] === item.type).length;
                      return(
                      <ListItem key={i}
                      onClick={() => handleClick(i)} isclick={isclick === i}>{e}({itemCount})
                      </ListItem>
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
                            <p>
                            <FontAwesomeIcon icon={faSquareCheck} />
                              컬러 : {e.color.map((color, index) => (
                              <span key={index} style={{ backgroundColor: color, padding: '2px', marginRight: '10px', width:'10px',height:'10px',display:'inline-block'}}></span>
                              ))}
                            </p>
                            <p style={{textAlign:"end",fontSize:"30px"}}>
                              <a href={e.git} target="_blank" rel="noopener noreferrer">
                                <button>Github</button>
                              </a>
                              <a href={e.original} target="_blank" rel="noopener noreferrer">
                                <button>Vercel</button>
                              </a>
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
    </StyleSheetManager>

  )
}

export default Project