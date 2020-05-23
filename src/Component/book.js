import React, {useContext, useState} from 'react';
import { themeContext } from '../Context/theme';
import {BookContext} from '../Context/book';

const  Book = () => {
    const {isLightTheme, light, dark} = useContext(themeContext);
    const {bookList} = useContext(BookContext);
     const theme = isLightTheme ? light : dark;

    return (  
       <div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
        <ul>
            {bookList.map(item => {
                return(
                    <li style={{background:theme.ui}} key={item.id}>
                    {item.title}
                </li>
                )
            })}
           
        </ul>
        </div>

    );
}
 
export default Book;