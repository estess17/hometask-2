import React from 'react';
import cutText from '../../utils/cutText';
import {INote} from '../../utils/interfaces';
import archiveIcon from '../../assets/images/box-archive-solid.svg';
import editIcon from '../../assets/images/pen-to-square-solid.svg';
import deleteIcon from '../../assets/images/trash-solid.svg';
import {useAppDispatch} from '../../utils/hooks';
import {archiveNote, deleteNote} from '../../store/notes/notes.slice';
import {useNavigate} from 'react-router-dom';


function NoteRow(props: { note: INote }) {
    const {note} = props;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onEditClick = (id: number) => {
        navigate(`/edit/${id}`);
    }

    const onArchiveClick = (id: number) => {
        dispatch(archiveNote(id));
    }

    const onDeleteClick = (id: number) => {
        dispatch(deleteNote(id));
    }

    return (
        <tr className="even:bg-gray-200 hover:bg-gray-200 transition-all ease-in-out duration-100 [&_td]:p-5">
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{cutText(note.content, 45)}</td>
            <td>{note.dates}</td>
            <td className="flex items-center select-none">
                <img className="w-5 h-5 mr-2 cursor-pointer" src={editIcon}
                     alt="edit-icon" onClick={() => onEditClick(note.id)}/>
                <img className="w-5 h-5 mr-2 cursor-pointer" src={archiveIcon}
                     alt="archive-icon" onClick={() => onArchiveClick(note.id)}/>
                <img className="w-5 h-5 cursor-pointer" src={deleteIcon}
                     alt="delete-icon" onClick={() => onDeleteClick(note.id)}/>
            </td>
        </tr>
    );
}

export default NoteRow;