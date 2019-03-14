//Sample of form usage: use the color picked from a form selected by the user

//Import dependecies
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

//Creating the component

class FavoriteColor extends Component {

    //Init the state

    state = {"color":""}

    //Update the color
    colorPicker = ({target:{value}}) => {
        this.setState({"color":value});
    }
    
    //Submit action
    submit = (e) =>{
        e.preventDefault();
        console.log(this.state.color);
    }
    render(){
        return(
            <div className="colorPicker">
                {/* Not sure where the onSubmit comes from :D */}
                <form onSubmit={this.submit}>
                    <label>Pick a color: 
                        <input type="color" onChange={this.colorPicker}/>
                    </label>
                    <button type="submit">Click Me!</button>
                </form>
            </div>
        )//End return
    }//End render
}


ReactDOM.render(<FavoriteColor/>,document.querySelector("#root"));
