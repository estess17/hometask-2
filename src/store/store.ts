import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import notesSlice from './notes/notes.slice';


export const store = configureStore({
    reducer: {
        notes: notesSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

