

import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

//Change to functional component to use hooks
class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDesktop: false
      };
      this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
      this.setState({ isDesktop: window.innerWidth > 768});
    }

    render() {
      const isDesktop = this.state.isDesktop;

      return (
        <div id="nav-container">
            {isDesktop ? (<DesktopNav/>) : (<MobileNav/>)}
        </div>
      );
    }
  }
export default Nav;

