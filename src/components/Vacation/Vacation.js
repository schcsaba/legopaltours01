import classes from './Vacation.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Vacation() {
    return (
        <Row id="vacation">
            <Col>
                <Card className={classes.VacationCard} border="warning">
                    <p>Bonjour à toutes et à tous,</p>
                    <p>Le Gopal sera fermé du 1er Août au 7 Septembre.</p>
                    <p>Nous vous souhaitons de très belles vacances ! 😊🙏 💙</p>
                </Card>
            </Col>
        </Row>
    );
}

export default Vacation;