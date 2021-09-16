function SpecialeDuJour(props) {
  if (props.specDuJour2 === '') {
    return (
        <div>
          <p className={props.menuTitle}>
            <strong>Spéciale du Jour</strong> {props.specDuJourPr}€{" "}
            {props.specDuJourSup}
          </p>
          <p className={props.menuElement} >{props.specDuJour1}</p>
        </div>
      );
  } else {
    return (
        <div>
          <p className={props.menuTitle}>
            <strong>Spéciale du Jour</strong> {props.specDuJourPr}€{" "}<br />
            {props.specDuJourSup}
          </p>
          <ol className={props.menuElement}>
            <li>{props.specDuJour1}</li>
            <li>{props.specDuJour2}</li>
            {/* <li>{props.specDuJour3}</li> */}
          </ol>
        </div>
      );
  }
}

export default SpecialeDuJour;
