import React from 'react'
import Articles from './blogposts/Articles.js'


export default class BlogPostContainer extends React.Component {
        
    render(){
        return(
            <div>
                <div>
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
                <div>
                    {this.props.blogpostcomponents}
                </div>
            </div>
        )
    }
}

