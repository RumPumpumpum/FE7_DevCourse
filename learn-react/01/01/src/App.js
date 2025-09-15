// javascript가 아님
// JSX(Javascript + XML) 확장 문법
// 페이스북이 개발

// 뜨거운 감자
// JSX를 .js로 하는게 맞아??
// JSX -> Javascript 트랜스파일된다 그래서 상관없다 / 아니다 그래도 이건 아니다.
// .jsx로 해라!

// 현대 트렌드 흐름상 - > .jsx
// 그럼 왜 리액트 처음깔때 jsx는 .js로 설치되는가
// cra(create react app)은 22년부터 업데이트 중지
// react 19버전부터 cra가 설치안됨. 엄청난 항의
// 올해 1월에 공지 -> cra는 더이상 사용되지 않음 선언!
// cra를 사용하고있다면? react 18이하를 사용하고 있는 것

/*
  그럼 어떻게하죠.. ?

  Vite (에반 유 < 뷰 창시자)
    - 차세대 프런트엔드 빌드 도구
        ㄴ  npm create vite@latest .
  

  기존 CRA는 웹팩 + 바벨 이라는 도구로 프로젝트를 돌리고 있었음
    웹팩 -> 모듈 번들러(여러개의 파일을 하나의 파일로 묶어준다)
    바벨 -> 트랜스 컴파일러 (트랜스파일 + 컴파일) 
      ㄴ  최신 JS 문법(ES6+)을 구형 브라우저에서도 이해할 수 있는 이전 버전의 JS(ES5)로 변환
        ㄴ  트랜스파일 :동일한 언어의 다른 버전으로 변환, 컴파일: 다른 언어로 변환
            ㄴ  [바벨탑의 그 바벨 맞음, 언어가 달라서 바벨탑 못 만듬]


    * esbuild = 모듈 번들러 + 트랜스 컴파일러
      Go 언어로 개발 됨. 컴퓨터 입장에서 굉장히 친숙한 언어
    
      *rollup = 모듈을 최적화하고, 트리 셰이킹 -> 이 부분은 esbuild는 부족함


    esbuild는 개발할 때 빨리 개발하기 위해 속도에 몰빵
    rollup은 배포를 안정적으로 하기 위해 후처리에 몰빵
    그래서 이 두개를 하나로 묶어서, vite라는 빌드 도구로 만들어 출시!

    ---------------
    SWC (Speed Web Compiler), Rust,
    국내 1인 개발자가 만듦 -> SWC - >Vercel(Next.JS)
    엄청엄청 빠름
    
    Vite는 에반 유 (Vue 팀)
    SWC는 사실상 React 컴파일러

    vite 입장에서는 SWC가 너무 핫하니까..
    SWC를 vite에서 사용할 수 있는 도구를 만듬! ㅋㅋ @vite/SWC ....
    
    근데 아무래도 SWC의 오리지널 소스를 그대로 사용하는 게 아니라서
    SWC 최신 스펙이 늦게 반영된다는 단점이 있음

    근데 에반 유가 2025 하반기에 vite에서 제거한다고 말했음
    대신 RollDown이라는 esbuild + rollDown + SWC 융합체를 2025 하반기에 베타버전 출시 예정

    ----
    vite환경으로 실행 시...
    
        package.json 파일의, scripts 섹션에 정의된, dev 스크립트
    npm run dev

        "dev": "vite",
        부분에서 dev가 아니라 client 라면?
        npm run client 일 것이다.

*/

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
