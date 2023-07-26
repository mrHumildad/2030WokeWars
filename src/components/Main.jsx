import { useState } from 'react';
import Market from './Market';
import Shop from "./Shop"
import Travel from "./Travel"

function Main(props) {
  const [activeTab, setActiveTab] = useState(<Shop/>)
  const actionList = [
    {id:"01", actName:"Market",tab: <Market key={props.city} buy= {props.buy} sell={props.sell} currentLoc={props.currentLoc} city={props.city} char={props.char} handleChar={props.handleChar} handleCity={props.handleCity}/* city={props.city} */ />},
    {id:"02", actName:"Shop",tab: <Shop/>},
    {id:"03", actName:"Travel",tab: <Travel day={props.day} newDay={props.newDay} currentLoc={props.currentLoc} city={props.city} handleCurrentLoc={props.handleCurrentLoc}/>}
  ]
  
  const ActionButtons = actionList.map((action) =>
    <button className='actionButton' /* key={action.id} */ onClick={() => setActiveTab(action.tab)}>{action.actName}</button>
  )
  //console.log(props.city)

  return (
    <div className="Main">
      <div className="actionbuttons">{ActionButtons}</div>
      <div className="activetab">{activeTab}</div>
    </div>
  );
}

export default Main;