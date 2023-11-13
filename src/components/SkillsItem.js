import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navigation, Pagination } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 150px 0;
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
    @media screen and (max-width: 768px){
      visibility: hidden;
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
`

const MainSwiper = styled(Swiper)`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
`
const Swiperitems = styled(SwiperSlide)`
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img{
    display: block;
    width: 60%;
    height: 60%;
    }
    div{
        padding: 1rem 1.25rem;
        background-color: rgba(255,255,255,0.2);
        text-align: center;
        bottom: 0;
        h3{
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        p{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
     }
    }
`
function SkillsItem() {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 1000px)');
      const updateSlidesPerView = (e) => {
        if (e.matches) {
          setSlidesPerView(5);
        } else {
          setSlidesPerView(3);
        }
      };
      
      // 초기 화면 크기에 따라 slidesPerView 설정
      updateSlidesPerView(mediaQuery);
  },[])
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
        <Container id="skills">
            <ContainerWrap>
              <ContainerTitle>
                <Title>SKills</Title>
              </ContainerTitle>
              <MainSwiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                navigation
                pagination={{
                    clickable: true,
                }}
                className="mySwiper">
                     {
                        data.map((e,i)=>{
                            return(
                            <Swiperitems key={i}>
                                <img src={e.img} alt={e.title} />
                                <div>
                                    <p>{e.desc}</p>
                                </div>
                            </Swiperitems>
                            )
                        })
                    }
            </MainSwiper>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default SkillsItem