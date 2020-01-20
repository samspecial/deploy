import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/postAction';
import { Section, Article } from './styles';

import Comment from './Comment';

import { FaPencilAlt, FaTimes } from 'react-icons/fa';

class SinglePost extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            title: "",
            article: ""

        }
    }

    shortenArticle = (article) => {
        let newLength = article.slice(0, 100);
        return newLength;
    }

    onDeleteClick = (id) => {
        this.props.deletePost(id);
    }

    onUpdate = (id, e) => {
        e.preventDefault();
        const { title, article } = this.state;
        const updateArticle = {
            title,
            article,
        }

        this.setState({
            title,
            article,
        });

    }
    render() {
        const { title, article, id } = this.props;

        const shortened = this.shortenArticle(article);
        return (
            <React.Fragment>
                <Section>
                    <Article>
                        <h2>{title}</h2>
                        <p>{article.length > 100 ? shortened : article}</p>
                        <span><FaTimes onClick={this.onDeleteClick.bind(this, id)} /><Link to={`/feed/edit/${id}`}> <FaPencilAlt /></Link></span>
                    </Article>
                    <Comment />
                </Section>

            </React.Fragment>
        )
    }
}

SinglePost.propTypes = {
    deletePost: PropTypes.func.isRequired
}
export default connect(null, { deletePost })(SinglePost);
