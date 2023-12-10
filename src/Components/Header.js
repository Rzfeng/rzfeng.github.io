import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
const PARTICLE_TYPES = ["color", "ball", "lines", "thick", "circle", "cobweb", "polygon", "square", "tadpole", "fountain"];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        particleType: this.getRandomParticleType()
    };
  }

  getRandomParticleType = () => {
      const randomIndex = Math.floor(Math.random() * PARTICLE_TYPES.length);
      return PARTICLE_TYPES[randomIndex];
  }
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const description2 = this.props.data.description2;
    const description3 = this.props.data.description3;
    const scrollToPortfolio = (e) => {
      e.preventDefault(); // Prevent default anchor click behavior
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const particleProps = {
      type: this.state.particleType,
      bg: true
  };
  if (this.state.particleType === "cobweb") {
    particleProps.color = "#FF0000";
  }

    return (
      <header id="home">
        <ParticlesBg {...particleProps} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <br></br>
            <Fade bottom duration={1200}>
              <h3>{description2}.</h3>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{description3}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#portfolio" className="button btn project-btn" onClick={scrollToPortfolio}>
                  <i className="fa fa-book"></i>My Projects
                </a>
                <a href="https://github.com/ryandundun" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;