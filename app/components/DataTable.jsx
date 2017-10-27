import React from 'react';
import Header from './Header';
import Body from './Body';
import ErrorBoundary from './ErrorBoundary';
import getTableHeader from '../lib/get-table-header'

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