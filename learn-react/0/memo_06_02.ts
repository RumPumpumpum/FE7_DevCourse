/*
    - useRef
        current 속성을 가진 하나의 객체를 반환
        이 객체는 컴포넌트가 다시 렌더링되어도 동일한 객체를 유지
            ㄴ 컴포넌트의 재렌더링에 영향을 받지 않고 값을 유지해야할 때 사용

    - const ref = useRef<HTMLHeadingElement>(null);
        ㄴ ref는 UseRef로 반환된 참조를 담는 객체
            ㄴ ref.current는 그 참조의 실제 내용물

    - 폼 요소를 제어하는 방법
        1. 제어 컨트롤러 (Controlled)
            ㄴ 입력 값이 리액트의 상태에 의해서 제어되는 컴포넌트
            ㄴ useState + onChange
            ㄴ 장점: 실시간으로 사용자가 입력한 걸 즉시 알 수 있음
                ㄴ onChange로 변경된걸 useState로 즉시 연동

        2. 비제어 컨트롤러 (Uncontrolled)
            ㄴ 입력값이 DOM 자체에서 관리되는 컴포넌트
            ㄴ useRef + current
            ㄴ 단점: 사용자가 실시간으로 무엇을 입력하는지 알 수 없음
    
*/
