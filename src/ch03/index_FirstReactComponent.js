//Create a react component

/* Create a react component
 * 
 * Create the component using the class syntax
 *
 * All the react components most have a render method
 *
 * Remeber: All the components should be capitalized
 *
 * The class must extender React.Component class
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render(){
        return (
            <h1>Hello from a react component</h1>
        );
    }
}

ReactDOM.render(<Message/>,document.querySelector('#root'));
