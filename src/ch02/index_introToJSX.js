//Intro to JSX

/* What is JSX and why is it useful?
 *
 * JSX stand for Javascript as XML
 *
 * JSX is a tag-base syntax that we can use to render React elemt.
 *
 * Insead of use as an exaple React.createElement , we can use a tag to create an element.
 *
 * JSX help us to writte code cleaner and easier to read.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

//When rendering an element remember encapsulated all the tags/content in a container (in a single tag)
ReactDOM.render(<div>
                    <h1>Hello World fomr JSX</h1>
                    <p>We're glad you're here :)</p>
                </div>,
                document.querySelector('#root'));
