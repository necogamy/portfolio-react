import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export function Nav(props) {
    const linkStyles = {
        color: props.mode === 'night' ? 'azure' : '#1c1c1c',
        transition: '1s',
        textDecoration: 'none',
        fontSize: '1.3rem',
        fontWeight: 'bold'
    }

    return (
        <nav>
            <Link className='animate__animated animate__fadeInDown' style={linkStyles} to='/'>Home</Link>
            <section role="navigation" aria-label="Navigation bar">
              <Link className='animate__animated animate__fadeInDown' style={linkStyles} to='/about'>About me</Link>
              <Link className='animate__animated animate__fadeInDown' style={linkStyles} to='/projects'>Projects</Link>
              <Link className='animate__animated animate__fadeInDown' style={linkStyles} to='/skills'>Skills</Link>
            </section>
        </nav>
    );
}

Nav.propTypes = {
    mode: PropTypes.string.isRequired
}