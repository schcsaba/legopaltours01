import classes from './Christmas.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import menu from '../../assets/Christmas/menu2023.jpeg';
import buches from '../../assets/Christmas/buches2023.jpeg';

function Christmas() {
    return (
        <Row id="christmas">
            <Col>
                 <div className="text-center">
                    <br />
                    <h2>POUR LES FÊTES DE NOËL ET DU NOUVEL AN</h2>
                </div>
                <Card className={classes.ChristmasCard} border="warning">
                    <div className="text-center">
                        <p>Nous sommes ravis de vous proposer des menus gourmands, végétarien ou végane, à emporter ainsi que deux sortes de bûches de Noël véganes.</p>
                        <br></br>
                        <p>Comment commander ?</p>
                        <p>Pour garder les choses simples nous acceptons uniquement les commandes passées en personne au Gopal ou sur notre boutique en ligne - Pas de SMS ou Messenger !!!</p>
                        <br></br>
                        <p>Commandez dès maintenant sur notre boutique : </p>
                        <p><a target='_blank' rel='noreferrer' href='https://gopal.sumupstore.com/'>https://gopal.sumupstore.com/</a></p>
                        <br></br>
                        <p><b>Horaires</b> pour venir récupérer vos <b>MENUS</b> et <b>BÛCHES de NOËL</b> au restaurant Gopal :</p>
                        <p><b>Samedi 23 Décembre de 18h à 20h</b></p>
                        <p>ou <b>Dimanche 24 Décembre de 11h à 15h.</b></p>
                        <br></br>
                        <p><b>Horaires</b> pour venir récupérer <b>VOS MENUS</b> du <b>NOUVEL AN</b> :</p>
                        <p><b>Samedi 30 Décembre de 18h à 20h</b></p>
                        <p>ou <b>Dimanche 31 Décembre de 11h à 15h.</b></p>
                        <br></br>
                        <p>(Lors de la commande, précisez quel jour vous passerez récupérer votre commande)</p>
                    </div>
                    <Image src={menu} alt="Menu de Noël" fluid />
                    <br></br>
                    <Image src={buches} alt="Bûches de Noël" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default Christmas;