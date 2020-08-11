import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'


//Create a Router in React to handle changes
render(
   
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">About </Link></li>
                <li><Link to="/cv">Cv </Link></li>
            </ul> 
        </nav>  
        <Switch>
            
            <Route path ='/cv'>
                <Cv />    
            </Route>
            <Route path ='/'>
                <HomePage />    
            </Route>
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('#root')
  );  


//<div>
//  <p><Link to="/">About </Link></p>
//</div> 