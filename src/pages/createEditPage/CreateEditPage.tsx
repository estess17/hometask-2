import React, {useEffect, useState} from 'react';
import './createEditPage.scss';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {INote} from '../../utils/interfaces';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {createNote, editNote} from '../../store/notes/notes.slice';


function CreateEditPage() {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Task',
        content: '',
    });

    const {id} = useParams();
    const {notes} = useAppSelector(state => state.notes);
    const [note, setNote] = useState<INote | null>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setNote(notes.filter(note => note.id === +id)[0]);

            if (note) {
                setFormData({
                    name: note.name,
                    category: note.category,
                    content: note.content,
                });
            }
        }
    }, [id, note, notes]);


    const onInputChange = (e: any) => setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });

    const onSubmitClick = () => {
        let dates = formData.content.match(/(\d{1,2}([.\-/])\d{1,2}([.\-/])\d{4})/g);

        if (id && note) {
            const updatedNote: INote = {
                ...note,
                name: formData.name,
                content: formData.content,
                category: formData.category,
                dates: dates ? dates.join(', ') : ''
            };

            dispatch(editNote(updatedNote));
        } else {
            const newNote: INote = {
                id: Math.random(),
                name: formData.name,
                created: new Date().toLocaleDateString('default', {month: 'long', day: '2-digit', year: 'numeric'}),
                category: formData.category,
                content: formData.content,
                dates: dates ? dates.join(', ') : '',
                isArchive: false,
            };

            dispatch(createNote(newNote));
        }

        navigate('/');
    };

    return (
        <div className="container" style={{maxWidth: 660}}>
            <Link to="/" className="back-btn">Go Back</Link>
            <form className="form">
                <label>
                    Name:
                    <input type="text"
                           placeholder="Name"
                           className="form-input"
                           name="name"
                           value={formData.name}
                           onChange={event => onInputChange(event)}
                    />
                </label>
                <label>
                    Category:
                    <select className="form-input"
                            name="category"
                            value={formData.category}
                            onChange={event => onInputChange(event)}
                    >
                        <option value="Task">Task</option>
                        <option value="Idea">Idea</option>
                        <option value="Random Thought">Random Thought</option>
                    </select>
                </label>
                <label>
                    Content:
                    <textarea placeholder="Content"
                              className="form-input"
                              name="content"
                              value={formData.content}
                              onChange={event => onInputChange(event)}
                    />
                </label>

                <button className="form-btn" onClick={onSubmitClick}>{id ? 'Edit' : 'Create'} Note</button>
            </form>
        </div>
    );
}

export default CreateEditPage;