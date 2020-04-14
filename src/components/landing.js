import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/avatar.png';

class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={avatar}
              alt={avatar}
              className="avatar"
            />
            <div className="banner-box">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | Ruby | Rails | JavaScrip | React | Python</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/fabricio-garcia/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/fabricio-garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/fabricI0.garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/this_fab" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;