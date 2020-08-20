import React from 'react';
import '../../../css/general.css'

class BlogPostText extends React.Component{
    render() {
        return(
            <h4 className='blog-text'>
                 {this.props.text}
            </h4>
        )
    }
}

class BlogPostImage extends React.Component{
    render(){
        return(
            <img className='blog-img' href={this.props.imagelink}></img>
        )
    }
}

export {BlogPost, BlogPostText, BlogPostImage}
