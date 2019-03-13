//Compose Components

//What is compose components?
/*
 * This refers to a component that display one or more child components
 */

//Import dependecies

import React from 'react';
import ReactDOM from 'react-dom';

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

const Library = () => {
    return (
        <div>
            <Book title="IT" author="Sthepen King" pages="503"/>
            <Book title="Hunger Games" author="Carolina Vega" pages="233"/>
            <Book title="Harry Potter" author="J.K Rowling" pages="307"/>
        </div>
    );
};

ReactDOM.render(<Library/>,document.querySelector('#root'));

