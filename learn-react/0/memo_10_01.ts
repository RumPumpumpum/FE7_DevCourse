/*
    리액트 라우터
        6 -> 7 버전 업데이트 시 가장 큰 변화
        기존 6까지는 리액트와 함께 사용해야하는 곁다리, 소모품 느낌
        7부터 리액트 라이트가 하나의 프레임워크로써 독립을 시작

        Declarative(선언적) 방법을 통해 리액트 라우터를 배울 것


    용어 정리
    라우터 : 앱 전체에서 라우팅 시스템을 제공하는 컨테이너 (react-router)
    라우트 : 특정 URL 패턴과 컴포넌트를 매핑하는 규칙
        ㄴ 라우트를 정의해야한다.

    Declarative : 라우터를 이용해서 라우트들을 정의해가는 과정

    import { Outlet } from "react-router";
      <Outlet />
    : 중첩된 자식 컴포넌트들이 Outlet 자리에 렌더링 된다.


    - 중첩 라우트 방식
    1.자식 컴포넌트가 index로 되어있으면 부모 컴포넌트를 렌더링만 해도, 해당 자식 컴포넌트가 같이 렌더링됨
    2.path를 지정하면 부모/자식 으로 주소를 입력해서 렌더링 됨


    - 레이아웃 라우트
        layouts 폴더에 레이아웃 파일을 만들어,
        <Route element={<DafaultLayout />}>로 중첩 라우트를 이용해 감싸
        공통의 레이아웃을 가지게 한다

    - 라우트 프리픽스(prefix)
        공통의 접두사를 붙여주는 방식
        <Route path="v1">로 라우트 중첩하면?
        http://localhost:5173/v1/dashboard/setting 같이 v1의 접두사가 공통으로 들어감

    - 중첩 라우트 방식에서 path를 안 쓰면 레이아웃 라우트고,
        element를 안 쓰면 라우트 프리픽스 방식이다!


    - 동적 세그먼트, 고정 세그먼트
        /team/1, /team/2 처럼 접근하게 하고싶다.
            ㄴ 고정 세그먼트로 한다면? team/ 에 대한 1,2,3 총 3개의 라우터 정의가 필요하다.
                팀 4는 정의 안했으니 접근 불가능 할 것이다.
        이럴 때, 동적 세그먼트 사용!
         콜론을 붙이고 적절한 식별자를 카멜케이스로 적으면 됨
            ㄴ <Route path="team/:id" element={<Team />} />

        <Route path="team/:id/group/:groupId" element={<Team />} />
            ㄴ 동적 세그먼트는 몇개든지 지정 가능하다

    - 옵셔널 세그먼트
        ?를 붙여서 쓴다.
        근데 잘 안씀
        <Route path="team?/:id?/group/:groupId" element={<Team />} />

    -  스플랫
        <Route path="*" ></Route>
            모든게 걸린다.
            Not Found로 활용
            앞에서 안 걸린거 여기서 다 걸림 

    
    -리액트 19부터, 탭 옆에 나타나는 이름을 컴포넌트에서 설정 가능 <title></title>


    -동적 세그먼트 값 가져올때는 useParams()
    쿼리셀렉터 값 가져올때는 useSearchParams()

    - a태그를 사용하면, 전체를 새로 렌더링한다.
    리액트는 이것보다, 바뀐 부분만 변하는걸 목표로함
        Link로 a태그를 대체
        ㄴ <Link to="/">home</Link>
    Link -> 단순 이동
    NavLink -> 단순 이동 + isActive
        ㄴ 콜백 함수형태로 가져와서 클릭되어있을 때는 검정, 아니면 빨강 이런식으로 사용 가능
            ㄴ style={({ isActive }) => ({ color: isActive ? "red" : "black" })}


    
*/
