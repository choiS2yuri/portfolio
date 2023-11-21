import React from 'react'
import styled from 'styled-components'


const Footerwrap = styled.div`
  width: 100%; height: 150px;
  background-color: rgba(248, 155, 0, 0.5);
  margin-top: 100px;
  z-index: 1001;
  position: relative;
`
const Wrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  `

const Desc = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  :nth-child(1){
    font-size: 30px;
  }
`
function Footer() {
  return (
    <>
      <Footerwrap>
        <Wrapper>
          <Desc>
            <span>Thanks for visiting my Website.</span>
            <p>Copyright ⓒ 2023. Yuri Choi All rights reserved.</p>
          </Desc>
        </Wrapper>
      </Footerwrap>
    </>
  )
}

export default Footer