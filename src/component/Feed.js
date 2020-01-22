import React, { Component } from 'react';

import NavBarMain from './Post/NavBarMain';
import Post from './Post/Post';
import ArticleList from './Post/ArticleList';



export default class Feed extends Component {

    render() {

        return (
            <>

            <NavBarMain />
            <div className="post-container">
                <div className="post-head"><h3 className="post">{"Share thoughts"}</h3>
                    <p className="paragraph">{"This is aimed at increasing team bonding and relationship, feel free to interact and share knowledge. Areas you are expected to share knowledge are but not limited to the followings: History, Entrepreneurship, Fitness, Family, Faith, Relationship, Entertainment, Fashion, Politics, Technology"}</p>
                </div>
            </div>
            <Post />
            <ArticleList />
            </>
        )
    }
}
