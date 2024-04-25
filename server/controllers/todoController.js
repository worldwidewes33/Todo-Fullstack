const Todo = require("../models/todoModel");

exports.createTodo = async (req, res, next) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.status(201).json({ status: "success", data: { todo: newTodo } });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      res.status(404).json({
        status: "error",
        error: `Unable to find todo with that id`,
      });
      return;
    }

    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.status(200).json({ status: "success", data: { todo } });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({ status: "success", data: { todos } });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.stauts(200).json({ status: "success", data: { todo: updatedTodo } });
  } catch (err) {
    res.status(500).json(err);
  }
};
