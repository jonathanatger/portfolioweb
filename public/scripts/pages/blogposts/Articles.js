import React from 'react';
import {BlogPost, BlogPostText, BlogPostImage} from './BlogPost.js'
import { render } from 'react-dom';
import { text } from 'express';


export default class Article extends React.Component {
    constructor(){
        super()
        text1='Lorem ipsum'; 

    }
    
    
    
    render(){
        return(
            <BlogPost>
                
            </BlogPost>
        )
    }
}

