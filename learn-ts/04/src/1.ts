{
  // any와 unknown의 차이!

  /*
        any : 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
            ㄴ 무슨 타입을 넣을 지 모를 때 사용하고 TODO로 주석 남겨놓기
            ㄴ any는 모든 타입 검사를 무력화 함


        unknown : 알 수 없는 타입 (안전한 any, 유연한 any)
            ㄴ 타입이 알 수 없는 것 까진 동의, 다만 unknown 타입의 값을 활용할 때는 검증 필요
                ㄴ 타입가드를 활용하여 검증해야한다. 
                ㄴ ex) typeof x === "number" 라면 toFixed 가능!
        
        "차라리 any를 쓸 거면 unknown을 써라!"
    */
  let x: unknown;
  x = 10;
  x = "A";
  x = null;
}

{
  // **시험에 나옵니다

  // 타입 단언
  // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용
  // "타입은 내가 정의하겠다. 따라와잇"
  let x: unknown;
  x = 10.12; // << 숫자가 들어갈 걸 나는 이미 알고있다!

  //사용 방법 두가지
  //1. as
  (x as number).toFixed(1); // x 는 이후로 number다.

  //2. <>
  (<number>x).toFixed(1); // 리액트에선 안 씀, JSX 문법과 충돌남!

  // 장점 -> 타입을 내가 원하는대로 지정할 수 있음
  // 단점 -> 책임은 개발자가 가져야함...

  const el = document.querySelector("#user") as Element; // 얘는 절대로 null이 올 수가 없어!
  el.addEventListener("click", function () {});
}
