import { Link } from "react-router-dom";
import classes from "./ShortHowToOrder.module.css";
import messenger from "../../assets/Footer/messenger.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function shortHowToOrder() {
  return (
    <Row>
      <Col>
        <div className={classes.ShortHowToOrder}>
          <p>
            Réservations :{" "}
            <a
              href="https://m.me/Legopaltours"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={messenger}
                className={classes.Messenger}
                alt="messenger"
              />{" "}
              LeGopaltours
            </a>{" "}
            ou par sms au 07 83 65 45 65 avant 9h30.{" "}
            <Link to="/comment-commander">Informations complémentaires</Link>
          </p>
          <br />
        </div>
      </Col>
    </Row>
  );
}

export default shortHowToOrder;
