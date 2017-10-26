import React from 'react';

export default class Body extends React.Component {
    render(){
        return ( 
            <tbody>            
                {this.props.data.map((d, i) => (
                    <tr key={i}>
                       { Object.values(d).map( (k,i) => <td key={i} > {k} </td>)} 
                    </tr>
                ))
                }                
            </tbody>
        )
    }
}