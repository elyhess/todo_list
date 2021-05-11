import { Router } from 'express';
const todo = require("../controllers/todo.controller");
const router = Router();

router.get('/:id', todo.getTodo);
router.get("", todo.getTodos);
router.post("", todo.createTodo);
router.patch("/:id", todo.updateTodo);
router.delete("/:id", todo.destroyTodo);

export default router;