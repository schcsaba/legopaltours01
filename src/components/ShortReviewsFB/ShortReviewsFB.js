import classes from './ShortReviewsFB.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ElfsightWidget } from 'react-elfsight-widget';

function shortReviewsFB() {
    const restaurantGuru = [classes.RestaurantguruBackground, classes.sq_img].join(' ');
    return (
        <Row>
            <Col xs={'10'}>
                <ElfsightWidget widgetID={process.env.REACT_APP_ELFSIGHTWIDGET_SLIDER_FACEBOOK_API_KEY} />
            </Col>
            <Col>
                <div className={classes.rest_sq5}>
                    <a href="https://fr.restaurantguru.com/Gopal-Tours" className={classes.sq_top} target="_blank" rel="noreferrer">Gopal</a>
                    <div className={restaurantGuru}>&nbsp;</div>
                    <span>RECOMMANDÉ SUR</span>
                    <a href="https://restaurantguru.com" className={classes.sq_bot} target="_blank" rel="noreferrer">Restaurant Guru 2021</a>
                </div>
            </Col>
        </Row>
    );
}

export default shortReviewsFB;