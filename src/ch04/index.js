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

//Setting up some functions to display goal progress
const getPercent = (decimal) => {return (decimal * 100 + '%')};
const calcGoalProgress = (total,goal) => {
    return getPercent(total/goal);
};

//Create a component as a function

const SkyDayCounter = ({total,powder,backcontry,goal}) =>{
    return(
        <section>Sky days
            <div><p>Total days: {total}</p></div>
            <div><p>Powder day: {powder}</p></div>
            <div><p>Backcontry days: {backcontry}</p></div>
            <div><p>Goal: {calcGoalProgress(total,goal)}</p></div>
        </section> 
    );
};
//Render the component
ReactDOM.render(<SkyDayCounter total={skyData.total} powder={skyData.powder} backcontry={skyData.backcontry} goal={skyData.goal}/>,document.querySelector('#root'));
