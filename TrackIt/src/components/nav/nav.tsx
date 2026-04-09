import { useState, useEffect } from 'react';
import note from './../../assets/notes.svg';
import history from './../../assets/history.svg';
import close from './../../assets/close.svg';
import './nav.css';
import { Outlet, Link } from "react-router-dom";



const Nav = () => {
     
    const lastUpdatedDate = "04/09/2026";
    const lastUpdatedTime = "6:35pm";
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
    
    return (
        <>
            <nav className='nav_container'>
                <div className="nav_div">
                    <Link to="/" className='nav_logo-link'><img className="nav_icon-note" src={note} alt="Note icon" width={64} height={64} />
                    <h1 className="nav_title">Track-It</h1></Link>
                    <div className="nav_last-updated">
                        <h4 className='nav_last-updated-head'>Last updated:</h4>
                        <div className="nav_last-updated-div">
                            <div className="nav_last-updated-div-div">
                                <h5 className='nav_last-updated-text_label'>Date: </h5>
                                <p className='nav_last-updated-text'>{lastUpdatedDate ? lastUpdatedDate : "Unknown"}</p>
                            </div>
                            <div className="nav_last-updated-div-div">
                                <h5 className='nav_last-updated-text_label'>Time: </h5>
                                <p className='nav_last-updated-text'>{lastUpdatedTime ? lastUpdatedTime : "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_menu">
                    <img className="nav_icon-history" id="history-btn" onClick={() => setOpen(true)} src={history} alt="History icon" width={36} height={36} />
                </div>
                <div className={`nav_slider ${open ? "open" : ""}`} id="history-panel">
                    <img className='nav_slider-close' onClick={() => setOpen(false)} src={close} alt="Close nav" width={36} height={36} />
                    <h2 className='nav_slider-header'>Main Menu</h2>
                    <ul className='nav_slider-list'>
                        <li className='nav_slider-item' onClick={() => setOpen(false)}><Link to="/" className='nav_link'>Home</Link></li>
                        <li className='nav_slider-item' onClick={() => setOpen(false)}><Link to="/history" className='nav_link'>History</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
  )
}

export default Nav