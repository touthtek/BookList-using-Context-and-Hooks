import React, {useState, useContext} from 'react';
import { themeContext } from '../Context/theme';
import { AuthContext } from '../Context/auth';

const Themetoggle = () => {
   const {toggle} = useContext(themeContext);
   const {userAuthentication} = useContext(AuthContext);

    return (
        <>
       Change to dark Theme  <input type="checkbox" onClick={toggle} />
       <br/>
       Check to Login  <input type="checkbox" onClick={userAuthentication} />
        </>
     );
}
 
export default Themetoggle;