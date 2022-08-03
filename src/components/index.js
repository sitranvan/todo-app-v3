import React, { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import randomColor from "./color";
function TodoApp() {
  const initTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initTodoList);
  const inputRef = useRef();
  const updateRef = useRef(-1);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const clearFocus = () => {
    setInput("");
    inputRef.current.focus();
    updateRef.current = -1;
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: v4(), title: input, isCompleted: false, color: randomColor() },
    ]);
    clearFocus();
  };

  const handleRemoveTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    updateRef.current = -1;
  };

  const handleEditTodo = (todo, index) => {
    updateRef.current = index;
    setInput(todo.title);
    inputRef.current.focus();
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList];
    newTodoList[updateRef.current].title = input;
    setTodoList(newTodoList);
    clearFocus();
  };

  const handleCompleted = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="todo-app">
      <h1 className="title">Todo App</h1>
      <TodoForm
        ref={inputRef}
        input={input}
        setInput={setInput}
        onSubmit={handleAddTodo}
        onUpdate={handleUpdateTodo}
        updateRef={updateRef}
      />
      <TodoList
        todoList={todoList}
        onRemove={handleRemoveTodo}
        onEdit={handleEditTodo}
        onCompleted={handleCompleted}
        updateRef={updateRef}
      />
    </div>
  );
}

export default TodoApp;
