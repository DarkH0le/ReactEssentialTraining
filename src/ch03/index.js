//Intro to Props!!!

/*
 * What are props?
 *
 *  React Props or properties, help us to pass data to our components, this could help us to make 
 *  more dynamic components.
 */

//Step 1: import dependecies

import React from 'react';
import ReactDOM from 'react-dom';

//Step2: Create a simple Class Component

//**** Remember Class components always have a render method and extends the React.Component class


class SimpleComponent extends React.Component {
    //Render should have a single cointainer 
    render(){
        return(
            <div>
                <h1>Simple Message :D </h1>
            </div>
        );
    }
}

//Step3: render the component
//ReactDOM.render(<SimpleComponent/>,document.querySelector('#root'));


//Step4: add props to the call of the component just like adding attribute to and html tag

//ReactDOM.render(<SimpleComponent msg='msg from props'/>,document.querySelector('#root'));

//Steap 5: create a react Component class that use the given props

class ComponentWithProps  extends React.Component {
    //Render should have a single cointainer 
    render(){
        //Check what is in the props object
        console.log(this.props);
        return(
            <div>
                <h1 style={{color: this.props.color}} >{this.props.msg}</h1>
            </div>
        );
    }
}

//Setp 6: render the props component and pass it the appropiate props

ReactDOM.render(<ComponentWithProps msg="Hello from props" color="blue" />, document.querySelector('#root'));
