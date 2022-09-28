import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {INote} from '../../utils/interfaces';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {createNote, editNote} from '../../store/notes/notes.slice';
import {Input} from '../../components';


function CreateEditPage() {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Task',
        content: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        content: false,
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

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let dates = formData.content.match(/(\d{1,2}([.\-/])\d{1,2}([.\-/])\d{4})/g);

        if (!formData.name || !formData.content) {
            setErrors({
                name: !formData.name,
                content: !formData.content,
            });
        } else {
            if (id && note) {
                const updatedNote: INote = {
                    ...note,
                    name: formData.name,
                    content: formData.content,
                    category: formData.category,
                    dates: dates ? dates.join(', ') : '',
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

            navigate(-1);
        }
    };

    return (
        <div className="container" style={{maxWidth: 660}}>
            <Link to={-1 as any} className="btn bg-gray-500 my-4">Go Back</Link>
            <form className="flex flex-col p-4 bg-gray-100 rounded drop-shadow" onSubmit={handleSubmit}>
                <label className="flex flex-col mb-3">
                    Name:
                    <Input type="text"
                           placeholder="Name"
                           name="name"
                           value={formData.name}
                           error={errors.name}
                           onChange={(event: any) => onInputChange(event)}/>
                </label>
                <label className="flex flex-col mb-3">
                    Category:
                    <select className="input"
                            name="category"
                            value={formData.category}
                            onChange={event => onInputChange(event)}
                    >
                        <option value="Task">Task</option>
                        <option value="Idea">Idea</option>
                        <option value="Random Thought">Random Thought</option>
                    </select>
                </label>
                <label className="flex flex-col mb-3">
                    Content:
                    <Input type="textarea"
                           placeholder="Content"
                           name="content"
                           value={formData.content}
                           error={errors.content}
                           onChange={(event: any) => onInputChange(event)}/>
                </label>

                <button className="btn bg-green-500 hover:bg-green-600 self-end" type="submit">
                    {id ? 'Edit' : 'Create'} Note
                </button>
            </form>
        </div>
    );
}

export default CreateEditPage;