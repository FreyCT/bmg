import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home, About, Gallery, Contact} from "./components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {styles} from './styles';

export default function App(){

    return (
        <Router>
           <nav className="navbar">
                <span>
                    <FontAwesomeIcon icon={faCircle}/>
                    <Link className="logo" to="/"><b>Benjamin Michael Garner</b> <div className="artist">Visual Artist</div></Link>
                </span>
                <div>
                    <Link className="link" to="/contact">Contact</Link>
                    <Link className="link" to="/gallery">Gallery</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
            </nav>
            <br/>
            <main className='main'>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/gallery' element={< Gallery />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                </Routes>
            </main>
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