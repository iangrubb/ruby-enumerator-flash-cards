import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div`

`

const Box = styled.div`

    margin: 100px 0 200px 0;

    width: 300px;

    border: solid black 20px;

    height: 540px;

    background: gray;

    position: relative;

`

const Front = styled.div`
    background: black;
    width: 320px;
    height: 180px;

    position: absolute;
    left: 0;
    top: 380px;
    z-index: 3;
`



export default function CardStack(props) {

    const [selected, setSelected] = useState(null)

    return (
        <Container>
            <Box>
            {[0, 1, 2, 3, 4, 5, 6].map(num => <Card key={num} order={num} selected={selected === num} setSelected={setSelected} />)}
            <Front></Front>
            </Box>
        </Container>
    )
}
