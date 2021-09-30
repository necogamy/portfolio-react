import React, { useEffect, useState } from 'react'
import './styles.css';

export function Skills(props) {
    const [ grow, setGrow ] = useState({
        seven: '0%',
        sevenFive: '0%',
        eight: '0%',
        eightFive: '0%'
    });

    const bg = props.mode === 'night' ? '#1d4bcc' : '#1c1c1c';

    const h3Style = {
        color: props.mode === 'night' ? 'azure' : '#1c1c1c',
        transition: '1s'
    }

    useEffect(() => {
        setTimeout(() => {
            setGrow({
                seven: '70%',
                sevenFive: '75%',
                eight: '80%',
                eightFive: '85%'
            })
        }, 1500)
        return setGrow({
            seven: '0%',
            sevenFive: '0%',
            eight: '0%',
            eightFive: '0%'
        })
    })

    return (
        <section style={{color: 'azure'}} className='animate__animated animate__fadeInLeft skills'>
            <section>
                <article>
                    <h3 style={h3Style}>HTML5 | JavaScript/ECMAScript6 | CSS3</h3>
                    <div style={{backgroundColor: bg, width: grow.eightFive}}>85%</div>
                </article>
                <article>
                    <h3 style={h3Style}>React & Redux</h3>
                    <div style={{backgroundColor: bg, width: grow.eight}}>80%</div>
                </article>
                <article>
                    <h3 style={h3Style}>SQL(PostgreSQL) | Express-Node.js</h3>
                    <div style={{backgroundColor: bg, width: grow.sevenFive}}>75%</div>
                </article>
                <article>
                    <h3 style={h3Style}>Test Driven Development (QA Testing)</h3>
                    <div style={{backgroundColor: bg, width: grow.seven}}>70%</div>
                </article>
            </section>
            <section className='optime'>
                <article>
                    <h3 style={h3Style}>Responsive | Accessibility | Semantic | Clean Code</h3>
                    <div style={{backgroundColor: bg, width: grow.eightFive}}>85%</div>
                </article>
                <article>
                    <h3 style={h3Style}>Git | Bash Command Line | Markdown | Google DevTools | Wireframing</h3>
                    <div style={{backgroundColor: bg, width: grow.eight}}>80%</div>
                </article>
                <article>
                    <h3 style={h3Style}>Sass | Bootstrap | jQuery</h3>
                    <div style={{backgroundColor: bg, width: grow.seven}}>70%</div>
                </article>
            </section>
        </section>
    )
}
