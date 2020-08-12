import React from 'react'
import techbackground from '../../dist/techbckgrnd.jpg'
import '../../css/general.css'


export default class HomePage extends React.Component {
    
    render(){
        return(
        <div className ='main-container'>
            <h2> Hi, I'm Jonathan Atger, an architect and civil engineer 
                who specialised in the technology behind the design of buildings.
            </h2>
            <h3 className ='french-font'> Bonjour, je suis Jonathan Atger, un architecte et ingénieur spécialisé dans 
                les technologies utilisées dans la conception de bâtiments.
            </h3> 
            <h3> I have been involved in integrating various technologies at architecture and engineering offices,
                amongst them BIM, virtual/augmented reality, visual programming... I'm not a software engineer but 
                knowledgable enough in programming (web development especially, machine learning) to design and realise custom tools.
            </h3>    
            <img src={techbackground} className='background-img'></img>
            <a href="https://fr.vecteezy.com/vecteur-libre/abstrait"
                className = 'credits'>
                Abstrait Vecteurs par Vecteezy
            </a>
        </div>

        )
    }
}

