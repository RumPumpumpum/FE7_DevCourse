/*
    - d.ts파일
    User.tsx 컴포넌트가 있을 때,
    interface UserProps { ...
    같이 타입 분리를 하고싶다면?
    => types/User.d.ts 파일에 작성하여 User.tsx에서 별도의 import없이도
    src내에서 전역적으로 적용된다!
    (! 다만 src 폴더 하위에 있기 때문에 가능함)
    (d.ts는 아마 declare.ts의 약자?)

    - ReactElement와 ReactNode의 차이?
        ReactNode가 더 넓은 개념
        ReactElement는 Html 태그
}

*/
