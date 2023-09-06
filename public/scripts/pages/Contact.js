import React from 'react'
import '../../css/general.css'

class ContactSheet extends React.Component {
    
    render(){
        return(
        <div className="contact-main">
            <div className='contact-welcome-message'>
                <h2> Sentez-vous libre de me contacter ou</h2>
                <h1 className='navbar-active'>simplement envoyer un mot !</h1>
            </div>
            <div className='contact-links'>
                <a target='_blank' href="mailto:contact@jonathanatger.com"><i className="fa fa-envelope"></i>  contact@jonathanatger.com</a>
                <a target='_blank'><i className="fa fa-phone"></i>  06.28.32.58.19</a>
                <a target='_blank' href="https://www.linkedin.com/in/jonathan-atger-5020aa118/"><i className="fab fa-linkedin" ></i>  https://www.linkedin.com/in/jonathan-atger</a>
                    <a target='_blank' href="https://github.com/jonathanatger"><i className="fab fa-github"></i>  https://github.com/jonathanatger</a>       
                    <a target='_blank' href="https://twitter.com/jonathanatger"><i className="fab fa-twitter"></i>  https://twitter.com/jonathanatger</a>  

                </div>

        </div>
        )
    }
}

export default ContactSheet;
