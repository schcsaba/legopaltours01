import { HashLink } from 'react-router-hash-link';
import classes from './Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook from '../../assets/Footer/facebook.png';
import instagram from '../../assets/Footer/instagram.png';
import messenger from '../../assets/Footer/messenger.png';
import logo from "../../assets/Header/logo.svg";

function footer() {
    return (
        <Row>
            <Col xs={3}>
                <img src={logo} className={classes.FooterLogo} alt="logo" /><br />
            </Col>
            <Col xs={5} className={classes.FooterBorder}>
                8 Avenue du Mans<br />37100 Tours, France<br />Tél : <a href="tel:+33783654565">07 83 65 45 65</a><br />Email : <a href="mailto:contact@legopal.fr">contact@legopal.fr</a><br />
                <HashLink to="/mentionslegales#top">Mentions légales et Politique de Confidentialité</HashLink>
            </Col>
            <Col className={classes.FooterBorder}>
                <p>Suivez-nous et envoyez-nous un message sur les réseaux sociaux :</p>
                <a href="https://www.facebook.com/Legopaltours" target="_blank" rel="noreferrer noopener"><img src={facebook} className={classes.Icon} alt="facebook" /></a>{' '}
                <a href="https://www.instagram.com/le_gopal/" target="_blank" rel="noreferrer noopener"><img src={instagram} className={classes.Icon} alt="instagram" /></a>{' '}
                <a href="https://m.me/Legopaltours" target="_blank" rel="noreferrer noopener"><img src={messenger} className={classes.Icon} alt="messenger" /></a>
            </Col>
        </Row>
    );
  }
  
export default footer;