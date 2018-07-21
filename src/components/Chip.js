import React from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 200px;
    border-radius: 25px;
    margin: 4px;
    background-color: #D3D3D3;

`;

const CenterBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 5px;
`;

const TruncatedText = styled.div`
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Chip = (props) => {
    return <ChipContainer>
        <CenterBox>
            <TruncatedText>
                {props.text}
            </TruncatedText>
        </CenterBox>
        <CenterBox>
            <img onClick={props.onDelete} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMhJREFUKM+VkE0KwjAQRh9urIcR8UL9v5FKsxDFi4h4iJb2JO0ixsVMbaIVdLJJPh4zLwN/1hZDx8BAS8XmE1hxxAXngSEKkfsbIufmY8dZxOGoJhcJThRYHA5LylmHqptRqABSLJYYKDU9CNTp05IACTGQ89C0EWh4GUgPH3H0sJjdmMO9R23QJydTN0lrgSp9pjpI3DJNdwJt1OBMqTdLxkVXsB4Hmq/L3E9WEbdZ5MrSl48w3rdl0D5ERrcDDT09NbvJ5cd6AvjzoOyR9+cgAAAAAElFTkSuQmCC
"></img></CenterBox>
    </ChipContainer>
};

export default Chip;