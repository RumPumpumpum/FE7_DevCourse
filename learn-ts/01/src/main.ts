// 변수:타입
// 기본 자료형

{
  const str: string = "Hello";
  const num: number = 10;
  const bool: boolean = true;
  const undi: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol("a");
  const big: bigint = 100n;

  console.log(typeof str);
  //   str = true; 컴파일 에러
  // 한번 타입을 지정해 버리면 타입 변경 불가능할까?
  // YES 한번 지정하면 그 변수는 프로그램 종료까지 해당 타입만 사용 가능
}

// 2.참조 자료형
// 2.1 배열
{
  // []
  // Array<> (제네릭 문법)
  // 제네릭 문법: 타입을 파라미터로 받는 문법

  const arr: number[] = [1, 2, 3]; // 숫자만 담긴 배열
  arr.push(4);
  const arr2: Array<number> = [1, 2, 3]; // 제네릭 문법
  arr2.push(4);
  console.log(arr, arr2);

  // 튜플(tuple) : 서로 다른 타입을 묶어서 사용하고 싶을 때
  const arr1_1: [number, string] = [1, "a"];
  //   const arr1_1: [number, string] = [1, "a", 3]; // 에러 이유 : 길이 초과

  // 배열의 중첩 (2차원 배열)
  const matrix: number[][] = [
    [1, 2],
    [3, 4],
  ];

  const maxrix2: Array<Array<number>> = [
    [1, 2],
    [3, 4],
  ];
  // 제네릭은 거의 안씀

  // 서로 다른 타입을 가진 배열 (튜플)
  const matrix3: [number[], string[]] = [
    [1, 2],
    ["a", "b"],
  ];
}

// 2.2 객체
{
  // 객체에 타입 지정하는 방법
  const obj: {} = {};
  const user: { name: string; age: number } = { name: "kim", age: 20 };
  console.log(user);

  const user2: {
    name: string;
    age: number;
    gender: string;
    fruits: string[];
    address: {
      zipcode: number;
      details: [string, string, number];
    };
  } = {
    name: "kim",
    age: 20,
    gender: "male",
    fruits: ["apple", "banana"],
    address: {
      zipcode: 111333,
      details: ["서울특별시", "관악구", 11],
    },
  };

  const members: { id: number; name: string }[] = [
    { id: 1, name: "kim" },
    { id: 2, name: "park" },
  ];
}

// 연습문제 플러스1
//이 변수의 타입을 지정하세요.
{
  let employee: {
    id: number;
    name: string;
    contact: { email: string; phone: string };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };
}

// 연습문제 플러스2
//이 변수의 타입을 지정하세요.
{
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];
}

// 연습문제 플러스3
{
  let numbers: number[] = [10, 20, 30, 40, 50];
}

// 연습문제 플러스4
{
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];
}

// 연습문제 플러스5
{
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
}

// 연습문제 플러스6
{
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];
}

// 연습문제 플러스7
{
  let items: [
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
}

// 연습문제 플러스8
{
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };
}

// 연습문제 플러스 9
{
  let mixedData: [string, number, boolean, string, number] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];
}

// 연습문제 플러스 10
{
  let company: {
    name: string;
    address: { street: string; city: string; country: string };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
}

// 연습문제 플러스플러스 1
{
  let complexData: {
    id: number;
    name: string;
    details: {
      description: string;
      dimensions: {
        height: number;
        width: number;
        depth: number;
      };
      tags: string[];
    };
    reviews: { user: string; rating: number; comment: string }[];
  } = {
    id: 1,
    name: "Product A",
    details: {
      description: "This is a great product",
      dimensions: {
        height: 10,
        width: 5,
        depth: 2,
      },
      tags: ["sale", "new", "featured"],
    },
    reviews: [
      { user: "Alice", rating: 4.5, comment: "Excellent!" },
      { user: "Bob", rating: 3.0, comment: "Decent product." },
    ],
  };
}

// 연습문제 플러스플러스 2
