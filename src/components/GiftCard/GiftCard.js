import classes from './GiftCard.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import giftcard from '../../assets/GiftCard/giftcard.jpg';

function GiftCard() {
    return (
        <Row id="giftcard">
            <Col>
                <Card className={classes.GiftCard} border="warning">
                    <p>En vente au Gopal :</p>
                    <p>Nos cartes cadeaux !!! 🎁😄</p>
                    <p>Faites plaisir à coup sûr !</p>
                    <p>Montant au choix : 30€, 50€ ou 100€!</p>
                    <Image src={giftcard} alt="Carte cadeau" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default GiftCard;