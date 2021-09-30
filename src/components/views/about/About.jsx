import React, { useEffect, useState } from 'react';
import './styles.css';

let names = ['Accessibility', 'Responsive', 'Semantic', 'Clean Code'];
let counter = 0;

export function About(props) {
    const [display, setDisplay] = useState([]);

    const styles = {
        color: props.mode === 'night' ? 'azure' : '#1c1c1c',
        transition: '1s'
    }

    const border = props.mode === 'night' ? '#1d4bcc' : '#1c1c1c';

    const inject = () => {
        const timeInject = 1500;

        setTimeout(() => {
            setDisplay(prevState => [...prevState, <li style={{ border: `1px solid ${border}` }} className='animate__animated animate__fadeInLeft'>{names[counter]}</li>]);
            counter++;
        }, timeInject)

        setTimeout(() => {
            setDisplay(prevState => [...prevState, <li style={{ border: `1px solid ${border}` }} className='animate__animated animate__fadeInLeft'>{names[counter]}</li>]);
            counter++;
        }, timeInject * 2)

        setTimeout(() => {
            setDisplay(prevState => [...prevState, <li style={{ border: `1px solid ${border}` }} className='animate__animated animate__fadeInLeft'>{names[counter]}</li>]);
            counter++;
        }, timeInject * 3)

        setTimeout(() => {
            setDisplay(prevState => [...prevState, <li style={{ border: `1px solid ${border}` }} className='animate__animated animate__fadeInLeft'>{names[counter]}</li>]);
        }, timeInject * 4)
    }

    useEffect(() => {
        inject();
        return counter = 0;
    }, []);

    return (
        <section style={styles} className='animate__animated animate__fadeInLeft'>
            <h2>Nicolás López</h2>
            <h3 className='about-h3'>Web developer with 1+ of experience in the area, who makes focus in:</h3>
            <ul>
                {
                    display
                }
            </ul>
        </section>
    )
}