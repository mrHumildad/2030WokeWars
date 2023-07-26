import '../App.css';
import { useState } from 'react';
//import HeaderApp from './HeaderApp';
//import Market from './Market';
//import Shop from "./Shop"

//import ScreenApp from './ScreenApp';
//import FooterApp from './FooterApp';

function Game() {
  //console.log("caca")
  const [char, setChar]= useState ( {
    surname : "Nino",
    money : 1000,
    socialCredit : 60,
    inventary : {book: 0,meat: 0},
    dailyExpenses : 10,
    dailyIncomes : 0
  })
  const [cityx, setCytyx]= useState ([
    {id : 0,
    neighName : "Gracia",
    market : [{book : [50,5,6]}, {meat : [10,5,6]}]
    },
    {id : 1,
    neighName : "Gracia",
    market : [{book : [50,5,6]}, {meat : [10,5,6]}]
    },
    {id : 2,
    neighName : "Carmelo",
    market : [{book : [45,5,6]}, {meat : [15,5,6]}]
    },
    {id : 3,
    neighName : "Pedralbes",
    market : [{book : [55,5,6]}, {meat : [25,5,6]}]
    }
  ])
  const [city, setCyty]= useState ({
    Gracia : {
      id : 0,
      market :  {book : {price: 25, buyers: 5, sellers:8},
                 meat : {price: 10, buyers: 4, sellers:7}}
    },
    Pedralbes : {
      id : 1,
      market :  {book : {price: 35, buyers: 15, sellers:18},
                 meat : {price: 100, buyers: 14, sellers:17}}
    }              
})
  let day = 0
  const startLoc = city[0]
 
  const [currentLoc, setCurrentLoc] = useState(startLoc)
  //console.log(currentLoc)
  function HeaderApp() {

    return (
      <div className="HeaderApp">
          <h5 className='chName'>{char.surname}</h5>
          <h3>{currentLoc.neighName}</h3>
          <h4><span>{char.money}</span>CASH</h4>
          <h4><span>{char.socialCredit}</span>SC</h4>
      </div>
    );
  }
  function buy(drug) {
    console.log("buy")
    //console.log(char.inventary)

    //console.log(drug)
    let newChar = {... char}
    let newCity = {... city}
    newChar.money = newChar.money - Object.values(drug)[0][0]
    newChar.inventary[Object.keys(drug)] +=1
    let drugName = Object.keys(drug)[0]
    
    var marketArray = newCity[currentLoc.id].market
    var objIndex = marketArray.findIndex((obj => obj.hasOwnProperty(drugName)));
    console.log(objIndex)
    console.log("pipi" + newCity[currentLoc.id].market[objIndex])
    let bought = newCity[currentLoc.id].market[objIndex]
    /* var check = marketArray.some(obj => obj.hasOwnProperty(drugName))
    console.log(check) */
  /*   for (let i = 0; i < newCity[currentLoc.id].market; i++) {
      const element = newCity[currentLoc.id].market[i];
      console.log(element.book)
      console.log("poo")
      
    } */
    //console.log(currentLoc)
    //console.log(drugName)

    //newCity[currentLoc.id].market[Object.keys(drug)]
    //console.log(newChar.inventary)
    setChar(newChar) 
  }
  const marketButtons = currentLoc.market.map((price) =>
  <div  className='drugButtons'>
  <button className='buyButton' onClick={() => buy(price)}>buy({Object.values(price)[0][1]})</button>
  <span>{Object.keys(price)}({Object.values(price)[0][0]}$)</span>
  <button className='buyButton'>sell({Object.values(price)[0][2]})</button>
  </div>
  )

  function Market() {
    return (
      <div className="Market tab">
        <h5 className="tabName">Market</h5>
        {currentLoc.market.book}
        {marketButtons}
      </div>
    );
  }
  function Shop() {
    return (
      <div className="Shop tab">
        <h5 className="tabName">Shop</h5>
      </div>
    );
  }
  function Travel() {
    const TravelButtons = city.map((loc) =>
      <button className='travelButton' onClick={() => setCurrentLoc(loc)} >{loc.neighName}</button>)
    return (
      <div className="Travel tab">
        <h5 className="tabName">Travel</h5>
        <h3>you are in {currentLoc.neighName}</h3>
        {TravelButtons}

      </div>
    );
  }
  function Tab() {
    const [activeTab, setActiveTab] = useState(<Market/>)
    const actionList = [
      {id:"01", actName:"Market",tab: <Market/>},
      {id:"02", actName:"Shop",tab: <Shop/>},
      {id:"03", actName:"Travel",tab: <Travel/>}
    ]
    
    const ActionButtons = actionList.map((action) =>
      <button key={action.id} className='actionButton' onClick={() => setActiveTab(action.tab)}>{action.actName}</button>
    )
    return (
      <div className="tab">
        {ActionButtons}
        {activeTab}
      </div>
    );
  }
  function FooterApp() {


    return (
      <div className="FooterApp">
          FooterApp
      </div>
    );
  }
  return (
    
    <div className="Game">
      <HeaderApp  money = {char.money} social = {char.socialCredit} currentLoc = {currentLoc}>
      </HeaderApp>
      <Tab/>
      <FooterApp/>
    </div>
  );
}
export default Game;