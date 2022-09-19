import React from 'react';
import {Table} from '../../components';
import {useAppSelector} from '../../utils/hooks';
import {Link} from 'react-router-dom';


function MainPage() {
    const {notes} = useAppSelector(state => state.notes);
    const unarchivedNotes = notes.filter(note => !note.isArchive);

    return (
        <div className="container">
            <Table notes={unarchivedNotes} isSummary={false}/>

            <div className="flex items-center justify-end">
                <Link to="/archived"
                      className="block w-28 mr-3 py-1.5 bg-blue-500 text-gray-50 rounded text-center
                       hover:bg-blue-600 transition-colors ease-in-out">
                    Archived
                </Link>
                <Link to="/create"
                      className="block w-28 py-1.5 bg-green-500 text-gray-50 rounded text-center
                       hover:bg-green-600 transition-colors ease-in-out">
                    Create Note
                </Link>
            </div>

            <Table notes={notes} isSummary={true}/>
        </div>
    );
}

export default MainPage;