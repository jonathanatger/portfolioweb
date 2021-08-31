import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/general.css' 
import toolsimage from '../../content/tools.png' 
import managerimage from '../../content/manager.png' 
import strategyimage from '../../content/strategy.png' 
import teachimage from '../../content/teach.png' 




export default class Prestations extends React.Component {
    render(){
        return(
            <div>
                <h2 className='prestation-header'>Les prestations proposées sont regroupées dans quatre ensembles : <a href='#strategyimage'>stratégie de mise en place des outils numériques de conception,</a> <a href="#managerimage">BIM management,</a> <a href="#teachimage">formations aux outils numériques,</a> et <a href="#toolsimage">développement d'outils numériques personnalisés</a>.</h2>
                <div className='prestation-row'> 
                        <div className='prestation-column'>
                            <img src={strategyimage} className='prestation-img' id='strategyimage'></img>
                            <h2 className='prestation-title'>Stratégie de mise en place d'outils numériques</h2>
                            <h3>Etat des lieux de l'adoption des outils numériques de conception liés au BIM et aux plateformes de gestion des données de projet dans votre structure</h3>
                            <h3>Aide au recrutement et au développement de fiches de poste </h3>
                            <h3>Conseil au choix de solutions numériques </h3>
                            <h3>Accompagnement sur projet pilote</h3>
                            <h3>Support technique</h3>
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={managerimage} className='prestation-img' id='managerimage'></img>
                            <h2 className='prestation-title'>BIM Management</h2>
                        </div>

                        <div className='prestation-divider2'></div>

                        <div className='prestation-column'>
                            <img src={teachimage} className='prestation-img' id='teachimage'></img>
                            <h2 className='prestation-title'>Formation</h2>
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={toolsimage} className='prestation-img' id='toolsimage'></img>
                            <h2 className='prestation-title'>Développement d'outils personnalisés</h2>
                        </div>
                    </div>
                
            </div>
        )
    }
}