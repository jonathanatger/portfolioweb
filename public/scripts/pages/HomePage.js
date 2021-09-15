import React from 'react'
import Photo from '../../content/Photositedetouree.png' 
import '../../css/general.css'
import toolsimage from '../../content/tools-color.png' 
import managerimage from '../../content/manager-vcolor.png' 
import strategyimage from '../../content/strategy-color.png' 
import teachimage from '../../content/teach-color.png' 


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
                <h3>Travaillant en indépendant dans la région parisienne, <b>j'interviens auprès d'acteurs  qui souhaitent s'engager davantage sur les outils numériques</b> ; en particulier le BIM, la gestion de données projet et les outils de conception collaboratifs et paramétriques. Pour votre structure, il m'est possible de réaliser les prestations suivantes :    
                </h3>
                <div className='prestation-row hp-prestations'> 
                        <div className='hp-prestation-column'>
                            <img src={strategyimage} className='prestation-img' id='strategyimage'></img>                            
                            <h3 className='hp-prestation-title'>Stratégie de mise en place d'outils numériques</h3>
                            
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='hp-prestation-column'>
                            <img src={managerimage} className='prestation-img' id='managerimage'></img>
                            <h3 className='hp-prestation-title'>BIM Management</h3>
                                                                                   
                        </div>

                        <div className='prestation-divider2'></div>

                        <div className='hp-prestation-column'>
                            <img src={teachimage} className='prestation-img' id='teachimage'></img>
                            <h3 className='hp-prestation-title'>Formations</h3>                                                     
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='hp-prestation-column'>
                            <img src={toolsimage} className='prestation-img' id='toolsimage'></img>
                            <h3 className='hp-prestation-title'>Développement d'outils personnalisés</h3>
                        </div>
                    </div>
               

                <h3 className='hp-link'><a href='/prestations'><i class="far fa-arrow-alt-circle-right"></i><u> Passer à la page des prestations </u></a></h3>             

                {//<i class="far fa-arrow-alt-circle-right"></i>
                }  
                
                <div className='hp-cv'>
                    <h3><b>Pourquoi me contacter ?</b></h3>

                    <h3> Architecte et ingénieur, j'ai été impliqué dans l'adoption et la mise en oeuvre de technologies diverses au sein de cabinets d'architecture et de bureaux d'études d'ingéniérie. J'enseigne la conception assistée par ordinateur (ESA/ESTP). Parmi les technologies sur lesquelles j'ai travaillé, on compte le BIM mais aussi la réalité augmentée/virtuelle, la programmation visuelle et d'outils simples, les applications possibles du machine learning... Ma double formation et des compétences de programmation me permettent d'avoir une vision large sur les possibilités qu'offrent le numérique dans nos pratiques. 
                    </h3>
                    <b/>

                    <h3 className='hp-link'><a href='/cv'><i class="far fa-arrow-alt-circle-right"></i><u> Passer au détail de mon parcours </u></a></h3>  
                </div>

                <div className='hp-contact'>
                    <h3><b>Mes coordonnées</b></h3>

                    <div className='hp-contact-sub'>
                    <a target='_blank' href="mailto:contact@jonathanatger.com"> <h3><i class="far fa-arrow-alt-circle-right"></i> <u>Cliquez-ici pour un email</u> </h3> </a>         

                    <h3><a href='/contact'><i class="far fa-arrow-alt-circle-right"></i><u> Mes autres coordonnées </u></a></h3>  
                    </div>
                </div>

            </div>  
            <div className='hp-bottom'>

            </div>
        </div>


        )
    }
}

