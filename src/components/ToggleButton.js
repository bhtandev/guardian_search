import React from 'react';
import Button from './Button';

const ToggleButton = (props) => {
    return (
        <Button style={{backgroundColor: props.toggled? '#8FBC8F': 'inherit'}} onClick={props.onClick}>
            {props.children}
        </Button>
    );
};

export default ToggleButton;