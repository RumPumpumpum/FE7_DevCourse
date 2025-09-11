// 유틸리티 타입
{
  /*
        유틸리티 타입이란?

        정의: 타입스크립트에서 이미 존재하는 타입을 변형하거나, 
        재활용하기 위해서 제공되는 내장 타입 도우미
        (마치 표준 내장 객체처럼 타입을 다루기 위한 기능이 구현되어져 있는 내장 타입)

        기존에 존재하는 타입을 변형하여 만들어지기 때문에
        다양한 타입을 포괄적으로 수용하기 위하여
        제네릭을 기반으로 만들어짐!
    */
}

// Partial :  주어진 타입 T의 모든 속성을 선택적으로 만듬,
{
  interface User {
    name: string;
    age: number;
    email: string; // 이메일 인증을 거친 사람만 정보를 가져오게 하고 싶음
  }
  interface NoAuthUser {
    name: string;
    age: number;
    email?: string; // 이메일 인증을 거친 사람만 정보를 가져오게 하고 싶음
  }

  // 이메일 인증한 사람
  const u1: User = {
    name: "kim",
    age: 20,
    email: "test@naver.com",
  };

  // 이메일 인증 안 한 사람
  const u2: NoAuthUser = {
    name: "kim",
    age: 20,
  };

  // 음.. 뭔가 인터페이스가 중복이 되는데 다른 방법 없나?
  // 아래에서 partial을 이용한 해결
}

{
  // partial을 이용해 일부 속성만 사용
  interface User {
    name: string;
    age: number;
    email: string; // 이메일 인증을 거친 사람만 정보를 가져오게 하고 싶음
  }

  // 이메일 인증한 사람
  const u1: Partial<User> = {
    name: "kim",
    age: 20,
    email: "test@naver.com",
  };

  // 이메일 인증 안 한 사람
  const u2: Partial<User> = {
    name: "kim",
    age: 20,
  };
}

// Required<T> : 주어진 타입 T의 모든 속성을 필수적으로 만듬, partial의 반대
{
  interface User {
    name?: string;
    age?: number;
    email?: string;
  }

  // 예제 1: 모든 속성을 필수로 만듦
  const user1: Required<User> = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  // 예제 2: 속성 하나라도 빠지면 오류
  // const user2: Required<User> = { name: "Alice" };  // 오류: age와 email은 필수

  // 예제 3: 모든 속성이 필수
  const user3: Required<User> = {
    name: "Bob",
    age: 40,
    email: "bob@example.com",
  };

  // 예제 4: 속성 하나라도 빠지면 오류
  // const user4: Required<User> = { name: "Charlie", email: "charlie@example.com" };  // 오류
}

// Readonly<T> : 주어진 타입 T의 모든 속성을 읽기 전용으로 만듬

// Pick<T, K> : 주어진 타입 T에서 선택한 속성(K)만 추출하여 새로운 타입을 만듬
// 주어진 객체에서 특정한것만 뽑아 쓴다
{
  interface User {
    name: string;
    age: number;
    email: string;
  }

  // 예제 1: name과 email만 선택
  const user1: Pick<User, "name" | "email"> = {
    name: "John",
    email: "john@example.com",
  };

  // 예제 2: name만 선택
  const user2: Pick<User, "name"> = { name: "Alice" };

  // 예제 3: email과 age만 선택
  const user3: Pick<User, "email" | "age"> = {
    email: "alice@example.com",
    age: 25,
  };

  // 예제 4: age만 선택
  const user4: Pick<User, "age"> = { age: 40 };
}

// Omit<T, K> : Pick 의 반대. T에서 K속성만 빼서 나머지 모든걸 추출
{
}

// Record<K, T> : 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성합니다.
{
}

// Exclude<T, U> :  타입 T에서 타입 U를 제외한 나머지 타입을 반환합니다.
// omit이랑 비슷한데?
// 차이점: omit은 객체 타입에서 특정 키를 제외
// Exclude는 유니온 타입에서 특정 타입을 제외
{
  type MyType = "a" | "b" | "c";

  // 예제 1: "b"를 제외한 나머지 타입 반환
  type Result = Exclude<MyType, "b">; // "a" | "c"
  const value: Result = "a"; // 유효

  // 예제 2: "a"를 제외한 나머지 타입 반환
  type Result2 = Exclude<MyType, "a">; // "b" | "c"
  const value2: Result2 = "b"; // 유효

  // 예제 3: 여러 값을 제외한 나머지 타입 반환
  type Result3 = Exclude<MyType, "a" | "c">; // "b"
  const value3: Result3 = "b"; // 유효

  // 예제 4: "c"를 제외한 나머지 타입 반환
  type Result4 = Exclude<MyType, "c">; // "a" | "b"
  const value4: Result4 = "b"; // 유효
}

// Extract<T, U> : 얘도 pick이랑 비슷하지만, 유니온 타입을 타겟으로 함
{
}

// NonNullable<T> : 타입 T에서 null과 undefined를 제외한 타입을 반환합니다.
{
}

// ReturnType<T> : 주어진 함수 타입 T의 반환 타입을 추출합니다.
{
}
