import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
const Wrap = styled.div`
  position: fixed;
  bottom: 3%;
  right: 3%;
  align-items: center;
  z-index: 500;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")}; 
  transition: opacity 1.5s ease;
  @media screen and (max-width: 640px){
    bottom: 3%;
  }
`;


const ContentWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.li`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.98;
  box-shadow: 1px 1px 4px gainsboro;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 0.7rem;
  color: #F3962F;
  svg{
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 640px){
        cursor: pointer;
        padding: 10px;
        opacity: 0.8;
        background: #ffffff;
        border-radius: 50%;
        color: #F3962F;
        box-shadow: 1px 1px 4px gainsboro;
        svg{
          font-size: 0.8rem;
        }
  }
`;


function Aside() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 2500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
    return () => {
      window.removeEventListener("scroll", isActiveClick); 
    };
  }, []);

  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
        <Wrap isActive={isActive}>
            {isActive && 
                <ContentWrap>
                    <Content onClick={moveToTop}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </Content>
                </ContentWrap>
            }
            </Wrap>
    </>
  );
}

export default Aside;