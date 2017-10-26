import React from 'react';
import DataTable from './DataTable';

const table1 = [
  {
    a: 1,
    b: 2,
    c: 3,
  },
  {
    a: 4,
    b: 5,
    c: 6,
  }
]

const table2 = [
  {
    distribuition: "Eletronic",
    publishDate: "2015-12-12",
    owner: "Jonas",
    code: "PO 0015:2015",
    status: "Published"
  },
  {
    distribuition: "Physical",
    publishDate: "",
    owner: "Jonas",
    code: "PD 0001:2017",
    status: "Elaboration"
  },
  {
    distribuition: "Eletronic",
    publishDate: "2014-12-12",
    owner: "Angela",
    code: "PO 0189:2014",
    status: "Published"
  },
  {
    distribuition: "Eletronic",
    publishDate: "2016-01-12",
    owner: "Remy",
    code: "REG 0001:2016",
    status: "Published"
  }
]

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h2> Table 1 </h2>
        <DataTable data={table1} />
        <h2> Table 2 </h2>
        <DataTable data={table2} />
      </div>);
  }
}