import React from 'react';
import {ISummary} from '../../utils/interfaces';


function SummaryRow(props: {summary: ISummary}) {
    const {summary} = props;

    return (
        <tr>
            <td>{summary.category}</td>
            <td>{summary.active}</td>
            <td>{summary.archived}</td>
        </tr>
    );
}

export default SummaryRow;