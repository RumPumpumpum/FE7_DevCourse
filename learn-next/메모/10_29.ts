/*
    metadata의 title과 description은 검색엔진에 검색했을 때,
    노출되는 것 들이다.

    generateMetadata :
    비동기 통신의 결과를 메타데이터의 정보를 활용할 수 있다.
        ㄴ 동적 세그먼트 가져오는 방법? : params 불러오기
    
    동적 세그먼트에 따라서 1-게시글, 2-게시글 처럼 title이 달라지게 하고싶다.
        ㄴ 기존의 metadata로는 불가능, generateMetadata 함수를 사용해야함.
    
---
    - npm insall express nodemon cors

    - express
    - nodemon
    - cors

    app.get("/random", (req, res) => { d어쩌고저쩌고.. }
    하면 localhost:4000/random 으로 접속 시, 어쩌고저쩌고가 실행된다.

    next.js에서의 데이터 패칭?
    axios? 안 씀
    tanstackquery? 안 씀
    SWR? 안 씀
    
    fetch만 쓰면 됨..!
        ㄴ 웹 표준 API에서 제공하는 함수 - 웹 브라우저에서만 사용 가능한 것
    - 클라이언트 전용 함수
        ㄴ 근데 왜 서버 컴포넌트에서 사용할 수 있나요?
            ㄴ next.js팀이 fetch() 함수를 확장하여 next.js의 시스템에 녹아들수 있도록
            확장하여 제공하고 있기 때문.
                ㄴ 기존 react에서 쓰던 fetch와 다르다.

    그래서 next.js에서는 모든 데이터 요청을 fetch 기반으로 처리한다!
    클라이언트에서 axios, tanstackquery, swr 뭐 선택해서 사용해도 된다.
    하지만! 서버 컴포넌트에서는 fetch를 사용한다.
    
    데이터 패칭은 서버 컴포넌트에서 처리,
    이후 데이터를 클라 컴포넌트에 넘김

    ---
    Loading.tsx 
    로딩 파일을 만들면, 자동으로 next.js가
    page 컴포넌트를 loading을 Suspense로 감싸준다.
        ㄴ Page 컴포넌트만 감싸줌.
        ㄴ Page 컴포넌트 바깥에서 발생하는 헤더, 푸터 같은건 로딩의 대상이 아님
            ㄴ 로딩이 안되고 그대로 표시된다.

    (Suspense? => 비동기 작업 중 로딩 상태를 처리하는 React 기능)
    
    [수동으로 Suspense로 감싸기]
    - loading.tsx 파일이 없을 때 사용
    - 예시 코드:
      import { Suspense } from "react";
      
      export default function Page() {
        return (
          <Suspense fallback={<Loading />}>
            <AsyncComponent />
          </Suspense>
        );
      }

==================================================================================
    루트 레이아웃에서 지연이 발생하면?
    loading이 적용되지 않는다.
    그럼 어떻게 해야할까?
    =>
    지연이 발생할만한 비동기 작업을 최대한 피해야한다!
==================================================================================
    
    error.tsx 
    - 클라이언트 컴포넌트이여야만 한다! ("use client" 필수)
    - 페이지를 에러 바운더리로 감싼다.
    - props로 error, reset 받기
        ㄴ error: 에러 정보
        ㄴ reset: 에러를 다시 시도하는 함수
    - 같은 폴더 레벨의 페이지에서 에러가 발생하면 자동으로 표시됨
    
    [에러 바운더리 작동 방식]
    - 파일 위치에 따라 범위가 다름
    - root/app/error.tsx → 전체 앱 에러 처리
    - root/app/about/error.tsx → about 페이지만 에러 처리
    - 라우트 세그먼트 단위로 에러 바운더리 적용

    [Suspense vs Error Boundary]
    - loading.tsx: 비동기 작업 로딩 중 표시
    - error.tsx: 에러 발생 시 표시
    - 둘 다 같은 페이지 레벨에서 작동

==================================================================================
    렌더링 방식 (Rendering Patterns)
==================================================================================

    [SSG - Static Site Generation] - 정적 사이트 생성
    - npm run build 했을 때, static 방식으로 빌드된건 o로 표시됨
    - 서버 없이도 동작 가능한 HTML 파일 생성
    - 빌드 타임에 페이지를 미리 생성
    - 장점: 빠른 로딩, SEO 최적화, CDN 활용 가능
    - 예시: 정적 페이지, 블로그 포스트, 공개 문서
    
    [Next.js 빌드 시 함정!]
    예시: const date = new Date().toLocaleTimeString("ko-KR");
    
    - 개발 모드(npm run dev)에서는 시간이 잘 바뀜
    - 프로덕션(npm run build && npm run start)에서는 시간이 고정됨
    => Next.js가 정적 페이지로 판단하여 빌드 시 생성된 HTML을 그대로 사용!
    
    해결 방법:
    
    1. export const dynamic = "force-dynamic";
        - 해당 경로를 강제로 동적 경로로 변경
        - SSR (Server-Side Rendering) 방식으로 빌드
        - 매 요청마다 서버에서 페이지를 렌더링
        - 사용 시점: 실시간 데이터가 필요한 페이지
    
    2. export const revalidate = 1;
        - ISR (Incremental Static Regeneration) - 점진적 정적 생성
        - 1초마다 페이지를 재검증하여 재생성
        - 빌드된 정적 페이지를 주기적으로 업데이트
        - 사용 시점: 주기적으로 업데이트가 필요한 콘텐츠
        - 장점: SSG의 성능 + SSR의 최신 데이터
        
        ⚠️ ISR의 작동 방식:
        - 페이지 이동만으로는 캐시된 HTML이 그대로 사용됨!
        - 새로고침(브라우저 새로고침)해야만 재검증이 트리거됨
        - 왜? 정적 페이지이기 때문에 캐시된 버전을 먼저 보여줌
        - 시간이 지난 후 새로고침하면 백그라운드에서 재생성
    
    [렌더링 방식 비교]
    - SSG: 빌드 타임에 한 번만 생성 (최고 성능, 데이터 고정)
    - SSR: 매 요청마다 생성 (실시간 데이터, 서버 부하)
    - ISR: 주기적으로 재생성 (성능 + 최신 데이터의 균형)
    - CSR: 클라이언트에서 렌더링 (인터랙티브 UI)

    [언제 어떤 방식을 사용할까?]
    - 정적 콘텐츠 (블로그, 문서) → SSG
    - 실시간 데이터 (대시보드, 뉴스) → SSR (force-dynamic)
    - 주기적 업데이트 (제품 목록) → ISR (revalidate)
    - 인터랙션 많은 UI (게임, 앱) → CSR

==================================================================================
    캐싱 (Caching) - Next.js의 성능 최적화
==================================================================================

    [Request Memoization]
    https://nextjs.org/docs/app/guides/caching#request-memoization
    - 같은 종류의 API 요청은 한 번만 실행됨
    - 1000개의 동일한 API 요청이 있어도 1개만 실제로 전송됨
    - 서버 컴포넌트의 단일 렌더링 패스 중에서만 유효
    - 메모리 내에서 함수 반환값을 캐싱
    
    작동 흐름:
    1. 사용자가 API 요청 → Request Memoization 계층 통과
    2. 첫 번째 요청: MISS (캐시 없음) → Data Cache 확인
    3. Data Cache HIT → 데이터 반환 + Request Memoization에 저장
    4. 이후 동일한 요청: HIT (캐시 있음) → 즉시 반환 (외부 요청 안 감)
    
    예시:
    export default async function Page() {
      // 이 세 개의 fetch는 실제로는 1번만 실행됨!
      const data1 = await fetch('https://api.example.com/item/1');
      const data2 = await fetch('https://api.example.com/item/1');
      const data3 = await fetch('https://api.example.com/item/1');
      
      return <div>Data: {data1.data}</div>;
    }
    
    [Data Cache]
    - 서버 컴포넌트의 fetch 결과를 자동으로 캐싱
    - 초기: MISS → 외부 데이터 소스에서 데이터 가져옴 → HIT (캐시 저장)
    - 이후: HIT → 캐시된 데이터 즉시 반환
    
    [Next.js 캐싱 계층]
    ┌─────────────────────────────────────┐
    │ Request Memoization (In-memory)      │ ← 같은 렌더링 중에만 유효
    │ - 함수 반환값 캐싱                   │
    └─────────────────────────────────────┘
    ┌─────────────────────────────────────┐
    │ Data Cache (Persistent)              │ ← 영구 저장 (revalidate로 제어)
    │ - fetch 결과 캐싱                    │
    └─────────────────────────────────────┘
    
     Request Memoization의 특징, 생명주기, 지속시간:
    - 단일 렌더링 패스 내에서만 작동
    - 페이지가 재렌더링되면 초기화됨
    - 다른 페이지로 이동하면 캐시 해제됨

    Request Memoization은 fetch 요청에서만 적용되는 내용들이다.
    따라서 next.js팀에서는 서버 컴포넌트에서는 fetch 함수로 데이터 요청을
    강력히 권장하는 바이다.

======================================================
    [Data Cache]
    https://nextjs.org/docs/app/guides/caching#data-cache

    Data Cache는 fetch 요청의 결과를 서버에 저장하는 Next.js의 영구적인 HTTP 캐시 메커니즘이다.
    
    특징:
    - 기본적으로 모든 fetch 요청은 자동으로 캐싱된다 (no-store 옵션을 사용하지 않는 한)
    - 서버 컴포넌트, Route Handlers, Server Actions에서 사용 가능하다
    - 빌드 시간과 요청 시간 모두에서 작동한다
    - 배포 간에 지속되는 영구적인 캐시이다
    
    Data Cache 작동 방식:
    1. 클라이언트에서 요청이 서버로 전송된다
    2. 서버는 요청을 처리하고 필요한 데이터를 가져온다
    3. 응답이 Data Cache에 저장된다
    4. 동일한 요청이 다시 들어오면 캐시된 응답이 반환된다
    
    캐시 무효화 방법:
    - fetch 옵션으로 제어: { cache: 'no-store' }, { next: { revalidate: 3600 } }
    - 경로 기반 무효화: revalidatePath()
    - 태그 기반 무효화: revalidateTag()
    
    Data Cache vs Full Route Cache:
    - Data Cache: 개별 fetch 요청의 결과만 캐싱
    - Full Route Cache: 전체 페이지의 HTML과 RSCㅕ 페이로드를 캐싱
    
    4개의 레이아웃 계층을 지나가게 된다.
    
    주의사항:
    - 동적 함수(cookies(), headers() 등)를 사용하면 해당 경로는 동적으로 렌더링된다
    - 캐시된 데이터와 동적 데이터를 함께 사용할 수 있다
    - 서드파티 라이브러리를 사용할 때는 fetch 대신 다른 방법으로 캐싱을 구현해야 할 수 있다

    no-store => 캐싱 적용 안 함
    영구 데이터 캐시(Persistent Data Cache)를 사용하지 않고 
    항상 데이터 소스에서 최신 데이터를 가져옵니다. 
    다만, Request Memoization (동일 렌더링 내 메모리 캐시)은 여전히 작동하여 
    중복 호출을 방지합니다.

    force-cache => 무조건 캐싱 적용
    기본값, 영구 데이터 캐시에 데이터가 있으면 재검증 없이 해당 데이터를 사용합니다. 
    캐시에 없으면 데이터 소스에서 가져온 후 캐시에 저장합니다. 
    Request Memoization도 작동합니다.

    (최초 요청 시)
    요청 -> Request Memoization -> Data Cache -> Data Source
     --------->   MISS    -------->  MISS  --------->HIT
           <-----  SET <------------  SET <-----------

    (이후 요청 시)
    요청 -> Request Memoization -> Data Cache -> Data Source
     --------->  HIT
     <-------------

---
    [시간 검증 기반 캐싱 (Time-based Revalidation)]
    
    시간 검증 기반 캐싱이란?
    - 데이터를 일정 시간 동안 캐시에 보관하고, 그 시간이 지나면 새로운 데이터로 업데이트하는 방식
    - fetch 요청에 revalidate 옵션을 설정하여 캐시 유효 시간을 지정할 수 있음
    
    이미지로 보는 시간 검증 기반 캐싱 흐름:
    
    1. 첫 번째 요청 (UNCACHED REQUEST):
       - 사용자가 '/a' 경로로 처음 접속
       - fetch('...', { next: { revalidate: 60 } }) 요청 발생
       - Data Cache에서 MISS (캐시에 데이터 없음)
       - Data Source에서 데이터 가져옴 (HIT)
       - 가져온 데이터를 Data Cache에 저장 (SET)
       - 사용자에게 데이터 제공
    
    2. 60초 이내 두 번째 요청 (CACHED REQUEST):
       - 사용자가 다시 '/a' 경로로 접속 (60초 이내)
       - fetch('...', { next: { revalidate: 60 } }) 요청 발생
       - Data Cache에서 HIT (캐시에 데이터 있음)
       - 캐시된 데이터를 즉시 사용자에게 제공
       - Data Source에 접근하지 않음 (서버 부하 감소)
    
    3. 60초 이후 요청 (STALE REQUEST):
       - 사용자가 '/a' 경로로 접속 (60초 이후)
       - fetch('...', { next: { revalidate: 60 } }) 요청 발생
       - Data Cache에서 STALE 상태 감지 (캐시 만료됨)
       - 일단 오래된 캐시 데이터를 사용자에게 즉시 제공 (지연 없음)
       - 동시에 백그라운드에서 Revalidate 작업 시작
       - Data Source에서 새 데이터 가져옴 (HIT)
       - 새 데이터로 Data Cache 업데이트 (SET)
       - 다음 요청부터는 새로 업데이트된 데이터 제공
    
    핵심 개념: "Stale-While-Revalidate"
    - "Stale"(오래된) 데이터를 즉시 보여주면서, 동시에 "Revalidate"(재검증)
    - 사용자는 항상 즉각적인 응답을 받으면서도, 데이터는 주기적으로 최신화됨
    - 사용자 경험과 서버 부하 사이의 최적의 균형점
    
    구현 방법:
    ```typescript
    // 개별 fetch 요청에 revalidate 설정
    fetch('https://...', { next: { revalidate: 60 } }) // 60초 후 재검증
    
    // 또는 라우트 세그먼트 전체에 설정
    export const revalidate = 60; // 페이지 또는 레이아웃 파일에 설정
    
 우유 비유:
    
    1. 우유 구매 (첫 데이터 요청):
       - 마트에서 우유를 사서 냉장고에 넣음 (데이터를 가져와 캐시에 저장)
       - 우유에는 유통기한이 표시됨 (revalidate 시간 설정)
    
    2. 유통기한 내 우유 사용 (캐시 유효 기간 내):
       - 냉장고에서 우유를 꺼내 바로 사용 (캐시에서 데이터 제공)
       - 마트에 다시 가지 않아도 됨 (서버에 다시 요청하지 않음)
    
    3. 유통기한 지난 후 (캐시 만료 후):
       - 일단 냉장고의 우유를 사용 (오래된 캐시 데이터 즉시 제공)
       - 동시에 가족 중 한 명이 마트에 가서 새 우유를 삼 (백그라운드에서 데이터 갱신)
       - 다음날부터는 새 우유를 사용 (다음 요청부터 새 데이터 제공)
    
    실생활 예시:
    
    1. 뉴스 웹사이트:
       - 뉴스 기사는 1시간마다 업데이트 설정 (revalidate: 3600)
       - 1시간 내에 여러 사용자가 방문: 모두 같은 캐시된 기사를 봄 (서버 부하 감소)
       - 1시간 후 첫 방문자: 일단 기존 기사를 보고, 백그라운드에서 새 기사로 업데이트
    
    2. 날씨 앱:
       - 날씨 데이터는 30분마다 갱신 설정 (revalidate: 1800)
       - 30분 내 앱 실행: 즉시 캐시된 날씨 정보 표시 (빠른 로딩)
       - 30분 후 앱 실행: 일단 기존 날씨 표시하고, 백그라운드에서 최신 날씨 가져옴
    
    3. 쇼핑몰 상품 페이지:
       - 상품 정보는 하루에 한 번 업데이트 (revalidate: 86400)
       - 하루 내내 많은 사용자가 같은 캐시된 상품 정보를 봄
       - 다음날 첫 방문자: 기존 정보 보여주고, 백그라운드에서 재고/가격 업데이트
-----
    [revalidatePath] = [수동 캐시 무효화]
    
    revalidatePath란?
    - Next.js에서 특정 경로의 캐시를 수동으로 무효화(재검증)하는 함수
    - 시간 기반 캐싱과 달리 특정 이벤트(예: 데이터 변경)가 발생했을 때 즉시 캐시를 갱신할 수 있음
    
      // 특정 경로의 캐시 무효화
      revalidatePath("/");  // 홈페이지 캐시 무효화
    
    주요 특징:
    1. 즉시 갱신: 설정된 시간을 기다리지 않고 필요할 때 즉시 캐시 갱신
    2. 경로 기반: 특정 경로 또는 하위 경로의 모든 캐시를 무효화
    3. 서버 컴포넌트/액션에서만 사용: 클라이언트 컴포넌트에서는 직접 사용 불가
    
    사용 사례:
    - 관리자가 콘텐츠를 업데이트한 후 즉시 변경사항을 반영
    - 사용자가 폼을 제출하여 데이터가 변경된 후 페이지 갱신
    - 실시간 데이터가 필요한 경우 특정 이벤트 발생 시 캐시 갱신
    
    시간 기반 캐싱과의 차이점:
    - 시간 기반(revalidate): 설정된 시간 간격으로 자동 갱신
    - 수동 무효화(revalidatePath): 특정 이벤트 발생 시 수동으로 갱신
    
    revalidatePath vs revalidateTag:
    - revalidatePath: 경로 기반으로 캐시 무효화 (해당 경로의 모든 데이터)
    - revalidateTag: 태그 기반으로 캐시 무효화 (특정 태그가 지정된 데이터만)

====================================================
    [Full Route Cache]

    Full Route Cache란?
    - Next.js에서 정적 라우트(Static Route)의 HTML을 빌드 시점에 생성하고 캐싱하는 기능
    - 서버 컴포넌트, 레이아웃, 페이지의 렌더링 결과를 저장하여 재사용
    - 기본적으로 모든 정적 라우트는 자동으로 캐싱됨
    
    작동 원리:
    1. 빌드 시점: 정적 라우트의 HTML이 생성되어 .next/server/pages 디렉토리에 저장
    2. 요청 시점: 사용자 요청이 오면 미리 생성된 HTML을 즉시 제공
    3. 재사용: 동일한 라우트에 대한 후속 요청은 캐시된 HTML을 재사용
    
    주요 특징:
    1. 성능 향상: 서버가 매 요청마다 페이지를 다시 렌더링할 필요가 없음
    2. 서버 부하 감소: 미리 생성된 HTML을 제공하므로 서버 리소스 절약
    3. 일관된 응답 시간: 모든 사용자에게 동일한 속도로 페이지 제공
    
    캐시 무효화 방법:
    1. 재배포: 새로운 빌드와 배포를 통해 모든 캐시 갱신
    2. 동적 렌더링 사용: dynamic 함수를 사용하여 특정 라우트를 동적으로 설정
    3. 시간 기반 재검증: revalidate 옵션을 사용하여 주기적으로 캐시 갱신
    
행    사용 예시:
    // 기본적으로 정적 라우트는 Full Route Cache 적용
    export default function Page() {
      return <h1>이 페이지는 빌드 시점에 캐싱됩니다</h1>;
    }
    
    // 동적 렌더링으로 캐싱 비활성화
    import { dynamic } from 'next/cache';
    
    export const dynamic = 'force-dynamic';
    export default function Page() {
      return <h1>이 페이지는 매 요청마다 새로 렌더링됩니다</h1>;
    }
    
    Data Cache와의 차이점:
    - Full Route Cache: 라우트의 HTML 출력을 캐싱 (UI 레벨)
    - Data Cache: fetch 요청의 데이터 응답을 캐싱 (데이터 레벨)
    
    적합한 사용 사례:
    - 블로그 포스트, 제품 페이지 등 자주 변경되지 않는 콘텐츠
    - 마케팅 페이지, 랜딩 페이지 등 정적 콘텐츠
    - 모든 사용자에게 동일하게 보여지는 페이지
    
=====================================================
    [Client-Side Router Cache]

    1. 개념
    - Next.js의 클라이언트 측 라우터가 페이지 간 이동 시 이전에 방문한 라우트의 정보를 메모리에 저장하는 캐싱 메커니즘
    - 브라우저 메모리에 저장되며, 페이지 새로고침 시 초기화됨
    - React Server Component(RSC) 페이로드와 라우트 데이터를 미리 다운로드하여 저장
    
    2. 작동 원리
    - 사용자가 페이지를 방문할 때 해당 페이지의 RSC 페이로드를 캐시에 저장
    - 사용자가 링크에 마우스를 올리거나(hover) 링크가 뷰포트에 나타날 때(prefetch) 해당 페이지의 데이터를 미리 로드
    - 사용자가 이전에 방문했던 페이지로 돌아갈 때 서버에 새 요청을 보내지 않고 캐시된 데이터를 사용
    
    3. 주요 특징
    - 즉각적인 페이지 전환: 캐시된 페이지로 이동 시 서버 요청 없이 즉시 전환
    - 메모리 기반: 브라우저 메모리에 저장되어 새로고침 시 초기화됨
    - 프리페칭: 링크에 마우스를 올리거나 링크가 뷰포트에 나타날 때 자동으로 데이터 미리 로드
    - 뒤로가기/앞으로가기 최적화: 브라우저 히스토리 탐색 시 즉각적인 페이지 전환 제공
    
    4. 캐시 무효화 방법
    - 페이지 새로고침: 브라우저 새로고침 시 캐시가 완전히 초기화됨
    - router.refresh(): 프로그래밍 방식으로 현재 라우트의 캐시를 무효화
    - useRouter().refresh(): React 컴포넌트 내에서 현재 라우트 캐시 무효화
    
    5. Data Cache와 Full Route Cache와의 차이점
    - Data Cache: 서버 측에서 fetch 요청의 데이터를 캐싱 (영구적)
    - Full Route Cache: 서버 측에서 정적 라우트의 HTML을 빌드 시점에 캐싱 (영구적)
    - Client-Side Router Cache: 클라이언트 측에서 방문한 페이지 정보를 메모리에 캐싱 (임시적)
    
    6. 적합한 사용 사례
    - SPA(Single Page Application) 스타일의 웹 애플리케이션
    - 사용자가 자주 왔다 갔다 하는 페이지 간 이동이 많은 애플리케이션
    - 대시보드, 관리자 패널 등 여러 페이지를 빠르게 탐색해야 하는 인터페이스
    
    7. 코드 예시
    // 기본적으로 Next.js는 자동으로 Client-Side Router Cache를 관리합니다
    // 필요한 경우 캐시를 수동으로 무효화할 수 있습니다
    
    'use client';
    
    import { useRouter } from 'next/navigation';
    
    export default function RefreshButton() {
      const router = useRouter();
      
      return (
        <button
          onClick={() => {
            // 현재 라우트의 Client-Side Router Cache를 무효화
            router.refresh();
          }}
        >
          최신 데이터로 새로고침
        </button>
      );
    }

===========
    [Prefetch 동작 방식]
    
    1. 기본 Prefetch (prefetch={null} 또는 미지정)
    - 동적 페이지: 캐싱되지 않음
    - 정적 페이지: 5분간 캐싱됨
    
    2. 전체 Prefetch (prefetch={true} 또는 router.prefetch 사용)
    - 동적 페이지: 5분간 캐싱됨
    - 정적 페이지: 5분간 캐싱됨

    * 가져오고나서 부터 5분 타이머 돌아간다.
    
    3. Prefetch 비활성화 (prefetch={false})
    - 모든 페이지: 프리페칭 비활성화, 캐싱 없음
    
    5. Prefetch의 이점
    - 페이지 전환 속도 향상: 사용자가 링크를 클릭하기 전에 데이터를 미리 로드하여 즉각적인 페이지 전환 제공
    - 사용자 경험 개선: 페이지 로딩 시간 감소로 더 부드러운 탐색 경험 제공
    - 네트워크 사용 최적화: 사용자가 실제로 방문할 가능성이 높은 페이지만 선택적으로 프리페치 가능
    

-------------
16버전부터 기존 4가지 캐싱시스템 말고도 새로운 캐싱 시스템이 생겼다!
기존 ->
1. request memoization
2. data cache
3. full route cache
4. client-side router cache

(로그 관찰할 수 있음 next.config.ts에 추가)
  cacheComponents: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },


새로생긴거!
기존 렌더링: CSR, SSR, SSG, ISR
새로운 렌더링: PPR (Partial Pre-Rendering, 부분 사전 렌더링)
-> 빠르게 보여줄 수 있는 정적 페이지는 빠르게 보여주고,
    느리게 보여줘야하는 동적인 부분은 완성되는대로 스트리밍해서 보여준다.

    "use cache";
    를 페이지 컴포넌트에 넣으면
    모든 컴포넌트가 캐싱됨
    기존 캐시 시스템을 모두 무시하고 적용
        
    함수 안에다 쓰면 함수레벨,
    밖에다 쓰면 컴포넌트 레벨에서 적용

cacheLife
    캐시의 라이프타임을 세심하게 적용 가능!
    cacheLife("seconds")
    -> 1초마다 캐시를 갱신

이렇게 하는게 PPR 렌더링이다!
next에서 밀고있는 방식
    */
