{
  const user1: {
    name: string;
    age: number;
    gender: string;
  } = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  // 유저 100개가 필요하면 어떻게 할거임?
  // 나만의 커스텀 타입을 만들 수 있는 방법을 제공한다.
  // *타입 별칭*
  // 첫 문자는 대문자로 하는게 관례

  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  const user2: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  const user3: Person = {
    name: "park",
    age: 25,
    gender: "female",
  };
}

{
  // 1. 기본 타입 별칭
  type ID = string | number;
  type StringID = string;
  type NumberID = number;

  const serviceId: ID = 10;
  const userId: StringID = "teacher-kim"; // 문자 ID겠구나
  const productId: NumberID = 1; // 숫자 ID겠구나~
}

{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number;
  };
  type Person = {
    [key: string]: string | number;
  };

  const per1: User = {
    name: "kim",
    age: 20,
  };
  const per2: Person = {
    name: "kim",
    age: 20,
  };
}

{
  // 3. 함수 타입 별칭
  type AddFunc = (a: number, b: number) => number;
  const add: AddFunc = (a, b) => a + b;
}

{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}

{
  // 5. 인터섹션(유니온) 타입 별칭(= 타입 확장)
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID; // 다른 타입 별칭을 재료로 사용할 수 있다.
}

{
  // 6. 리터럴 타입 별칭
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "LEFT";
}
