import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'
import Dropdown from './Dropdown'

import methodData from '../methodData'

const Container = styled.div`

    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;

`

const Box = styled.div`

    margin: 60px 0 20px 0;

    border: solid black 20px;

    height: ${props => props.cardCount * 60 + 140}px;

    background: gray;

    position: relative;

    width: 84%;
    max-width: 420px;

`

const Front = styled.div`
    background: black;
    width: 104%;
    height: 200px;

    box-shadow: 2px 2px 40px 10px rgba(0, 0, 0, 0.4);

    position: absolute;
    left: 0;
    top: ${props => props.cardCount * 60 - 40}px;
    z-index: 4;
`




export default function CardStack(props) {

    const [selected, setSelected] = useState("easy")

    const cards = methodData[props.difficulty]

    const options = [
        {name: "Basic", onClick: ()=>props.setDifficulty("easy")},
        {name: "Intermediate", onClick: ()=>props.setDifficulty("medium")},
        {name: "Advanced", onClick: ()=>props.setDifficulty("hard")}
    ]

    const selectables = ["easy", "medium", "hard"]


    return (
        <Container>

            <Dropdown title="Difficulty" selection={selectables.indexOf(props.difficulty)} options={options} />

            <Box cardCount={cards.length}>
            <Front cardCount={cards.length} />
            {cards.map((card, idx) => <Card key={card.name} card={card} order={idx} selected={selected === idx} setSelected={setSelected} />)}
            
            </Box>
        </Container>
    )
}
