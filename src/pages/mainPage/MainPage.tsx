import React from 'react';
import {Table} from '../../components';
import {useAppSelector} from '../../utils/hooks';



function MainPage() {
    const {notes} = useAppSelector(state => state.notes);

    const unarchivedNotes = notes.filter(note => !note.isArchive);

    return (
        <div className="container">
            <Table notes={unarchivedNotes}/>
        </div>
    );
}

export default MainPage;