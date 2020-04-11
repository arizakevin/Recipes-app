import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';
import { animateScroll as scroll} from 'react-scroll';

class Navigation extends React.Component {
    constructor(props) {
      super(props);
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
      // console.log(document.body.getBoundingClientRect());
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos
      });
    };

    handleSubmitSingout = () => {
      this.props.updateIsSignedIn(false);
      scroll.scrollTo(115);
    }

    goToTop = () => {
      scroll.scrollTo(115);
    } 

    render () {
      const { pathname } = this.props.history.location;
      const { isSignedIn } = this.props;
      if ((pathname === "/") && !isSignedIn) {
        return (
          <nav className={this.state.show ? "nav navActive" : "nav navHidden"}>
            <Link to="/"><p onClick={this.goToTop} className='p size pointer left'>HOME</p></Link>
            <Link to="/register"><p className='p size pointer right'>REGISTER</p></Link>
            <Link to="/signin"><p  className='p size right'>SIGN IN</p></Link>
          </nav>
        ); 
      } else if ((pathname === "/") && isSignedIn) {
        return (
          <nav className={this.state.show ? "nav navActive" : "nav navHidden"}>
            <Link to="/"><p onClick={this.goToTop}  className='p pointer left'>HOME</p></Link>
            <Link to="/"><p onClick={this.handleSubmitSingout} className='p pointer right'>SIGN OUT</p></Link>
            <Link to="/myrecipes"><p className='p pointer right'>MY RECIPES</p></Link>
          </nav>
        );
      } else if ((pathname === "/myrecipes") && isSignedIn) {
        return (
          <nav className={this.state.show ? "nav navActive" : "nav navHidden"}>
            <Link to="/"><p onClick={this.goToTop} className='p pointer left'>HOME</p></Link>
            <Link to="/"><p onClick={this.handleSubmitSingout} className='p pointer right'>SIGN OUT</p></Link>
          </nav>
        );
      } else if ((pathname === "/signin") || (pathname === "/register")){
        return (
          <nav className={this.state.show ? "nav navActive" : "nav navHidden"}>
            <Link to="/"><p onClick={this.goToTop} className='p pointer left'>HOME</p></Link>
            <Link to="/register"><p className='p pointer right'>REGISTER</p></Link>
            <Link to="/signin"><p className='p pointer right'>SIGN IN</p></Link>
          </nav>
        );
      } 
    } 
}

export default withRouter(Navigation);