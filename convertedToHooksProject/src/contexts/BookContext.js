import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: "Dustu chelere dol", id:1},
        {title: "The old man and the sea", id:2},
        {title: "Gullivers Travel", id:3},
        {title: "Around the world in eighty days", id:4}
    ]);
    
    return (  
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;