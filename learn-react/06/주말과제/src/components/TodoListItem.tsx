import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

import { useState, useRef } from "react";

export default function TodoListItem({
  todoArr,
  toggleTodo,
  deleteTodo,
  editTodo,
}: {
  todoArr: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}) {
  const [isEditingId, setIsEditingId] = useState<number | null>(null);
  // const [editingText, setEditingText] = useState("");

  const editTextRef = useRef<HTMLInputElement>(null);

  const handleEditing = (id: number) => {
    if (isEditingId === id) {
      const newText = editTextRef.current?.value || "";
      editTodo(id, newText);
      setIsEditingId(null);
    } else {
      setIsEditingId(id);
    }
  };

  return (
    <>
      {todoArr.map((todo) => {
        {
          /* 할 일이 완료되면 .todo__item--complete 추가 */        }

        const liClassName = `todo__item ${
          todo.completed ? "todo__item--complete" : ""
        }`;

        return (
          <li className={liClassName} key={todo.id}>
            {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
            {todo.id === isEditingId && (
              <input
                type="text"
                className="todo__modify-input"
                ref={editTextRef}
                defaultValue={todo.text}
              />
            )}
            {todo.id !== isEditingId && (
              <Checkbox
                parentClassName="todo__checkbox-group"
                type="checkbox"
                className="todo__checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </Checkbox>
            )}


            <div className="todo__button-group">
              <Button
                className="todo__action-button"
                onClick={() => handleEditing(todo.id)}
              >
                <SvgPencil />
              </Button>
              <Button
                className="todo__action-button"
                onClick={() => deleteTodo(todo.id)}
              >
                <SvgClose />
              </Button>
            </div>
          </li>
        );
      })}
    </>
  );
}

\
\