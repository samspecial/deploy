import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaPencilAlt } from 'react-icons/fa';

export default class Comment extends Component {
    constructor() {
        super()
        this.state = {
            comment: ""
        }
    }

    changeComment = (e) => {

        const { value, name } = e.target;
        this.setState({ [name]: value })

    }
    render() {
        const { comment } = this.state;
        return (
            <React.Fragment>
                <textarea value={comment} name="comment" onChange={this.changeComment} placeholder="Your comment goes here"></textarea>
                <span><Link to="/"><FaTrashAlt /></Link> <Link to="/"><FaPlus /></Link><Link to="/"><FaPencilAlt /></Link></span>
            </React.Fragment>
        )
    }
}
