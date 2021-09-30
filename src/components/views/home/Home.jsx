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


export function Home(props) {
    const [ text, setText ] = useState('');

    const typing = () => {
        if (charIndex < words[textArrayIndex].length) {
            setText(prevState => prevState += words[textArrayIndex].charAt(charIndex));
            charIndex++;
        }
    }

    useEffect(() => {
        let INID;
        setTimeout(() => {
            INID = setInterval(typing, 300);
        }, 1000)
        return () => {
            clearInterval(INID);
            charIndex = 0;
            textArrayIndex++;
            if (textArrayIndex >= words.length) textArrayIndex = 0;
        }
    }, [])

    const styles = {
        color: props.mode === 'night' ? 'azure' : '#1c1c1c',
        transition: '1s'
    }

    return (
        <section style={styles} className='animate__animated animate__fadeInLeft'>
            <h2>I'm Nico a {text}<span className="cursor">&nbsp;</span></h2>
            <h3>Welcome to my Website</h3>
        </section>
    )
}
