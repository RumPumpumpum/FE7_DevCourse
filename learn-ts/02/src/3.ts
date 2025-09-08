{
  // 타입 오퍼레이터
  //1. 유니언 타입 -> | (파이프) <주의! || 는 OR이다>
  // ㄴ 두 개 이상의 타입을 합쳐서 사용하는 것, A 또는 B 타입
  //
  //2. 인터섹션 타입 -> & (엠퍼샌드), <주의! && 는 AND이다>
  // ㄴ 두 개 이상의 타입을 모두 만족하는 것, A 그리고 B 타입
  // ㄴ 객체 타입에서 주로 사용
  const user: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };

  // 타입가드
  // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
  /*
    타입스크립트는 정적 타입 언어라서, 변수가 가질 수 있는 타입을 컴파일 타임에 추론합니다.
    하지만 유니온 타입(string | number | boolean)처럼 여러 타입을 가질 수 있는 경우, 
    실제로 실행(run-time) 해서 확인하기 전에는 어떤 타입인지 알 수 없습니다.

    이 때, 런타임 검사 결과를 바탕으로 타입스크립트에게 "여기는 특정 타입으로 좁혀도 돼!" 
    라고 알려주는 문법이 타입 가드입니다.
  */

  let x: number | string = 10;
  // x.toFixed(2); // 에러: string에는 toFixed가 없음

  function printValue(x: number | string) {
    // 타입가드 사용
    if (typeof x === "number") {
      console.log(x.toFixed(2)); // number로 좁혀짐
    } else {
      console.log(x.toUpperCase()); // string으로 좁혀짐
    }
  }

  // 정적일 때는 판단 불가능 -> 런타임에 실제 검사 결과를 바탕으로 판단
  // 타입가드는 if문이랑 typeof로 많이 사용

  // 결론: 유니온 타입은 바로 특정 타입의 메서드/프로퍼티에 접근 불가
  // 타입가드를 사용해 런타임 검사로 타입을 좁혀야 안전하게 사용할 수 있음
}

{
  // 매개변수가 콜백 함수일 때

  function printValue(callback: (msg: string) => void): void {
    callback("Hello");
  }

  printValue((msg: string) => {
    console.log(msg);
  });

  // 반환값이 함수일 때
  function createMulitplier(factor: number): (num: number) => number {
    return (num) => num * factor;
  }
}
