import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import { Nav } from '../nav/Nav';
import { Background } from '../background/Background';
import { Switch as SwitchButton } from '../switch/Switch';
import { About } from '../views/About';
import { Home } from '../views/Home';
import { Projects } from '../views/Projects';
import { Skills } from '../views/Skills';

import gmailIco from '../../assets/icons/gmail.svg';
import githubIco from '../../assets/icons/github.svg';
import linkedinIco from '../../assets/icons/linkedin.svg';


function App() {
  const [ mode, setMode ] = useState('night');

  const changeMode = () => {
    setMode(prevState => prevState === 'night' ? 'day' : 'night')
  }

  const imageFilter = { filter: `invert(${mode === 'night' ? 1 : 0})` }

  return (
    <Fragment>
    <Background mode={mode} />
    <main>
        <Nav mode={mode} />
        <Switch>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <aside>
            <section aria-label="contact info">
                <a href="https://www.linkedin.com/in/nicogamy" target="_blank" rel='noreferrer'><img style={imageFilter} className='social-ico' src={linkedinIco} alt="linkedin" /></a>
                <a href="https://github.com/necogamy" target="_blank" rel='noreferrer'><img style={imageFilter} className='social-ico' src={githubIco} alt="github" /></a>
                <a href="mailto:madrazonecogamy@gmail.com" rel='noreferrer'><img style={imageFilter} className='social-ico' src={gmailIco} alt="gmail" /></a>
            </section>
            <SwitchButton changeMode={changeMode} />
        </aside>
    </main>
    </Fragment>
  );
}

export default App;
