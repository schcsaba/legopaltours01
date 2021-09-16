import { Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/Header/logo.svg";
import classes from "./Header.module.css";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "./Carousel/Carousel";

function header(props) {
  const { location } = props;
  return (
    <Row>
      <Col>
        <header className={classes.HeaderHeader}>
          <img src={logo} className={classes.HeaderLogo} alt="logo" />
          <Route path="/" exact component={Carousel} />
          <br />
          <Nav variant="tabs" activeKey={location.pathname}>
            <Nav.Item>
              <LinkContainer to="/" exact>
                <Nav.Link>Accueil</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* <Nav.Item>
              <LinkContainer to="/comment-commander" exact>
                <Nav.Link>Comment commander</Nav.Link>
              </LinkContainer>
            </Nav.Item> */}
            <Nav.Item>
              <LinkContainer to="/a-propos" exact>
                <Nav.Link>À propos du restaurant</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/commentaires" exact>
                <Nav.Link>Commentaires</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/contact" exact>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
          <br />
        </header>
      </Col>
    </Row>
  );
}

const headerWithRouter = withRouter(header);

export default headerWithRouter;
