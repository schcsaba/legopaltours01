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
                                            <strong>8,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Plat du jour</strong> : riz
                                            parfumé + curry <strong>ou</strong>{' '}
                                            boulettes de légumes{' '}
                                            <strong>ou</strong> soupe (au choix)
                                            + galette papadam
                                        </td>
                                        <td>
                                            <strong>10,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Menu « Gopal »</strong> :
                                            salade composée + riz parfumé +
                                            curry + boulettes de légumes + soupe
                                            + galette papadam
                                        </td>
                                        <td>
                                            <strong>14,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Spéciale du chef</strong> :
                                            ex : lasagne royale, calzoni,
                                            fougasse, etc... + salade composée
                                        </td>
                                        <td>
                                            <strong>12,50€</strong>
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
                                            <strong>Cheesecake</strong> (caramel
                                            beurre salé et noix de pécan
                                            grillées, mangue, fruits rouges...)
                                        </td>
                                        <td>
                                            <strong>4,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Crumble</strong>
                                        </td>
                                        <td>
                                            <strong>4,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Cupcake</strong>
                                        </td>
                                        <td>
                                            <strong>4,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Mousse au chocolat vegan</strong>
                                        </td>
                                        <td>
                                            <strong>4,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Pannacotta</strong>
                                        </td>
                                        <td>
                                            <strong>4,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Tarte au citron</strong> (la
                                            part)
                                        </td>
                                        <td>
                                            <strong>4,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Halava</strong> (gâteau
                                            semoule)
                                        </td>
                                        <td>
                                            <strong>3,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Gâteau du chef</strong> (la
                                            part)
                                        </td>
                                        <td>
                                            <strong>4,50€</strong>
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
                                            <strong>Lassi</strong> (au yaourt
                                            vegan, parfum mangue ou rose){' '}
                                            <strong>25 cl</strong>
                                        </td>
                                        <td>
                                            <strong>2,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                San Pellegrino aromatisée 33 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>2,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Bière sans alcool 25 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>3,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Tisane 20 cl</strong>
                                        </td>
                                        <td>
                                            <strong>1,50€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Eau pétillante 33 cl
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>2,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Eau plate 50 cl</strong>
                                        </td>
                                        <td>
                                            <strong>2,00€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Café expresso</strong>
                                        </td>
                                        <td>
                                            <strong>1,80€</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Double expresso</strong>
                                        </td>
                                        <td>
                                            <strong>2,20€</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <div className="text-center">
                                <h3>Sur place, à emporter et en livraison</h3>
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
