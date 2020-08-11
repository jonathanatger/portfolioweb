
import React from 'react'; 
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'

export default function App() {
    return (
     <Switch>
         <Route path ='/'>
            <HomePage />    
         </Route>
         <Route path ='cv'>
            <Cv />    
         </Route>
     </Switch>
    )
};
 

