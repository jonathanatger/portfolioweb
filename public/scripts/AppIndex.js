import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Link, 
    Routes
} from 'react-router-dom';

import HomePage from './pages/HomePage.js'
import Cv from './pages/Cv.js'
import BlogSummary from './pages/BlogSummary.js'
import ContactSheet from './pages/Contact.js'
import BlogPostContainer from './pages/BlogPostContainer.js'
import Prestations from './pages/Prestations.js'
import NavigationBar from './pages/NavigationBar.js'
import '../css/general.css'


//Render App : higher order component is the browser router
//Create a Router in React to handle changes

const domNode = document.getElementById('#root');

const root = createRoot(domNode);

root.render(
    <div className = 'body-frame'>
        <BrowserRouter>
            <NavigationBar/>

            <div className='body-content'>
                <Routes>
                    <Route exact path='/blog' element={<BlogSummary/>} />
                        
                    <Route path='/blog/:title' element={<BlogPostContainer />} />
                    

                    <Route path='/prestations' element={<Prestations />} />
                        

                    <Route path='/cv' element={<Cv />} />
                        

                    <Route path='/contact'element={<ContactSheet />} />
                          

                    <Route path ='/' element={<HomePage/>} />
                        
                </Routes>
            </div>
        </BrowserRouter>
    </div>    
    
  );  



  

