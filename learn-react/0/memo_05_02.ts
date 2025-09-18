/*
    React에서는 addEventListener로 이벤트를 등록하지 않는다.
    이벤트 속성을 이용해서 이벤트를 등록한다!

    모든 태그는 on으로 시작하는 속성이 있다.
        ㄴ onClick, onChange, onInput, onSubmit 등등등

    이벤트 연결하는 방법 1. 함수의 매개변수를 전달해야 할 필요가 없을 경우에는
    <button OnClick={hangleClick}>버튼</button>

    이벤트 연결하는 방법 2. 함수의 매개변수를 전달해야 하는 경우에는
    <button onClick={() => handleClick()}>버튼</button>

    - 이벤트 객체
        특정 이벤트와 관련된 정보들이 담겨져있는 객체
            암묵적으로 넘겨지는 이벤트 객체: SyntehticBaseEvent
            매개변수로 넘겨지는 이벤트 객체: PointerEvent

        onClick={(e) => handleClick(e, "kim")}
            ㄴ 이런식으로 이벤트 객체를 명시적으로 잡아서 넘겨줄 수 있다.
            (event) 로 쓰기보단 (e) 처럼 명시적으로 넘겨서 사용
                ㄴ 명시적으로 받아서 쓰면 타입 추론도 됨!
    
*/
