import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ArchivedPage, MainPage} from './pages';
import CreateEditPage from './pages/createEditPage/CreateEditPage';


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/archived" element={<ArchivedPage/>}/>
            <Route path="/create" element={<CreateEditPage/>}/>
            <Route path="/edit/:id" element={<CreateEditPage/>}/>
        </Routes>
    );
}

export default App;
