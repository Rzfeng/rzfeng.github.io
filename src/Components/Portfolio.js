import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <a href={projects.url} target="_blank" rel="noopener noreferrer">
            <div className="item-wrap">
              <Zmage alt={projects.title} src={projectImage} />
              <div style={{ textAlign: "center" }}>{projects.title}</div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <section id="portfolio">
            
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check out my current work, click to learn more! More on my Github.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
