import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

const MySwiper = styled(Swiper)`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
    swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #ddd;
    margin: 0 5px;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #F3962F;
  }
  .swiper-button-next, .swiper-button-prev {
    color: #F3962F;
    font-size: 24px;
    
  }
`
const SwiperSlides = styled(SwiperSlide)`
    text-align: center;
    width: 5rem;
    height: 16rem;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    img {
        display: block;
        width: 60%;
        height: 50%;
        transition: opacity 0.3s ease;
        /* &:hover {
            opacity: 0.7;
        } */
    }
    div {
        position: absolute;
        bottom: -100%;
        /* left: 40px; */
        width: 10rem;
        height: 15rem;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
        transition: bottom 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            overflow: hidden;
            opacity: 0;
            font-size: 18px;
            transition: opacity 0.3s ease;
            color: #000;
            &:first-of-type {
                font-weight: bold;
                margin-bottom: 10px;
                font-size: 22px;
            }
        }
    }

    &:hover div {
        top: 0;
    }
    &:hover p{
        opacity: 1;
        text-align: center;
        line-height: 18px;
    }
`;


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
      updateSlidesPerView(mediaQuery);
  },[])
  const data =[
    {
        "img" : "./../images/icons8-html-48.png",
        "title" : "HTML",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-css3-48.png",
        "title" : "CSS",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-script-48.png",
        "title" : "javascript",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-sc-48.png",
        "title" : "styled-component",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-sass-48.png",
        "title" : "sass",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-react-48.png",
        "title" : "react",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-typescript-48.png",
        "title" : "typescript",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-nodejs-48.png",
        "title" : "node.js",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
    },
    {
        "img" : "./../images/icons8-firebase-48.png",
        "title" : "firebase",
        "desc" : "웹표준에 준수하여, 마크업을 할 수 있으며, float이 아닌 flex 및 grid를 활용하여 레이아웃을 구성할 수 있다."
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
                <Title>SKILLS</Title>
              </ContainerTitle>
              <MySwiper
                modules={[Navigation, Pagination]}
                slidesPerView={slidesPerView}
                spaceBetween={30}
                navigation
                pagination={{
                    clickable: true,
                }}
                loop={true}
                >
                     {
                        data.map((e,i)=>{
                            return(
                            <SwiperSlides key={i}>
                                <img src={e.img} alt={e.title} />
                                <div>
                                    <p>{e.title}</p>
                                    <p>{e.desc}</p>
                                </div>
                            </SwiperSlides>
                            )
                        })
                    }
            </MySwiper>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default SkillsItem