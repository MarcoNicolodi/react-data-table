import React from 'react';
import generateColumns from '../lib/generate-columns.jsx';

export default class Body extends React.PureComponent {    

    static generateRows(data) {
        let i = 0;
        return data.map((rows) => {
            i += 1;
            return (
                <tr key={i}>
                    {generateColumns(rows)}
                </tr>
            );
        });
    }

    render() {
        return (
            <tbody>
                {Body.generateRows(this.props.data)}
            </tbody>
        );
    }
}
