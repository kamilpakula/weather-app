import React from "react";
import "../styles/Form.css";

const Form = (props) => {
    return (
        <form className="Form" onSubmit={props.submit}>
            <input
                className="form__input"
                type="text"
                value={props.value}
                onChange={props.change}
            />
            <button className="form__btn">wyszukaj miasto</button>
        </form>
    );
};

export default Form;
