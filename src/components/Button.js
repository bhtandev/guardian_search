import styled from 'styled-components';

const Button = styled.button`
  display: 'flex';
  justify-content: 'center';
  align-content: 'center';
  background: ${props => props.primary ? ' #E9967A' : 'white'};
  color: ${props => props.primary ? 'white' : ' #E9967A'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '3px'};

  border: 2px solid  #E9967A;
  height: 40px;
  width: 40px;

  outline: none;
  &:hover {
    background-color: #E9967A; 
    color: white;
  }
  
  &:active {
    background-color: 'white'; 
    color: white;
  }
`;

export default Button;
