import './tracker.css';
import {habits} from './trackerData';

const Tracker = () => {
  return (
    <>
        <h1 className="tracker_title">Track-It</h1>
        <div className="tracker_container">
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
                                    <span className="material-symbols-outlined tracker_entry-icon">radio_button_checked</span>
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