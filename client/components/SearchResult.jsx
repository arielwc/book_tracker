import React from 'react';

const SearchResult = (props) => {
    return (
        <div className="searchResultContainer">
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
            </div>
            <button className="addBook" type="submit" onClick="">Add to Book List</button>
        </div>
    );
}

export default SearchResult;
