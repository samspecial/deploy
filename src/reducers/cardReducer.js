import { GET_CARD } from '../actions/types';

import team from '../assets/team.png';
import social from '../assets/social.png';
import communicate from '../assets/communicate.png';
import network from '../assets/network.png';

const initialState = {
    cardData: [
        {
            id: 1,
            src: team,
            title: "Split view on teamwork",
            article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
            btnText: "Try it now"
        }, {
            id: 2,
            src: social,
            title: "Experience Unusual Bonding",
            article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
            btnText: "Learn more"
        },
        {
            id: 3,
            src: communicate,
            title: "Commitment",
            article: "Those who you play and relate with at work are your most valuable people, hence they deserve to be cherished",
            btnText: "Stay plugged"
        }, {
            id: 4,
            src: network,
            title: "Unrivalry experience",
            article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
            btnText: "Create now"
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CARD:
            return {
                ...state
            }
        default:
            return state;
    }
}