import React from 'react'

import styled, { keyframes, css } from 'styled-components'
import { Transition } from "react-transition-group"

// &:hover {
//     transform: translate(100px, -${props => props.order ? (props.order * 180) + 100 : 0}px) rotate(2deg) scale(1.1);

//     z-index: 1;

// }

const rotate = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(100px, 300px);
  }
`

const animation = css`
    ${rotate} 1s linear
`

// Have props.animationState    exited -> entering -> entered -> exiting -> exited

const Container = styled.div`

    animation: ${props => props.selected ? animation : 'none'};

    height: 200px;
    min-height: 200px;

    width: 280px;

    margin: 20px;

    background: rgb(247, 255, 249);

    transform: translateX(
        ${props => {
            switch (props.animationState) {
              case "entering":
                return "80px"
              case "entered":
                return "80px"
              case "exiting":
                return "0"
              case "exited":
                return "0"
            }
          }})
    ;

    transition: transform 0.2s ${props => props.animationState === "entering" ? 'ease-in' : 'ease'};

    

    border-radius: 2px;

    box-shadow: 2px 2px 40px 10px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: ${props => (props.order * 60) - 60}px;
    left: -10px;


    &:hover {
        ${props => props.animationState === "exited" ? "transform: translateY(-10px)" : null};
    }

`

const TransformY = styled.div`

    transform: translateY(
        ${props => {
            switch (props.animationState) {
            case "entering":
                return "-160px"
            case "entered":
                return "-160px"
            case "exiting":
                return "0"
            case "exited":
                return "0"
            }
    }});

    transition: transform 0.2s ${props => props.animationState === "entering" ? 'ease' : 'ease-in'};

`

const Title = styled.h2`

    color: rgb(113, 19, 11);

    font-family: 'Crimson Text', serif;

    font-size: 1.6em;

    margin: 10px 20px;

    align-self: flex-start;

`

const TabRow = styled.div`

    width: 100%;
    height: 20%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const TabButton = styled.button`


`


export default function Card(props) {

    const toggleSelected = () => {
        if (props.selected) {
            props.setSelected(null)
        } else {
            props.setSelected(props.order)
        }
    }


    return (
        <Transition in={props.selected} timeout={500}>

            {animationState => (

                // state change: exited -> entering -> entered -> exiting -> exited
                <TransformY animationState={animationState}><Container animationState={animationState} order={props.order} onClick={toggleSelected}>
                    
                        <Title>Title</Title>
                        <TabRow>
                            <TabButton>First</TabButton>
                            <TabButton>Second</TabButton>
                            <TabButton>Third</TabButton>
                        </TabRow>
                </Container></TransformY>
                
            )}

        </Transition>
        
    )
}
