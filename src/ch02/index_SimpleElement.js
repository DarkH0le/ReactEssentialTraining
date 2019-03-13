//Import in order to use the library
import React from 'react';

//One of the most important methods in this module is the render method, it help us to render the react elements
import ReactDOM from 'react-dom';

//create and element
/*The element takes in three arguments
    1.- The type of element we want to create
    2.- Second is any attributes we want to provide in the form of and object
    3.- The child elements 
*/

//create some css styles

let style = {
    backgroundColor : 'orange',
    color : 'white',
    fontfamily: 'arial'
    }


const title = React.createElement('h1',
                                  {id: 'title',className: 'header', style: style},
                                 'Hello world! from react element');

//Render the element
//Render method takes in 2 argument, the element and where do you want to render the element.

ReactDOM.render(title, document.querySelector('#root'));

