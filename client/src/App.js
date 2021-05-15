import './App.css';
import Navbar from './component/common/Navbar'
import Home from "./component/pages/Home"
import ContactState from './component/context/contact/ContactState'
import AlertState from './component/context/alert/AlertState'
import AuthState from './component/context/auth/AuthState'
import About from "./component/pages/About"
import Register from './component/auth/Register'
import Alert from "./component/common/Alert"
import PrivateRoute from './component/routing/PrivateRoute'
import Login from './component/auth/Login'
import setAuthToken from "./util/setAuthToken"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


if(localStorage.token){
setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
    <ContactState>
    <AlertState>
          <Router>
      <Alert/>
      <Navbar/>
      <div className="container">
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
     
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
