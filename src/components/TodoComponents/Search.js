import React from 'react'
import {Input} from 'reactstrap'

class Search extends React.Component {
    render() {
        return (
            <Input
                className="mb-2"
                type="text"
                name="search"
                placeholder="Search"
                value={this.props.search}
                onChange={this.props.handler}
            />
        )
    }
}

export default Search