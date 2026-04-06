import './tracker.css';
import {useState, useEffect} from 'react';
import city from './../../assets/city.png';
import cityGif from './../../assets/city.gif';
import radioDone from './../../assets/radio-done.svg';
import radio from './../../assets/radio-none.svg';


const Tracker = ({habits}) => {

    const [bg, setBg] = useState(city);
   
    useEffect(() => {
        const img = new Image();

        img.src = cityGif;

        img.onload = () => setBg(cityGif);
        img.onerror = () => setBg(city);

    }, []);


    return (
        <div className="tracker_container" style={{ backgroundImage: `url(${bg})` }}>
            {Object.entries(habits).map(([category, entries]) => (
            <div key={category} className="tracker_div">
                <h2 className="tracker_header">{category}</h2>

                <div className="tracker_entries">
                {entries.length === 0 ? (
                    <p className="tracker_none">No Data Available</p>
                ) : (
                    entries.map((entry) => (
                    <span key={entry} className="tracker_entry-span">
                        {category !== "To-Do" ? (
                        <img src={radioDone} alt="Entry icon" width={24} height={24} />
                        ) : (
                        <img src={radio} alt="Entry icon" width={24} height={24} />
                        )}
                        <p className="tracker_entry">{entry}</p>
                    </span>
                    ))
                )}
                </div>
            </div>
            ))}
        </div>
    );
}

export default Tracker;