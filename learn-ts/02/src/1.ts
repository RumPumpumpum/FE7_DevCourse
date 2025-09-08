{
  const str = "Hello";
  const num = 10;
  const bool = true;
  const undi = undefined;
  const nul = null;
  const sym = Symbol("a");
  const big = 100n;

  console.log(str); // 출력마저 잘 됨
}

// 자료형을 넣지 않았는데 왜 에러가 나오지 않을까?
// 이유: 타입스크립트가 변수의 타입을 추론했기 때문 (타입 추론)
// 타입추론: 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// ㄴ 타입스크립트에 내장되어 있는 기능

let a;
// 처럼 아무 것도 할당되어있지 않다면?
// any 타입이 된다. (모든 타입을 허용하는 특수한 타입)
// = 타입스크립트의 타입 검사를 사용하지 않겠다

let b: any; // TODO: 나중에 타입 지정하기
b = 10;
b = "Hello";
//처럼 해놓고 넘어갈 수 있음

// 타입 추론을 적극적으로 사용 하든 안한든, 중요한건 자기만의 기준이 있어야 한다는 것
// 그리고 그 기준을 일관성 있게 지키는 것

////////////////////////
let str2 = "Hello";
// str2: string
const str3 = "Hello";
// const에 Hello라는 값이 할당되어있기 때문에 str2의 타입은 string 리터럴 타입이 된다.
// 리터럴 타입: 값 자체가 타입이 되는 것, 즉 Hello라는 값만 가질 수 있는 타입
// str3: "Hello"
