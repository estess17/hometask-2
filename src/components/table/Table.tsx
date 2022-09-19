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
            <tr>
                {!isSummary ?
                    <>
                        <th className="p-5">Name</th>
                        <th className="p-5">Created</th>
                        <th className="p-5">Category</th>
                        <th className="p-5">Content</th>
                        <th className="p-5">Dates</th>
                        <th className="p-5">Actions</th>
                    </> :
                    <>
                        <th className="p-5">Note Category</th>
                        <th className="p-5">Active</th>
                        <th className="p-5">Archived</th>
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