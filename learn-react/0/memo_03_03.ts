/*
    폰트
        - link를 이용해 가져오면, 캐시가 적용되어 빠르게 가져옴
        - import를 이용해 가져오면, 캐시가 적용되지 않아 매번 일일히 가져옴
    
    1.구글 폰트에서 폰트 가져오기!
     1. 구글 폰트에서 원하는 폰트 찾음
     2. Embed code로 가져오기
        ㄴ link 형식으로 복사
     3. index.html에 해당 링크를 붙혀넣기
     4. index.css가 font.css를 불러옴
     5. font.css에서 Nanum Pen Script: CSS class 를 붙혀넣기

    2. 또는 눈누에서 쓰는 경우도 있음
            ㄴ noonnu.cc
    
    3. 다운로드 받아 사용하기
        ㄴ src/fonsts에 폰트 넣어서 쓰기

    4. Woff
        ㄴ Web Open Font Format
    4-1. Woff2
        ㄴ OFF의 개선된 버전인 WOFF2는 WOFF보다 더 뛰어난 압축 기술을 사용
        ㄴ 현재 대부분의 최신 브라우저는 WOFF2를 지원
        ㄴ woff2랑 woff 둘 다 배치할 때, 먼저 적용하고 싶은 확장자를 먼저 배치하면 그것부터 확인한 후,
        브라우저가 지원하지 않으면 그 다음 확장자가 불러와진다.
*/

/*
    이미지
    
    이미지 파일이 src 밑에 있냐, public 밑에 있냐에 따라 사용법이 달라짐
    1.public 밑
        ㄴ css에   background: url("/images/bird.jpg"); 를 클래스에 넣어서 쓰거나
        ㄴ js에서 <img src="/images/bird.jpg" /> 로 쓰거나
    2.src 밑
        ㄴ import를 이용해서 사용해야한다
            ㄴ import bird from "./assets/images/bird.jpg"
    pixabay - 이미지 다운 사이트


    -절대 경로 (Absolute Path) : public 폴더 밑에 있을 때 사용
        .bg 클래스에 사용된 url("/images/light.jpg")가 이에 해당

        웹사이트의 최상위 루트(root) 폴더를 기준으로 경로를 지정
        여기서 /는 public 폴더를 의미

    - 상대 경로 (Relative Path) : src 폴더 밑에 있을 때 사용
        .bg2 클래스에 사용된 url("../assets/images/light.jpg")가 이에 해당
        현재 CSS 파일의 위치를 기준으로 경로를 지정합니다.
        ..는 상위 폴더를 의미


    - public 폴더의 파일은 빌드 도구로 번들링되지 않고 그대로 복사된다
        ㄴ 번들링: 여러 개의 소스 코드 파일(JavaScript, CSS, 이미지 등)을 
            하나의 파일로 합치고 최적화하는 과정

    

/*
리액트에서 이미지는 public 폴더 또는 assets 폴더에 넣어서 활용할 수 있습니다. 
학습하면서 살펴봤던 것처럼 어디에 넣어서 활용하느냐에 따라서 활용 방법도 달라집니다. 
그러면 어떤 방식을 선택해서 이미지를 활용하는 게 좋을까요?

- public
우선 public 폴더에 저장하면 공용이 됩니다. 
요컨대, 나중에 서비스를 배포하더라도 https://서비스도메인/sample.png 처럼 도메인을 
통한 접근이 가능하다는 이야기입니다.

-assets
assets 폴더에 저장된 이미지는 공개적으로 노출되지 않습니다. 
오직 리액트 시스템 내부에서만 활용 가능합니다.
 또한, 코드 파일에서 import 구문으로 불러오면 리액트가 빌드 프로세스 과정 중에 
 자동으로 이미지를 최적화 해주며, 웹 사이트에 제공하기 직전에 public 폴더에 삽입됩니다.

- 그래서 결론은?
빌드 프로세스에 의해서 처리되지 않는 이미지는 public 폴더에 넣어줍니다. 
주로 파피콘 같은 이미지를 public 폴더에 넣습니다. 
반면 컴포넌트 내에서 사용되는 이미지는 일반적으로 src/assets 폴더 하위에 넣는 게 좋습니다.

*/
