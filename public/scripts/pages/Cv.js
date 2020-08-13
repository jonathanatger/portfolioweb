import React from 'react'
import '../../css/general.css'

export default class Cv extends React.Component {
    
    render(){
        return(
        <div className = 'cv-global-container'>    
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
                     description = 'I worked on all aspects related to the use of BIM and technology in the design stage at an engineering firm. It involved consultancy work with clients, team support in the projects, creating new workflows and tools. Amongst the missions, I was supervising the BIM process of a hospital in the building stage for a client, doing BIM coordination work for a 200.000 square meters office project, developing Revit plugins, testing augmented and virtual reality tools, and leading a reasearch on the application of machine learning in our field of expertise.'
                        />

                    <WorkExperience 
                     jobtitle = 'BIM Manager'
                     company = 'Sightline'
                     dates = 'september 2017 - july 2018'
                     location = 'Paris'
                     description = 'BIM Management, BIM model supervision, visual programming. It was very bad IHATED THE PEOPLE who were assholed' 
                        />

                    <WorkExperience 
                     jobtitle = 'Worksite conductor'
                     company = 'Builders and Partners'
                     dates = 'february 2017 - april 2017'
                     location = 'Paris'
                     description = 'Worksite surveillance'
                        />
                </div>
                
            </div>
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                        <h3>SKILLS</h3>
                </div>
                <div className='cv-second-column'>  

                </div>
            </div>
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                    <h3>EDUCATION</h3>
                </div>
                <div className='cv-second-column'>  

                </div>
            </div>
            <div className = 'cv-section'>
                <div className ='cv-first-column'>
                    <h3>OPEN SOURCE</h3>
                </div>
                <div className='cv-second-column'>  

                </div>
            </div>
        </div>
        )
    }
}


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
                        <h4>{this.props.company}</h4>
                    </div>
                    <div className='cv-date-location light-font'>
                        <h5>{this.props.dates}</h5>
                        <h5>{this.props.location}</h5>
                    </div>                    
                </div>
                <h5 >{this.props.description}</h5>
            </div>
          )
      }

}
