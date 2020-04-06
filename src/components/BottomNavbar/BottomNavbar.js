import React from 'react';
import './BottomNavbar.css';

export default class BottomNavbar extends React.Component {
	constructor() {
    	super();
    	this.state = {
    	  show: true,
    	  scrollPos: 0
    	};
  	}
  	componentDidMount() {
  	  window.addEventListener("scroll", this.handleScroll);
  	}
  	componentWillUnmount() {
  	  window.removeEventListener("scroll", this.handleScroll);
  	}
  	handleScroll = () => {
  	  //console.log(document.body.getBoundingClientRect());
  	  this.setState({
  	    scrollPos: document.body.getBoundingClientRect().top,
  	    show: document.body.getBoundingClientRect().top < this.state.scrollPos
  	  });
  	};

	render() {
		return (
			<nav className={this.state.show ? "active navbar" : "hidden navbar"}>
				<p className="navtext Left">User registration and saving recipes will work soon ;)</p>
  				<p className="navtext Right">Developed with love by 
					<a href='https://www.linkedin.com/in/kevinwarizas/' 
             target="_blank" 
             rel="noopener noreferrer"
          > 
            Kevin Ariza
            <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
          </a>
				</p>
			</nav>
		);
	}
}