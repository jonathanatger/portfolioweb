import React from 'react'
import {Link} from 'react-router-dom'
import {ArticlesSummary} from './blogposts/Articles.js'
import '../../css/general.css' 


/*
export default class BlogSummary extends React.Component {
    render(){
        return(
            <div>
                <h4>The blog section is coming soon !</h4>
                <br></br>
                <h3>You can visit former blog space <a className='blog-embedded-link' target='_blank' href='https://outputbuilding.wordpress.com/'>output=building</a> for articles on design technology and walkthroughs of some of the tools I built.</h3>
            </div>
        )
    }
}
*/

// import all images
function importAll(r) {
    // return r.keys().map(r); 


    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    
    return images;
  }

require.context('../../content', false, /\.(png|jpe?g|svg)$/)
const images = importAll(require.context('../../content', false, /\.(png|jpe?g|svg)$/)); 

//Create components for each article
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
                    <h1><Link to="/contact"> {art.title} </Link></h1>
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

 
