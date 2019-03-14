//Intro to state and more conditional rendering

//Import dependecies

import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//Set a list of "Books"

let bookList = [
    {
        "title": "IT",
        "by": "Sthepen",
        "pages": 234
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
const Book = ({title,author,pages,freeBookMark}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free? {freeBookMark ? 'YES!' : 'NO'}</p>
        </div>
    );
};

//Create a ES6 class and give it a state using this.state
//Note: Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. We can use the same keys when we produce two different arrays

class Library extends Component {

    /* constructor(props){
        super(props)
        this.state = {
            "open" : true
        }
        }*/

    //Setting up the state, same as above
    state = {"open":true,"freeBookMark":false, "hiring":false}

    toggleOpenClosed = () => {
        this.setState({
            "open" : !this.state.open
        });
    }

    render(){
        console.log(this.state);
        const {bookList} = this.props
        return (
            <div>
                <h1> The library is {this.state.open ? 'open':'closed'}!!!</h1>
                {bookList.map((book , i) => {
                                return (<Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark}/>);
                })}
                <button onClick={this.toggleOpenClosed}></button>
            </div>
        );
      
    }
}

ReactDOM.render(<Library bookList={bookList}/>,document.querySelector('#root'));

