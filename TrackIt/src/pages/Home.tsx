import Tracker from "./../components/tracker/tracker";
import {thisMonth} from './../components/tracker/trackerData';


const Home = () => {
  return (
    <>
      <h2 className="sub_title">This Month</h2>
      <Tracker habits={thisMonth}/>
    </>
  )
}

export default Home