import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';
import { Div } from './styles';
import PropTypes from 'prop-types';

import SinglePost from './SinglePost';

class ArticleList extends Component {
    componentDidMount() {
        this.props.getPost();
    }

    render() {
        const { postValue } = this.props;
        return (
            <Div>
                {postValue.map(post => (
                    <SinglePost title={post.title} article={post.article} key={post.id}
                        id={post.id} />

                ))}

            </Div>
        )
    }
}

ArticleList.propTypes = {
    postValue: PropTypes.array.isRequired,
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    postValue: state.post.articleData
});

export default connect(mapStateToProps, { getPost })(ArticleList);