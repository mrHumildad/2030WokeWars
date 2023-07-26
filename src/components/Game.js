import { useState } from 'react';
import HeaderApp from './HeaderApp';
import Main from './Main';
import FooterApp from './FooterApp';
import React from 'react';

const nino = {
  surname : "Nino",
  money : 1000,
  socialCredit : 60,
  inventaryMax : 10,
  inventary : {book: 0,meat: 0},
  dailyExpenses : 10,
  dailyIncomes : 0
}
function Game() {
  const [char, setChar]= useState(
    {surname : "Nino",
    money : 1000,
    socialCredit : 60,
    inventaryMax : 10,
    inventary : {book: 0,meat: 0},
    dailyExpenses : 10,
    dailyIncomes : 0}
  )
  const [city, setCity]= useState ({
    Gracia : {
      id : 0,
      market :  {book : {price: 25, buyers: 5, sellers:8},
                 meat : {price: 10, buyers: 4, sellers:7}},
      priceFluct : 10
    },
    Pedralbes : {
      id : 1,
      market :  {book : {price: 35, buyers: 15, sellers:18},
                 meat : {price: 100, buyers: 14, sellers:17}},
      priceFluct : 20
    }              
  })
  function tomorrowCity() {
    let tc = {... city}
    let locs = Object.keys(tc)
    const drugs = Object.keys(city[currentLoc].market)
    console.log(locs)
    console.log(drugs)
    for (let l = 0; l < locs.length; l++) {
      let loc = locs[l] 
      
      for (let d = 0; d < drugs.length; d++) {
        let drug = drugs[d]
        var randomN = Math.floor(Math.random() * ((city[loc].priceFluct * 2)+1)) - city[loc].priceFluct
        console.log(loc,drug,tc[loc].market[drug].price, randomN)
        tc[loc].market[drug].price = Math.round(tc[loc].market[drug].price + randomN)
      }
      
    }
    handleCity(tc)
    console.log(city)
  }
  
  const handleCity = React.useCallback((newcity) => {setCity(newcity)})
  const handleChar = React.useCallback((newchar) => {setChar(newchar)})
  const [day, setDay] = useState(1)
  function newDay() {
    setDay(day +1)
    tomorrowCity()
    let newChar= {... char}
    newChar.money = newChar.money - newChar.dailyExpenses + newChar.dailyIncomes
    handleChar(newChar)
  }

  const startLoc = "Gracia"
  const [currentLoc, setCurrentLoc] = useState(startLoc)
  function handleCurrentLoc(newloc) {
    setCurrentLoc(newloc)  
  }
  function buy(drug) {
    console.log("buy ", drug, " in", currentLoc)
    let newChar = {... char}
    let newCity = {... city}
    newChar.money = newChar.money - city[currentLoc].market[drug].price 
    newChar.surname = "cca"/* -= city[currentLoc].market[drug].price */
    newChar.inventary[drug] ++
    newCity[currentLoc].market[drug].sellers --
    console.log(newChar.money)
    handleChar(newChar)
    handleCity(newCity)
    console.log(char.surname)
  }
  function sell(drug) {
    console.log("sell ", drug, " in", currentLoc, " at ", city[currentLoc].market[drug].price)
    let newChar = {... char}
    let newCity = {... city}
    newChar.money = newChar.money + city[currentLoc].market[drug].price 
    newChar.inventary[drug] --
    newCity[currentLoc].market[drug].buyers --
    console.log(newChar.money)
    handleChar(newChar)
    handleCity(newCity)
  }
  
  return (
    
    <div className="Game">
      <HeaderApp day={day} currentLoc={currentLoc} />
      <Main buy = {buy} sell={sell} char={char} day={day} newDay={newDay} currentLoc={currentLoc} 
      city={city} handleCurrentLoc={handleCurrentLoc} handleChar={handleChar} 
      handleCity={handleCity}/>
      <FooterApp char={char}/>
    </div>
  );
}
export default Game;