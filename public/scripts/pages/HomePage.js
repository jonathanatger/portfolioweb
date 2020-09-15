import React from 'react'
import Photo from '../../content/Photositedetouree.png' 
import '../../css/general.css'


export default class HomePage extends React.Component {
    
    render(){
        return(
        <div className ='hp-main-container'>
            <div className='hp-img-ctn'>
                <img src={Photo} className='hp-img'></img>   
            </div>  
            <div className='hp-description'>
                <h2> Hi, I'm Jonathan Atger, an architect and civil engineer 
                    who specialised in the technology behind the design of buildings.
                </h2>
                <h4 className ='light-font'> Bonjour, je suis Jonathan Atger, un architecte et ingénieur spécialisé dans 
                    les technologies utilisées dans la conception de bâtiments.
                </h4> 
                <h4> I have been involved in integrating various technologies at architecture and engineering offices,
                    amongst them BIM, virtual/augmented reality, visual programming... I'm not a software engineer but 
                    knowledgable enough in programming (web development, C# and a hint of machine learning) to design and realise custom tools.
                </h4>
            </div>  
            
        </div>


        )
    }
}

