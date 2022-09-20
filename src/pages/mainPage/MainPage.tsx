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
                      className="btn bg-blue-500 hover:bg-blue-600 mr-4">
                    Archived
                </Link>
                <Link to="/create"
                      className="btn bg-green-500 hover:bg-green-600">
                    Create Note
                </Link>
            </div>

            <Table notes={notes} isSummary={true}/>
        </div>
    );
}

export default MainPage;