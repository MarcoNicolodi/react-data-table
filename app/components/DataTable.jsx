import React from 'react';
import Header from './Header';
import Body from './Body';
import ErrorBoundary from './ErrorBoundary';

const getTableHeader = (obj) => {
    let keys = [];
    Object.keys(obj).map(k => keys.push(k));
    return keys;
}

export default class DataTable extends React.Component {

    render(){
        return (
            <ErrorBoundary>
                <table>
                    <Header data={getTableHeader(this.props.data[0])} /> 
                    <Body data={this.props.data} />
                </table>
            </ErrorBoundary>
        )
    }
}