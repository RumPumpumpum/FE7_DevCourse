import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

export default function TodoList({
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
  const isListEmpty = todoArr.length === 0 ? true : false;
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {isListEmpty && <TodoListEmpty />}

        {/* 할 일 목록이 있을 때 */}
        {!isListEmpty && (
          <TodoListItem
            todoArr={todoArr}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )}
      </ul>
    </>
  );
}
