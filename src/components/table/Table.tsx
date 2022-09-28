import React from 'react';
import {INote, ISummary} from '../../utils/interfaces';
import {NoteRow, SummaryRow} from '../index';


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
        <table className="w-full my-6 shadow rounded">
            <thead className="h-14 bg-gray-900 text-white text-left">
            <tr className="[&_th]:p-5">
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
            <tbody className="h-12 bg-white text-gray-900 text-tiny text-left">
                {!isSummary ?
                    (notes.length > 0 ?
                        notes.map(note => <NoteRow note={note} key={note.id}/>) :
                        <tr><td><h2 className="text-xl font-bold m-4">There are no notes yet...</h2></td></tr>
                    ) :
                    summary.map(row => <SummaryRow summary={row} key={row.category}/>)
                }
            </tbody>
        </table>
    );
}

export default Table;