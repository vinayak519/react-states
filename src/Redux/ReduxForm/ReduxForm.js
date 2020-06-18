import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Input from "../../component/UI/Form/Input";
import Button from '../../component/UI/Button/Button';
import ReduxView from '../ReduxView/ReduxView';
import { connect }  from "react-redux";

const ReduxForm = (props) => {
    console.log("REDUX CHANGES FORM");

    const [toDoName,setToDoName] = useState([]);

    // Submit to the sate
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    // Remove the list from satet
    const onRemoveListHandler = (index) => {
    }

    // On To Do completed
    const onCompleteHandler = (index) => {
        // Replace the object with updated one 
        // setToDoName(oldState);
    }

    let toDoListItems = null;
    if(props.ctr.todo != ""){
        toDoListItems = props.ctr.todo.map( (item) => {
            return <ReduxView 
                    key={item.id} 
                    name={item.name} 
                    completed={item.completed}
                    clickCompleted={ () => props.onCompleteHandler(item.id) }
                    clicked={() => props.onRemoveListHandler(item.id)}
                />;
        })
    }else{
        toDoListItems = <li className="list-group-item">Add To Do Items</li>
    }


    return(
        <Aux>
            <div className="alert alert-warning" role="alert">
                REDUX State using Store
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                
                    <p className="text-dark  text-center">Make Your To Do List</p>
                    <form onSubmit={props.onSubmitHandler.bind(this)}>
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

//Connect dispatcher  with Store 
// subscribe the State from Store
const mapStateToProps = state => {
    return {
        ctr : state
    }
}

// map State with props
const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler : (event) => { dispatch({ type : "SUBMIT", value :  event}) },
        onRemoveListHandler : (index) => { dispatch({ type: "REMOVE", value : index})},
        onCompleteHandler : (index) => { dispatch({ type: "COMPLETED", value : index}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);