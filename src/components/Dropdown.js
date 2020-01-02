import React  from 'react'

import styled from 'styled-components'


const Container = styled.div`


    margin: 20px;

    height: 80px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;


`

const Display = styled.div`

    position: absolute;


    &:hover .options {
        display: flex;
    }

    &:hover .selection {
        display: none;
    }

    width: fit-content;
    height: fit-content;

    padding: 16px;

    z-index: 1;

    &:hover {
        z-index: 5;
    }

    color: rgb(113, 19, 11);
    background: rgb(247, 255, 249);

    box-shadow: 2px 2px 40px 10px rgba(0, 0, 0, 0.4);


    border-radius: 4px;


`




const Title = styled.div`

    font-family: 'Open Sans', sans-serif;
    
    font-size: 18px;

    font-weight: 700;
    
    text-align: center;
    
    padding: 2px 8px;

    @media (max-width: 600px) {
        font-size: 16px;
        padding: 0px 6px;
    }


    
`

const OptionList = styled.div`

    display: none;

    flex-direction: column;
    align-items: center;


`

const Option = styled.div`

    background: rgb(247, 255, 249);
    

    width: 100%;

    padding: 8px 6px;

    font-size: 16px;
    font-weight: ${props => props.selected ? '700' : '400'};

    &:hover {
        background: ${props => props.selected ? 'rgb(247, 255, 249)' : 'rgb(207, 214, 209)'};
    }

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: ${props => props.selected ? 'auto' : 'pointer'};

    @media (max-width: 600px) {
        font-size: 14px;
        padding: 6px 2px;
    }
    
`

const Selection = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`



// Props: title, selection, options (each with name and onClick)
//{props.options.map( (option, idx) => <Slide top when={hover} collapse ><Option key={option.name}>Test</Option></Slide>)}


// Try use Effect for cascading

export default function Dropdown(props) {

    console.log(props.selection)
    

    return (
        <Container >
            <Display>
                <Title>{props.title}:</Title>
                {props.selection > -1 ? <Selection className="selection">
                    <Option selected>{props.options[props.selection].name}</Option>
                </Selection>
                : null}
                <OptionList className="options">
                    {props.options.map((option, idx) => <Option key={option.name} onClick={option.onClick} selected={idx === props.selection}>{option.name}</Option>)}
                </OptionList>
            </Display>
        </Container>
    )
}
