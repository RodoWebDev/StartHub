import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import BusinessRegister from 'pages/BusinessRegister';
import PatentingRegister from 'pages/PatentingRegister';
import LicensingRegister from 'pages/LicensingRegister';
import StreamRegister from 'pages/StreamRegister';
import ResidencyRegister from 'pages/ResidencyRegister';
import FundingRegister from 'pages/FundingRegister';
import ScrollToTop from 'ScrollToTop';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/business-register" exact component={BusinessRegister}/>
        <Route path="/patenting-register" exact component={PatentingRegister}/>
        <Route path="/licensing-register" exact component={LicensingRegister} />
        <Route path="/stream-register" exact component={StreamRegister} />
        <Route path="/residency-register" exact component={ResidencyRegister} />
        <Route path="/funding-register" exact component={FundingRegister} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
