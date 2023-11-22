import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled, { StyleSheetManager } from 'styled-components'


const Container = styled.div`
    width: 100%;
    @media (max-width: 768px) {
        margin: 20rem  0;
    }
  
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex; flex-wrap: wrap;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
const ContainerTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 7rem;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 5%;
        height: 3px;
        background-color: #F3962F;
        left: 49.7%; top: 0;; transform: translate(-50%, -50%);
        @media screen and (max-width: 768px){
          visibility: hidden;
        }
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
`
const SkillsWrap = styled.div`
    width: 100%;
    margin: 10rem auto;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1024px) {

    }
    @media (max-width: 768px) {

    }
`
const BtnList = styled.div`
    max-width: 1280px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const BtnTitle = styled.div`
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 2rem;
    padding: 0.5rem;
    border-radius: 10px;
    letter-spacing: 2px;
    background-color: ${({ isclick }) => (isclick ? '#F3962F' : '#fff')};
    color: ${({ isclick }) => (isclick ? '#fff' : '#000')};
    font-weight: ${({ isclick }) => (isclick ? 'bold' : 'normal')};
    @media (max-width: 768px) {
        display: flex;
    }
`
// const SkillBox = styled.div`
//   max-width: 1280px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-gap: 2rem;
//   margin-top: 50px;
//   @media (max-width: 1024px) {
//       grid-template-columns: repeat(6, 1fr);
//       grid-gap: 1rem;
//   }

//   @media (max-width: 768px) {
//       grid-template-columns: repeat(4, 1fr);
//       grid-gap: 0.5rem;
//   }
// `;
const SkillBox = styled.div`
  max-width: 1280px;
  width: 50%;
  height: 12.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    width: 40%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {

  }
`;
// const SkillItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 2rem;
//   align-items: center;
// `;

const SkillsImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  img {
    display: block;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;
// const SkillsImg = styled.div`
//   display: flex;
//   align-items: center;
//   img {
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
//     transition: transform 0.3s ease-in-out;
//     &:hover {
//       transform: scale(1.1);
//     }
//     @media (max-width: 768px) {
//     justify-content: center;
//   }
//   }
// `;

// const SkillItem = styled.div`
//   display: flex;
// `;
const SkillsDesc = styled.div`
    margin-top: 5rem;
    border: 1px solid #ddd;
    width: 100%;
    height: auto;
    border-radius: 20px;
    p{
       font-size: 1rem;
       color: #555;
       line-height: 3rem;
       padding-left: 0.8rem;
       svg{
        color: #F3962F;
        margin-right: 1rem;
       }
       }
`;



function SkillsItem() {  
    const skillsArray = ["All","Frontend", "Backend", "Etc"];
    const skillsType = ["All","frontend", "backend", "etc"];
    const [isclick, setIsClick] = useState(0);
    const [menuList, setMenuList] = useState("All");
    const [clickedImageDesc, setClickedImageDesc] = useState('');
    // const [count, setCount] = useState();

    const handleImageClick = (desc) => {
        setClickedImageDesc(desc);
      };


  const data =[
    {
        "type":"frontend",
        "img" : "./../images/icons8-html-48.png",
        "title" : "HTML",
        "desc":"웹 표준과 접근성 지침을 준수하여 다양한 웹 페이지를 구축할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-css3-48.png",
        "title" : "CSS",
        "desc":"스타일기법과 선택자를 사용하여 웹 페이지 제작과 레이아웃을 구현 할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-script-48.png",
        "title" : "javascript",
        "desc":"DOM조작과 이벤트 처리 등의 핵심 개념을 이해하고 ES6문법을 활용 할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-sc-48.png",
        "title" : "styled-component",
        "desc":"컴포넌트의 레이아웃을 구성할 수 있고 props 전달하여 스타일을 동적으로 구현할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-sass-48.png",
        "title" : "sass",
        "desc":"변수, 중첩 등을 적극 활용하여 가독성을 높이고 유지보수에 용이하게 작성 할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-react-48.png",
        "title" : "react",
        "desc":"컴포넌트의 재사용성을 극대화하여 코드의 효율성을 높이고 다양한 Hook을 활용 할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-typescript-48.png",
        "title" : "typescript",
        "desc":"자바스크립트 코드에 타입을 명시적으로 적용해 코드의 안전성을 높이고 오류를 방지 할 수 있습니다,"
    },
    {
        "type":"backend",
        "img" : "./../images/icons8-node-48.png",
        "title" : "node.js",
        "desc": "비동기 I/O 처리를 이해하고 있으며, 간단한 백엔드 로직을 구현하는데 필요한 기본적인 Node.js 기능을 사용할 수 있습니다."
    },
    {
        "type":"backend",
        "img" : "./../images/icons8-firebase-48.png",
        "title" : "firebase",
        "desc": "실시간 데이터베이스를 구현하고 사용자 인증 기능을 개발 할 수 있습니다, 또한 웹 애플리케이션과 데이터베이스를 연동하는 방법에 대한 이해가 있습니다,"
    },
    {
        "type":"backend",
        "img" : "./../images/icons8-mongodb-48.png",
        "title" : "mongodb",
        "desc" : "간단한 데이터 조작을 위한 CRUD 연산을 수행할 수 있으며, 데이터를 활용해 관리의 기본적인 방법을 숙지하고 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-tailwind-css-48.png",
        "title" : "tailwindcss",
        "desc" : "반응형 웹 디자인을 구현하고 클래스를 사용하여 모바일, 태블릿,데스크톱 등 다양한 디바이스에 맞춘 레이아웃을 빠르게 제작할 수 있습니다."
    },
    {
        "type":"frontend",
        "img" : "./../images/icons8-next-48.png",
        "title" : "nextjs",
        "desc" : "기본적인 기능을 이해하고,ssr을 활용해 간단한 프로젝트를 제작한 경험이 있으며, 추후 더 학습할 생각이 있습니다."
    },
    {
        "type":"backend",
        "img" : "./../images/icons8-mysql-48.png",
        "title" : "MySQL",
        "desc" : "기본적인 SQL 문법을 이해하고 간단한 데이터 조작과 조회를 할 수 있습니다. 또한 CRUD연산을 통해 데이터를 활용할 수 있습니다."
    },
    {
        "type":"etc",
        "img" : "./../images/icons8-figma-48.png",
        "title" : "figma",
        "desc" : "사용자 중심의 UI/UX 디자인을 구현할 수 있습니다."
    },    
    {
        "type":"etc",
        "img" : "./../images/icons8-github-64.png",
        "title" : "github",
        "desc" : "소스코드의 버전 관리를 체계적으로 수행할 수 있고 브랜치를 통한 작업 분리, 풀 리퀘스트를 통한 코드 리뷰 등을 통해 팀프로젝트의 효율성을 높일 수 있습니다."
    },    
    {
        "type":"etc",
        "img" : "./../images/icons8-notion-50.png",
        "title" : "notion",
        "desc" : "노션을 활용하여 문서화 할 수 있습니다."
    },
    {
        "type":"etc",
        "img" : "./../images/icons8-vercel-48.png",
        "title" : "vercel",
        "desc" : "프로젝트 버셀 배포는 물론 변경사항을 반영하여 유지보수를 할 수 있습니다."
    },
]
    

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isclick'}>
        <>
            <Container id="skills">
                <ContainerWrap>
                <ContainerTitle>
                    <Title>SKILLS</Title>
                </ContainerTitle>
                <SkillsWrap>
                    <BtnList>
                        {
                            skillsArray.map((e,i)=>{
                            return(
                                <BtnTitle key={i} onClick={()=>{setIsClick(i); setMenuList(skillsType[i])}} isclick={isclick === i}>
                                {e} 
                                </BtnTitle>
                            )
                            })
                        }
                    </BtnList>
                    <SkillBox>
                        {
                            data.filter((e)=> menuList === "All" || menuList === e.type).map((e,i)=>{
                                return(
                                    <SkillsImg key={i}>
                                        <img src={e.img} alt={e.title} style={{width:"2.3rem", height:"3rem"}}  onClick={() => {handleImageClick(e.desc);}}/>
                                    </SkillsImg>
                            )}
                        )}
                    </SkillBox>
                </SkillsWrap>
                <SkillsDesc>
                    <p><FontAwesomeIcon icon={faComputerMouse}/>{clickedImageDesc}</p>
                </SkillsDesc>
                </ContainerWrap>
            </Container>
        </>
    </StyleSheetManager>
  )
}

export default SkillsItem