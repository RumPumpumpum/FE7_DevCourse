/*
=================================================================
TurboPack (번들러)
=================================================================
Next.js의 번들러 (Webpack 대체/후속)

1. 번들러의 역할:
   - 여러 파일을 하나로 묶기
   - 최적화 (압축, 불필요한 코드 제거)
   - 변환 (TypeScript → JavaScript, JSX → JavaScript)
   - 개발 서버 제공

-- Next.js 라우터
pages router -> 파일 기반 라우팅 (~13버전까지 사용) - 더이상 사용 안함
app router -> 함수 기반 라우팅 (14버전부터 사용~)

-- 프로젝트 구조
1. 루트경로에 app폴더를 만들거나
2. src 폴더 하위에 app 폴더를 만들거나
둘 중 하나만 고를 수 있음. (강사님은 src 안에 넣는걸 선호)

-- 설치
npx create-next-app@latest .
recommended로 설치하는게 대부분 안정적.

-- 스니펫
npfce -> page 생성 (Next Params Async Function Component)
nrlayout -> layout 생성 (Next Root Layout Function Component)

=================================================================
URL 구조
=================================================================
https://www.sucoding.kr:80/user/profile?lang=ko#profile

https://        -> 프로토콜 (스키마)
www            -> 서브도메인
sucoding       -> 도메인 이름
kr             -> 최상위 도메인 (TLD)
:80            -> 포트번호 (생략 시: http=80, https=443)
/user/profile  -> 경로
  user, profile  -> 경로 세그먼트
?lang=ko       -> 쿼리스트링 (Query String)
  lang          -> 파라미터 키 (Key)
  ko            -> 파라미터 값 (Value)
  여러 쿼리: ?lang=ko&page=1
#profile       -> 프래그먼트 (Fragment/Anchor - 페이지 내 이동)

http://localhost:3000/ -> 루트경로, app폴더의 page.tsx 파일

=================================================================
기본 라우트
=================================================================
루트 경로에 page.tsx 만들기

예시:
src/app/page.tsx    → http://localhost:3000/

URL 매핑:
/ -> src/app/page.tsx

각 폴더마다 page.tsx를 만들면 자동으로 라우트 생성!

=================================================================
중첩 라우트
=================================================================
폴더 안에 폴더를 만들어서 라우트를 중첩하는 방식

예시 구조:
src/
  app/
    page.tsx              → /
  blog/
    first-post/
      page.tsx            → /blog/first-post
      first-comment/
        page.tsx          → /blog/first-post/first-comment

URL 매핑:
/blog/first-post → src/blog/first-post/page.tsx
/blog/first-post/first-comment → src/blog/first-post/first-comment/page.tsx

핵심: 폴더 구조 = URL 경로

=================================================================
동적 라우트
=================================================================
URL 경로가 변수처럼 동작하는 라우트

일반 라우트 (비효율):
post/123 → 페이지를 만들려면 매번 파일 필요!

동적 라우트 :
post/[id]/page.tsx → 하나의 파일로 /post/1, /post/2, /post/999 모두 처리

폴더명에 [변수명] 사용:
[id] → URL의 해당 부분을 id라는 파라미터로 받음
      ㄴ Promise 타입 - "나중에 값을 줄게"라는 약속

왜 Promise?
- Next.js가 서버에서 렌더링할 때
1. URL을 파싱 (id 값을 가져옴)
2. 이 과정이 비동기로 일어남
3. 따라서 params는 "약속" (Promise)
4. await로 대기 후 값 사용

예시:
src/app/post/[id]/page.tsx
  → /post/1, /post/2, /post/123 모두 이 파일로!

사용법:
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>포스트 ID: {id}</div>;
}

동작:
/post/123  → id = "123"
/post/hello → id = "hello"
/post/456  → id = "456"

주의:
- 폴더명과 params 키 이름이 정확히 일치해야 함!
- [id] → params.id
- [postId] → params.postId

=================================================================
중첩 동적 라우트
=================================================================
동적 세그먼트를 여러 개 중첩해서 사용

같은 이름 중복 불가!
/post/[id]/comment/[id] ← 사용 불가!

해결법 -> 다른 이름 사용
/post/[id]/comment/[commentId]/page.tsx

왜 안되는가?
- Next.js가 params 객체를 만들 때
- 같은 이름의 키가 중복되면 충돌 발생
- /post/123/comment/456 이어도
- params.id가 123인지 456인지 알 수 없음!

***중요: 상위의 동적 세그먼트 값도 받으려면 params에 추가해야 함!
  const { id, commentId } = await params;


/post/[id]/comment/[commentId]/page.tsx
  → /post/123/comment/456 모두 이 파일로!

params에는 모든 동적 세그먼트 값이 포함됨:
{ id: "123", commentId: "456" }

=================================================================
클라이언트 렌더링 사용
=================================================================
-- "use client" 사용
서버 렌더링에서는 useState 같은 걸 쓸 수 없다.
"use client"를 상단에 배치하면 클라이언트 컴포넌트로 동작!
→ useState 같은 Hooks 사용 가능

-- 클라이언트에서 params 받기
"use client"를 사용하면 useParams() Hook 사용 가능!
import { useParams } from "next/navigation";

const params = useParams();
const { id } = params;  // Promise 아님!

=================================================================
캐치올 라우트 (Catch-all Routes)
=================================================================
[...파일명] - 세 개의 점을 사용하면 모든 경로 세그먼트를 배열로 받음!

예시:
app/posts/[...slug]/page.tsx

URL 매핑:
/posts/1                    → slug = ["1"]
/posts/1/2                  → slug = ["1", "2"]
/posts/a/b/c                → slug = ["a", "b", "c"]
/posts/a/b/c/d/e/f          → slug = ["a", "b", "c", "d", "e", "f"]

사용법:
export default async function Page({ params }: { 
  params: Promise<{ slug: string[] }>  // 배열 타입!
}) {
  const { slug } = await params;
  return (
    <div>
      {slug.map((segment, i) => <div key={i}>{segment}</div>)}
    </div>
  );
}

Use Case:
- 문서 버전 관리 (/docs/v1/api/getting-started)
- 블로그 카테고리 (/blog/category/2024/react/hooks)
- 파일 경로

참고: Optional Catch-all - [[...파일명]]
[[...slug]] - 두 개의 대괄호는 선택적 캐치올
/posts [[...slug]] → /posts도 매칭 (빈 배열)

---
private folder 라는 라우터 정의 방법
특정 세그먼트 밑에있는 유틸리티 함수는
그 세그먼트에서만 사용합시다. 라는 암묵적 룰
근데, helper라는 폴더를 만들어서 관리하고있는데,
url을 helper로 입력하면 들어가짐.. 

그렇다면!? 세그먼트 폴더로 취급하지 않고 일반 폴더로 취급하고 싶으면?
(private 폴더로 지정하고 싶으면?)
-> 폴더 이름 앞에 _(언더바) 를 입력한다.
= 경로를 입력해서 접근할 수 없어진다.

---
라우트 그룹
-> 관련된 라우트 폴더끼리 그룹화를 시킴

하는법 ->
소괄호 () 를 이용해서 폴더를 만듦
  ex-> (post)
거기에 연관있는 라우트 폴더를 넣으면 됨..!
몇 번이고 중첩해도 상관없다.
*/
