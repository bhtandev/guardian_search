import React from 'react';
import {HEADER_HEIGHT} from "../../components/Header";
import SearchBox from '../../components/SearchBox';
import HorizontalScroll from '../../components/HorizontalScrollContainer';
import Chip from '../../components/Chip';

import styled from 'styled-components';

const SearchPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    top: ${HEADER_HEIGHT};
    left: 0;
    position: fixed;
    margin: auto;
    z-index: 998;
    height: 120px;
    background-color: #FAF0E6;
    padding: 10px 0 10px 0;
`;

const renderPinnedArticles = (pinnedResults, onPinDelete) => {
    return (pinnedResults.length > 0)?
        <HorizontalScroll>
            {
                pinnedResults.map((pinned, index) =>
                    <Chip
                        key={index}
                        text={pinned.webTitle}
                        onDelete={() => onPinDelete(pinned.id)}
                    />)
            }
        </HorizontalScroll> : null;
};

const SearchPanel = ({pinnedResults, doSearch, status, onPinDelete}) =>
    <SearchPanelContainer>
        <SearchBox id="search-box" doSearch={doSearch} noSubmitButton={true}
                   placeholder="Type to search right away..." minLengthRequired="2" status={status}/>
        {
            renderPinnedArticles(pinnedResults, onPinDelete)
        }

    </SearchPanelContainer>


export default SearchPanel;