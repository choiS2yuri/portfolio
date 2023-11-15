import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

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
  border-radius: 10px;
  border: 1px solid #ddd;
`
const Title = styled.div`
  text-align: center; font-weight: bold;
  font-size: 1.25rem;
`
const Container = styled.div`
  margin-top: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`
const List = styled.ul`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  li{
    background-color: ${({isClick}) => (isClick ? '#F3962F' : '#fff')};
    color: ${({isClick}) => (isClick ? '#fff' : '#000')};
    cursor: pointer;
    margin-right: 1rem;
    border: 1px solid #ddd;
    padding-top: 0.5rem;
    padding-left: 1.25rem;
    border-radius: 1rem;
  }
`
const ProjectList = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  padding: 3rem 2rem 4rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap:wrap;
  border: 1px solid #ddd;
`
const ProjectItem = styled.div`
  flex-basis: 48%;
  position: relative;
  img{
    display: inline-block;
    width: 70%; height: 90%;
  }
`
const ProjectDesc = styled.div`
  flex-basis: 52%;
`
{/* 

                    <h3 className="text-2xl font-bold py-2.5 lg:pl-[50px]">{e.title}</h3>
                    <p className="text-base py-2.5 lg:pl-[50px]">{e.desc}</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">키워드: {e.keyword}</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">컬러: {
                    e.color.map((el,idx)=>{
                        return(
                            <span className='w-5 h-5 inline-block align-middle mr-2' style={{backgroundColor : el, marginLeft:"5px"}} key={idx}></span>
                        )
                    })
                    }</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">폰트: {e.font}</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">사용툴: {e.tools}</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">작업기간: {e.date}</p>
                    <p className="text-base py-2.5 lg:pl-[50px]">기여도: {e.contribution}</p>
                    <ul className="flex justify-center mt-6">
                        <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.original} target="_blank" >Original</a></li>
                        <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.create} target="_blank" >Create</a></li>
                        <li className="py-1 px-8 border rounded-md text-sm"><a href={e.git} target="_blank">Git</a></li>
                    </ul>
                </div>
  */}
function Project() {
  const menuArray = ["전체", "클론", "팀프로젝트", "웹앱"];
  const menuType = ["전체", "Clone", "Project", "Webapp"];
  const [isClick, setIsClick] = useState(0);
  const [cateGory, setCateGory] = useState("전체");

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
                   <li key={i} onClick={()=>{setIsClick(i); setCateGory(menuType[i])}}>{e}</li>
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