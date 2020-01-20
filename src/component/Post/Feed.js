import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditPost from './EditPost'
import NavBarMain from './NavBarMain';
import Post from './Post'
import ArticleList from './ArticleList';

export default class Feed extends Component {

    render() {
        // const { title, article, url, authorId, id, createdOn } = this.state
        return (
            <>
            <NavBarMain />
            <Router>
                <div className="post-container">
                    <div className="post-head"><h3 className="post">{"Share thoughts"}</h3>
                        <p className="paragraph">{"This is aimed at increasing team bonding and relationship, feel free to interact and share knowledge. Areas you are expected to share knowledge are but not limited to the followings: History, Entrepreneurship, Fitness, Family, Faith, Relationship, Entertainment, Fashion, Politics, Technology"}</p>
                    </div>
                </div>
                <Post />

                <ArticleList />
                <Route exact path="/feed/edit/:id" render={props => <EditPost {...props} />} />

            </Router>
            </>
        )
    }
}
