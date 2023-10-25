import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%; height: 150px;
    z-index: 999;
    padding-top: 10px;
    position: relative;
    background-color: #fff;
`
const Wrapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex; justify-content: space-between;
`
const Logo = styled.div`
    a{
        width: 50%; height: 50%;
        display: inline-block;
        box-sizing: border-box;
        @media screen and (max-width: 1200px){
            width: 40%; height: 40%;
        }
        @media screen and (max-width: 768px){
            width: 35%; height: 35%;
        }
    }
`
const Nav = styled.ul`
    display: flex; justify-content: space-around;
    flex-basis: 60%; font-weight: bold;
    font-size: 30px; align-items: center;
    @media screen and (max-width: 768px){
        visibility: hidden;
    }
    @media screen and (min-width:769px) and (max-width: 1280px) {
        flex-basis: 40%; font-size: 20px; 
    }
`
const Hamburger= styled.div`
  right: 50px;
  top: 50px;
  cursor: pointer;
  z-index: 1000;
  transform: all 1s; 
  > div{
    width: 30px; height: 5px; background-color: #000; border-radius: 4px; line-height: 5px;
    transform: all 1s; 
  }
  &.on div:nth-child(1){transform:rotate(45deg) translateY(12px)}
  &.on div:nth-child(2){opacity: 0;}
  &.on div:nth-child(3){transform:rotate(-45deg) translateY(-12px)}
  @media screen and (min-width: 768px){display: none;}
`


function Header() {
    
  const [isActive,setIsActive]=useState(false);
  return (
    <>
        <Wrap>
            <Wrapper>
                <Logo>
                    <NavLink to={"/"}>
                        <img src={`images/logoggul.jpg`} alt='logo'/>
                    </NavLink>
                </Logo>
                <Nav>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
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