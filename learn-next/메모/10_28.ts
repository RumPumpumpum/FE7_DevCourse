/*
    @를 사용한 경로 (Alias Path, 얼리어스) 설정
        ㄴ 파일의 위치와 이동에 관계없이 절대 경로로 import 할 수 있다.
              tsconfig.js에서 "@/*": ["./src/*"] 로 설정할 경우,
              @ 밑에 오는 경로는 src 폴더를 기준으로 한다.

    styles/index.css 에서는 @import "tailwindcss"로 import 한다.

    ---
    리액트는 기존부분은 놔두고, 새로운 부분만 가져오는게 장점인데,
    a 태그를 이용하면 새로운 페이지를 모두 불러온다.
    대신 Link 태그를 이용해서 이동
    <Link href ~~~ >

    ---
    클라이언트 렌더링에서의 라우터?
    const router = useRouter
    useRouter는 
    1. next/router
    2. next/navigation
    으로 나눠진다.
    next/router는 페이지 라우터에서 가져오는 기능이기 때문에,
    navigation을 선택해야한다!

    router.push("경로") - 라우트 전환
    router.back() - 뒤로가기
    router.forward() - 앞으로 가기
    router.hmrRefresh() - HMD 새로고침
    router.prefetch() - 상용모드에서만 가능, 클릭전에 미리 준비해 페이지 전환 더 빠르게
    router.refresh() - 현재 페이지 새로고침
    router.replace(url) - 라우트 전환(브라우저 히스토리 x)

    ---
    REDIRECT 쓰는 법!
    >>>
    서버 컴포넌트에서만 사용 가능
    redirect("라우트") - 해당 라우트로 리다이렉트, 
    메인 페이지에서 리다이렉트로 다른 페이지 설정 시, 그 페이지를 메인페이지처럼 사용 가능

    이걸 클라 컴포넌트에서 사용하려면?
    useEffect를 활용해서, router.push("라우트 경로") 로 작성하고,
    의존성 배열을 router로 하면 똑같은 효과!

    ---
    RootLayout - Page - Button 의 구조..
    RootLayout 안에 Page -> Button의 구조가 있는 것이지.
    컴포넌트 트리가 RootLayout -> Page -> Button의 선형 구조인 것은 아니다.

    RootLayout은 Page의 내부 구조를 모르고, Button의 존재 여부를 모른다.
    단순히 {children}을 렌더링 할 뿐..
    Page 역시 RootLayout과 무관하게 Button을 직접 구성하고, RootLayout에 전달할 필요 없음    

    ---    
    RootLayout은 항상 존재하며 적용되고,
    커스텀 레이아웃은 자신이 속한 폴더와 그 하위만 커버한다.

    즉, 레아아웃은
    공통의 UI를 렌더링 할 때 사용

    ---
    커스텀 not-found
    컴포넌트의 이름을 not-found로 하면
    not found가 커스텀으로 설정!

    notFound() 함수를 사용하면, 호출된 위치 기준으로 가장 가까운 not-found 파일을 찾아감
    translate/[lang] 이란 라우트에서, if (lang === "fr") 이라면
    notFound() 함수 호출을 하게 한다면 가장 가까운 커스텀 not found를 불러오게된다!

    --
    RSC Payload (React Server Component Payload)
    넥스트 서버에서 클라이언트로 전달되는, 서버 컴포넌트 렌더링 결과물

    브라우저 요청
    ↓
    서버가 미리 렌더링 (RSC Payload 생성)
    ↓
    HTML과 Payload 스트리밍 전송
    ↓
    비활성 UI 먼저 표시 (빠른 초기 로드!)
    ↓
    점진적으로 UI 복원 (Final UI)
    ↓
    JavaScript 로드
    ↓ Hydration (HTML에 JavaScript 이벤트 연결)
    상호작용 가능한 UI (Interactive UI)

    ---
    서버 컴포넌트에서 클라이언트 컴포넌트(버튼 등..)을 import 해서 사용하면?
    
    1. 서버에서 초기 HTML 생성 시
       - 서버 컴포넌트는 payload에 포함되어 HTML 생성
       - 클라이언트 컴포넌트는 JSX 내용으로 기본 골격(모양)만 생성됨
       - 예: <button>버튼</button> (모양만, 이벤트 없음)
    
    2. 클라이언트로 전송
       - 초기 HTML에 버튼의 모양이 포함되어 전송됨
       - 하지만 onClick 같은 이벤트는 아직 연결 안 됨
    
    3. JavaScript 로드 후 Hydration
       - 클라이언트 컴포넌트의 JavaScript가 로드됨
       - Hydration으로 HTML에 이벤트 연결
       - 이제 버튼 클릭이 작동함!
    
    즉, 초기 HTML에는 버튼 모양이 들어가 있지만,
    Hydration 없이는 클릭 이벤트가 작동하지 않는다!
    
    ---
    클라이언트 컴포넌트에서 서버 컴포넌트 포함하기?
    
    직접 import 불가능:
       "use client";
       import ServerComponent from "./Server";  // 에러!
       → 클라이언트에서 서버 컴포넌트 직접 import 불가
    
    가능한 방법 (Composition Pattern):
       - children prop을 통해 서버 컴포넌트 전달
        
    왜 가능한가?
      1. 상위 서버 컴포넌트(Page)에서 ServerText를 서버에서 렌더링
      2. 이미 렌더링된 결과를 children으로 ClientCard에 전달
      3. ClientCard는 받은 내용을 그대로 표시할 뿐
      4. 실제 서버 컴포넌트 렌더링은 상위에서 이미 완료된 상태!

      ---

    서버/클라이언트 컴포넌트 동작 방식:
    📌 케이스 1: 서버 전용 코드가 없는 서버 컴포넌트
    -----------------------------------------------
    
    예시:
    // ServerText.tsx (서버 컴포넌트이지만 서버 전용 코드 없음)
    export default function ServerText() {
      return <p>단순 텍스트</p>;
    }
    
    Next.js의 최적화:
    - 서버 전용 코드가 없으면 클라이언트 컴포넌트로 자동 변환됨 ✅
    - 빌드 타임에 클라이언트 번들에 포함됨
    - 서버에서 렌더링할 필요가 없어서 클라이언트에서 렌더링
    
    이유: 서버 전용 코드가 없으면 서버에서 할 일이 없음
          → 클라이언트에서 렌더링해도 동일한 결과
          → 성능 최적화를 위해 클라이언트 컴포넌트로 변환
    
    📌 케이스 2: children으로 전달된 서버 컴포넌트
    -----------------------------------------------
    
    // 클라이언트 컴포넌트 안에 서버 컴포넌트를 children으로 전달
    <ClientCard>
      <ServerText />  { 서버 컴포넌트 }
    </ClientCard>
    
    이 경우:
    - 상위 서버 컴포넌트(Page)가 ServerText를 서버에서 렌더링
    - 렌더링 결과를 children(정적 콘텐츠)로 전달
    - ClientCard는 이미 렌더링된 정적 콘텐츠를 표시만 함
    - 클라이언트에서 리렌더링되어도 children은 그대로 유지
    - 서버 재요청 없음! ✅
    
    📌 케이스 3: 서버 전용 코드가 있는 서버 컴포넌트
    -----------------------------------------------
    
    // ServerData.tsx
    export default async function ServerData() {
      const data = await fetch("...");  // 서버 전용 코드!
      return <p>{data}</p>;
    }
    
    이 경우:
    - 반드시 서버에서만 실행 가능
    - 클라이언트 컴포넌트로 변환 불가능
    - 항상 서버에서 렌더링됨
    
    핵심 정리:
    ──────────────────────────────────────────
    1. 서버 전용 코드(await, DB, 파일시스템 등) 없으면 
       → 클라이언트 컴포넌트로 자동 변환 가능 ✅
    
    2. children으로 전달되면 
       → 이미 렌더링된 정적 콘텐츠로 존재
       → 클라이언트 리렌더링 시 변경 안 됨 ✅
    
    3. 서버 전용 코드가 있으면 
       → 서버 컴포넌트로 유지
       → 클라이언트로 변환 불가능 ❌

---
    페이지 컴포넌트는 클라이언트 컴포넌트로 지정하지 않도록 노력, 명심하여야 한다.

---
    메타데이터:
        부가정보.
            페이지 이름이나 설명

    변수 이름은 반드시 metadata 라고 해야함. 그냥 넥스트가 그렇게 정했음. 따라야만한다.
    export const metadata: Metadata = {
        title: "Next.js"
        description: "Next.js"
    }


---
next/font/google 패키지
원하는 폰트 가져와서 적용 가능

import { Noto_Sans} from "next/font/google"

오직 한글만 지원하려면
preload를 false를 지정해서 하는것도 하나의 테크니션..
폰트 자체의 용량이 줄어든다.

로컬 폰트도 적용 가능!

--
이미지 불러오기
<img> 쓰니까 경고 문구 -> <Image>를 써라! 최적화 다 해준다!

src의 경우, 그냥 열어두면 해커의 공격 통로가 될 수 있다.
그래서 개발자가 허용한 것만 통과하도록 해야함
next.config.ts에서 허용할 도메인을 미리 설정(명시)해야함
*/
