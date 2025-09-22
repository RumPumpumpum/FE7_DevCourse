/*
    Props + Drilling 방식으로 구현

                App
                 |
                Todo
            ------|--------------
          |        |             |
    TodoHeader   TodoList   TodoEditor
                  |         |        |
            TodoListItem   Button      Input
            |         |
          Button    Checkbox

  TodoEditor의 todoInput에 할 일을 적고 Add 버튼을 눌렀을 때,
  Todo 컴포넌트의 할 일 목록 상태에 할 일을 추가

  TodoList에서는 할 일 목록을 받아서 랜더링
  할 일은 Checked 속성를 가지고 있어야함
  
할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)

*/

import Todo from "./components/Todo";

export default function App() {
  return (
    <>
      <Todo />
    </>
  );
}
