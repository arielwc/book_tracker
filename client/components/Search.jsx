import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <form onSubmit= {props.searchForBook} action="">        
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
