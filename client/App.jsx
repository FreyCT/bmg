import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home, Artiststatement, Gallery, Contact} from "./components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faGripLinesVertical, faBars } from '@fortawesome/free-solid-svg-icons'
import {styles, home, artiststatement, gallery, imageCard} from './styles';

export default function App(){

    const HamBurger = () => {
        return (
            <div className="hamburger" onClick={() => clickHandler()}><FontAwesomeIcon icon={faBars} /></div>
        )
    }

    const Menu = () => {
        return (
            <div className="mobileMenu" onClick={() => clickHandler()}>
                <b><Link to="/">Biography</Link>
                <Link to="/artiststatement">Artist Statement</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link></b>
            </div>
        )
    }

    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    }

    const displayMenu = !open ? <HamBurger/> : <Menu/>

    return (
        <Router>
            {displayMenu}
           <nav className="navbar">
                <div className="menu">
                    <span>
                        <FontAwesomeIcon icon={faCircle}/>
                        <Link className="logo" to="/"><b>Benjamin Michael Garner</b> <div className="artist">Visual Artist</div></Link>
                    </span>
                    <div>
                        <Link className="link" to="/contact">Contact</Link><FontAwesomeIcon className="verticalLine" icon={faGripLinesVertical}/>
                        <Link className="link" to="/gallery">Gallery</Link><FontAwesomeIcon className="verticalLine" icon={faGripLinesVertical}/>
                        <Link className="link" to="/artiststatement">Artist Statement</Link>
                    </div>
                </div>
            </nav>
            <br/>
            <main className='main'>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/artiststatement' element={< Artiststatement />}></Route>
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