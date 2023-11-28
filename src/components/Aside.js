import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";


const Wrap = styled.div`
  position: fixed;
  bottom: 3%;
  right: 3%;
  align-items: center;
  z-index: 1002;
  /* opacity: ${({ isactive }) => (isactive ? "1" : "0")};  */
  transition: opacity 1.5s ease;
  @media screen and (max-width: 640px){
    bottom: 3%;
  }
`;


const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F3962F;
  border: none;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 0.7rem;
  svg{
    width: 40px;
    height: 40px;
    color: #fff;
  }
  @media screen and (max-width: 640px){
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 10px;
    background-color: rgba(243, 150, 47, 0.8);
    color: #fff;
    border-radius: 50%;
    svg{
      width: 22px;
      height: 22px;
      color: #fff;
    }
  }
`;


function Aside() {
  const [isactive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
  }, []);

  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
        <Wrap style={{opacity: `${isactive ? "1" : "0"}`}} $isactive={isactive}>
            {
            isactive && 
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