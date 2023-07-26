function Travel(props) {
  //console.log(props)
    //console.log(Object.keys(props.city))
    let destinations = Object.keys(props.city)
    let indexCurrentLoc = destinations.indexOf(props.currentLoc)
    destinations.splice(indexCurrentLoc, 1)
    function travel(destination) {
      props.handleCurrentLoc(destination)
      props.newDay()
      console.log(props.day)
    }
    const travelButtons = destinations.map((destination) =>
      <button className='destinationButton'onClick={() => travel(destination)/* props.handleCurrentLoc(destination) */}>{destination}</button>
    )
      
    return (
      <div  className="Travel tab">
        <h5 className="tabName">Travel</h5>
        <h3 >you are in {props.currentLoc}</h3>
        {travelButtons}

      </div>
    );
  }

  export default Travel