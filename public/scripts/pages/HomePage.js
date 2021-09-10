import React from 'react'
import Photo from '../../content/Photositedetouree.png' 
import '../../css/'


export default class HomePage extends React.Component {
    
    render(){
        return(
        <div className ='hp-main-container'>
            <div className='hp-img-ctn'>
                <div className='hp-img-ctn-sub1'>
                 <img src={Photo} className='hp-img'></img>  
                </div>
                <div className='hp-img-ctn-sub2'>
                    <h1 className='hp-img-ctn-txt'>VOUS ACCOMPAGNER DANS L'ADOPTION DE TECHNOLOGIES AUTOUR DE LA CONCEPTION DES BÂTIMENTS</h1>
                </div>
                 
            </div>  
            <div className='hp-description'>
            <h3><b>Ce que je peux vous apporter</b></h3>
                <h3>Travaillant en indépendant dans la région parisienne, <b>j'interviens auprès d'acteurs  qui souhaitent s'engager davantage sur les outils numériques</b> ; en particulier le BIM, la gestion de données projet et les outils de conception collaboratifs et paramétriques. Pour votre structure, il m'est possible de :    
                </h3>
                
                <ul>                    
                    <h3>
                        - Participer à définir la <b>stratégie de mise en place d'outils numériques</b> au sein de votre organisation
                    </h3>
                    <h3>
                        - Réaliser des missions de <b>BIM Management</b> et d'intervenir comme prestataire
                    </h3>                
                    <h3>
                        - Dispenser des <b>formations</b> aux outils souhaités
                    </h3>
                    <h3>
                        - <b>Développer des outils personnalisés</b> : site internet, plugins Revit et Dynamo
                    </h3>
                </ul>

                <h3 className='hp-link'><a href='/prestations'><u>Passer à la page des prestations </u></a></h3>             

                {//<i class="far fa-arrow-alt-circle-right"></i>
                }  
                
                <h3><b>Pourquoi me contacter ?</b></h3>

                <h3> Architecte et ingénieur, j'ai été impliqué dans l'adoption et la mise en oeuvre de technologies diverses au sein de cabinets d'architecture et de bureaux d'études d'ingéniérie. Parmi ces technologies, on compte le BIM mais aussi la réalité augmentée/virtuelle, la programmation visuelle et d'outils simples, les applications possibles du machine learning... Ma double formation et des compétences de programmation me permettent d'avoir une vision large sur les possibilités qu'offrent le numérique dans nos pratiques. J'enseigne la conception assistée par ordinateur (ESA/ESTP).
                </h3>
            </div>  
            
        </div>


        )
    }
}

