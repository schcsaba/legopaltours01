import classes from './ShortContact.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { HashLink } from 'react-router-hash-link';
import messenger from '../../assets/Footer/messenger.png';

function shortContact() {
    return (
        <Row className="justify-content-md-center">
            <Col>
                <Card className={classes.ShortContact} border="warning">
                    <Card.Body>
                        <Card.Title>Heures d'ouverture :</Card.Title>
                        <table className={classes.Center}>
                            <tbody>
                                <tr className="align-top">
                                    <td className={classes.TdRight}>
                                        <strong>Mardi</strong>
                                    </td>
                                    <td> : </td>
                                    <td className={classes.TdLeft}>
                                        12h à 14h
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className={classes.TdRight}>
                                        <strong>Mercredi</strong>
                                    </td>
                                    <td> : </td>
                                    <td className={classes.TdLeft}>
                                        12h à 14h et
                                        <br />
                                        19h à 21h30
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className={classes.TdRight}>
                                        <strong>Jeudi</strong>
                                    </td>
                                    <td> : </td>
                                    <td className={classes.TdLeft}>
                                        12h à 14h
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className={classes.TdRight}>
                                        <strong>Vendredi</strong>
                                    </td>
                                    <td> : </td>
                                    <td className={classes.TdLeft}>
                                        12h à 14h et
                                        <br />
                                        19h à 21h30
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className={classes.TdRight}>
                                        <strong>Samedi</strong>
                                    </td>
                                    <td> : </td>
                                    <td className={classes.TdLeft}>
                                        12h à 14h30
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Card.Title>Coordonnées :</Card.Title>8 Avenue du Mans,
                        37100 Tours, France (
                        <LinkContainer to="/contact">
                            <Card.Link>carte</Card.Link>
                        </LinkContainer>
                        )
                        <br />
                        Livraison à domicile :{' '}
                        <a
                            href="https://www.frerestoque.fr/shop/tours-nord/gopal"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cliquez ici
                        </a>
                        <br />
                        Tél : <a href="tel:+33783654565">07 83 65 45 65</a>
                        <br />
                        Email : <a href="mailto:contact@legopal.fr">contact@legopal.fr</a>
                        <br />
                        Messenger :{' '}
                        <a
                            href="https://m.me/Legopaltours"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={messenger}
                                className={classes.Messenger}
                                alt="messenger"
                            />{' '}
                            LeGopaltours
                        </a>
                        <br />
                        Méthodes de paiement : Espèces · Visa · Mastercard ·
                        Ticket restaurant
                        <br />
                        <br />
                        <HashLink smooth to="/#reservation">
                            <Button className={classes.ReservationButton} variant="warning" size="lg">
                                Réservez une table
                            </Button>
                        </HashLink>
                    </Card.Body>
                </Card>
                <br />
            </Col>
        </Row >
    );
}

export default shortContact;
