import React from 'react'
import '../../css/general.css'

export default class ContactSheet extends React.Component {
    
    render(){
        return(
        <div className="contact-main">
            <div className='contact-welcome-message'>
                <h2> You are very welcome to</h2>
                <h1 className='navbar-active'>Say hello !</h1>
            </div>
            <div className='contact-links'>
                <a target='_blank' href="mailto:jonathan.atger@yahoo.fr"><i class="fa fa-envelope"></i>  jonathan.atger@yahoo.fr</a>
                <a target='_blank' href="https://www.linkedin.com/in/jonathan-atger-5020aa118/"><i className="fab fa-linkedin" ></i>  https://www.linkedin.com/in/jonathan-atger</a>
                <a target='_blank' href="https://github.com/jonathanatger"><i class="fab fa-github"></i>  https://github.com/jonathanatger</a>       
                <a target='_blank' href="https://twitter.com/jonathanatger"><i class="fab fa-twitter"></i>  https://twitter.com/jonathanatger</a>  

                </div>

        </div>
        )
    }
}

