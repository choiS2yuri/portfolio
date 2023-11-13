import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%; height: 150px;
    z-index: 992;
    position: relative;

`
const Wrapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex; justify-content: space-between;
    position: fixed;
    background-color: #fff;
    @media (max-width: 680px) {
        width: 100%; height: 75px;
    }
    @media (min-width: 1200px) {
        width: 100%; height: 100px;
    }
`

const Logo = styled.div`
      a {
        width: 40%;
        height: 40%;
        display: inline-block;
        box-sizing: border-box;
        
        @media (max-width: 680px) {
            width: 80px;
            height: 80px;
        }

        @media (min-width: 1200px) {
            width: 50%;
            height: 50%;
        }
    }
    a img {
        max-width: 100%;
        height: auto;
    }
    /* display: ${props => (props.scrollY >= 130 ? 'none' : 'block')}; */
    /* 스크롤 130만큼 내려가면 nav 고정되도록함 */
`
const Nav = styled.div`
    flex-basis: 100%;
    display: flex; justify-content: end;
    ul{
        display: flex; justify-content: space-around;
        flex-basis: 80%; font-weight: bold;
        font-size: 30px; align-items: center;  
        background-color: #fff;
    }
    @media (max-width: 680px){
        visibility: hidden;
    }
    @media (min-width:681px) and (max-width: 1280px) {
        ul{
            height: 75px;
            li{flex-basis: 40%; font-size: 20px; line-height:75px;} 
        }
    }
`
const Hamburger= styled.div`
  right: 5px;
  top: 17px;
  cursor: pointer;
  z-index: 1000;
  transition: all 1s; 
  > div{
    width: 30px; height: 5px; margin: 5px; border-radius: 4px; line-height: 5px;
    transition: all 1s; 
    background-color: ${({isOpen}) => (isOpen ? '#fff' : '#000')};
  }
  &.on div:nth-child(1){transform:rotate(43deg) translateY(13.5px)}
  &.on div:nth-child(2){opacity: 0;}
  &.on div:nth-child(3){transform:rotate(-43deg) translateY(-13.5px)}
  @media (min-width: 680px){display: none;}
`
const HWrap = styled.div`
    display: none;
    width: 100%;
    height: 75px;
    position: fixed;
    top: 0;
    background-color: #F3962F;
    box-sizing: border-box;
    transition: all 0.5s;
    right: ${({isOpen}) => (isOpen ? '0' : '100%')};
    @media (max-width: 680px) {
    display: block;
    }
  `

const HWrapper=styled.div`
    text-align: center;
    width: 80%;    
    ul{
        flex-basis: 70%;
        display: flex;
        flex-basis: 100%;
        justify-content: space-around;
        li{
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            padding: 0 10px;
            margin: 22px 0;
            /* border-bottom: ${({isOpen}) => (isOpen ? '2px solid pink' : 'none')}; */
        }
    }
`

  function Header({moveToArtist}) {
    
  const [isOpen,setIsOpen]=useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
        <Wrap>
            <Wrapper>
                <Logo> 
                    <NavLink to={"/"}  onClick={scrollToTop}>
                        <img src={`images/logoggul.jpg`} alt='logo'/>
                    </NavLink>
                </Logo>
                <Nav>
                    <ul>
                        <li onClick={() => moveToArtist("about")}>ABOUT</li>
                        <li onClick={() => moveToArtist("skills")}>SKILLS</li>
                        <li onClick={() => moveToArtist("project")}>PROJECT</li>
                        <li onClick={() => moveToArtist("contact")}>CONTACT</li>
                    </ul>
                </Nav>
            </Wrapper>
            <Hamburger style={{position: `${isOpen ? "fixed" : "absolute"}`}} className={isOpen && "on"} onClick={toggleMenu} $isOpen={isOpen}>
                {
                    Array(3).fill().map((_,i)=>{
                        return(
                        <div key={i}></div>
                        )
                    })
                }
            </Hamburger>
            <HWrap style={{right: `${isOpen ? "0" : "100%"}`}} $isOpen={isOpen}>
                <HWrapper>
                    <ul>
                        <li onClick={() => moveToArtist("about")}>ABOUT</li>
                        <li onClick={() => moveToArtist("skills")}>SKILLS</li>
                        <li onClick={() => moveToArtist("project")}>PROJECT</li>
                        <li onClick={() => moveToArtist("contact")}>CONTACT</li>
                    </ul>
                </HWrapper>
            </HWrap>
        </Wrap>
    </>
  )
}

export default Header