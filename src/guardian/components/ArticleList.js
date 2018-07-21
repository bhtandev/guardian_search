import React from 'react';
import Article from './Article';

const ArticleList = ({newResultsGrouped, onFavClick}) => {
    const articles = Object.keys(newResultsGrouped).map((sectionId) => {
        const {name, results} = newResultsGrouped[sectionId];

        return (
            <div key={sectionId}>
                <div>
                    <h2 className="primary-color">{name}</h2>
                </div>
                <div style={{overflow: 'auto'}}>
                    {
                        results.map((article) => {
                                return (
                                    <Article
                                        key={article.id}
                                        id={article.id}
                                        title={article.webTitle}
                                        date={article.webPublicationDate}
                                        dateFormat="DD/MM/YYYY"
                                        pinned={article.pinned}
                                        onPinned={onFavClick}
                                    />);
                            }
                        )
                    }
                </div>
            </div>);
    });

    return articles;
};

export default ArticleList;