import styled from 'styled-components';
import { useSelector } from 'react-redux'

const Loading = styled.div`
    display: block;
    width: 80px;
    height: 80px;
    margin: auto;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--colors-ui-base);
    border-color: ${props => props.theme === 'light' ? '#000' : '#fff'} transparent ${props => props.theme === 'light' ? '#000' : '#fff'} transparent;
    animation: loader 1.2s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
    const theme = useSelector(state => state.countries.theme)
    return (
        <Loading theme={theme} />
    );
}
