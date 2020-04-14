import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import avatar from "../images/avatar.png";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{ paddingTop: "0.5em" }}>Fabricio Garcia</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #2193b0", width: "50%" }} />
            <p>
              My name is Fabricio and I graduated as a Software
              Development Engineer from the Universidad Abierta y a Distancia de
              Mexico, shortly after, I enrolled in Microverse where I learned a
              lot from the industry by working with people from all over the
              world with different backgrounds. My skill set includes creating
              code in different languages and frameworks such as Ruby, Rails,
              JavaScript and React always applying the best practices.
            </p>
            <hr style={{ borderTop: "3px solid #2193b0", width: "50%" }} />
            <h5>Location</h5>
            <p>Veracruz, Mexico (Able to relocate)</p>
            <h5>Phone</h5>
            <p>+52 (271) 173-0101</p>
            <h5>Email</h5>
            <p>gael.fabricio@gmail.com</p>
            <h5>Web</h5>
            <p>fabricio-garcia.me</p>
            <hr style={{ borderTop: "3px solid #2193b0", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Microverse"
              schoolDescription="Full Stack Web Developer Diploma"
            />

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Universidad Abierta y a Distancia de Mexico (UnADM)"
              schoolDescription="Software Development Engineer BS"
            />
            <hr style={{ borderTop: "3px solid #2193b0)" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Jr. Web Developer"
              jobDescription="Analysis, Development, Testing and Documentation of Web Applications"
            />

            <Experience
              startYear={2013}
              endYear={2017}
              jobName="Supervisor"
              jobDescription="In charge of supervision duties for all 18 academic facilities within Veracruz including
              supervising effective working of academic personnel to ensure compliance to all institutional policies and
              coordinating with instructors to carry on informative meetings"
            />
            <hr style={{ borderTop: "3px solid #2193b0)" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSSt" progress={70} />
            <Skills skill="Ruby" progress={50} />
            <Skills skill="Rails" progress={70} />
            <Skills skill="JavaScript" progress={50} />
            <Skills skill="React" progress={30} />
            <Skills skill="Python" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
