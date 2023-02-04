import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import classes from './Contact.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { LoremIpsum } from "react-lorem-ipsum";
import messenger from "../../assets/Footer/messenger.png";

const containerStyle = {
    width: '100%',
    height: '60vh'
};

const center = {
    lat: 47.409366700776694,
    lng: 0.6799576695505988
};

const position = {
    lat: 47.409366700776694,
    lng: 0.6799576695505988
};
  
// const onLoad = marker => {
//     console.log('marker: ', marker)
// }

function Contact() {
    
    return (
        <Row className={classes.FlexRow}>
            <Col>
                <div>
                    <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                    >
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={17}
                        >
                            <Marker
                            //   onLoad={onLoad}
                              position={position}
                              animation={1}
                            />
                        </GoogleMap>
                    </LoadScript>
                    <br />
                </div>
            </Col>
            <Col>
                <div>
                    <h5>Heures d'ouverture :</h5>
                    <p>
                        Mardi : 12h à 14h<br />
                        Mercredi : 12h à 14h et 19h à 21h30<br />
                        Jeudi : 12h à 14h<br />
                        Vendredi : 12h à 14h et 19h à 21h30<br />
                        Samedi : 12h à 14h30
                    </p>
                    <h5>Coordonnées :</h5>
                    <p>8 Avenue du Mans, 37100 Tours, France<br />Tél : <a href="tel:+33783654565">07 83 65 45 65</a><br />Email : <a href="mailto:contact@legopal.fr">contact@legopal.fr</a><br />Messenger :{" "}
                    <a
                      href="https://m.me/Legopaltours"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={messenger}
                        className={classes.Messenger}
                        alt="messenger"
                      />{" "}
                      LeGopaltours
                    </a>
                    </p>
                    <p>Vous pouvez effectuer un zoom avant et arrière sur la carte à l'aide des boutons situés dans le coin inférieur droit ou avec deux doigts sur les appareils à écran tactile.</p>
                    <h5>Approche par les transports publics :</h5>
                    <p>Le restaurant est à 180m de l'arrêt de tram Tranchée - Ligne A.</p>
                    <p>Autres lignes urbaines avec un arrêt à proximité :<br />10, 14, 17, 18, C2, 51, 52, 73</p>
                    <p>Plus d'informations sur <a href="https://www.filbleu.fr/" target="_blank" rel="noreferrer">Fil Bleu</a>.</p>
                    <p>Vous trouverez des informations sur le parking sur <a href="https://www.tours.fr/services-infos-pratiques/386-parkings.htm" target="_blank" rel="noreferrer">le site de la Ville de Tours</a>.</p>
                    <p>Pour toute question ou réservation appelez nous au :<br /><strong>07 83 65 45 65</strong></p>
                </div>
            </Col>
        </Row>
    );
  }
  
export default Contact;