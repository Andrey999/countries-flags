import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: bold;
`;
const ThemeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <StyledHeader>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ThemeSwitcher onClick={changeTheme}>
                        {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
                        <span style={{ marginLeft: '0.75rem' }} >{theme} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </StyledHeader>
    )
}