import React, {Fragment, useEffect, useState} from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const response = await fetch("http://localhost:5000")
        const todoArray = await response.json();
        setTodos(todoArray)
    }

    const onSubmitForm = async e => {
        e.preventDefault(); // prevents refresh
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center my-5">Input Todo</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text"
                       placeholder="Add todo"
                       className="form-control"
                       value={description}
                       onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;