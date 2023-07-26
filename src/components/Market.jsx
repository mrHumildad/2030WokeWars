import { isDisabled } from "@testing-library/user-event/dist/utils"

function Market(props) {
  const drugs = Object.keys(props.city[props.currentLoc].market)
/*   function sell(drug) {
    console.log("sell")
  } */

  function buyButton(drug) {
    let buyable = false
    if (props.char.money >= props.city[props.currentLoc].market[drug].price
      && props.city[props.currentLoc].market[drug].sellers > 0) {
      buyable = true
    }
    return <button disabled = {!buyable} className="buybutton" onClick={() => props.buy(drug)}>buy {props.city[props.currentLoc].market[drug].sellers}</button>
  }
  function drugName(drug) {
    return <span className="drugName">{drug} {props.city[props.currentLoc].market[drug].price} $</span>
  }
  function sellButton(drug) {
    let sellable = false
    if (props.city[props.currentLoc].market[drug].buyers > 0 && props.char.inventary[drug] > 0) {
      sellable = true
    }
    return <button disabled={!sellable} className="sellButton" onClick={() => props.sell(drug)}>sell {props.city[props.currentLoc].market[drug].buyers}</button>
  }
  const marketButtons = drugs.map((drug) =>
  <div className="drugButtons">
    {buyButton(drug)}
    {drugName(drug)}
    {sellButton(drug)}
  </div>
  )

  return (
    <div className="Market tab">
      market
      {marketButtons}
    </div>
  );
}

export default Market;