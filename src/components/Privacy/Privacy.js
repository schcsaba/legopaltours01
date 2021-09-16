import classes from './Privacy.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoremIpsum } from "react-lorem-ipsum";

function privacy() {
    return (
        <Row>
            <Col>
                <div className={classes.Privacy}>
                <h1 className={classes.PrivacyTitle}>Politique de Confidentialité</h1>
                    <br />
                    <LoremIpsum
                        p={8}
                        avgWordsPerSentence={8}
                        avgSentencesPerParagraph={8}
                    />
                    <br />
                </div>
            </Col>
        </Row>
    );
  }
  
export default privacy;