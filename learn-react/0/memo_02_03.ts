/*
    - 스타일링
        전통적인 스타일링 방법
            ㄴ 인라인 스타일*
                style속성으로 스타일을 지정하는 방법
                컴포넌트 안에서 바로 정의하므로 직관적이나, CSS기능이 제한적 및 유지보수 어려움
            ㄴ 외부 스타일(global css)*
                ㄴ 별도의 CSS 파일에 CSS 코드를 작성하고,
                리액트 컴포넌트 파일과 연결해서 사용하는 방법
                ㄴ 규모가 커지면 스타일 충돌 가능성 올라감(CSS 오염 등)

        1.CSS Modules
            ㄴ*.module.css 파일을 통해서 스타일을 적용하는 방법
            ㄴ classname={css명.클래스명} 과 같이 객체 속성에 접근하듯 사용
            ㄴ 특정 컴포넌트에만 영향을 미치는 스타일을 작성할 때 유용
            ㄴ 핵심 주의점! 클래스 선택자만 사용하라
                h1{} 과 같이 태그선택자 등을 사용하면, 갑자기 글로벌 css의 냄새가 난다..
    
        - BEM(Block-Element-Modify) 규칙
            ㄴ Block Element Modify 각각 조합하여 클래스명 만들어라
            ㄴ Block → "컴포넌트 이름" Element → "컴포넌트 내부의 부분" Modifier → "상태나 변형"
                ㄴ Block__Element--Modifier
                    ㄴ .title(BAD) .card__title (GOOD)

        2.Tailwind CSS
        3.CSS-IN-JS
        (보통 1,2,3 중 하나를 선택해서 사용하며, 외부 스타일을 섞어서 사용함)

    - 컴포넌트 트리
        CSS를 불러온 순간 프로젝트 전체에 영향을 준다

        외부 스타일을 사용할 때 -> main.tsx에서 import함
            ㄴ 어차피 어디에서 넣어도 다 들어갈 거, 관리하기 편하게
            main.tsx에서 선언을 하자!

*/

/*
    classNames 라이브러리
        HTML의 class 속성은 문자열 하나만 받지만, 
        classNames를 사용하면 여러 개의 클래스 이름을 객체 또는 배열 형태로 전달하여 결합

        /////////////////////////////////////////////
        1. classNames는 CSS 클래스를 조합하는 도구이고, 
            ㄴ classNames를 사용해 isActive나 isDanger와 같은 상태에 따라 
                'active'나 'danger' 클래스를 쉽게 추가하거나 제거
            ㄴ  클래스 이름이 고유하지 않아 다른 컴포넌트와 충돌할 수 있음

        2. CSS Modules는 클래스 이름을 고유하게 만드는 시스템. 
            ㄴ styles.button과 styles.active는 빌드 과정에서 
                Button_button_abc123와 같은 고유한 이름으로 변환

        3. 이 둘은 함께 사용하면 강력한 시너지
            ㄴ CSS Modules의 고유한 클래스 이름 + classNames의 간결한 클래스 조합
        ///////////////////////////////////////////////

        - CSS Modules와 함께 사용하기 위해 하는 것
        const cx = classNames.bind(style);
            classNames 함수의 this 컨텍스트를 style에 영구적으로 바인딩
                ㄴ 함수 cx를 호출할 때, this는 항상 style 객체를 가리키게 된다
                    ㄴ cx()를 호출할 때마다 styles 객체를 매번 명시하지 않아도 된다.

        예시:
        <h1 className={`${style.red_c} ${style.["line_through"]}`}>
        cx를 이용해 위와같은 코드를 아래와 같이 바꿀 수 있다.
        <h1 className={cx("red_c", "line_through")}>


*/
