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
                    skillsetname='Software' 
                    description='Proficient in BIM software : Revit, Dynamo, Navisworks, BIM 360 and other Forge applications, Tekla BIMSight, Twinmotion, Enscape. Used Rhino, Grasshopper, Solibri MC, ArchiCAD, AutoCAD.'
                    description2='Usage of Unity and Blender for testing purposes. Extensive use of the Adobe Creative suite, mostly Photoshop, Indesign and Lightroom.' 
                    /> 

                    <SkillSet 
                    skillsetname='Coding'
                    description='I have no formal training but completed an online 1500 hour long course on FreeCodeCamp for web development. Other skills were acquired on my free time mostly and put into action at the workplace to serve the development of software tools.'
                    subtitle2='Web development :'
                    description2=' HTML/CSS/Javascript, most used frameworks are React, Node, Express, MongoDB, Redux, Webpack. This website was entirely coded using those skills.' 
                    subtitle3='Revit and Dynamo development :'
                    description3='I coded multiple plugins to be used for everyday work in the Revit Software. I also am proficient at Dynamo and authoring custom nodes and a package (see Open source). Python and C# were used for this tasks.'
                    subtitle4="Machine learning :"
                    description4="I learned to use machine learning frameworks as part of a research towards understanding what it could bring to a building engineering firm using BIM data. I used the Sci-kit Learn, Tensorflow, Matplotlib and Numpy libraries mostly."
                    description5='Other tools used include Visual Studio and Git.'
                    />

                    <SkillSet 
                    skillsetname='Building design coordination' 
                    description='Being trained as an architect and working in an engineering firm, I have all the basic knowledge to understand the building object as a whole. I was therefore missioned to conduct coordination analyses and meetings, bringing solutions to the discrepancies between the differents stakeholders at the design stage.'
                    /> 

                    <SkillSet 
                    skillsetname='Languages' 
                    subtitle = "French : "
                    description = "Native"
                    subtitle2 = "English : "
                    description2  = "Fluent, English parent"
                    subtitle3 = "German : "
                    description3 = "Fluent, Austrian parent"
                    />

                    <SkillSet 
                    skillsetname='Photography' 
                    description = 'Starting as a hobby, photography was a way for me to learn to look at buildings in an active manner during my architecture studies. I then went on to photograph other subjects like street photography or portrait. I got comissioned in 2019 for a wedding.'
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
