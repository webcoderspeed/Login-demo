import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './screens/About/About';
import Contact from './screens/ContactUs/Contact';
import Navbar from './components/Navbar'
import Signup from './screens/Signup';
import Home from './screens/Home/Home';
import GlobalStyle from './globalStyles'
import SignIn from './screens/SignIn';

function App() {
  return (
   <Router>
    <GlobalStyle />
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />
       <Route path='/signup' component={Signup} />
       <Route path='/login' component={SignIn} />
     </Switch>
   </Router>
  );
}

export default App;
