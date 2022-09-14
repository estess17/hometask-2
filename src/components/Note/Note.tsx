import React from 'react';
import cutText from '../../utils/cutText';
import {INote} from '../../utils/interfaces';
import archiveIcon from '../../assets/images/box-archive-solid.svg';
import editIcon from '../../assets/images/pen-to-square-solid.svg';
import deleteIcon from '../../assets/images/trash-solid.svg';
import {useAppDispatch} from '../../utils/hooks';
import {archiveNote, deleteNote} from '../../store/notes/notes.slice';


function Note(props: { note: INote }) {
    const {note} = props;

    const dispatch = useAppDispatch();

    const onEditClick = (id: number) => {

    }

    const onArchiveClick = (id: number) => {
        dispatch(archiveNote(id));
    }

    const onDeleteClick = (id: number) => {
        dispatch(deleteNote(id));
    }

    return (
        <tr>
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{cutText(note.content, 45)}</td>
            <td>{note.dates}</td>
            <td className="table-body__actions">
                <img src={editIcon} alt="edit-icon" onClick={() => onEditClick(note.id)}/>
                <img src={archiveIcon} alt="archive-icon" onClick={() => onArchiveClick(note.id)}/>
                <img src={deleteIcon} alt="delete-icon" onClick={() => onDeleteClick(note.id)}/>
            </td>
        </tr>
    );
}

export default Note;