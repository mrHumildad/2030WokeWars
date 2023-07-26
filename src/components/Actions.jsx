import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import '../App.css';
import { useState } from 'react';

function Actions() {
  function cacca(shit = "pip") {
    console.log(shit)
  } 
  const actionList = [
    {id:"01", actName:"Market",tab: <Market/>},
    {id:"02", actName:"Shop",tab: <Shop/>}
  ]
  const ActionButtons = actionList.map((action) =>
    <button className='actionButton' onClick={cacca}>{action.actName}</button>
  )

  return (
    <div className="Actions">
        {ActionButtons}
    </div>
  );
}

export default Actions;