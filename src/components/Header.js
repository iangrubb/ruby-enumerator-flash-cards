import React from 'react'

import styled from 'styled-components'

import logo from '../ruby.png'

const Container = styled.div`
    width: 100%;
    height: 70px;
    background: rgb(247, 255, 249);

    box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.4);

    z-index: 8;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        height: 42px;
    }

`

const Logo = styled.img`
    height: 40px;
    margin: 0 14px 0 10px;

    @media (max-width: 600px) {
        height: 32px;
    }
`

const Title = styled.h1`
    color: rgb(113, 19, 11);
    font-family: 'Crimson Text', serif;
    font-weight: bold;
    font-size: 32px;
    
    margin: 0;
    align-items: baseline;

    @media (max-width: 600px) {
        font-size: 24px;
    }
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
