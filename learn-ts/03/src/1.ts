{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 20 };
  const position: { x: number; y: number } = point;

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (x: number, y: number) => number = fn1;
}

{
  // readOnly
  // freeze와 비슷
  // 읽을수는 있는데 수정할 수는 없음

  const user: {
    readonly name: string;
    readonly age: number;
  } = {
    name: "kim",
    age: 20,
  };

  user.name;
  user.age;

  //   user.name = "park";
  //   user.age = 20;

  const numArr: readonly number[] = [1, 2, 3]; // 배열에도 적용 가능
}

{
  // 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법

  const user: {
    name: string;
    gender?: string;
    address?: string; // 있을지도 없을지도 모를 속성때문에, 코드의 가독성이 떨어짐
  } = { name: "kim" };

  user.gender = "male";

  // 인덱스 시그니처를 사용한다면? >>>

  const user2: {
    [key: string]: string | number; // 인덱스 시그니처
  } = {
    name: "kim",
  };
  user2.gender = "male";
  user2.address = "changwon";
  user2.age = 20;
  // 단점. 포괄적으로 존재하기 때문에, 정확하게 어떤 속성이 있는지 모름, 타입추론 안됨
  // 존재하지 않는 값에 접근하려고 해도 에러가 안 남
  // 사용하지 않으려고 하는게 바람직하나, 실무에서는 쓰는 경우도 꽤 보임
}

{
  const add: (a: number, b: number) => number = (a, b) => a + b; // 길어질 수록 이렇게 한번에 짜긴 힘듦
  //   const adds = (a, b) => a + b; 이렇게 시작해서 타입을 붙히면 좀 쉬움

  // 함수 -> 일급 객체
  // 함수에 대한 타입을 지정할 때, 객체의 형식으로 지정할 수 있다.
  // 다만, 직관적이지 않아 사용하지 않을 뿐 가능은 하다
}
