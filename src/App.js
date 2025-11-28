import Footer from './components/Footer';
import Header from './components/Header';  
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Route path='/' component={Homescreen} exact />
      <Footer/>
    </Router>
  );
}

export default App;
