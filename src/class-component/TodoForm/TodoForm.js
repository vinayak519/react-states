import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Input from "../../component/UI/Form/Input";
import Button from "../../component/UI/Button/Button";
import TodoView from "../../class-component/TodoView/TodoView";

import { withRouter} from "react-router-dom";

class TodoFormClass extends Component{
    
    state = {
        todo: []
    };
    
    onSubmitHandler = (event) => {
        event.preventDefault();
        let oldState = [...this.state.todo];
        const value = event.target['name'].value; 
        oldState.push({id: Math.random().toFixed(2), name : value, completed : false});
        this.setState({ todo : oldState});
        //clear form
        event.target['name'].value = "";
    }
    
    // Remove item 
    onRemoveListHandler = (index) => {
        console.log(index);
        let oldState = [...this.state.todo];
        let updatedState = oldState.filter( item => item.id !== index);
        this.setState({todo: updatedState});
    }
    
    // Completed item
    onCompleteHandler = (index) => {
        console.log(index);
        let oldState = [...this.state.todo];
        let updatedState = oldState.filter( item => {
            if(item.id === index){
                // change the compete object true or false 
                let updatedCount;
                if(item.completed){
                    updatedCount = item.completed = false;
                }
                else{ updatedCount = item.completed = true; }
                // updated item
                return item;
            }
        });
        // Remove the unchanged item and add the updated one
        oldState.splice(index, 1, updatedState);
        this.setState(oldState);
    }
    
    
    render(){
        console.log("CLASS FORM");
        
        let toDoListItems = null;
        if(this.state.todo.length){
            toDoListItems = this.state.todo.map( (item) => {
                return <TodoView 
                        key={item.id}
                        id={item.id}
                        name={item.name} 
                        completed={item.completed}
                        clickCompleted={ () => this.onCompleteHandler(item.id) }
                        clicked={() => this.onRemoveListHandler(item.id)}
                    />;
            })
        }else{
            toDoListItems = <li className="list-group-item">Add To Do Items</li>
        }

        return(
            <Aux>
                <div className="alert alert-warning" role="alert">
                    Class Component State -  with setState() and State
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    
                        <p className="text-dark  text-center">Make Your To Do List</p>
                        <form onSubmit={this.onSubmitHandler}>
                            <Input className="form-control mb-3" type="text" name="name" placeholder="Enter To Do Items"/>
                            <Button classProp="btn btn-warning btn-block">Submit</Button>
                        </form>

                    </div>
                </div>

                <ul className="list-group">
                    {toDoListItems}
                </ul>
            </Aux>
        )
    }
}

export default withRouter(TodoFormClass);