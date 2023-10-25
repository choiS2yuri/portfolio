import React from 'react'
import styled from 'styled-components'

const Wrap =styled.div`
    width: 5%;
    height: 100%;
    background-color: #F3962F;
    position: fixed;
    top: 0px;
    z-index: 990;
    overflow: auto;
    @media screen and (max-width: 768px){
      visibility: hidden;
    }
`
function HeightBar() {
  return (
    <>
        <Wrap></Wrap>
    </>
  )
}

export default HeightBar