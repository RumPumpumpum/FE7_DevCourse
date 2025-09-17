/*
    <Button>Hello,World!</Button>
    - 컨텐츠는 Children 이라는 props 로 전달된다.
        ㄴ React.ReactNode 타입
            ㄴ { children }: { children: React.ReactNode }
        ㄴ children은 하나만 받아서 사용할 수 있다.

    그럼 children을 활용하는 방법과, 프로퍼티를 활용하는 방법 중 어느걸 사용하는게 좋을까?
    정답은 없다. 내 목적만 달성할 수 있으면 된다.
    <강사님이 사용하는 방법>
    1.컨텐츠를 통채로 바꾸고 싶으면 children을 쓰고,
    2.컨텐츠의 일부분만 바꾸고 싶으면 프로퍼티를 쓰면 된다.


    - Tailwind는 기본적으로 reset 스타일이 적용되어있다.
    <button>btn</button> 과 같이 기본적인 태그를 사용하면
    기본 스타일이 적용되지 않고 btn 텍스트만 보이게 된다.

    
    - 버튼 만들 때, type도 있어야하고.. value도 있어야하고.. children도 넣어야하고
    올인원 없나?
     ㄴ React.ComponentPropsWithoutRef<"button">  (타입스크립트 제공)
        ㄴ button 태그에 들어갈 수 있는 모든 속성을 다 포함하고 있다.
        ㄴ 제네릭 타입과 형태가 비슷해 보이는데? -> 제네릭 타입 맞음
        
    ㄴ 퍼포먼스의 영향은 없는가? 엄청 많은 속성을 넣을건디?
        ㄴ 영향 없음. 
        타입스크립트 -> 자바스크립트로 컴파일 될 때, 안쓰는건 알아서 트리쉐이킹 됨.
    
*/
