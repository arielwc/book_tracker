import React from 'react';

const SearchResult = (props) => {
    return (
        <div className="searchResultContainer">
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>
        </div>
    );
}

export default SearchResult;
