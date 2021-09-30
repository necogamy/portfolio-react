import React from 'react';
import './styles.css';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import PropTypes from 'prop-types';

export function Switch(props) {
  const filterMode = props.mode === 'day' && 'invert(1)';

    return (
        <label className="switch" role="button" aria-label="Switch between night or day">
          <input onChange={props.changeMode} type="checkbox" />
          <span className="slider round">
            <img style={{ filter: filterMode, opacity: filterMode && .6 }} src={moon} alt="" />
            <img style={{ filter: filterMode }} src={sun} alt="" />
          </span>
        </label>
    );
}

Switch.propTypes = {
  changeMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
}