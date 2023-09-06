import React from 'react'
import '../../css/general.css' 
import toolsimage from '../../content/tools-color.png' 
import managerimage from '../../content/manager-vcolor.png' 
import strategyimage from '../../content/strategy-color.png' 
import teachimage from '../../content/teach-color.png' 




class Prestations extends React.Component {
    render(){
        return(
            <div>
                <h4 className='prestation-header'>Les prestations proposées sont regroupées dans quatre ensembles : <a href='#strategyimage'>stratégie de mise en place des outils numériques de conception,</a> <a href="#managerimage">BIM management,</a> <a href="#teachimage">formations aux outils numériques,</a> et <a href="#toolsimage">développement d'outils numériques personnalisés</a>.</h4>
                <div className='prestation-row'> 
                        <div className='prestation-column'>
                            <img src={strategyimage} className='prestation-img' id='strategyimage'></img>                            
                            <h3 className='prestation-title'>Stratégie de mise en place d'outils numériques</h3>
                            <h4>Etat des lieux de l'adoption des outils numériques de conception liés au BIM et aux plateformes de gestion des données de projet dans votre structure</h4>
                            <h4>Aide au recrutement et au développement de fiches de poste </h4>
                            <h4>Conseil au choix de solutions numériques </h4>
                            <h4>Accompagnement sur projet pilote</h4>
                            <h4>Support technique</h4>
                            <h4>Développement des standards BIM de votre structure</h4>
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={managerimage} className='prestation-img' id='managerimage'></img>
                            <h3 className='prestation-title'>BIM Management</h3>
                            <h4>Intervention en tant que BIM manager sur projet, ou en interne</h4>
                            <h4>Rôle de BIM manager : développement d'objectifs BIM projet, audit d'expérience BIM des acteurs, tenue des réunions BIM, rédaction des protocoles, contrôle de modèles </h4>
                            <h4>Rôle de coordinateur BIM interne : mise en conformité des modèles BIM livrés sur vos projets, créations d'objets dans les modèles selon besoin des projets, support technique</h4>                                                        
                        </div>

                        <div className='prestation-divider2'></div>

                        <div className='prestation-column'>
                            <img src={teachimage} className='prestation-img' id='teachimage'></img>
                            <h3 className='prestation-title'>Formations</h3>
                            <h4>Formations Revit et Dynamo</h4>
                            <h4>Programmes personnalisés, profitant de mon expérience de l'enseignement et de formations réalisées auprès d'architectes et d'ingénieurs</h4>
                            <h4>Sensibilisation aux enjeux du BIM et présentation de technologies émergentes dans la conception</h4>                            
                        </div>

                        <div className='prestation-divider'></div>

                        <div className='prestation-column'>
                            <img src={toolsimage} className='prestation-img' id='toolsimage'></img>
                            <h3 className='prestation-title'>Développement d'outils personnalisés</h3>
                            <h4>Créations de sites Web pour le compte de votre structure</h4>
                            <h4>Développement de plugins pour Revit dédiés à la productivité de vos équipes ou de fonctions personnalisées pour des projets spécifiques </h4>
                            <h4>Développement de fonctions ou de blocs Dynamo </h4>                            
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Prestations;