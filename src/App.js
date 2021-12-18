import React from 'react'
import Home from './components/Home';
import "./App.css"
import Add from "./components/Add";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Show from './components/Show';
import Edit from './components/Edit';
import Delete from "./components/Delete"
import Search from "./components/Search"
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Detalse from './components/Detalse';
import MyEdit from './components/MyEdit';

const App = () => {
        return (
                <div>
                        <Router>
                                <Nav/>
                                <Routes>
                                        <Route path="/" element={<Home/>}/>
                                        <Route path="/home" element={<Home/>}/>
                                        <Route path="/added" element={<Add/>}/>
                                        <Route path="/detalse/:id" element={<Detalse/>}/>
                                        <Route path="/show" element={<Show/>}/>
                                        <Route path="/edit" element={<Edit/>}/>
                                        <Route path="/edit/:id/myedit" element={<MyEdit/>}/>
                                        <Route path="/delete" element={<Delete/>}/>
                                        <Route path="/search" element={<Search/>}/>
                                        <Route path="*" element={<NotFound/>}/>
                                
                                </Routes>
                        </Router>
                        
                </div>
        )
}

export default App
