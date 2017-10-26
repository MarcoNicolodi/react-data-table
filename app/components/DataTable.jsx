import React from 'react';
import Header from './Header';
import Body from './Body';

const mapPropertyToArray = (obj) => {
    let keys = [];
    Object.keys(obj).map(k => keys.push(k));
    return keys;
}

export default class DataTable extends React.Component {

    render(){
        return (
            <table>
                <Header data={mapPropertyToArray(this.props.data[0])} /> 
                <Body data={this.props.data} />
            </table>
        )
    }
}