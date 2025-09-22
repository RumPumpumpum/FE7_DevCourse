import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todoArr, setTodoArr] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodoArr((prev) => [...prev, newTodo]); // 이전의 상태로 무언갈 할 때는 화살표
  };

  const deleteTodo = (id: number) => {
    setTodoArr((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id: number) => {
    setTodoArr((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const editTodo = (id: number, newText: string) => {
    setTodoArr((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor addTodo={addTodo} />
        {/* 할 일 목록  */}
        <TodoList
          todoArr={todoArr}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
}
