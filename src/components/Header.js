import React from 'react'

import styled from 'styled-components'

import logo from '../ruby.png'

const Container = styled.div`
    width: 100%;
    height: 80px;
    background: rgb(247, 255, 249);

    box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.4);

    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    height: 60px;
    margin: 0 10px;
`

const Title = styled.h1`
    color: rgb(113, 19, 11);
    font-family: 'Crimson Text', serif;
    font-weight: bold;
    font-size: 36px;
    margin: 0;
    align-self: flex-end;
`

export default function Header(props) {
    return (
        <Container>
            <Title>Ruby</Title>
            <Logo src={logo} />
            <Title>Enumerators</Title>
        </Container>
    )
}
