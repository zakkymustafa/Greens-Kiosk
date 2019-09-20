import React from 'react';
import { NavLink} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return (
            <nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#">
      Blues Kiosk
    </a>
    <NavLink className="py-2 d-none d-md-inline-block" exact={true} to ='/'>Home</NavLink>
    <NavLink className="py-2 d-none d-md-inline-block" exact={true} to ='/about'>About</NavLink>
  </div>
</nav>
        )
    }

}

export default Menu;