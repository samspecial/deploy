import React, { Component } from 'react';

import './Card.css'
class Card extends Component {

    render() {
        return (
            <div className="br-4 ba b--black-40 card shadow-5">
                <img src={this.props.src} className="card-img" alt="Little kitten looking menacing." />
                <div className="pa2 mh2 ">
                    <h3>{this.props.title}</h3>
                    <p className="f6 lh-copy measure mt2 mid-white">
                        {this.props.article}
                    </p>
                    <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="/about">{this.props.button}</a>
                </div>
            </div>
        )
    }
}

export default Card;