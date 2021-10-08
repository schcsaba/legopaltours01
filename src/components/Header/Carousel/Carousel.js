import classes from './Carousel.module.css';
import menutable from '../../../assets/Header/menutable.jpg';
import facade from '../../../assets/Header/facade.jpg';
import speciale from '../../../assets/Header/speciale.jpg';
import cheesecake_au_caramel from '../../../assets/Header/cheesecake_au_caramel.jpg';
import tarte_au_chocolat from '../../../assets/Header/tarte_au_chocolat.jpg';
import plat from '../../../assets/Header/plat.jpg';
import empanada from '../../../assets/Header/empanada.jpg';
import plats from '../../../assets/Header/plats.jpg';
import Carousel from 'react-bootstrap/Carousel';

function carousel() {
    return (
        <Carousel className={classes.carousel}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={menutable}
                    alt="Menu table"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={speciale}
                    alt="Speciale"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cheesecake_au_caramel}
                    alt="Cheesecake au caramel"
                />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tarte_au_chocolat}
                    alt="Tarte au chocolat"
                />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={plat}
                    alt="Plat"
                />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={empanada}
                    alt="Empanada"
                />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={plats}
                    alt="Plats"
                />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={facade}
                    alt="Facade"
                />
                  {/* <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
  );
}

export default carousel;