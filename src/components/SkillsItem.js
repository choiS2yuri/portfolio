import React from 'react'
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
        width: 7.5%;
        height: 3px;
        background-color: #F3962F;
        left: 50%; top: 0;; transform: translate(-50%, -50%);
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
`
// const ContentItem = styled.div`
//     flex-basis: 100%;
//     /* position: relative; */
//     display: flex;
//     justify-content: space-around;
//     flex-direction: column;
//     border: 1px solid #ddd;
//     border-radius: 10px;
//     margin: 1rem;
//     @media screen and  (min-width: 640px) {
//         //테블릿
//         flex-basis: 46%;
//         img{
//             max-width: 100%;
//             max-height: 100%;
//             display: block;
//         }
//     }
//     @media screen and (min-width: 1024px) {
//         //데스크
//         flex-basis: 17.3%;
//         margin-bottom: 5rem;
//         img{
//             max-width: 100%;
//             max-height: 100%;
//             display: block;
//         }
//     }
//     img{
//         /* width: 280px; height: 340px;  */
//     }
//     div{
//         padding: 1rem 1.25rem;
//         background-color: rgba(255,255,255,0.2);
//         text-align: center;
//         /* position: absolute; */
//         bottom: 0;
//         h3{
//             font-weight: bold;
//             margin-bottom: 0.5rem;
//         }
//         p{
//             display: -webkit-box;
//             -webkit-line-clamp: 2;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//         }
//     }
// `
const Swiperbox = styled(Swiper)`
    width: 100%;
    height: 100%;
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
    width: 40%;
    height: 40%;
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
    const data =[
        {
            "img" : "./../images/icons8-html-48.png",
            "title" : "HTML",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-css3-48.png",
            "title" : "CSS",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-script-48.png",
            "title" : "javascript",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-sc-48.png",
            "title" : "styled-component",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-sass-48.png",
            "title" : "sass",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-react-48.png",
            "title" : "react",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-typescript-48.png",
            "title" : "typescript",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-nodejs-48.png",
            "title" : "node.js",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-firebase-48.png",
            "title" : "firebase",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        },
        {
            "img" : "./../images/icons8-mongodb-48.png",
            "title" : "mongodb",
            "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero accusantium repellendus esse debitis aut obcaecati modi molestiae ex sequi."
        }
    ]

  return (
    <>
    <Container>
        <ContainerWrap>
            <ContainerTitle>
                <Title>SKILLS</Title>
            </ContainerTitle>
            <Swiperbox
                slidesPerView={3}
                spaceBetween={30}
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

export default SkillsItem