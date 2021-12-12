import classes from './Christmas.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import menu from '../../assets/Christmas/menu.jpg';

function Christmas() {
    return (
        <Row id="christmas">
            <Col>
                <Card className={classes.ChristmasCard} border="warning">
                    <p>Bonjour les amis et amies,</p>
                    <p>Voici notre menu de Noël 🎄😁 à emporter le 24 Décembre entre 12h00 et 14h30.</p>
                    <p>Comment ça marche ? Vous choisissez entre un des choix : amuse bouche, entrée, plats et dessert. Les commandes se feront par email contact@legopal.fr ou au resto en personne avant le 19 Décembre.</p>
                    <p>Le Gopal vous propose aussi 2 <strong>bûches de Noël</strong> véganes à commander avant le 15 décembre et a récupérer le 23 ou 24 décembre avant 14h30.</p>
                    <ol>
                        <li>Bûche vanille, mangue et fruit de la passion 🥭😋</li>
                        <li>Bûche façon royal chocolat et Praliné 🍫</li>
                    </ol>
                    <p>Deux tailles disponibles :</p>
                    <ul>
                        <li>4/5 personnes : 26 €</li>
                        <li>8/10 personnes : 49,50 €</li>
                    </ul>
                    <p>Pour passer vos commandes veuillez nous envoyer la commande par email au contact@legopal.fr ou au resto en personne.</p>
                    <p>P.S. : les amuses bouches sont végans.</p>
                    <p>Belle journée à vous 😊🙏</p>
                    <Image src={menu} alt="Menu de Noël" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default Christmas;