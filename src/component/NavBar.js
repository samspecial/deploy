import React from 'react';
import { Link } from 'react-router-dom';

import teamwork from '../assets/teamwork.png';
export default function NavBar() {
    return (
        <nav className="db dt-l w-100 border-box pa3 ph5-l navbar">
            <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                <img src={teamwork} className="dib w4" alt="Teamwork Fan" />
            </Link>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/" title="Home">Home</Link>
                <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/about" title="How it Works">How it Works</Link>

                <Link className="link dim dark-gray f6 f5-l dib" to="/contact" title="Contact">Contact</Link>
            </div>
        </nav>

    )
}
