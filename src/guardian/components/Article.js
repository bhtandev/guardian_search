import moment from "moment/moment";
import React from 'react';

import Card from '../../components/Card';
import ToggleButton from "../../components/ToggleButton";
import Star from '../../components/images/Star';


const Article = ({id, title, dateString, dateFormat, pinned, onPinned}) =>
    <Card title={title}
          style={{width: '100%'}}>
        <p>{moment(dateString).format(dateFormat)}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in
            reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum</p>
        <a href="javascript:void(0);">Read more...</a>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '5px'
        }}>
            <ToggleButton borderRadius="50%"
                          toggled={pinned}
                          onClick={() => onPinned(id)}>
                <Star/>
            </ToggleButton>
        </div>
    </Card>

export default Article;