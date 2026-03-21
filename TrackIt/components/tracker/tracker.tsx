import './tracker.css';

const habits = {
    Reading : ["Read for 5 minutes", "Read for 10 minutes"],
    Coding: ["Coded for 6 minutes"]
}

const Tracker = () => {
  return (
    <>
        <div className="tracker_wrapper">
            <h2 className="tracker_header">Reading</h2>
            <ul className="tracker_list">
                {habits.Reading.map((read, index) => (
                    <li className="tracker_list-text" key={index}>{read}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Tracker;