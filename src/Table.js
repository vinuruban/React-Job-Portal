import React, { Component } from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = props => {
      const rows = props.charData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            <td>
                <button onClick={() => props.removeData(index)}>Delete</button>
            </td>
            </tr>
          )
        }
      )
      return <tbody>{rows}</tbody>

//       You'll notice I've added a key index to each table row. You should always use keys when making lists in React, as they help identify each list item. We'll also see how this is necessary in a moment when we want to manipulate list items.
//       Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. In the next section, we'll learn how to use state to have further control over handling data in React.
  }

  class Table extends Component {
    render() {

        const {charParam, removeCharacter} = this.props
        //const charParam = this.props.charParam

        // another way of wrtiting what's in the top --> const charParam = this.props.charParam
        // check the top in inspect/react --> that's the virtual DOM carrying the charParam data in JSON obj format

      return (
        <table>
          <TableHeader />
          <TableBody charData={charParam} removeData={removeCharacter}/>
        </table>
      )
    }
  }

  export default Table


