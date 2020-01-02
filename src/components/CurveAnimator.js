import React from 'react'

import styled from 'styled-components'


const Horizontal = styled.div`

    animation: ${props => props.horizontalAnimation} ${props=> props.duration}s,
    ${props => props.zAnimation} ${props=> props.duration}s ${props => props.zTimingFunction};
    
    z-index: 3;
    animation-fill-mode: both;
    position: absolute;

    width: 100%;

    @media (max-width: 600px) {
        animation: ${props => props.horizontalAnimationMobile} ${props=> props.duration}s,
        ${props => props.zAnimation} ${props=> props.duration}s ${props => props.zTimingFunction};
        animation-fill-mode: both;
    }
`

const Vertical = styled.div`

    animation: ${props => props.verticalAnimation} ${props => props.duration}s;
    animation-fill-mode: both;
    width: 100%;
`

export default function CurveAnimator(props) {
    return (
        <>
            {props.fresh ?
            <Horizontal
            duration={props.duration / 1000}
            horizontalAnimation={'none'}
            zAnimation={'none'}
            zTimingFunction={props.zTimingFunction}
            >
            <Vertical
                duration={props.duration / 1000}
                verticalAnimation={'none'}

            >
                {props.children}
            </Vertical>
            </Horizontal>
            
            : 
            <Horizontal
            duration={props.duration / 1000}
            horizontalAnimation={props.horizontalAnimation}
            zAnimation={props.zAnimation}
            zTimingFunction={props.zTimingFunction}
            >
            <Vertical
                duration={props.duration / 1000}
                verticalAnimation={props.verticalAnimation}

            >
                {props.children}
            </Vertical>
            </Horizontal>
            }
        
        </>
    )
}
