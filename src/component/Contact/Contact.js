import React from 'react';
import NavBar from '../NavBar';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div>
            <NavBar />
            <ContactHero />
            <ContactForm />
        </div>
    )
}
