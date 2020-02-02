import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing">
          <Cell col={12}>

            <div className="banner-text">
              <h1>Front-end developer student </h1>

            <hr/>

          <p>HTML/CSS |  JavaScript | React |</p>


            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
