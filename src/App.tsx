import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ArchivedPage, MainPage} from './pages';


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/archived" element={<ArchivedPage/>}/>
        </Routes>
    );
}

export default App;
