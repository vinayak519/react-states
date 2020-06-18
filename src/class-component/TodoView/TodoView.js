import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Input from "../../component/UI/Form/Input";

class TodoViewClass extends Component {

    render(){
        return(
            <Aux>
                <li className={this.props.completed ? "list-group-item completed" : "list-group-item"} 
                    key={this.props.id} 
                >
                    <Input className="form-check-input" 
                        type="checkbox" 
                        id="inlineCheckbox1" 
                        value={this.props.completed} 
                        onChange={this.props.clickCompleted}
                    />
                    {this.props.name}
                    <div className="closeBtn" onClick={this.props.clicked}>X</div>
                </li>
            </Aux>
        )
    }

}

export default TodoViewClass;