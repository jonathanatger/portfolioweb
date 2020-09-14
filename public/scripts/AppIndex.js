import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch, NavLink} from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'
import BlogSummary from './pages/BlogSummary.js'
import ContactSheet from './pages/Contact.js'
import BlogPostContainer from './pages/BlogPostContainer.js'
import '../css/general.css'

class NavigationBar extends React.Component{


    render(){
        return(
            <div>
                <nav className = 'navbar-default'>
                    <a><Link to="/" className = 'navbar-main-title'>JONATHAN ATGER</Link></a>
                    <div className='navbar-links'>
                        <ul>
                            <li ><NavLink to="/" className='navbar-elt' activeClassName='navbar-active' exact={true}>ABOUT </NavLink></li>
                            <li ><NavLink to="/blog" className='navbar-elt' activeClassName='navbar-active' exact={true}>BLOG </NavLink></li>
                            <li ><NavLink to="/cv" className='navbar-elt' activeClassName='navbar-active' exact={true}>CV </NavLink></li>                
                            <li ><NavLink to="/contact" className='navbar-elt' activeClassName='navbar-active' exact={true}>CONTACT </NavLink></li>
                        </ul>  
                    </div>                               
                </nav>  
            </div>
        )
    }
  }

//Create a Router in React to handle changes
render(
    <div className = 'body-frame'>
        <BrowserRouter>
            <NavigationBar/>

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