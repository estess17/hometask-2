import React from 'react';
import {ISummary} from '../../utils/interfaces';


function SummaryRow(props: {summary: ISummary}) {
    const {summary} = props;

    return (
        <tr className="even:bg-gray-200 hover:bg-gray-200 transition-all ease-in-out duration-100 [&_td]:p-5">
            <td>{summary.category}</td>
            <td>{summary.active}</td>
            <td>{summary.archived}</td>
        </tr>
    );
}

export default SummaryRow;