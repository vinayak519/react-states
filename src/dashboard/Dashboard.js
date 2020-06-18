import React from "react";
import Aux from "../hoc/Aux";

import TodoFormClass from "../class-component/TodoForm/TodoForm";
import TodoFormFunctional from "../functional-component/TodoForm/TodoForm";
import ReduxForm from "../Redux/ReduxForm/ReduxForm";
import { Route, NavLink, Switch } from "react-router-dom";

const Dashboard = () => {
    return(
        <Aux>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Redux Component</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/class-component">Class Component</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={{
                        pathname : "/functional-component"
                    }}>Functional Component</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/class-component" component={TodoFormClass} />
                <Route path="/functional-component" component={TodoFormFunctional} />
                <Route path="/" component={ReduxForm} />
            </Switch>
        </Aux>
    )
}

export default Dashboard;