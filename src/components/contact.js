import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../images/avatar.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Fabricio Garcia</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello stranger! My name is Fabricio and I graduated as a Software Development Engineer from
             the Universidad Abierta y a Distancia de Mexico, shortly after, I enrolled in Microverse where I learned a lot from the industry by working with people from
             all over the world with different backgrounds. My skill set includes creating code in different languages and frameworks such as Ruby, Rails, JavaScript and
             React always applying the best practices.</p>
          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +52 (271) 173-0101
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  fabricio.garcia@nube.unadmexico.mx
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    gael.fabricio@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-telegram" aria-hidden="true"/>
                    @this_fabricio
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
