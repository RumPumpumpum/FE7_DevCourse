// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function (n1: 매개변수타입):반환값의 타입 {}

function sum(n1: number, n2: number): number {
  return n1 + n2;
}
function concat(s1: string, s2: string): string {
  return s1 + s2;
}

concat("Hello", "Jiho");

// 함수의 반환 형 지정 안할 시 타입 추론
// 매개변수는 타입 추론 불가능

// 반환값에서 void 사용 가능
// c++에서 void main(){} 과 비슷

// never 타입 : 절대 반환하지 않는 함수
// void는 개발자가 의도한다면 return; 가능
// never는 return; 조차도 불가능
// 주로 예외처리 시 에러를 발생시키는 함수에서 사용

{
  // 함수 표현식의 타입을 지정하는 방법
  const suma = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  // 변수에다가 함수 타입을 지정하는 방법
  const sumb: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // 둘 다 하던지(잘 안하긴 함)
  const sumc: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
}

{
  // 화살표 함수
  //1. 함수 표현식의 타입을 지정하는 방법 (함수 구현부)
  const suma = (n1: number, n2: number): number => n1 + n2;

  //2. 변수에다가 함수 타입을 지정하는 방법 (타입 시그니쳐)
  const sumb: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

  //3. 둘 다 하던지(잘 안하긴 함)
  const sumc: (n1: number, n2: number) => number = (
    n1: number,
    n2: number
  ): number => n1 + n2;
}

{
  // 옵셔널 파라미터. 넘겨도 되고 안넘겨도 되는 파라미터
  // 옵셔널 파라미터는 무조건 맨 뒤에 있어야 함(먼저 사용하면 안됨)
  // n2?: number 이지만 실제로는 n2?: number | undefined
  function sum(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }

  sum(10); // 10
  sum(10, 20); //30
}

{
  function sum(a: number | string, b: number | string): number | string {
    return a + b; // 유니언 타입끼리는 + 연산 불가능
  }
}

{
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    if (typeof a === "number" && typeof b === "number") return a + b; // 숫자 덧셈
    throw new Error("값이 다름");
  }
}

// 함수 오버로딩
// 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
// 화살표 함수에는 지원 안함. 함수 선언문에서만 가능
{
  // 함수 오버로딩 시작
  function sum(a: string, b: string): string;
  function sum(a: number, b: number): string;
  // 함수 오버로딩 끝
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a}${b}`;
  }

  const str = sum(10, 10); // 성공
  const str2 = sum(10, "10"); // 에러

  /*
 C++과는 다르게, 각 오버로딩에 따라 다른 구현부를 작성하는 것이 아니라,
 하나의 구현부에서 모든 오버로딩 케이스를 처리함
 뭘 넣으면 되고, 뭘 넣으면 안된다 라는걸 오버로드 시그니처에서 정의함
  */
}
