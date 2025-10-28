/*
=== 클라이언트 컴포넌트에서 서버 컴포넌트 사용하기 ===

❌ 불가능한 방법 (직접 import):
-------------------------------------------------

// ClientComponent.tsx
"use client";
import ServerComponent from "./ServerComponent"; // ❌ 에러!

export default function ClientComponent() {
  return <ServerComponent />; // 클라이언트에서 서버 컴포넌트 직접 사용 불가!
}

이유: 클라이언트 컴포넌트는 브라우저에서 실행되는데, 
      서버 컴포넌트는 서버에서만 실행할 수 있음!

✅ 가능한 방법 (Composition Pattern):
-------------------------------------------------

방법 1: children prop을 통해 전달
-----------------------------------------
*/

// components/ServerContent.tsx (서버 컴포넌트)
export default function ServerContent() {
  return <p>서버에서 렌더링된 내용</p>;
}

// components/ClientWrapper.tsx (클라이언트 컴포넌트)
("use client");
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div onClick={() => alert("클릭")}>
      {children} {/* 서버 컴포넌트가 여기 들어감! */}
    </div>
  );
}

// app/page.tsx (서버 컴포넌트)
import ClientWrapper from "../components/ClientWrapper";
import ServerContent from "../components/ServerContent";

export default function Page() {
  return (
    <ClientWrapper>
      <ServerContent /> {/* 서버 컴포넌트를 children으로 전달 */}
    </ClientWrapper>
  );
}

/*
이렇게 하면:
1. Page는 서버 컴포넌트
2. ServerContent는 서버에서 렌더링됨
3. ClientWrapper는 클라이언트 컴포넌트지만, children(ServerContent)를 받아서 표시 가능!

방법 2: Server Action 사용
-----------------------------------------
*/

// app/page.tsx
import ClientButton from "../components/ClientButton";
import ServerData from "../components/ServerData";

export default async function Page() {
  return (
    <>
      <ServerData /> {/* 서버 컴포넌트 */}
      <ClientButton /> {/* 클라이언트 컴포넌트 */}
    </>
  );
}

/*
실전 예제:
-----------------------------------------
*/

// components/InteractiveCard.tsx (클라이언트 컴포넌트)
("use client");
export default function InteractiveCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div onClick={() => setClicked(true)}>
      <h2>{title}</h2>
      {children} {/* 여기에 서버 컴포넌트가 들어갈 수 있음! */}
      {clicked && <p>클릭됨!</p>}
    </div>
  );
}

// app/page.tsx (서버 컴포넌트)
import InteractiveCard from "../components/InteractiveCard";

export default async function Page() {
  const data = await fetchData(); // 서버에서 데이터 가져오기

  return (
    <InteractiveCard title="카드 제목">
      {/* 이 부분이 children으로 전달됨 */}
      <p>{data.content}</p> {/* 서버 컴포넌트 내용 */}
    </InteractiveCard>
  );
}

/*
핵심 정리:
-----------------------------------------

1. 클라이언트 컴포넌트에서 서버 컴포넌트를 직접 import ❌ 불가능

2. 하지만 서버 컴포넌트를 children으로 전달하는 것은 ✅ 가능!

3. 이 패턴을 "Composition Pattern"이라고 함

4. 왜 가능한가?
   - children은 React.ReactNode 타입 (일반 prop)
   - 클라이언트 컴포넌트는 children을 받아서 렌더링만 함
   - 실제 서버 컴포넌트 렌더링은 상위 서버 컴포넌트에서 일어남
   - 클라이언트 컴포넌트는 이미 렌더링된 결과를 표시할 뿐!

예시 구조:
-----------------------------------------
서버 컴포넌트 (Page)
  ├─ 서버에서 ServerContent 렌더링
  └─ ClientWrapper에 children으로 전달
      └─ 클라이언트에서는 이미 렌더링된 내용만 표시!
*/


