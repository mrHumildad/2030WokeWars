function FooterApp(props) {
  let inventoryValuesList = Object.values(props.char.inventary)
  //console.log(inventoryValuesList)
  const initialValue = 0;
  const sumValues = inventoryValuesList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
  );

  return (
    <div className="FooterApp">
        <h4>{props.char.money} CASH</h4>
        <h4>INV: {sumValues}/{props.char.inventaryMax}</h4>        
    </div>
  );
}

export default FooterApp;