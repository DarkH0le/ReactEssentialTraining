//Component life cycle methods

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

    //Setting up the state, same as above
    state = {"open":true,
            "freeBookMark":false,
            "hiring":false,
            "loading":false,
            "data":[]
    }
    
    componentDidMount(){
        console.log("The component is now monted, great place to fetch data!");
        this.setState({"loading":true});
        fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
            .then(data => data.json())
            .then(data =>this.setState({"data":data,"loading":false}))
    }

    componentDidUpdate(){
        console.log("The component just updated!");
    }


    toggleOpenClosed = () => {
        this.setState({
            "open" : !this.state.open
        });
    }

    render(){
        console.log("In render method of Library Component");
        // console.log(this.state);
        const {bookList} = this.props
        return (
            <div>
                {this.state.loading
                    ? <h3>Feaching data...</h3>
                    : <div>
                          {this.state.data.map(product =>{
                                               return(<div>
                                                   <h4>{product.name}</h4>
                                                   <p>{product.description}</p>
                                                   <img src={product.image} alt={product.description} height={100}/>
                                               </div>)})}
                                           </div>
                }
                <h1> The library is {this.state.open ? 'open':'closed'}!!!</h1>
                {bookList.map((book , i) => {
                                return (<Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark}/>);
                })}
                <button onClick={this.toggleOpenClosed}>Change!</button>
            </div>
        );
      
    }
}

ReactDOM.render(<Library bookList={bookList}/>,document.querySelector('#root'));

