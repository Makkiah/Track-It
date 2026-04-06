import './History.css';
import Tracker from "../../components/tracker/tracker";
import {febMar} from './../../components/tracker/trackerData';

const HistoryFebMar = () => {

  
  return (
    <>
      <h2 className="sub_title">February - March 2026</h2>
      <Tracker habits={febMar}/>
    </>
  )
}

export default HistoryFebMar