import './App.css';
import Navbar from './component/common/Navbar'
import Home from "./component/pages/Home"
import ContactState from './component/context/contact/ContactState'
import AuthState from './component/context/auth/AuthState'
import About from "./component/pages/About"
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <AuthState>
    <ContactState>
          <Router>
      <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      </>

    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
