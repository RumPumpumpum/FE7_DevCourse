/*
    - 스타일링
        전통적인 스타일링 방법
            ㄴ 인라인 스타일*
            ㄴ 외부 스타일(global css)*

        1.CSS Modules

        2.Tailwind CSS (코딩자율학습 p.215)
            ㄴ 등장 전 까지 BootStrap이 시장을 점유했음
                이후 점유율이 줄어들고, 그 자리를 테일윈드가 먹음
            ㄴ _유틸리티 퍼스트(Utility-First)_ 방식으로 설계된 CSS 프레임워크
                ㄴ 유틸리티 퍼스트란?
                    작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI를 만드는 방식
                        <button class="bg-blue-500 text-white p-2.5"></button>
                                        ㄴ1           ㄴ2       ㄴ3
                    ㄴ Tailwind CSS IntelliSense 익스텐션을 이용하면 해당 양식으로 써도,
                        편하게 쓸 수 있음 (프리뷰, 목록 등등)
            ㄴ 컴포넌트 유료 판매 시장이 활성화 되어있음! 코드 자체를 파는 중

            ㄴ BootStrap처럼 미리 만들어진 컴포넌트를 제공하는 대신,
                테일윈드는 아주 작은 유틸리티 클래스를 제공

            ㄴ 테일윈드는 직접 class를 적용한 컴포넌트에만 css가 적용됨
                ㄴ 현 react의 컴포넌트 기반 개발과 잘 어울림
                    궁합이 잘 맞아서 급격히 떠오르는 중
                ㄴ BUT html의 가독성이 떨어지는 단점은 있음
                    ㄴ 해당 부분은 커스텀 유틸리티를 적용하여 어느정도 해결 가능
                        ㄴ  @utility btn-primary {
                            @apply bg-amber-700 text-white rounded hover:bg-blue-600 px-4 py-2;
                            }

        2.1 Tailwind-merge
            ㄴ classNames와 비슷하다.
            ㄴ bg-amber-500 bg-blue-500 이면 ? 무조건 뒤에온게 적용. amber는 무시됨
            twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
                                → 'hover:bg-dark-red       p-3 bg-[#B91C1C]'
            중복된 클래스를 알아서 정리해준다!

            ㄴ const isBlue = true... isblue&&`bg-blue-500`
                과 같은 조건부 처리도 가능! classNames와 상당히 비슷하죠?

        3.CSS-IN-JS (코딩자율학습 p.200~)
            ㄴ CSS를 자바스크립트 코드 안에서 작성하고 사용하는 방식
            ㄴ 유명한 CSS-IN-JS
                1. styled-components
                    ㄴ Tailwind같은 것 때문에 점유율이 점점점 줄어드는 중.. 지는 별
                        ㄴ 개발이 공식 종료됨 -> 유지보수 모드
                2. emotion
                    ㄴ styled-components 기능 다 쓸 수 있게 해줌
                        ㄴ @emotion/styled 

            CSS를 자바스크립트가 생성한다! -> 자바스크립트 런타입에 CSS가 생성된다!
            CSS-IN-JS 스타일링을 많이 하면 할 수록, 
            자바스트립트 런타임에 처리가 되는 코드의 양이 많아짐
            그래서 vanilla extract는 해당 문제를 극복하려함

            3. vanilla extract - 2023에 나온 비교적 최신
                ㄴ 제로 런타임
                    : 빌드할 때 CSS를 생성하겠다.
                ㄴ npm run build -> npm run preview
                    ㄴ "dist/assets/CSS파일" 과 같이 별도의 CSS가 생김
                        ㄴ 제로 런타임으로 돌아감! 실제 퍼포먼스가 더 좋다
                
            면접 단골질문: 제로 런타임이란 무엇인가

*/
