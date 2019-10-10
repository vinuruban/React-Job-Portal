import React, { Component } from 'react';

// class Table extends Component {
//     render() {
//         return (
//             <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//               </tr>
//               <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//               </tr>
//               <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//               </tr>
//               <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//               </tr>
//             </tbody>
//           </table>
//         )
//     }
// }
//
// export default Table

// The above is long and hardcoded. It doesnt have to be a component - we will change it into functions

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

  const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    )
  }

  class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

  export default Table


