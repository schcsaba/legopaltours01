import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ElfsightWidget } from 'react-elfsight-widget';
console.log(process.env.REACT_APP_ELFSIGHTWIDGET_MASONRY_GOOGLE_API_KEY);
function reviews() {
    return (
        <Row>
            <Col>
                <ElfsightWidget widgetID={process.env.REACT_APP_ELFSIGHTWIDGET_MASONRY_GOOGLE_API_KEY} />
                <ElfsightWidget widgetID={process.env.REACT_APP_ELFSIGHTWIDGET_MASONRY_FACEBOOK_API_KEY} />
            </Col>
        </Row>
    );
}

export default reviews;