import React from 'react'
import {ArticlesSummary} from './blogposts/Articles.js'
import '../../css/general.css' 

function importAll(r) {
    /* return r.keys().map(r); */


    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    
    return images;
  }

require.context('../../content', false, /\.(png|jpe?g|svg)$/)
const images = importAll(require.context('../../content', false, /\.(png|jpe?g|svg)$/)); 

//component
export default class BlogSummary extends React.Component {
    
    render(){
        //loop threw the articles listed in Articles and get all the relevant info to show
        let articlePresentations = []
        let i = 0;
        let sortedArticles = ArticlesSummary.sort((a,b)=> (a.date < b.date) ? 1 : -1)          
         
        for(i; i<sortedArticles.length; i++){
            let art= sortedArticles[i]

            articlePresentations.push(        
                <div className='blog-article-summary'>
                    <h1>{art.title}</h1>
                    <h3>date : {art.date}</h3>
                    <img src={images[art.headimage].default} className='blog-full-width-img'></img>                    
                </div>
                )
        }

        return(
        <div>
            {articlePresentations}
        </div>
        )
    }
}
