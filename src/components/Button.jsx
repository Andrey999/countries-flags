import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5;
    border-radius: var(--radius);
    border: none;
    display: flex;
    align-items: center;
    padding: 0.25rem 1.5rem;
    color: var(--colors-text);
    cursor: pointer;

    & > svg {
        margin-right: 0.75rem;
    }
`;