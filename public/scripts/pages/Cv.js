import React from 'react'
import '../../css/general.css'
import {Link} from 'react-router-dom'

export default class Cv extends React.Component {
    
    render(){
        return(
        <div className = 'cv-global-container'>    
            {/* Work experiences */}
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                    <h3>EXPERIENCE PROFESSIONNELLE</h3>
                    
                </div>
                <div className='cv-second-column'>                    
                    <WorkExperience 
                     jobtitle = 'BIM Manager / Spécialiste technologies de la conception'
                     company = 'Ingérop'
                     dates = 'july 2018 - juillet 2021'
                     location = 'Paris'
                     description = "Implémentation BIM sur tout types de projets, en conception et réalisation. Conseil et assistance technique auprès de clients et partenaires. Définition des procédures en interne pour le BIM et les nouveaux outils numériques affiliés. Programmation d'outils logiciels dédiés."
                     description2 = "Exemple de missions :"
                     projet = "Pilote BIM en exécution sur le nouvel hôpital de Guadeloupe"
                     projet2 = "Assistance technique pour la réalisation de modèles numériques du Louvre"
                     projet3 = "BIM Management ligne 18 grand Paris"
                     projet4 = "Mise en oeuvre d'un outil de visualisation holographique"
                     projet5 = "Programmation d'outils automatisés d'intégration continue des données architecte dans les modèles BIM de l'ingéniérie"
                        />
                        
                    <WorkExperience 
                     jobtitle = 'Enseignant Conception assistée par ordinateur'
                     company = 'Ecole spéciale architecture - ESTP'
                     dates = "février 2021 - Aujourd'hui"
                     location = 'Paris/Troyes'
                     description = "Enseignement aux étudiants du double-cursus architecte-ingénieur conjoint ESA/ESTP. Participation à la définition du cadre de cet enseignement afin de le rapprocher le plus possible des besoins futurs des étudiants, tout en ouvrant des perspectives sur l'évolution rapide des techniques de CAO et les conséquences pour le futur de la conception."
                        />

                    <WorkExperience 
                     jobtitle = 'BIM Manager'
                     company = 'Sightline'
                     dates = 'septembre 2017 - juillet 2018'
                     location = 'Paris'
                     description = "BIM Management et programmation visuelle. Contrôle de modèles numériques de l'existant."
                     description2 = "Exemple de missions :"
                     projet = "BIM Management projet tertiaire Saint-Ouen Bauer"
                     projet2 = "Formation d'introduction à Dynamo pour architecte"
                        />

                    <WorkExperience 
                     jobtitle = "Maîtrise d'oeuvre d'exécution"
                     company = 'Builders and Partners'
                     dates = 'février 2017 - avril 2017'
                     location = 'Paris'
                     description = "Mission courte lors des études. Assistance au suivi des corps d'état techniques sur un projet d'IGH à Porte de Vanves."
                        />

                    <WorkExperience 
                     jobtitle = 'Architecte'
                     company = 'Brunet Saunier Architecture'
                     dates = 'juin 2015 - février 2016'
                     location = 'Paris'
                     description = "Travail au sein de l'équipe dédiée à l'hôpital du Limmattal à Zürich - projet récipient du prix du BIM d'Or pour la meilleure mise en oeuvre du BIM sur un bâtiment à l'international."
                        />    
                </div>
                
            </div>
            
            <Divider />

            {/* Skills */}
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                        <h3>COMPÉTENCES</h3>
                        
                </div>
                <div className='cv-second-column'>  
                    <SkillSet 
                    skillsetname='Logiciels' 
                    description="Expert dans les logiciels suivants : Revit, Dynamo, BIM 360 et les autres applications Forge, Tekla BIMsight, Twinmotion, Enscape." 
                    description2="Utilisation professionnelle de Rhino, Grasshopper, Solibri MC, ArchiCAD, AutoCAD."                    
                    description3="Compétences additionnelles sur Unity, Blender, suite Adobe Creative."                    
                    /> 

                    <SkillSet 
                    skillsetname='Programmation'
                    description="D'abord formé en autodidacte, j'ai complété une formation de 1500 heures en développement Web à distance. Ces compétences ont été mises en oeuvre régulièrement dans mes missions professionnelles, mais je ne me considère pas comme un ingénieur informaticien."                    
                    subtitle2='Développement Web :'
                    description2=" HTML/CSS/Javascript, les librairies utilisée le plus communément sont React, Node, Express, MongoDB, Redux, Webpack. Ce site internet à été entièrement codé par mes soins."
                    subtitle3='Développement Revit et Dynamo :'
                    description3="J'ai créé plusieurs addons greffés sur Revit, ainsi que des briques pour la plateforme de programmation visuelle Dynamo disponibles au public (voir Open source). Les languages Python and C# ont été utilisés pour ces tâches."
                    subtitle4="Machine learning/intelligence artificielle :"
                    description4="J'ai appris les bases du machine learning sur plusieurs mois dans le cadre d'une recherche afin de comprendre l'intérêt de cette technologie pour un bureau d'études d'ingéniérie de ces techniques. Je suis capable d'une évaluation de la pertinence du machine learning pour une tâche donnée de la conception d'un bâtiment."                   
                    description5="Les autre outils maîtrisés incluent Visual Studio et Git."
                    />

                    <SkillSet 
                    skillsetname='Coordination spatiale' 
                    description="J'ai pratiqué la présynthèse pour des architectes et des bureaux d'études, et profite de ma double formation pour affiner ma compréhension des besoins de chacun des acteurs d'un projet. Il m'est ainsi possible de proposer des solutions pour les différends qui apparaissent entre les acteurs dans le cadre de la conception d'un bâtiment."                    
                    /> 

                    <SkillSet 
                    skillsetname='Languages' 
                    subtitle = "Français : "
                    description = "Courant"
                    subtitle2 = "Anglais : "
                    description2  = "Courant, parent anglais"
                    subtitle3 = "Allemand : "
                    description3 = "Quasiment courant, parent autrichien"
                    />

                    <SkillSet 
                    skillsetname='Photographie' 
                    description = " Ce qui a commencé comme un hobby est devenu un moyen d'apprendre à observer l'architecture d'une autre manière. Mémoire réalisé sur la photographie dans la réception de la ZAC de Bercy. J'ai été chargé de photographier un mariage en 2019."                    
                    />
                    
                </div>
            </div>

            <Divider />

            {/* Open source */}
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                    <h3>OPEN SOURCE</h3>
                </div>
                <div className='cv-second-column'>  
                    <SkillSet 
                    skillsetname='Dynamo packages LinlkIt and Morpheus' 
                    description = 'For the needs of a demanding project, I created an open-source dynamo package called LinkIt allowing users to automate the linking of models in Revit. It then grew into other uses and got a new name in Morpheus. Source code can be found '
                    externallink = 'here.'
                    externallinkroute = 'https://github.com/jonathanatger/dynamo'
                        />
                    
                </div>
            </div>
            
            <Divider />
            
            {/* Education */}
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                    <h3>EDUCATION</h3>
                    <h3 className='light-font'>ÉDUCATION</h3>
                </div>
                <div className='cv-second-column'>  
                    <EducationExperience
                        title = 'ARCHITECTURE DEGREE'
                        school = 'ENSA Paris la Villette, Paris'
                        dates ='2010-2017'
                        description = 'Part of a 7-year double-degree curriculum with the engineering degree below.'
                        />

                    <EducationExperience
                        title = 'CIVIL ENGINEERING DEGREE'
                        school = 'ESTP, Paris and Cachan'
                        dates ='2010-2017'
                        />

                    <EducationExperience
                        title = 'FRONT END AND BACK END WEB DEVELOPMENT'
                        school = 'FreeCodeCamp'
                        dates ='2020'
                        description = 'FreeCodeCamp provides a complete full-stack web development curriculum, with training and projects designed to give theory and practice to anybody motivated enough to learn. It covers anything from HTML to React, Node, Express or security basics and data visualizations. Certifications can be found on the FreeCodeCamp site, for example '
                        externallink = 'here.'
                        externallinkroute =  'https://www.freecodecamp.org/certification/jonathanatger/front-end-libraries'
                        />
                    
                </div>
            </div>
            
        </div>
        )
    }
}

//Work experience component to be used to describe experiences
class WorkExperience extends React.Component {
    constructor() {
        super();        
      }

      render(){
          return (
            <div className ='cv-work-xp-paragraph'>
                <div className='cv-work-xp-header'>
                    <div>
                        <h4>{this.props.jobtitle}</h4>
                        <h5>{this.props.company}</h5>
                    </div>
                    <div className='cv-date-location light-font'>
                        <h5>{this.props.dates}</h5>
                        <h5>{this.props.location}</h5>
                    </div>                    
                </div>
                <h5 >{this.props.description}<i><Link to = {this.props.linkroute}>{this.props.link}</Link><a target="_blank" href={this.props.externallinkroute}>{this.props.externallink}</a></i></h5>
                <h5>{this.props.description2}</h5>
                <ul>
                    <h5>{this.props.projet}</h5>
                    <h5>{this.props.projet2}</h5>
                    <h5>{this.props.projet3}</h5>
                    <h5>{this.props.projet4}</h5>
                    <h5>{this.props.projet5}</h5>                
                </ul>
            </div>
          )
      }

}

class EducationExperience extends React.Component {
    constructor() {
        super();        
      }

      render(){
          return (
            <div className ='cv-work-xp-paragraph'>
                <div className='cv-ed-xp-header'>
                    <div>
                        <h4>{this.props.title}</h4>
                        <h5>{this.props.school}</h5>
                    </div>
                    <div className='cv-ed-xp-location'>
                        <h5>{this.props.dates}</h5>
                        <h5>{this.props.location}</h5>
                    </div>                    
                </div>
                <h5 >{this.props.description}<i><Link to = {this.props.linkroute}>{this.props.link}</Link><a target="_blank" href={this.props.externallinkroute}>{this.props.externallink}</a></i></h5>
            </div>
          )
      }

}


//divider between sections
function Divider(){
    return <div className='cv-divider'></div>;
}


//Skill section component
class SkillSet extends React.Component {
    constructor() {
        super();        
      }

      render(){
          return (
            <div className ='cv-work-xp-paragraph'>
                <div className='cv-work-xp-header'>
                    <div>
                        <h4>{this.props.skillsetname}</h4>                        
                    </div>                
                </div>
                <h5 className='bottom-spacing'><i>{this.props.subtitle}</i> {this.props.description}<i><Link to = {this.props.linkroute}>{this.props.link}</Link><a target="_blank" href={this.props.externallinkroute}>{this.props.externallink}</a></i></h5> 
                <h5 className='bottom-spacing'><i>{this.props.subtitle2}</i> {this.props.description2}<i><Link to = {this.props.linkroute2}>{this.props.link2}</Link><a target="_blank" href={this.props.externallinkroute2}>{this.props.externallink2}</a></i></h5>
                <h5 className='bottom-spacing'><i>{this.props.subtitle3}</i> {this.props.description3}<i><Link to = {this.props.linkroute3}>{this.props.link3}</Link><a target="_blank" href={this.props.externallinkroute3}>{this.props.externallink3}</a></i></h5>
                <h5 className='bottom-spacing'><i>{this.props.subtitle4}</i> {this.props.description4}<i><Link to = {this.props.linkroute3}>{this.props.link4}</Link><a target="_blank" href={this.props.externallinkroute4}>{this.props.externallink4}</a></i></h5>
                <h5 className='bottom-spacing'><i>{this.props.subtitle5}</i> {this.props.description5}<i><Link to = {this.props.linkroute5}>{this.props.link5}</Link><a target="_blank" href={this.props.externallinkroute5}>{this.props.externallink5}</a></i></h5>
            </div>
          )
      }

}
