import classes from './Ascension.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ascension from '../../assets/Ascension/ascension.jpeg';

function Ascension() {
    return (
        <Row id="Ascension">
            <Col>
                <Card className={classes.AscensionCard} border="warning">
                    <Image src={ascension} alt="Le Gopal sera ouvert ce 26 mai jeudi de l'ascension" fluid />
                </Card>
            </Col>
        </Row>
    );
}

export default Ascension;