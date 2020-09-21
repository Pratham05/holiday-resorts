import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SingleRoom from './pages/SingleRoom/SingleRoom';

/** 
  * @desc The root element for the applications
  * Renders the routing components and the navbar for the entire application
*/
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
