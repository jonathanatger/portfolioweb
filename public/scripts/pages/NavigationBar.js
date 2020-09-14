import React from 'react'
import '../../css/general.css'
import {Link, NavLink} from 'react-router-dom';



export default class NavigationBar extends React.Component{
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
