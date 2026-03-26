import './tracker.css';
import {habits} from './trackerData';
import people from './../../src/assets/people.png';
import radio from './../../src/assets/radio.svg';
import note from './../../src/assets/notes.svg';


const Tracker = () => {
  return (
    <>
        <div className='tracker_div-top'>
            <img className="tracker_icon-note" src={note} alt="Note icon" width={64} height={64} />
            <h1 className="tracker_title">Track-It</h1>
        </div>
        <div className="tracker_container" style={{backgroundImage: `url(${people})`}}>
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
                                    <img className="tracker_icon-entry" src={radio} alt="Entry icon" width={24} height={24} />
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