import React from 'react';
import teamwork from '../../assets/teamwork.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="sans-serif">
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-70 pb5 pb6-m pb7-l">
                    <nav className="dt w-100 mw8 center">
                        <div className="dtc w2 v-mid pa3">
                            <a href="/" className="dib w4 grow-large">
                                <img src={teamwork} alt="teamwork" />
                            </a>
                        </div>
                        <div className="dtc v-mid tr pa3">
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/about">How it Works</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/contact">Contact</Link>

                            <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba grow" to="/signin">Sign In</Link>
                        </div>
                    </nav>
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f2 f1-l fw7 white-90 mb0 lh-title">{'Teamwork makes it easy to stay in touch'}</h1>
                        <h2 className="fw5 f4 white-80 mt3 mb4">{'Create.'}{'Collaborate.'}{'Talk.'}{'Chat.'}</h2>
                        <Link className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" to="/">{'Learn More'}</Link>
                        <span className="dib v-mid ph3 white-70 mb3">or</span>
                        <Link className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" to="/signup">{'Try Now'}</Link>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;