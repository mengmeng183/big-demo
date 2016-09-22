import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App.js';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Work from './Work/Work';
import About from './About/About';
import Item from './Item/Item';


class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
          <Route path='/Item/:url' component={Item} />

        </Route>
      </Router>
    )
  }
}

export default Routes;
