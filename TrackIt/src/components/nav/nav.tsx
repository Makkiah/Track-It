import { useEffect } from 'react';
import note from './../../assets/notes.svg';
import history from './../../assets/history.svg';
import close from './../../assets/close.svg';
import './nav.css';
import { Outlet, Link } from "react-router-dom";



const Nav = () => {
     
    const lastUpdatedDate = "04/05/2026";
    const lastUpdatedTime = "8:16pm";


    useEffect(()=> {
        document.getElementById("history-panel").style.right = "calc(0% - 500px)";
    }, [])
    const handleOpen = () => {
        document.getElementById("history-panel").style.visibility = "visible";
        document.getElementById("history-panel").style.right = "0%";
    };
    const handleClose = () => {
        document.getElementById("history-panel").style.visibility = "hidden";
        document.getElementById("history-panel").style.right = "calc(0% - 500px)";
    };
    
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
                    <img className="nav_icon-history" id="history-btn" onClick={handleOpen} src={history} alt="History icon" width={36} height={36} />
                </div>
                <div className="nav_slider" id="history-panel">
                    <img className='nav_slider-close' onClick={handleClose} src={close} alt="Close nav" width={36} height={36} />
                    <h2 className='nav_slider-header'>Main Menu</h2>
                    <ul className='nav_slider-list'>
                        <Link to="/" className='nav_link'><li className='nav_slider-item'>Home</li></Link>
                        <Link to="/history" className='nav_link'><li className='nav_slider-item'>History</li></Link>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
  )
}

export default Nav