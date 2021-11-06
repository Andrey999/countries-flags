import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5'

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
    border-radius: var(--radius);
    box-shadow: var(--shadow);

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Search country...'
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`;

export const Search = ({ searchText, setSearchText }) => {
    return (
        <InputContainer>
            <IoSearchOutline />
            <Input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
        </InputContainer>
    )
}