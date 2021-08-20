import React from 'react'
import {Link} from 'react-router-dom'
import {ArticlesSummary} from './blogposts/Articles.js'
import '../../css/general.css' 
import Photo from '../../content/CaptureOB.png' 



export default class BlogSummary extends React.Component {
    render(){
        return(
            <div>
                <h4>Vous pouvez retrouver dans ce blog des réflexions (en anglais) sur des outils et recherches conduites sur le thème des technologies numérique dans la construcion.</h4>
                <br></br>
                <h3>Le blog peut être visité ici : <a className='blog-embedded-link' target='_blank' href='https://outputbuilding.wordpress.com/'>output=building</a>.</h3>
                <div className='blog-img-ctn'>
                    <a href="https://outputbuilding.wordpress.com/2019/10/27/using-machine-learning-to-recognize-bim-objects-with-their-names/" target='_blank'><img src={Photo} className='hp-img'></img></a>  
                </div> 
            </div>
        )
    }
}


/*

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

 
*/