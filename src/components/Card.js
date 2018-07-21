import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 10px;
    padding: 10px;
    text-align: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-align: left;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const Card = (props) =>
    <StyledCard>
        <h4>{props.title}</h4>
        {props.children}
    </StyledCard>;

export default Card;



