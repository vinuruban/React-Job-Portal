import React, { Component } from 'react';
import Table from './Table'
// The above is to import the Table comp in this file

class App extends Component {

        state = {
            characters: [
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
        }

        //index is passed as a parameter
        removeCharacter = index => {
            const {characters} = this.state

            //this deletes the record, based on an index that we pass through, and return the new array
            this.setState({
                characters: characters.filter((character, i) => {
                    return i != index
                }),
                //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
            })
        }

    render() {

        // const characters = [
        //     {
        //       name: 'Charlie',
        //       job: 'Janitor',
        //     },
        //     {
        //       name: 'Mac',
        //       job: 'Bouncer',
        //     },
        //     {
        //       name: 'Dee',
        //       job: 'Aspring actress',
        //     },
        //     {
        //       name: 'Dennis',
        //       job: 'Bartender',
        //     },
        //   ]

        const {characters} = this.state 

        return (
            <div className="container">
                <Table charParam = {characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App

