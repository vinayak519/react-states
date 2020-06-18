import React from "react";

const Button = (props) => {
    return(
        <button className={props.classProp}>{props.children}</button>
    )
}

export default Button;