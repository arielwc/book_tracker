import React, { Component } from 'react';

import Search from './Search'


class Bookpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchEntry:''
        }
    }

    handleSearch = (e) => {
        this.setState({ searchEntry: e.target.value })
    }
    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
            </div>
        )
    }
}

export default Bookpage
