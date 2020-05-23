import React, {useState, createContext} from 'react';

export const themeContext = createContext();

const ThemeProviderContext = (props) => {
    
    const [themedata, setThemeData] = useState({
        isLightTheme : true,
        light : {syntax : '#555', ui:'#ddd', bg:'#eee'}, 
        dark :  {syntax : '#ddd', ui:'#333', bg:'#555'}
    });

    const toggle =()=>{
        setThemeData({
            ...themedata,
            isLightTheme : !themedata.isLightTheme
        })

    }

    return ( 
        <themeContext.Provider value={{...themedata, toggle: toggle}}>
            {props.children}
        </themeContext.Provider>
     );
}
 
export default ThemeProviderContext;