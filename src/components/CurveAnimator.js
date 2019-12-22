import React from 'react'

import styled from 'styled-components'


const Horizontal = styled.div`

    animation: ${props => props.horizontalAnimation} ${props=> props.duration}s ${props => props.horizontalTimingFunction},
    ${props => props.zAnimation} ${props=> props.duration}s ${props => props.zTimingFunction};
    
    z-index: 3;
    animation-fill-mode: both;
    position: absolute;
`

const Vertical = styled.div`

    animation: ${props => props.verticalAnimation} ${props => props.duration}s ${props => props.verticalTimingFunction};
    animation-fill-mode: both;
`

export default function CurveAnimator(props) {
    return (
        <>
            {props.fresh ?
            <Horizontal
            duration={props.duration / 1000}
            horizontalAnimation={'none'}
            horizontalTimingFunction={props.horizontalTimingFunction}
            zAnimation={'none'}
            zTimingFunction={props.verticalTimingFunction}
            >
            <Vertical
                duration={props.duration / 1000}
                verticalAnimation={'none'}
                verticalTimingFunction={props.verticalTimingFunction}

            >
                {props.children}
            </Vertical>
            </Horizontal>
            
            : 
            <Horizontal
            duration={props.duration / 1000}
            horizontalAnimation={props.horizontalAnimation}
            horizontalTimingFunction={props.horizontalTimingFunction}
            zAnimation={props.zAnimation}
            zTimingFunction={props.verticalTimingFunction}
            >
            <Vertical
                duration={props.duration / 1000}
                verticalAnimation={props.verticalAnimation}
                verticalTimingFunction={props.verticalTimingFunction}

            >
                {props.children}
            </Vertical>
            </Horizontal>
            }
        
        </>
    )
}
