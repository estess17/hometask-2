import React, {useEffect, useState} from 'react';
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
            <Link to={-1 as any} className="block w-28 my-4 py-1.5 bg-gray-500 text-gray-50 rounded text-center">
                Go Back
            </Link>
            <form className="flex flex-col p-4 bg-gray-100 rounded drop-shadow" onSubmit={handleSubmit}>
                <label className="flex flex-col mb-3">
                    Name:
                    <input type="text"
                           placeholder="Name"
                           className="p-3 mt-2 border border-solid border-gray-300 outline-none focus:border-gray-600"
                           name="name"
                           value={formData.name}
                           onChange={event => onInputChange(event)}
                           style={{borderColor: errors.name ? 'red' : ''}}
                    />
                </label>
                <label className="flex flex-col mb-3">
                    Category:
                    <select className="p-3 mt-2 border border-solid border-gray-300 outline-none focus:border-gray-600"
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
                    <textarea placeholder="Content"
                              className="p-3 mt-2 border border-solid border-gray-300 outline-none focus:border-gray-600"
                              name="content"
                              value={formData.content}
                              onChange={event => onInputChange(event)}
                              style={{borderColor: errors.content ? 'red' : ''}}
                    />
                </label>

                <button className="self-end w-28 py-1.5 bg-green-500 text-gray-50 rounded text-center
                       hover:bg-green-600 transition-colors ease-in-out"
                        type="submit">
                    {id ? 'Edit' : 'Create'} Note
                </button>
            </form>
        </div>
    );
}

export default CreateEditPage;