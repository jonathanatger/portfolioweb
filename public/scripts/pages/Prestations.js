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
                            <h3>Développement des standards BIM de votre structure</h3>
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={managerimage} className='prestation-img' id='managerimage'></img>
                            <h2 className='prestation-title'>BIM Management</h2>
                            <h3>Intervention en tant que BIM manager sur projet, ou en interne</h3>
                            <h3>Rôle de BIM manager : développement d'objectifs BIM projet, audit d'expérience BIM des acteurs, tenue des réunions BIM, rédaction des protocoles, contrôle de modèles </h3>
                            <h3>Rôle de coordinateur BIM interne : mise en conformité des modèles BIM livrés sur vos projets, créations d'objets dans les modèles selon besoin des projets, support technique</h3>                                                        
                        </div>

                        <div className='prestation-divider2'></div>

                        <div className='prestation-column'>
                            <img src={teachimage} className='prestation-img' id='teachimage'></img>
                            <h2 className='prestation-title'>Formation</h2>
                            <h3>Formations Revit et Dynamo</h3>
                            <h3>Programmes personnalisés, profitant de mon expérience de l'enseignement et de formations réalisées auprès d'architectes et d'ingénieurs</h3>
                            <h3>Sensibilisation aux enjeux du BIM et présentation de technologies émergentes dans la conception</h3>                            
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={toolsimage} className='prestation-img' id='toolsimage'></img>
                            <h2 className='prestation-title'>Développement d'outils personnalisés</h2>
                            <h3>Créations de sites Web pour le compte de votre structure</h3>
                            <h3>Développement de plugins pour Revit dédiés à la productivité de vos équipes ou de fonctions personnalisées pour des projets spécifiques </h3>
                            <h3>Développement de fonctions ou de blocs Dynamo </h3>                            
                        </div>
                    </div>
                
            </div>
        )
    }
}