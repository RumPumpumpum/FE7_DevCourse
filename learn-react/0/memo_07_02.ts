/*
    - Reducer
        const [상태변수, 액션(리듀서 발생함수)] = useReducer(리듀서함수, 초깃값)
            ㄴ 리듀서 함수-> 상태 업데이트 로직이 담겨있는 함수
            
    - useReducer(reducer, 0);로 reducer 함수를 지정했다면?
    1. 함수 선언
    function reducer(state: State, action: Action)
        ㄴ state = 초기값
        ㄴ action = action 발생 함수의 매개변수가 들어온다.
    - 액션 발생 함수로 인하여 현재 값을 변경 할 수 있도록
        어떠한 값이라도 반드시 리턴해줘야 한다.
            관례상, 아무런 조치를 하지 않을거면 현재 값인 state를 반환한다.

    2. 버튼에 이벤트 연결 및 리듀서 발생함수를 통해 매개변수를 넘겨줌
    <button onClick={() => countDispatch({ type: "increment" })}></button>
        ㄴ { type: "increment" } 타입이 action으로 넘어간다.
            ㄴ if (action.type === "increment") 조건을 reducer 함수에 달아놓으면
                return state + 1; 같은 방식으로 리턴하여 값 업데이트 가능


 */
