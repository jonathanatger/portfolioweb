import React from 'react';
import '../../css/general.css';
import {Link, NavLink} from 'react-router-dom';



class NavigationBar extends React.Component{
    render(){
        return(
            <div>
                <nav className = 'navbar-default'>
                    
                     <Link to="" className='navbar-main-title'>JONATHAN ATGER</Link>
                    
                    <div className='navbar-links'>
                        <ul>
                            <li >
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? "navbar-active" : "navbar-elt")} 
                                    end
                                >
                                    À PROPOS
                                </NavLink>
                            </li>

                            <li >
                                <NavLink
                                    to="prestations"
                                    className={({ isActive }) => (isActive ? "navbar-active" : "navbar-elt")} 
                                    >
                                    PRESTATIONS 
                                </NavLink>
                            </li>

                            <li >
                                <NavLink
                                    to="/cv"
                                    className={({ isActive }) => (isActive ? "navbar-active" : "navbar-elt")} 
                                    exact="true"
                                >
                                    C.V.
                                </NavLink>
                            </li>   

                            <li ><NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? "navbar-active" : "navbar-elt")} 
                                exact="true">
                                BLOG
                                </NavLink>
                            </li>  
                            
                            <li ><NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? "navbar-active" : "navbar-elt")} 
                                exact="true">
                                CONTACT
                                </NavLink>
                            </li>
                        </ul>  
                    </div>                               
                </nav>  
            </div>
        )
    }
  }

export default NavigationBar;