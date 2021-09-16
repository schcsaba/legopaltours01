import classes from "./HowToOrder.module.css";
import messenger from "../../assets/Footer/messenger.png";
import flashcode from "../../assets/HowToOrder/flashcode.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function howToOrder() {
  return (
    <Row>
      <Col>
        <div className={classes.HowToOrder}>
          <div className={classes.HowToOrderText}>
            <p>Nos plats et desserts (tous faits maison!) changent chaque semaine.
            <br />
            Nous vous conseillons vivement de réserver à l’avance.
            <br />
            Pour cela vous pouvez nous appeler ou nous envoyer un sms au</p>
            <p><strong>07 83 65 45 65</strong></p>
            <p>Vous pouvez aussi nous écrire via messenger : <a href="https://m.me/Legopaltours" target="_blank" rel="noreferrer"><img src={messenger} className={classes.Messenger} alt="messenger"/>{" "}LeGopaltours</a></p>
            <p>Vous pouvez voir notre menu sur Facebook en flashant le code suivant :</p>
            <img src={flashcode} className={classes.FlashCode} alt="flashcode"/>
          </div>
          <br />
          <p>Méthodes de payement : Espèces · Visa · Mastercard · Ticket restaurant</p>
          <br />
        </div>
      </Col>
    </Row>
  );
}

export default howToOrder;
