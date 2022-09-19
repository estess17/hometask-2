import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import {Table} from '../../components';
import {Link} from 'react-router-dom';

function ArchivedPage() {
    const {notes} = useAppSelector(state => state.notes);
    const archivedNotes = notes.filter(note => note.isArchive);

    return (
        <div className="container">
            <Link to={-1 as any} className="block w-28 my-4 py-1.5 bg-gray-500 text-gray-50 rounded text-center">
                Go Back
            </Link>
            <Table notes={archivedNotes} isSummary={false}/>
        </div>
    );
}

export default ArchivedPage;