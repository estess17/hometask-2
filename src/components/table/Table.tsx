import React from 'react';
import {INote, ISummary} from '../../utils/interfaces';
import {NoteRow, SummaryRow} from '../index';
import './table.scss';


function Table(props: { notes: INote[], isSummary: boolean }) {
    const {notes, isSummary} = props;

    const summary: ISummary[] = [
        {
            category: 'Task',
            active: notes.filter(note => note.category === 'Task' && !note.isArchive).length,
            archived: notes.filter(note => note.category === 'Task' && note.isArchive).length,
        },
        {
            category: 'Idea',
            active: notes.filter(note => note.category === 'Idea' && !note.isArchive).length,
            archived: notes.filter(note => note.category === 'Idea' && note.isArchive).length,
        },
        {
            category: 'Random Thought',
            active: notes.filter(note => note.category === 'Random Thought' && !note.isArchive).length,
            archived: notes.filter(note => note.category === 'Random Thought' && note.isArchive).length,
        },
    ];

    return (
        <table className="table">
            <thead className="table-head">
            <tr>
                {!isSummary ?
                    <>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Dates</th>
                        <th>Actions</th>
                    </> :
                    <>
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </>
                }
            </tr>
            </thead>
            <tbody className="table-body">
                {!isSummary ?
                    (notes.length > 0 ?
                        notes.map(note => <NoteRow note={note} key={note.id}/>) :
                        <tr><td><h2>There are no notes yet...</h2></td></tr>
                    ) :
                    summary.map(row => <SummaryRow summary={row} key={row.category}/>)
                }
            </tbody>
        </table>
    );
}

export default Table;