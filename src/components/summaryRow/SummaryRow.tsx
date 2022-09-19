import React from 'react';
import {ISummary} from '../../utils/interfaces';


function SummaryRow(props: {summary: ISummary}) {
    const {summary} = props;

    return (
        <tr className="even:bg-gray-200 hover:bg-gray-200 transition-all ease-in-out duration-100">
            <td className="p-5">{summary.category}</td>
            <td className="p-5">{summary.active}</td>
            <td className="p-5">{summary.archived}</td>
        </tr>
    );
}

export default SummaryRow;