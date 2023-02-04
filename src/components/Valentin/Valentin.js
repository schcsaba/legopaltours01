import classes from './Valentin.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import valentin2023 from '../../assets/Valentin/valentin2023.jpg';

function Valentin() {
    return (
        <Row id="Valentin">
            <Col>
                <Card className={classes.ValentinCard} border="warning">
                    <p>Le voici enfin! Notre menu tant attendu pour la St Valentin 😊 (le Menu entier est également disponible en version Végan sur demande)</p>
                    <p>Célébrons l’amour ensemble dans une ambiance spéciale ce mardi 14 Février 2023 !</p>
                    <p>Amoureux, amis, groupes bienvenues au Gopal !</p>
                    <p>Ouverture exceptionnelle le soir avec dîner servi à table.</p>
                    <p>Et pour vous recevoir nombreux, nous ferons 2 services : 19h00-20h15 ou 20h30-22h45</p>
                    <p>Attention places limitées !</p>
                    <p>Réservez vite par SMS/WhatsApp <a href="tel:+33783654565">07 83 65 45 65</a>, ou par email <a href="mailto:contact@legopal.fr">contact@legopal.fr</a> avant le vendredi 10  février en précisant bien le nom, le nombre de personnes et l’horaire.</p>
                    <p>Et si vous souhaitez célébrer la St Valentin chez vous, vous pourrez également emporter votre repas entre 18h00 et 19h00 ! (réservation avant le vendredi 10 février).</p>
                    <p>Nous vous attendons dans la joie et la bonne humeur !</p>
                    <Image src={valentin2023} alt="Menu St Valentin" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default Valentin;