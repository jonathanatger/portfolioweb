import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'
import BlogSummary from './pages/Blog.js'
import ContactSheet from './pages/Contact.js'
import BlogPostContainer from './pages/BlogPostContainer.js'
import '../css/general.css'


//Create a Router in React to handle changes
render(
    <div className = 'body-frame'>
        <BrowserRouter>
            <nav className = 'navbar-default'>
                <a><Link to="/" className = 'main-title'>JONATHAN ATGER</Link></a>
                <ul>
                    <li><Link to="/">ABOUT </Link></li>
                    <li><Link to="/blog">BLOG </Link></li>
                    <li><Link to="/cv">CV </Link></li>                
                    <li><Link to="/contact">CONTACT </Link></li>
                </ul> 
                {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fas fa-bars"></i>
                </a> */}
            </nav>  
            <Switch> 
                <Route path ='/blog/:title'>
                    <BlogPostContainer/>    
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
        </BrowserRouter>
    </div>
    ,
    document.getElementById('#root')
  );  


//<div>
//  <p><Link to="/">About </Link></p>
//</div> 