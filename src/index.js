//Compose Components

//What is compose components?
/*
 * This refers to a component that display one or more child components
 */

//Import dependecies

import React from 'react';
import ReactDOM from 'react-dom';

//Set a list of "Books"

let bookList = [
    {
        "title": "IT",
        "by": "Sthepen",
        "pages": 2334
    },
    {
        "title": "Harry Potter",
        "by": "JK",
        "pages": 54
    },
    {
        "title": "Matilda",
        "by": "UKNOW",
        "pages": 234
    }
];


//Create a component
const Book = ({title,author,pages}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
        </div>
    );
};

//Create a compose component, this "library" component is going to be made by "book"s components
//Note: Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. We can use the same keys when we produce two different arrays


const Library = ({bookList}) => {
    return (
        <div>
            {bookList.map((book , i) => {
                            return (<Book key={i} title={book.title} author={book.author} pages={book.pages}/>);
                         })}
        </div>
    );
};

ReactDOM.render(<Library bookList={bookList}/>,document.querySelector('#root'));

