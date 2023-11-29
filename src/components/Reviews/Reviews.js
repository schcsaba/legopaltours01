import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ElfsightWidget } from 'react-elfsight-widget';

function reviews() {
    return (
        <Row>
            <Col>
                <ElfsightWidget widgetId={process.env.REACT_APP_ELFSIGHTWIDGET_MASONRY_GOOGLE_API_KEY} lazy modern />
            </Col>
        </Row>
    );
}

export default reviews;