/*
[pakage.json에 대하여!]
    - scripts 부분
        package.json 파일의, scripts 섹션에 정의된, dev 스크립트
        이 경우 실행 명령어: npm run dev

        "dev": "vite",
          만약 해당 부분에서 dev가 아니라 client 라면?
          실행 명령어: npm run client 일 것이다.


    - npm install했을 때, pakage.json에서 일어나는 변화
        예시 명령어:
        npm install @eslint/js -D
          프로젝트의 devDependencies 목록에 ESLint를 추가하라 (-D로 인해서)

    이 때, pakage.json 에서 install 한거 확인 가능하다!
        ㄴ 명령어에 따라 Dependencies와 devDependencies로 구분

        1. Dependencies에 설치하는 명령어 - 애플리케이션 실행에 필요한 패키지(React.. 등)
            npm install 패키지명
            npm install 패키지명 --save

        2. devDependencies에 설치하는 명령어 - 개발 및 빌드 단계에서만 필요한 패키지(ESLint,Webpack,Babel..등)
            npm install 패키지명 -D
            npm install 패키지명 --save-dev

    근데 걍 공식 문서에 나오는 설치 명령어 따라 쓰면 됨
*/

/*
[폴더 알아보기!]
    - node_modules
        프로젝트에 설치된 모든 패키지(라이브러리)가 저장되는 폴더
            ㄴ npm install 명령어를 실행하면, 
                package.json 파일에 정의된 의존성(dependencies와 devDependencies)에 해당하는 
                모든 패키지들이 이 폴더 안에 다운로드됩니다.

    - public
        정적(static) 파일을 보관하는 폴더
        빌드 과정에서 번들러의 타겟이 되지 않는 폴더
        빌드 과정에서 _가공_되지 않고 그대로 제공되는 폴더
                      ㄴ 파일의 압축을 의미
                      
        즉! public 폴더에 있는건 어떠한 가공 없이 build 폴더에 포함된다.
        ㄴ 그럼 public에 넣어야 할 건 어떻게 구분하나요?
            ㄴ 그건 앞으로 수업하며 차차 알아갈 예정 ㅎ..

    
    - src
        애플리케이션이 동작하는데 필요한 소스
*/

/*
[패키지 매니저 종류]
    1.npm
    (싱글 스레드)
        ㄴ  Node.js를 설치하면 자동으로 설치됩니다
            ㄴ npx
                - Node.js를 설치하면 npm과 함께 설치됨
                - npx를 사용하면 npm으로 로컬 또는 글로벌로 다운로드 받지 않은 패키지도 
                실시간으로 설치하여 실행할 수 있습니다.

    2. YARN
    (병렬 스레드)
        ㄴ 페이스북에서 개발한 패키지 매니저!

    "YARN이 하나하나 설치하는 npm(싱글 스레드)보다는 빠를 수 밖에..
    그래서 npm이 화나서 PNPM(병렬 스레드) 개발!"

    3. PNPM 
    (병렬 스레드)
        ㄴ npm과 대부분 호환
        ㄴ npm과 YARN보다 빠름

    4. BUN 
    (병렬스레드)
        ㄴ 2022년에 등장한 초고속 런타임 및 패키지 매니저
        ㄴ Zig 언어로 작성 → 매우 빠른 실행 속도
        ㄴ 런타임, 번들러, 테스트 러너까지 통합 제공 → 올인원(All-in-one) 도구
        ㄴ 근데 생긴지 얼마 안되서 아직 미성숙함
    
    강사님 추천: npm
        ㄴ 아직까진 npm이 강세. 공식문서에서 npm기준 설명이 많음
        ㄴ 터줏대감 고인물 짬바 점유율 정보많음 등등


        면접 단골문제
        1. npm과 YARN과 PNPM과 BUN의 차이?
        2. 면접자님은 어떤걸 써야한다고 생각하시나요? 근거는?

        내 생각:
        npm의 안정성과 인프라를 무시하고 쓸만한 혁신적인 속도의 차이가 다른 패키지 매니저에서
        발생하지는 않는다고 생각함
*/

/*
    [패키지 버전 읽는 법]
    Sementic Versioning (SemVer)

    1.0.0-beta
    
    1: 메이저 - 주요릴리즈
        ㄴ 패키지에서 굉장히 큰 변화가 있을 때 증가
        ㄴ 주로 이전 버전과 호환성을 깨뜨릴 정도의 중요한 패치

    .0: 마이너 - 새로운 기능
        ㄴ 이전 버전과 호환성은 유지하나, 새로운 기능 추가

    .0: 패치 - 버그 수정
        ㄴ 이전 버전과 호환성은 유지하나, 버그 수정

    -beta: 옵셔널 - 특정 버전 뒤에 문자열로 된 의미를 부여하고 싶을 때 사용
*/

/*
    "하나의 파일"에서 그 파일의 이름과 똑같은 이름의 "하나의 함수"를 리턴하는걸
    => 컴포넌트 라고 부르기로 하는 사회적 약속(관례)
*/
