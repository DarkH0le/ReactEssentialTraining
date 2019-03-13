//Import libraries

import React from 'react';
import ReactDOM  from 'react-dom';

//Set a state to skyday component

let skyData = {
    total: 50,
    powder:20,
    backcontry: 10,
    goal:100
};


//Create SkyDayComponent


class SkyDayCounter extends React.Component{
    render(){
        return(
            <section>Sky days
                <div><p>Total days: {this.props.total}</p></div>
                <div><p>Powder day: {this.props.powder}</p></div>
                <div><p>Backcontry days: {this.props.backcontry}</p></div>
                <div><p>Goal: {this.props.goal}</p></div>
            </section> 
        );
    };
}

//Render the component
ReactDOM.render(<SkyDayCounter total={skyData.total} powder={skyData.powder} backcontry={skyData.backcontry} goal={skyData.goal}/>,document.querySelector('#root'));
