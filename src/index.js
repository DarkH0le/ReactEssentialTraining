//Import libraries

import React , {Component} from 'react';
import ReactDOM  from 'react-dom';

//Set a state to skyday component

let skyData = {
    total: 50,
    powder:20,
    backcontry: 10,
    goal:100
};


//Create SkyDayComponent


class SkyDayCounter extends Component{
    render(){
        const {total,powder,backcontry,goal} = this.props;
        return(
            <section>Sky days
                <div><p>Total days: {total}</p></div>
                <div><p>Powder day: {powder}</p></div>
                <div><p>Backcontry days: {backcontry}</p></div>
                <div><p>Goal: {goal}</p></div>
            </section> 
        );
    };
}

//Render the component
ReactDOM.render(<SkyDayCounter total={skyData.total} powder={skyData.powder} backcontry={skyData.backcontry} goal={skyData.goal}/>,document.querySelector('#root'));
