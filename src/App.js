import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import ShortMission from './components/ShortMission/ShortMission';
import Christmas from './components/Christmas/Christmas';
// import Ascension from './components/Ascension/Ascension';
// import Vacation from './components/Vacation/Vacation';
import ShortContact from './components/ShortContact/ShortContact';
import Menu from './components/Menu/Menu';
// import ShortHowToOrder from './components/ShortHowToOrder/ShortHowToOrder';
// import HowToOrder from './components/HowToOrder/HowToOrder';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Terms from './components/Terms/Terms';
// import Privacy from './components/Privacy/Privacy';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';
// import ShortReviewsFB from './components/ShortReviewsFB/ShortReviewsFB';
import shortReviewsGoogle from './components/ShortReviewsGoogle/ShortReviewsGoogle';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Container>
          <Route path="/" component={Header} />
          <Route path="/" exact component={ShortMission} />
          {/* <Route path="/" exact component={Vacation} /> */}
          <Route path="/" exact component={Christmas} />
          {/* <Route path="/" exact component={Ascension} /> */}
          <Route path="/" exact component={ShortContact} />
          <Route path="/" exact component={Menu} />
          {/* <Route path="/" exact component={ShortReviewsFB} /> */}
          <Route path="/" exact component={shortReviewsGoogle} />
          {/* <Route path="/" exact component={ShortHowToOrder} /> */}
          {/* <Route path="/comment-commander" exact component={HowToOrder} /> */}
          <Route path="/a-propos" exact component={About} />
          <Route path="/commentaires" exact component={Reviews} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/mentionslegales" exact component={Terms} />
          {/* <Route path="/confidentialite" exact component={Privacy} /> */}
          <Route path="/" component={Footer} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
