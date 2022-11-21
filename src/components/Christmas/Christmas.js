import classes from './Christmas.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import menu2022 from '../../assets/Christmas/menu2022.jpg';
import buches2022 from '../../assets/Christmas/buches2022.jpg';

function Christmas() {
    return (
        <Row id="christmas">
            <Col>
                <Card className={classes.ChristmasCard} border="warning">
                    <p>Bonjour les ami(e)s,</p>
                    <p>Voici notre menu de Noël 🎄😁 Uniquement à emporter pour le 23 et 24 Décembre.</p>
                    <p>Comment ça marche ?</p>
                    <p>Vous composez votre menu en choisissant une option dans chaque catégorie : amuse-bouches, entrées, plats et desserts.</p>
                    <p>Vous passez votre commande par email: <a href='mailto:contact@legopal.fr'>contact@legopal.fr</a> ou au resto en personne avant le 17 Décembre.</p>
                    <p>Vous venez la chercher au Gopal : vendredi 23 décembre de 18h à 21h ou samedi 24 de 10h30 à 15h *</p>
                    <p>* À préciser lors de votre commande.</p>
                    <p>Belle journée à vous 😊🙏</p>
                    <Image src={menu2022} alt="Menu de Noël" fluid />
                    <br></br>
                    <Image src={buches2022} alt="Bûches de Noël" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default Christmas;