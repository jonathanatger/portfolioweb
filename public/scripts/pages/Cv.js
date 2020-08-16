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
                    <h3>WORK EXPERIENCE</h3>
                    <h3 className = 'light-font'>EXPÉRIENCE PROFESSIONNELLE</h3>
                </div>
                <div className='cv-second-column'>                    
                    <WorkExperience 
                     jobtitle = 'BIM Manager / Design technology implementation'
                     company = 'Ingérop'
                     dates = 'july 2018 - today'
                     location = 'Paris'
                     description = 'I worked on all aspects related to the use of BIM and technology in the design stage at an engineering firm. It involved consultancy work with clients, team support in the projects, creating new workflows and tools. Amongst the missions, I was supervising the BIM process of a hospital in the building stage for a client, doing BIM coordination work for a 200.000 square meters office project, developing Revit plugins, testing augmented and virtual reality tools, and leading a research on the application of machine learning in our field of expertise. Additional missions revolved around building design coordination with an emphasis on the interface of MEP and other trades.'
                        />

                    <WorkExperience 
                     jobtitle = 'BIM Manager'
                     company = 'Sightline'
                     dates = 'september 2017 - july 2018'
                     location = 'Paris'
                     description = 'BIM Management and visual programming. BIM quality management in missions of modelling of existing structures. Led training classes on the basics of BIM software and visual programming for architects.'
                        />

                    <WorkExperience 
                     jobtitle = 'Worksite conductor'
                     company = 'Builders and Partners'
                     dates = 'february 2017 - april 2017'
                     location = 'Paris'
                     description = 'Short mission during a pause in the studies. Worksite surveillance and reporting on the state of the worksite and the quality of architectural work. Tower mainly comprised of offices in the south of Paris.'
                        />

                    <WorkExperience 
                     jobtitle = 'Architect'
                     company = 'Brunet Saunier Architecture'
                     dates = 'june 2015 - february 2016'
                     location = 'Paris'
                     description = "Worked on an hospital project under construction in Switzerland. BIM drafting, creation of documents for studies and on worksite execution. Project awarded the BIM d'Or prize for the best french BIM model for an international building."
                        />    
                </div>
                
            </div>
            
            <Divider />

            {/* Skills */}
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                        <h3>SKILLS</h3>
                        <h3 className='light-font'>COMPÉTENCES</h3>
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
                    description = 'For the needs of a demanding project, I created an open-source dynamo package called LinkIt. It allows users to automate the linking of models in Revit. It then grew into other uses and got a new name in Morpheus to acknowledge that. Source code can be found '
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
                </div>
                <div className='cv-second-column'>  
                    <EducationExperience
                        title = 'ARCHITECT'
                        school = 'ENSA Paris la Villette'
                        location = "Paris" 
                        dates ='2010-2017'
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
