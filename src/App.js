import { BrowserRouter as Router } from 'react-router-dom'; 
import LoginContextContainer, { LoginContext } from 'contexts/LoginContextContainer';
import { PrivateRoutes, PublicRoutes } from 'utils/routes';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  return (
    <Router>
      <LoginContextContainer>
        <LoginContext.Consumer>
          {loginContext => loginContext.user
            ? <PrivateRoutes />
            : <PublicRoutes />
          }
        </LoginContext.Consumer>
      </LoginContextContainer>
    </Router>
  );
}

export default App;
