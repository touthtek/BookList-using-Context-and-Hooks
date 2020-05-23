import React, {useState, createContext} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [bookList, setBookList] = useState([
        {id:1, title : 'the Avengers'},
        {id:2, title : 'the Dangerous Plan'},
        {id:3, title : 'the Man without heart'},
    ]); 
    return ( 
        <BookContext.Provider value={{bookList}}>
           {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;