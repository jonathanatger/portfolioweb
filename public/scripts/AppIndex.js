import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'
import BlogSummary from './pages/BlogSummary.js'
import ContactSheet from './pages/Contact.js'
import BlogPostContainer from './pages/BlogPostContainer.js'
import Prestations from './pages/Prestations'
import NavigationBar from './pages/NavigationBar.js'
import '../css/general.css'


//Render App : higher order component is the browser router
//Create a Router in React to handle changes
render(
    <div className = 'body-frame'>
        <BrowserRouter>
            <NavigationBar/>

            <div className='body-content'>
                <Switch> 
                    <Route exact path ='/blog'>
                        <BlogSummary />    
                    </Route>

                    <Route path ='/blog/:title' component ={BlogPostContainer}/>    

                    <Route exact path = '/prestations'>
                        <Prestations />
                    </Route>    
                                       
                    <Route path ='/cv'>
                        <Cv />    
                    </Route>

                    <Route path ='/contact'>
                        <ContactSheet />    
                    </Route>

                    <Route path ='/'>
                        <HomePage />    
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
    ,
    document.getElementById('#root')
  );  



  

