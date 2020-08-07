import React, { Component } from 'react';
import request from 'superagent'

import Search from './Search'


class Bookpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchEntry:''
        }
    }

    searchForBook = (e) => {
        e.preventDefault()
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchEntry })
            .then((bookData) => {
                console.log(bookData)
            })
    }

    handleSearch = (e) => {
        this.setState({ searchEntry: e.target.value })
    }
    render() {
        return (
            <div>
                <Search searchForBook={this.searchForBook} handleSearch={this.handleSearch} />
                <SearchResults />
            </div>
        )
    }
}

export default Bookpage
