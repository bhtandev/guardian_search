import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinLoader = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #E9967A; 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 999;
    animation: ${rotate360} 1s linear infinite;
`;

export default SpinLoader;
