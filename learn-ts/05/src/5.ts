{
  // 선언 병합: 똑같은 이름의 인터페이스는 병합됨
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // 타입별칭은 선언 병합 안됨
  // type User ...
}

{
  // enum은 선언 병합 됨!!
  // 단, 아래처럼 값이 같으면 병함 안됨
  enum Direction {
    UP, // 0
    DOWN, // 1
  }
  enum Direction {}
  /*
    RIGHT, // 0
    LEFT, // 1
  */
}

{
  // 값이 다르면 선언 병합 가능!
  enum Direction {
    UP, // 0
    DOWN, // 1
  }
  enum Direction {
    RIGHT = 2,
    LEFT = 3,
  }
}

{
  // 조건부 타입 (삼항 연산자와 비슷)
  // T extends U ? X : Y
  // 만약 T가 U에 할당될 수 있으면(T가 U의 하위 타입이면) X 타입을 사용하고,
  // 그렇지 않으면 Y 타입을 사용하라

  type IsString<T> = T extends string ? "Yes" : "NO";
  type A = IsString<string>; // YES
  type B = IsString<number>; // NO
}

{
  type MyType = "a" | "b" | "c";
  // 예제 1:  "b"를 제외한 나머지 타입 반환
  type Result = Exclude<MyType, "b">; // "a" | "c"
}
{
  type MyExclude<T, U> = T extends U ? never : T; // never : 절대 값을 반환하지 않는다
  type MyType = "a" | "b" | "c";
  type Result = MyExclude<MyType, "b">; // "a" | "c"
  // a,b,c가 있을 때, b를 제거하고 싶다?
  // T에 a 와 c를 치환하여 반환하고,
  // b는 never로 반환되어 값을 반환하지 않는다.
  // 결론적으로 a와 c만 반환된다.

  // 위의 기존 Exclude 유틸리티를 조건부 타입으로 구현하였다.
  // 실제로 Exclude도 조건부 타입으로 구현되어 있음.
}
