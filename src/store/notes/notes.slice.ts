import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INote} from '../../utils/interfaces';


interface notesState {
    notes: INote[];
}

const initialState: notesState = {
    notes: [
        {
            id: 0,
            name: 'Shopping list',
            created: 'April 20,2021',
            category: 'Task',
            content: 'Tomatoes, bread, water',
            dates: '',
            isArchive: false,
        },
        {
            id: 1,
            name: 'New Feature',
            created: 'May 05,2021',
            category: 'Idea',
            content: 'Implement new task, dates: 3/5/2021, 5/5/2021',
            dates: '3/5/2021, 5/5/2021',
            isArchive: false,
        },
        {
            id: 2,
            name: 'Why?',
            created: 'June 09,2022',
            category: 'Random Thought',
            content: 'Why aren\'t blueberries blue?',
            dates: '',
            isArchive: false,
        },
        {
            id: 3,
            name: 'Books',
            created: 'December 31,2021',
            category: 'Task',
            content: 'The Lean Startup',
            dates: '',
            isArchive: false,
        },
        {
            id: 4,
            name: 'Refactoring',
            created: 'July 12,2022',
            category: 'Idea',
            content: 'We need a redesign by 19.04.2022',
            dates: '19.04.2022',
            isArchive: false,
        },
        {
            id: 5,
            name: 'Wait what',
            created: 'April 27,2022',
            category: 'Random Thought',
            content: 'When you wait for a waiter, you become a waiter.',
            dates: '',
            isArchive: false,
        },
        {
            id: 6,
            name: 'This is noteRow',
            created: 'December 31,2021',
            category: 'Random Thought',
            content: 'noteRow content',
            dates: '',
            isArchive: false,
        },
    ],
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote: (state, action: PayloadAction<INote>) => {
            state.notes = [...state.notes, action.payload];
        },
        editNote: (state, action: PayloadAction<INote>) => {
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note);
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        archiveNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.map(note => {
                return note.id === action.payload ? {...note, isArchive: !note.isArchive} : note;
            });
        },
    },
});

export default notesSlice.reducer;

export const {createNote, editNote, archiveNote, deleteNote} = notesSlice.actions;