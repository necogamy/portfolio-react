import React from 'react';
import './styles.css';
import nightImage from '../../assets/images/night.jpg';
import dayImage from '../../assets/images/day.jpg';
import PropTypes from 'prop-types';

export function Background(props) {
    const image = props.mode === 'night' ? nightImage : dayImage;

    return <div style={{ backgroundImage: `url(${image})`, transition: '1s' }} id="background"></div>;
}

Background.propTypes = {
    mode: PropTypes.string.isRequired
}