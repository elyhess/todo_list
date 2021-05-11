import React, { Fragment, useState, useEffect } from "react";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const response = await fetch("http://localhost:5000")
        const todoArray = await response.json();
        setTodos(todoArray);
    }

    async function deleteTodo(id) {
        try {
            await fetch(`http://localhost:5000/${id}`, {method: "DELETE"});

            setTodos(todos.filter(todo => todo.id !== id))
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])


    return <Fragment>
        <table class="table mt-5">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
            {
                todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </Fragment>
}

export default ListTodos;