import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%; height: 150px;
    z-index: 992;
    position: relative;
`
const Wrapper = styled.div`
    width: 100%;
    height: 150px;
    position: fixed;
    display: flex; justify-content: space-between;

`
const Logo = styled.div`
    a{
        width: 60%; height: 60%;
        display: inline-block;
        box-sizing: border-box;
        @media (max-width: 768px) {
            //모바일
            width: 100%; height: 100%;
        }

        @media (min-width: 1200px) {
            width: 50%; height: 50%;
        }
    }
    display: ${props => (props.scrollY >= 130 ? 'none' : 'block')};
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
    @media screen and (max-width: 768px){
        visibility: hidden;
    }
    @media screen and (min-width:769px) and (max-width: 1280px) {
        flex-basis: 40%; font-size: 20px; 
    }
`
const Hamburger= styled.div`
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 1000;
  transform: all 1s; 
  > div{
    width: 30px; height: 5px; margin: 5px; background-color: #000; border-radius: 4px; line-height: 5px;
    transform: all 1s; 
  }
  &.on div:nth-child(1){transform:rotate(43deg) translateY(13px)}
  &.on div:nth-child(2){opacity: 0;}
  &.on div:nth-child(3){transform:rotate(-43deg) translateY(-13px)}
  @media screen and (min-width: 768px){display: none;}
`

function Header() {
    
  const [isActive,setIsActive]=useState(false);
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

  console.log('Scroll Y:', scrollY);

 
  return (
    <>
        <Wrap>
            <Wrapper>
                <Logo scrollY={scrollY}>
                    <NavLink to={"/"}>
                        <img src={`images/logoggul.jpg`} alt='logo'/>
                    </NavLink>
                </Logo>
                <Nav>
                    <ul>
                        <li><Link to="a" spy={true} smooth={true}>ABOUT</Link></li>
                        <li><Link to="b" spy={true} smooth={true}>SKILLS</Link></li>
                        <li><Link to="c" spy={true} smooth={true}>PROJECT</Link></li>
                        <li><Link to="d" spy={true} smooth={true}>CONTACT</Link></li>
                    </ul>
                </Nav>
            </Wrapper>
            <Hamburger style={{position: `${isActive ? "fixed" : "absolute"}`}} className={isActive && "on"} onClick={()=>{setIsActive(!isActive)}}>
                {
                    Array(3).fill().map((_,i)=>{
                        return(
                        <div key={i}></div>
                        )
                    })
                }
            </Hamburger>
        </Wrap>
    </>
  )
}

export default Header