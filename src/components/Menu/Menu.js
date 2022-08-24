import classes from './Menu.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import messenger from '../../assets/Footer/messenger.png';

function Menu() {
    return (
        <Row id="menu">
            <Col>
                <div className={classes.Menu}>
                    <div className="text-center">
                        <br />
                        <h2>Notre carte</h2>
                    </div>
                    <br />
                    <Card className={classes.MenuCard} border="warning">
                        <Card.Body>
                            <p className="h3 text-center">Nos Formules :</p>
                            <table className={classes.CarteTable}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                Samosa aux légumes + Salade
                                                composée
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>9,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Plat du jour</strong> : riz
                                            parfumé <strong>+</strong> curry <strong>ou</strong>{' '}
                                            boulettes de légumes{' '}
                                            <strong>ou</strong> soupe (au choix)
                                            <strong>+</strong> galette papadam
                                        </td>
                                        <td>
                                            <strong>11,50 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Menu « Gopal »</strong> :
                                            salade composée <strong>+</strong> riz parfumé <strong>+</strong>{' '}
                                            curry <strong>+</strong> boulettes de légumes <strong>+</strong> soupe
                                            <strong>+</strong> galette papadam
                                        </td>
                                        <td>
                                            <strong>16,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Spéciale du chef</strong> :
                                            ex : lasagne royale, calzoni,
                                            fougasse, etc... <strong>+</strong> salade composée
                                        </td>
                                        <td>
                                            <strong>13,50 €</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <p className="h3 text-center">Nos Desserts :</p>
                            <table className={classes.CarteTable}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Cheesecake</strong> (caramel/chocolat,
                                            mangue ou fruits rouges...)
                                        </td>
                                        <td>
                                            <strong>5,50 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Crumble</strong>
                                        </td>
                                        <td>
                                            <strong>5,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Cupcake</strong>{' '}
                                            ( ex : chocolat, crème de marron, framboise... )
                                        </td>
                                        <td>
                                            <strong>5,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Mousse au chocolat vegan</strong>
                                        </td>
                                        <td>
                                            <strong>4,80 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Pannacotta vegan</strong>
                                        </td>
                                        <td>
                                            <strong>5,50 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Gâteau du chef (la part)</strong>
                                        </td>
                                        <td>
                                            <strong>5,50 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Halava (gâteau semoule)</strong>
                                        </td>
                                        <td>
                                            <strong>4,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Tarte au citron (la part)</strong>
                                        </td>
                                        <td>
                                            <strong>5,00 €</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <p className="h3 text-center">Nos Boissons :</p>
                            <table className={classes.CarteTable}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Lassi</strong> ( au yaourt
                                            vegan, parfum mangue ou rose ){' '}
                                            <strong>25 cl</strong>
                                        </td>
                                        <td>
                                            <strong>3,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Limonade maison</strong> ( menthe fraîche, citron vert, gingembre ){' '}
                                            <strong>25 cl</strong>
                                        </td>
                                        <td>
                                            <strong>3,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                San Pellegrino aromatisée 33 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>2,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Bière sans alcool 25 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>3,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Tisane 20 cl</strong>
                                        </td>
                                        <td>
                                            <strong>1,80 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Eau pétillante 33 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>2,50 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Eau plate 50 cl</strong>
                                        </td>
                                        <td>
                                            <strong>2,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Café expresso</strong>
                                        </td>
                                        <td>
                                            <strong>2,00 €</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Double expresso</strong>
                                        </td>
                                        <td>
                                            <strong>2,80 €</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <div className="text-center">
                                <h3>Sur place ou à emporter ou livraison à domicile</h3>
                                <h4>Informations et réservations :</h4>
                                Livraison à domicile :{' '}
                                <a
                                    href="https://www.frerestoque.fr/shop/angers-centre-ville/gopal"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Cliquez ici
                                </a>
                                <br />
                                Tél : 07 83 65 45 65
                                <br />
                                Email : contact@legopal.fr
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
                                <h5>Tous nos plats sont faits maison.</h5>
                            </div>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            </Col>
        </Row>
    );
}

export default Menu;
