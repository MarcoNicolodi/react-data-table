import react from 'react';

export default (data) => {
        console.log(data)
        let j = 0;
        return Object.values(data).map((value) => {
            j += 1;
            return <td key={j} > {value} </td>;
        });
    }