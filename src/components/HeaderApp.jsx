function HeaderApp(props) {


  return (
    <div className="HeaderApp">
        <h2>{props.currentLoc}</h2>
        <h2>Day {props.day}</h2>
    </div>
  );
}

export default HeaderApp;