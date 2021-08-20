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
                <h3> Bonjour, je suis Jonathan Atger, un architecte et ingénieur <b>spécialisé dans 
                    les technologies utilisées dans la conception de bâtiments</b>. 
                </h3>
                <h4>
                Afin de mettre à profit mon expérience, <b>j'enseigne (ESA/ESTP) et interviens auprès d'acteurs 
                qui souhaitent s'engager davantage sur les outils numériques</b> ; en particulier le BIM, la gestion de données et les outils de conception collaboratifs et paramétriques. 
                Il m'est possible de :
                </h4>
                <ul>                    
                    <h4>
                        - Participer à définir la <b>stratégie de mise en place d'outils numériques</b> dans votre structure
                    </h4>
                    <h4>
                        - Réaliser des missions de <b>BIM Management</b> et d'intervenir comme prestataire
                    </h4>                
                    <h4>
                        - Dispenser des <b>formations</b> aux outils souhaités
                    </h4>
                </ul>
           
                <h5> J'ai été impliqué dans l'adoption et la mise en oeuvre de technologies diverses au sein de cabinets d'architecture et bureaux d'études d'ingéniérie.
                    Parmi ces technologies, on compte le BIM mais aussi la réalité augmentée/virtuelle, la programmation visuelle et d'outils simples, les applications possibles du machine learning...
                    Ma double formation et des compétences de programmation me permettent d'avoir une vision large sur les possibilités qu'offrent le numérique dans nos pratiques.
                </h5>
            </div>  
            
        </div>


        )
    }
}

