import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({ searchInput: e.target.value })
    }

    render() {
        return (
            <input type="text" 
                onChange={e => this.handleChange(e)} 
                value={this.state.searchInput} 
                placeholder="Cercami" 
            />
        )
    }
}

export default SearchBar

