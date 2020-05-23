import React, {useState, useContext} from 'react';
import {themeContext} from '../Context/theme';
import { AuthContext } from '../Context/auth';

const NavBar = () => {

    const {isLightTheme, light, dark} = useContext(themeContext);
    const {isAuthenticationstatus, userAuthentication} = useContext(AuthContext);
      console.log(isAuthenticationstatus);
     const theme = isLightTheme ? light : dark;
    return ( 
     
      <nav style={{background:theme.ui, color:theme.syntax}}>
       <h2>Context App</h2>
       {isAuthenticationstatus  ? <p>LogIn</p> : <p>LogOut</p>}
          <ul>
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
          </ul>

      </nav>

     );
}
 
export default NavBar;