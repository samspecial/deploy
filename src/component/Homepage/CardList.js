import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCard } from '../../actions/cardAction'
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

class CardList extends Component {
    componentDidMount() {
        this.props.getCard();
    }
    render() {
        const { cardValue } = this.props;
        return (
            <div className="cardlist" >
                {
                    cardValue.map(card => (
                        <Card class="card" key={card.id} src={card.src}
                            title={card.title} article={card.article} button={card.btnText} />
                    ))
                }</div>
        )
    }
}
CardList.propTypes = {
    cardValue: PropTypes.array.isRequired,
    getCard: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cardValue: state.card.cardData
})
export default connect(mapStateToProps, { getCard })(CardList)