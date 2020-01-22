import React, { Component } from 'react'

import uuid from 'uuid'
import './Post.css'

export default class EditPost extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            article: "",
            image: ""
        }
    }

    componentDidMount() {

    }


    onSubmit = (e) => {
        e.preventDefault();
        if (!this.canSubmitData()) {
            return
        }
        const { title, article, image } = this.state;
        const newArticle = {
            id: uuid(),
            title,
            article,
            image
        }
        this.props.updatePost(newArticle)
        //    Clear state
        this.setState({
            title: '',
            article: '',
            image: ''

        });

    }
    onPostChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    canSubmitData = () => {
        const { article, title } = this.state;
        return article.length > 0 && title.length > 0
    }

    render() {
        const { article, title, image } = this.state;

        const isEnabled = this.canSubmitData()
        return (


            <section className="">
                <form onSubmit={this.onSubmit.bind(this)} className="bg measure shadow-5" action="article-post" method="post" acceptCharset="utf-8" encType="multipart/form-data">
                    <h1>Edit Post</h1>
                    <div>
                        <div className="tl">
                            <label className="db mv2 fw4 lh-copy f6" htmlFor="article-title">Title</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                name="title" id="title" placeholder="Title" defaultValue={title} ref={this.title} />
                        </div>
                        <div className="tl">
                            <label className="db mv2 fw4 lh-copy f6" htmlFor="article">Article</label>
                            <textarea id="comment" name="article" aria-describedby="comment-desc" className="pa2 input-reset ba bg-transparent w-100 measure"
                                placeholder="Publish your article" defaultValue={article} ref={this.article}></textarea>
                        </div>
                        <div className="tl">
                            <span className="db mv2 fw4 lh-copy f6" htmlFor="image">Image</span>
                            <input type="file" id="image" name="image" aria-describedby="image-desc" className="pa2 input-reset" defaultValue={image} ref={this.image} />
                        </div>
                    </div>
                    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" disabled={!isEnabled} type="submit" value="Publish" /></div>
                </form>
            </section>

        )
    }
}
