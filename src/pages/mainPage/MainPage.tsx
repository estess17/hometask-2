import React from 'react';
import {Table} from '../../components';
import {useAppSelector} from '../../utils/hooks';
import {Link} from 'react-router-dom';
import './mainPage.scss'



function MainPage() {
    const {notes} = useAppSelector(state => state.notes);
    const unarchivedNotes = notes.filter(note => !note.isArchive);

    return (
        <div className="container">
            <Table notes={unarchivedNotes} isSummary={false}/>

            <div className="links">
                <Link to='/archived' className="archived">Archived</Link>
                <Link to='/create' className="create">Create Note</Link>
            </div>

            <Table notes={notes} isSummary={true}/>
        </div>
    );
}

export default MainPage;