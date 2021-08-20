import React from 'react';
import {BlogPost, BlogPostText, BlogPostImage} from './BlogPost.js'




let ArticlesSummary = [
    {
        title : 'Article 1',
        date : '20191027',
        headimage : 'orange.jpg',
        component : Article1
    },
    {
        title : 'Article 2',
        date : '20200327',
        headimage : 'orange.jpg',
        component : Article1
    }
]



function Article1(){
    return(
        <BlogPost
        contents = {[
            <BlogPostText/>,
            <BlogPostImage />
        ]}
        
        
        
        />
    )
}



export {ArticlesSummary}