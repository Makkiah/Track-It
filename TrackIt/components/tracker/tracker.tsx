import './tracker.css';
import {useState, useEffect} from 'react';
import {habits} from './trackerData';
import city from './../../src/assets/city.png';
import cityGif from './../../src/assets/city.gif';
import radioDone from './../../src/assets/radio-done.svg';
// import radioHalf from './../../src/assets/radio-half.svg';
import radio from './../../src/assets/radio-none.svg';
import note from './../../src/assets/notes.svg';


const Tracker = () => {

    const [bg, setBg] = useState(city);
    
    const lastUpdatedDate = "04/03/2026";
    const lastUpdatedTime = "2:29pm";

    useEffect(() => {
        const img = new Image();

        img.src = cityGif;

        img.onload = () => setBg(cityGif);
        img.onerror = () => setBg(city);

    });


    return (
    <>
        <div className='tracker_div-top'>
            <img className="tracker_icon-note" src={note} alt="Note icon" width={64} height={64} />
            <h1 className="tracker_title">Track-It</h1>
            <div className="tracker_last-updated">
                <h4 className='tracker_last-updated-head'>Last updated:</h4>
                <div className="tracker_last-updated-div">
                    <div className="tracker_last-updated-div-div">
                        <h5 className='tracker_last-updated-text_label'>Date: </h5>
                        <p className='tracker_last-updated-text'>{lastUpdatedDate ? lastUpdatedDate : "Unknown"}</p>
                    </div>
                    <div className="tracker_last-updated-div-div">
                        <h5 className='tracker_last-updated-text_label'>Time: </h5>
                        <p className='tracker_last-updated-text'>{lastUpdatedTime ? lastUpdatedTime : "Unknown"}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tracker_container" style={{backgroundImage: `url(${bg})`}}>
            {Object.entries(habits).map(([array, value]) => (
                <>
                    <div key={array} className="tracker_div">
                        <h2 className="tracker_header">{array}</h2>
                        <div key={array} className="tracker_entries">
                            {value.length === 0 ? (
                                <p className="tracker_none">No Data Available</p>
                            ) : ( 
                                value.map((entry) => (
                                <span className="tracker_entry-span">
                                    {array !== "To-Do" ? 
                                        <img className="tracker_icon-entry" src={radioDone} alt="Entry icon" width={24} height={24} /> 
                                        : <img className="tracker_icon-entry" src={radio} alt="Entry icon" width={24} height={24} />
                                    }
                                    <p key={entry} className="tracker_entry">{entry}</p>
                                </span>
                            )))}
                        </div>
                    </div>
                </>
            ))}
        </div>
    </>
  )
}

export default Tracker;