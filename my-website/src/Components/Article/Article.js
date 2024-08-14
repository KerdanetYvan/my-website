import './Article.css';
import React from 'react';

function Article({ img, title, cat, desc}) {
    return (
        <div className='Article'>
            <img src={img} alt='Illustration' className='Illustration'></img>
            <div className='TextArticle'>
                <h4 className='TitreArticle'>{title}</h4>
                <p className='Categorie'>{cat}</p>
                <p className='Description'>{desc}</p>
                <a href='/' className='More'>En savoir plus...</a>
            </div>
        </div>
    );
}

export default Article;