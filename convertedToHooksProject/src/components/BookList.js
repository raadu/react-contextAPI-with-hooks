import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => 
{
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;

    return(
        <div className="book-list"
        style={{color: theme.syntax, background: theme.bg}}>
            {books.map((book)=> {
             return(
                <ul key={book.id} style={{background: theme.ui}}>{book.title}</ul> 
             );   
            })}
        </div> 
    );
}

export default BookList;