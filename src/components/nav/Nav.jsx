import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export function Nav(props) {
    const linkStyles = {
        color: props.mode === 'night' ? 'azure' : '#1c1c1c',
        transition: '1s',
        textDecoration: 'none',
        fontSize: '1.3rem'
    }

    return (
        <nav>
            <Link style={linkStyles} to='/'>Home</Link>
            <section role="navigation" aria-label="Navigation bar">
              <Link style={linkStyles} to='/about'>About me</Link>
              <Link style={linkStyles} to='/projects'>Projects</Link>
              <Link style={linkStyles} to='/skills'>Skills</Link>
            </section>
        </nav>
    );
}

Nav.propTypes = {
    mode: PropTypes.string.isRequired
}