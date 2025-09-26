/*
    폼 제어하는 방식 2가지
        상태제어
        Dom방식

    썸네일 2가지 방식
        이미지 파일을 서버에 업로드하는 방식
        이미지를 Base64 문자열로 인코딩한 후에 Data URL로 만드는 방식
            ㄴ const reader = new FileReader()
                ㄴ reader.onloadend = () => {}
                    ㄴ reader.readAsDataURL(file);

   
                    
    axios
    zustand
    immer


    포스트를 불러오기 위해 최소 3가지의 상태가 필요
    - 데이터를 다룰 상태
    - 로딩을 처리할 상태
    - 에러를 처리할 상태


    - npm min read

    - 검색기능
        fetchPosts("posts?title_like=" + terms);
            ㄴ json서버에 구현되어있는 기본 기능

        fetchPosts(`posts?id_ne=${params.id}`);
            ㄴ json 서버 기본 구현 기능,
            ㄴ 현재 사용자가 보고있는 게시물의 ID
            ㄴ id_ne= : ID가 이것과 같지 않은.
            즉, 현재 보고있는 게시물을 제외한 나머지 게시글을 가져옴
  
    npm dev all -> Concurrenrty 이용


    컴포넌트를 매개변수로 받아서,
    컴포넌트로 돌려주는 것
    > 고차 컴포넌트
        ㄴ 컴포넌트를 매개변수로 받아 새로운(강화된) 컴포넌트를 반환하는 함수  
            ㄴ ex) React.memo


*/
