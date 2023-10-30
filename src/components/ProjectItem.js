
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';

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
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
`
const Swiperbox = styled(Swiper)`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
`
const Swiperslide = styled(SwiperSlide)`
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
  
function ProjectItem() {
    const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1000px)');
    const updateSlidesPerView = (e) => {
      if (e.matches) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };
    
    // 초기 화면 크기에 따라 slidesPerView 설정
    updateSlidesPerView(mediaQuery);

    // 화면 크기 변경 감지
    mediaQuery.addListener(updateSlidesPerView);

    return () => {
      mediaQuery.removeListener(updateSlidesPerView);
    };
},[])
    const data =[
      
        {
            "img" : "./../images/2.jpg",
            "title" : "할리스커피",
            "desc" : "클론코딩으로 html,css로 구현했습니다."
        },  
        {
            "img" : "./../images/1.jpg",
            "title" : "greenping",
            "desc" : "캠핑 관련 정보 및 서비스 제공을 하고 커뮤니티를 기반으로 소통하는 사이트"
        },
        {
            "img" : "./../images/3.jpg",
            "title" : "써브웨이",
            "desc" : "클론코딩입니다"
        },
        {
            "img" : "./../images/2.jpg",
            "title" : "할리스커피",
            "desc" : "클론코딩으로 html,css로 구현했습니다."
        },  
        {
            "img" : "./../images/1.jpg",
            "title" : "greenping",
            "desc" : "캠핑 관련 정보 및 서비스 제공을 하고 커뮤니티를 기반으로 소통하는 사이트"
        },
        {
            "img" : "./../images/3.jpg",
            "title" : "써브웨이",
            "desc" : "클론코딩입니다"
        }
    ]

  return (
    <>
    <Container>
        <ContainerWrap>
            <ContainerTitle>
                <Title>PROJECT</Title>
            </ContainerTitle>
            <Swiperbox
                slidesPerView={slidesPerView}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper">
                     {
                        data.map((e,i)=>{
                            return(
                            <Swiperslide key={i}>
                                <img src={e.img} alt={e.title} />
                                <div>
                                    <h3>{e.title}</h3>
                                    <p>{e.desc}</p>
                                </div>
                            </Swiperslide>
                            )
                        })
                    }
            </Swiperbox>
        </ContainerWrap>
    </Container>
</>
  )
}

export default ProjectItem