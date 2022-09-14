import React from 'react';
import './table.scss';
import {INote} from '../../utils/interfaces';
import {Note} from '../index';


function Table(props: { notes: INote[] }) {
    const {notes} = props;

    return (
        <table className="table">
            <thead className="table-head">
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className="table-body">
                {notes.map(note => <Note note={note} key={note.id}/>)}
            </tbody>
        </table>
    );
}

export default Table;