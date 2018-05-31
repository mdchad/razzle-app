import React from 'react';
import logo from './react.svg';
// import './Home.css';
import styled, { css, keyframes } from 'react-emotion'

const home = css`
    text-align: center;
`

const homeLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const HomeLogo = styled('img')`
    animation: ${homeLogoSpin} infinite 20s linear;
    height: 80px;
`

const homeHeader = css`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`

const homeIntro = css`
    font-size: large;
`

const homeResources = css`
    list-style: none;
`

const HomeResourcesLi = styled('li')`
    display: inline-block;
    padding: 1rem;
`

class Home extends React.Component {
  render() {
    return (
      <div className={home}>
        <div className={homeHeader}>
          <HomeLogo src={logo} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className={homeIntro}>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/home.js</code> and save to reload.
        </p>
        <ul className={homeResources}>
          <HomeResourcesLi>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </HomeResourcesLi>
          <HomeResourcesLi>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </HomeResourcesLi>
          <HomeResourcesLi>
            <a href="https://palmer.chat">Community Slack</a>
          </HomeResourcesLi>
        </ul>
      </div>
    );
  }
}

export default Home;
