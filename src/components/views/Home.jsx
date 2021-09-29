import React, { useState, useEffect } from 'react';
import './home.css';


const words = [
    'Web Developer', 
    'Programmer', 
    'Back-end Developer', 
    'Front-end Developer', 
    'Full-Stack Developer',
    'JavaScript Developer'
];
let textArrayIndex = 0;
let charIndex = 0;

export function Home() {
    const [ text, setText ] = useState('');

    const typing = () => {
        if (charIndex < words[textArrayIndex].length) {
            setText(prevState => prevState += words[textArrayIndex].charAt(charIndex));
            charIndex++;
        }
    }

    useEffect(() => {
        const INID = setInterval(typing, 300);
        return () => {
            clearInterval(INID);
            charIndex = 0;
            textArrayIndex++;
            if (textArrayIndex >= words.length) textArrayIndex = 0;
        }
    }, [])

    return (
        <section>
            <h2>I'm Nico a <span>{text}</span><span className="cursor">&nbsp;</span></h2>
            <h3>Welcome to my Website</h3>
        </section>
    )
}
