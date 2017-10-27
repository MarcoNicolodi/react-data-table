import React from 'react';

export default class Body extends React.PureComponent {
    static generateColumns(data) {
        let j = 0;
        return Object.values(data).map((value) => {
            j += 1;
            return <td key={j} > {value} </td>;
        });
    }

    static generateRows(data) {
        let i = 0;
        return data.map((rows) => {
            i += 1;
            return (
                <tr key={i}>
                    {Body.generateColumns(rows)}
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
