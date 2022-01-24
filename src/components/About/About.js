import { HashLink } from 'react-router-hash-link';
import classes from './About.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { LoremIpsum, fullname } from "react-lorem-ipsum";
// import { CustomPlaceholder } from 'react-placeholder-image';

function about() {
    return (
        <Row>
            <Col>
                <div className={[classes.About, "text-center"].join(" ")}>
                    <div>
                        <p>Créé à Tours en Novembre 2019, le Gopal vous propose de venir déguster une cuisine 100% végétarienne et végane dans un cadre calme et serein.</p>
                        <p>Dans une démarche écologique, nous nous efforçons d’utiliser au maximum des produits frais et de production locale... et tous nos plats et desserts sont faits maison !</p>
                        <video width="640" height="360" controls>
                            <source src="/video/le_gopal_clip.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* <br />
                    <h1>Membres de l'équipe</h1>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <CustomPlaceholder width={300} height={300} />
                                <div className="fullname">{fullname('female')}</div>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className={classes.AboutText}>
                            <LoremIpsum
                                p={1}
                                avgWordsPerSentence={8}
                                avgSentencesPerParagraph={8}
                            />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <CustomPlaceholder width={300} height={300} />
                                <div className="fullname">{fullname('male')}</div>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className={classes.AboutText}>
                            <LoremIpsum
                                p={1}
                                avgWordsPerSentence={8}
                                avgSentencesPerParagraph={8}
                            />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <CustomPlaceholder width={300} height={300} />
                                <div className="fullname">{fullname('female')}</div>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className={classes.AboutText}>
                            <LoremIpsum
                                p={1}
                                avgWordsPerSentence={8}
                                avgSentencesPerParagraph={8}
                            />
                            </div>
                        </Col>
                    </Row> */}
                    <HashLink to="/commentaires#top">Ce que disent nos clients »</HashLink>
                    <p></p>
                    <br />
                </div>
            </Col>
        </Row>
    );
  }
  
export default about;