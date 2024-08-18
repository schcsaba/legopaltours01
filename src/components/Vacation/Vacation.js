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
                    <p>Le Gopal est fermé pour les grandes vacances. Réouverture le mardi 3 septembre.</p>
                    <p>Bonnes vacances à vous et à très bientôt ! 😊🙏 💙</p>
                </Card>
            </Col>
        </Row>
    );
}

export default Vacation;