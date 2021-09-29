import React from 'react';
import './styles.css';

export function Switch(props) {
    return (
        <label className="switch" role="button" aria-label="Switch between night or day">
          <input onChange={props.changeMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
    );
}