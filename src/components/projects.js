import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, CardTitle, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

 toggleCategories() {
  if (this.state.activeTab === 0) {
    return(
      <div className="projects-grid">
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/the-next-web.png') +") center / cover"}}></CardTitle>
          <CardText>
            <strong>The Next Web</strong><br/><br/>
            This project consists of replicating the The Next Web website putting emphasis on responsive design
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/fabricio-garcia/Building-with-Responsive-Design" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored><a href="https://fabricio-garcia.github.io/Building-with-Responsive-Design/" rel="noopener noreferrer" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
        <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/newsweek.png') +") center / cover"}}></CardTitle>
          <CardText>
          <strong>Newsweek</strong><br/><br/>
          This project consist of building a replica of the news site Newsweek.com using the Bootstrap framework
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/fabricio-garcia/Using-Boostrap" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored><a href="#" rel="noopener noreferrer" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
  } else if (this.state.activeTab === 1) {
    return(
      <div className="projects-grid">
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/tic-tac-toe.png') +") center / cover"}}></CardTitle>
          <CardText>
            <strong>Tic-Tac-Toe</strong><br/><br/>
            A tic-tac-toe game on the command line where two human players can play against each other and the board is displayed in between turns.
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/fabricio-garcia/Tic-Tac-Toe" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
        <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/social-book.png') +") center / cover"}}></CardTitle>
          <CardText>
          <strong>Social Book</strong><br/><br/>
           A fabulous clone of the basic functionalities of Facebook using Ruby on Rails 6
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/fabricio-garcia/social-book" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored><a href="https://powerful-scrubland-66847.herokuapp.com/" rel="noopener noreferrer" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
  } else if (this.state.activeTab === 2) {
    return(
      <div className="projects-grid">
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/weather.png') +") center / cover"}}></CardTitle>
          <CardText>
            <strong>Weather App</strong><br/><br/>
            A Weather forecast app using a weather API and built with Vanilla JS
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/fabricio-garcia/weather-app" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored><a href="http://weather-app-dev.surge.sh/" rel="noopener noreferrer" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card className="projects" shadow={5} style={{minWidth: '300px', margin: '50px'}}>
        <CardTitle style={{color: '#000', height: '176px', background: "url("+ require('../images/portfolio.png') +") center / cover"}}></CardTitle>
          <CardText>
          <strong>Portfolio</strong><br/><br/>
          My first React project to showcase some of my work as Web Developer,
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/fabricio-garcia/fabricio-garcia.me" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored><a href="https://fabricio-garcia.me" rel="noopener noreferrer" target="_blank">LiveDemo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
  }
 }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>Ruby/Rails</Tab>
          <Tab>JavaScript/React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;