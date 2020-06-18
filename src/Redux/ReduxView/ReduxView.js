import React from "react";
import Aux from "../../hoc/Aux";
import Input from "../../component/UI/Form/Input";

const ReduxView = (props) => {
    console.log("REDUX CHANGES VIEW");
    return(
        <Aux>
            <li className={props.completed ? "list-group-item completed" : "list-group-item"} 
                key={props.id} 
            >
                <Input className="form-check-input" 
                    type="checkbox" 
                    id="inlineCheckbox1" 
                    checked={props.completed} 
                    onChange={props.clickCompleted}
                />
                {props.name}
                <div className="closeBtn" onClick={props.clicked}>X</div>
            </li>
        </Aux>
    )
}

export default ReduxView;