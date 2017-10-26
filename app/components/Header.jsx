import React from 'react';

export default class Header extends React.Component {
    render(){
        return ( 
            <thead>
                <tr>
                    { this.props.data.map((d,i) => <th key={i} > {d} </th>) }
                </tr>
            </thead>
        )
    }
}