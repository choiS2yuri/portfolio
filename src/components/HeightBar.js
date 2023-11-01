import React from 'react'
import styled from 'styled-components'

const Wrapbar =styled.div`
    width: 5%;
    height: 1000vh;
    background-color: #F3962F;
    position: fixed;
    top: 0px;
    z-index: 990;
    overflow: auto;
    overflow: hidden;
    @media screen and (max-width: 768px){
      visibility: hidden;
    }
    div{
      height: 700px;
    }
`
function HeightBar() {
  return (
    <>
        <Wrapbar>
            <div id="a">
              <h2>ABOUT</h2>
            </div>
            <div id="b">
              <h2>SKILLS</h2>  
            </div>
            <div id="c">
              <h2>PROJECT</h2>
            </div>
            <div id="d">
              <h2>CONTACT</h2>
            </div>
        </Wrapbar>
    </>
  )
}

export default HeightBar