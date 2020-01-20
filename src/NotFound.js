import React from 'react'
import { Link } from 'react-router-dom';
import error from '../assets/error.png'

export default function NotFound() {
    return (
        <div>
            <img className="" src={error} alt="Oops, Not page found" />
            <p>You can check <Link className="link" to="/signup">here.</Link></p>
        </div>
    )
}
