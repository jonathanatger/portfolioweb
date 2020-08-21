import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'
import BlogSummary from './pages/BlogSummary.js'
import ContactSheet from './pages/Contact.js'
import BlogPostContainer from './pages/BlogPostContainer.js'
import '../css/general.css'

//Create a Router in React to handle changes
render(
    <div className = 'body-frame'>
        <BrowserRouter>
            <nav className = 'navbar-default'>
                <a><Link to="/" className = 'navbar-main-title'>JONATHAN ATGER</Link></a>
                <div className='navbar-links'>
                    <ul>
                        <li><Link to="/">ABOUT </Link></li>
                        <li><Link to="/blog">BLOG </Link></li>
                        <li><Link to="/cv">CV </Link></li>                
                        <li><Link to="/contact">CONTACT </Link></li>
                    </ul>  
                </div>
                               
            </nav>  
            <div className='body-content'>
                <Switch> 
                    <Route path ='/blog/:title'>
                        <BlogPostContainer blogtitle='title' />    
                    </Route>
                    <Route path ='/blog'>
                        <BlogSummary />    
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

 


//<div>
//  <p><Link to="/">About </Link></p>
//</div> 