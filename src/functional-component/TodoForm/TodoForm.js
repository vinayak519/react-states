import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Button from '../../component/UI/Button/Button';
import Input from "../../component/UI/Form/Input";

import TodoView from "../TodoView/TodoView";

const TodoForm = (props) => {
    console.log("CHANGES FORM");

    const [toDoName,setToDoName] = useState([]);

    // Submit to the sate
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const value = event.target['name'].value; 
        setToDoName( prevState => [
            ...prevState,
            {id: Math.random().toFixed(2), name : value, completed : false}
        ]);
        event.target['name'].value = "";
    }

    // Remove the list from satet
    const onRemoveListHandler = (index) => {
        let oldState = [...toDoName];
        let newState = oldState.filter( item => item.id !== index);
        setToDoName(newState);
    }

    // On To Do completed
    const onCompleteHandler = (index) => {

        let oldState = [...toDoName];
        //get the checked item 
        oldState.filter( item => {
            if(item.id === index){
                // changet the compete object true or false 
                let updatedCount;
                if(item.completed){
                    updatedCount = item.completed = false;
                }
                else{ updatedCount = item.completed = true; }
                return [
                    ...oldState,
                    item[updatedCount]
                ]
            }
        });
        // Replace the object with updated one 
        setToDoName(oldState);
    }

    let toDoListItems = null;
    if(toDoName != ""){
        toDoListItems = toDoName.map( (item) => {
            return <TodoView 
                    key={item.id} 
                    name={item.name} 
                    completed={item.completed}
                    clickCompleted={ () => onCompleteHandler(item.id) }
                    clicked={() => onRemoveListHandler(item.id)}
                />;
        })
    }else{
        toDoListItems = <li className="list-group-item">Add To Do Items</li>
    }

    return(
        <Aux>
            <div className="alert alert-warning" role="alert">
                Functional Component State -  with useState()
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                
                    <p className="text-dark  text-center">Make Your To Do List</p>
                    <form onSubmit={onSubmitHandler}>
                        <Input className="form-control mb-3" type="text" name="name" placeholder="Enter To Do Items"/>
                        <Button classProp="btn btn-warning btn-block">Submit</Button>
                    </form>

                </div>
            </div>

            {/* List of Todos */}
            <ul className="list-group">
                {toDoListItems}
            </ul>

        </Aux>
    )

}

export default React.memo(TodoForm);