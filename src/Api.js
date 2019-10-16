import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
// The above is to import the Table comp in this file

class App extends Component {

        state = {
            data: [],
        }

        componentDidMount() {
            const url = 
            'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        // ^^ this is the URL that has data in the JSON format!
            
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
    }

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App

