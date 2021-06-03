import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './screens/About/About';
import Contact from './screens/ContactUs/Contact';
import Navbar from './components/Navbar'
import Signup from './screens/Signup';
import Home from './screens/Home/Home';
import GlobalStyle from './globalStyles'

function App() {
  return (
   <Router>
    <GlobalStyle />
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />
       <Route path='/login' component={Signup} />
     </Switch>
   </Router>
  );
}

export default App;
