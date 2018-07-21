import React from 'react';
import Button from './Button';

const ToggleButton = (props) => {
    return (
        <Button style={{backgroundColor: props.toggled? 'yellow': 'inherit'}} onClick={props.onClick}>
            {props.children}
        </Button>
    );
};

export default ToggleButton;