import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex; flex-wrap: wrap;
    align-items: center;

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
        width: 5%;
        height: 3px;
        background-color: #F3962F;
        left: 49.7%; top: 0;; transform: translate(-50%, -50%);
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
`

const ContentItem = styled.div`
    flex-basis: 45%;
    margin: 10px;
    height: 12rem;
    border: 1px solid #ddd;
    padding: 2rem 1.25rem 2rem 1.25rem;
    cursor: pointer;
    text-align: center;
    position: relative;
    transition: 0.3s;
    box-sizing: border-box; 
    font-size: 1rem;
    font-size: 0.8rem;
    img{
      display: inline-block;
      width: 50%; height: 50%;
    }
    @media screen and (min-width: 640px){
        flex-basis: 30%;
    }
    @media screen and (min-width: 1024px){
        flex-basis: 18.4%;
    }
    &:hover{
        background-color: #e5e7eb;
    }
    p:nth-child(1){color:#9ca3af;margin-top:1.25rem;font-weight: bold; font-size:1.5rem;}
`
function SkillsItem() {
    const data =[
      {
          "img" : "./../images/icons8-html-48.png",
          "title" : "HTML"
      },
      {
          "img" : "./../images/icons8-css3-48.png",
          "title" : "CSS"
      },
      {
          "img" : "./../images/icons8-script-48.png",
          "title" : "javascript"
      },
      {
          "img" : "./../images/icons8-sc-48.png",
          "title" : "styled-component"
      },
      {
          "img" : "./../images/icons8-sass-48.png",
          "title" : "sass"
      },
      {
          "img" : "./../images/icons8-react-48.png",
          "title" : "react"
      },
      {
          "img" : "./../images/icons8-typescript-48.png",
          "title" : "typescript"
      },
      {
          "img" : "./../images/icons8-nodejs-48.png",
          "title" : "node.js"
      },
      {
          "img" : "./../images/icons8-firebase-48.png",
          "title" : "firebase"
      },
      {
          "img" : "./../images/icons8-mongodb-48.png",
          "title" : "mongodb",
          "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
      }
  ]

  return (
    <>
        <Container>
            <ContainerWrap>
              <ContainerTitle>
                <Title>SKills</Title>
              </ContainerTitle>
              <ContentGrid>
                    {
                        data.map((e,i)=>{
                            return(
                                <ContentItem key={i}>
                                  <img src={e.img} alt={e.title} />
                                  <div>
                                    <p>{e.title}</p>
                                  </div>
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

export default SkillsItem