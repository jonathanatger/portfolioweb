import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


render(
    <div>
        Test render AppIndex 
    </div>,
    document.getElementById('#root')
  );  


  document.getElementById('#seconddiv').innerText = 'Test the seconddiv';