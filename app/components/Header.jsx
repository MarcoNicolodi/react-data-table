import React from 'react';

export default class Header extends React.PureComponent {
    static generateColumns(data) {
        let j = 0;
        return data.map((d) => {
            j += 1;
            return <th key={j} > {d} </th>;
        });
    }

    render() {
        return (
            <thead>
                <tr>
                    {Header.generateColumns(this.props.data)}
                </tr>
            </thead>
        );
    }
}
