import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home, About, Gallery, Contact} from "./components";
import styles from './styles/styles';

export default function App(){
    return (
        <Router>
           <div>
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>

            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/gallery' element={< Gallery />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>

       </Router>
    )
}

// BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history 
// API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. 
// It is the parent component that is used to store all of the other components.

// Routes: It’s a new component introduced in the v6 and a upgrade of the component. 
// The main advantages of Routes over Switch are: Relative s and s
// Routes are chosen based on the best match instead of being traversed in order.

// Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.

// Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.