import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import { Transition } from "react-transition-group"

import CurveAnimator from './CurveAnimator'


const Container = styled.div`

    height: 200px;
    min-height: 200px;
    width: 280px;

    margin: 20px;

    background: rgb(247, 255, 249);

    border-radius: 4px;

    box-shadow: 2px 2px 40px 10px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: ${props => (props.order * 60) - 60}px;
    left: -10px;


    &:hover {
        ${props => props.animationState === "exited" ? "transform: translate(4px, -10px)" : null};
    }
    
    z-index: 3;

    animation: ${props => props.animationState === "entering" || props.animationState === "entered" ? baseStyleAnimation : baseStyleAnimationRev} 0.2s linear;
    animation-fill-mode: both;
    
    transform: scale(${props => props.animationState === "entering" || props.animationState === "entered" ? '1.1' : '1'});
    transition: transform 0.2s ease-in-out;

    
    

`


const horizontalAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100px);
  }
`;

const horizontalAnimationRev = keyframes`
  0% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const verticalAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(-180px);
  }

  100% {
    transform: translateY(-60px);
  }
`;

const verticalAnimationRev = keyframes`
  0% {
    transform: translateY(-60px);
  }

  40% {
    transform: translateY(-180px);
  }

  100% {
    transform: translateY(0);
  }
`;

const baseStyleAnimation = keyframes`
  0% {
    z-index: 3;
  }

  50%, 100% {
    z-index: 5;
  }

`

const baseStyleAnimationRev = keyframes`
  0% {
    z-index: 5;
  }

  50%, 100% {
    z-index: 3;
  }

`


const Title = styled.h2`

    color: rgb(113, 19, 11);

    font-family: 'Crimson Text', serif;

    font-size: 1.4em;

    margin: 10px 20px;

    align-self: flex-start;

    cursor: pointer;

`

const TabRow = styled.div`

  width: 100%;
  height: 20%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 8px 0;

`

const TabButton = styled.button`

  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;

  color: rgb(113, 19, 11);
  background: rgb(247, 255, 249);

  border: 2px solid rgb(113, 19, 11);
  border-radius: 4px;
  padding: 4px 8px;

  transform: translateY(-${props => props.selected ? '0' : '2'}px);
  transition: transform 0.05s linear, box-shadow 0.05s linear;
  
  box-shadow: ${props => props.selected ? '0 0 0' : '1px 2px 1px'} rgba(1, 1, 1, 0.6);

  :hover {
    cursor: ${props => props.selected ? 'auto' : 'pointer'};
  }

  :focus {
    outline: none;
  }


`



export default function Card(props) {

  const [tab, setTab] = useState("function")

  const [fresh, setFresh] = useState(true)

  const toggleSelected = () => {

    if (props.selected) {
      props.setSelected(null)
    } else {
      

      setTab("function")
      setFresh(false)
      props.setSelected(props.order)
      
    }
  }

  const chooseTab = (tab) => (event) => {
    event.stopPropagation()
    setTab(tab)
  }


    return (
        <Transition in={props.selected} timeout={500} >

            {animationState => (
                // state change: exited -> entering -> entered -> exiting -> exited

                <CurveAnimator
                    duration={400}
                    horizontalAnimation={animationState === "entering" || animationState === "entered" ? horizontalAnimation : horizontalAnimationRev}
                    verticalAnimation={animationState === "entering" || animationState === "entered" ? verticalAnimation : verticalAnimationRev}
                    horizontalTimingFunction={'ease-in-out'}
                    verticalTimingFunction={'ease-in-out'}
                    zAnimation={animationState === "entering" || animationState === "entered" ? baseStyleAnimation : baseStyleAnimationRev}
                    fresh={fresh}
                >
                    <Container animationState={animationState} order={props.order} onClick={toggleSelected}>
                        <Title>{props.card.name}</Title>





                        <TabRow>
                            <TabButton onClick={chooseTab("function")} selected={tab === "function"}>Function</TabButton>
                            <TabButton onClick={chooseTab("details")} selected={tab === "details"}>Details</TabButton>
                            <TabButton onClick={chooseTab("example")} selected={tab === "example"}>Example</TabButton>
                        </TabRow>
                    </Container>
                </CurveAnimator>
            )}

        </Transition>
        
    )
}
