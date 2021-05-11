const db = require("../models")
const Todo = db.rest.models.todo;

// get one
exports.getTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOne({where: {id}});
    if(!todo) {
        return res.status(400).send({message: `Todo with id ${id} not found.`});
    }
    return res.send(todo)
}
// get all
exports.getTodos = async (req, res) => {
    const todos = await Todo.findAll({ order: ["id"]});
    if(!todos) {
        return res.status(400).send({message: "No todos found."});
    }
    return res.send(todos)
}
// create
exports.createTodo = async (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).send({message: "Please include a description."});
    }
    try {
        let newTodo = await Todo.create({
            description,
        });
        return res.send(newTodo)
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        });
    }
}
// update
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const todo = await Todo.findOne({where: {id}});
    if (!todo) {
        return res.status(400).send({message: `No todos with id ${id}.`});
    }

    try {
        if (description) {
            todo.description = description;
            todo.save();
            return res.send({
                message: `Todo updated successfully.`
            });
        } else {
            return res.send({
                message: "Description can't be blank."
            })
        }
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        });
    }
}
// destroy
exports.destroyTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: {id} })
    if (!todo) {
        return res.status(400).send({message: `No todos with id ${id}.`});
    }

    try {
        await todo.destroy();
        return res.send({message: `User with id ${id} deleted.`})
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        });
    }
}