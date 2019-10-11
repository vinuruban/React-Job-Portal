import React, { Component } from 'react';
import Table from './Table'
// The above is to import the Table comp in this file

class App extends Component {
    render() {

        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]

        return (
            <div className="container">
                <Table charParam = {characters} />
            </div>
        )
    }
}

export default App

