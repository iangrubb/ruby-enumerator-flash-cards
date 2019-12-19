import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'

import methodData from '../methodData'

const Container = styled.div`

`

const Box = styled.div`

    margin: 60px 0 20px 0;

    width: 300px;

    border: solid black 20px;

    height: ${props => props.cardCount * 60 + 140}px;

    background: gray;

    position: relative;


`

const Front = styled.div`
    background: black;
    width: 320px;
    height: 180px;

    box-shadow: 2px 2px 40px 10px rgba(0, 0, 0, 0.4);

    position: absolute;
    left: 0;
    top: ${props => props.cardCount * 60 - 30}px;
    z-index: 4;
`

const ButtonRow = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 60px 0;

`

const DifficultyButton = styled.button`

    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;

    color: rgb(113, 19, 11);
    background: rgb(247, 255, 249);

    margin: 0 4px;

    border-radius: 4px;
    padding: 6px 12px;

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





export default function CardStack(props) {

    const [selected, setSelected] = useState(null)

    const [difficulty, setDifficulty] = useState("easy")

    const cards = methodData[difficulty]

    return (
        <Container>
            <ButtonRow>
                <DifficultyButton selected={difficulty === "easy"} onClick={()=>setDifficulty("easy")}>Basic</DifficultyButton>
                <DifficultyButton selected={difficulty === "medium"} onClick={()=>setDifficulty("medium")}>Intermediate</DifficultyButton>
                <DifficultyButton selected={difficulty === "hard"} onClick={()=>setDifficulty("hard")}>Advanced</DifficultyButton>
            </ButtonRow>
            <Box cardCount={cards.length}>
            {cards.map((card, idx) => <Card key={card.name} card={card} order={idx} selected={selected === idx} setSelected={setSelected} />)}
            <Front cardCount={cards.length} />
            </Box>
        </Container>
    )
}
