{
  // 인덱스 접근 타입
  // 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입 차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  // console.log(Person); (안됨)
  // type 키워드는 오직 컴파일 시점에만 존재하는 문법

  type NameType = Person["name"]; // Person에서 name이라는 키에 해당하는 값의 타입
  type AgeType = Person["age"]; // age라는 키에 해당하는 값의 타입

  // 두 속성의 타입을 모두 가져온 다음, 이들을 유니온 타입으로 결합하여 새로운 타입을 정의
  type NameAndAge = Person["name" | "age"];
}

{
  const enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }

  // const enum 이기 떄문에, 파일 크기는 작아지지만 아래와 같이 추가적인 가공을 하지 못한다.
  /*
  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));

  console.log(options);
*/
}

{
  // const 단언
  // 값을 리터럴로 바꿔줌
  // 객체의 속성의 값을 readOnly로 바꿔줌
  let x = "Hello" as const;
  const numArr = [1, 2, 3] as const; // readOnly로 바뀜
  // push 안됨, 값 변경 안됨

  const obj = {
    name: "kim",
    age: 20,
  } as const;
  //  readonly name: "kim";
  // readonly age: 20;
}

///////////////// 결론부 ////////////////////////
{
  // 그래서 최신 트랜드는?
  // const enum과 일반 enum은 각각 장단이 명확하다!
  // 두 가지의 장점만 취한 방법
  // 알아야 하는 개념 : <인덱스 접근 타입>, <const 단언>

  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const; // const 단언

  type Status = (typeof Status)[keyof typeof Status]; // 인덱스 접근 타입
  // type Status = "PENDING" | "SUCCESS" | "FAIL"

  // [keyof typeof Status]: Status의 Key를 추출한 후,
  //  (typeof Status)[...]: Status의 key-value 값에서 위에서 찾은 모든 키에 해당하는 값의 타입 추출
  //  type Status = "PENDING" | "SUCCESS" | "FAIL" : 값들이 결합되어 유니온 타입으로 들어간다.

  // 사실상 공식이다. 외워도 됨

  //////////////////////////////////////////

  // const options = Object.values(Status).map((value) => ({
  // 같은 문법을 사용할 수 있게 되었음. 일반 enum의 장점을 가져온건 확인,
  // 근데 const enum의 장점은 안 가져온거 같음.. => 코드 길이가 안 줄어들었음
  // 정말로 그럴까? 아래 과정을 통해서 알아보자 >>

  // 번들러(도구)-> SASS, SCSS, TS -> HTML, CSS, Javascript
  //    ㄴ 트리 세이킹 -> 불필요한 코드를 제거해주는 기능(과정)
  //        ㄴ (나무를 흔들어 죽은 잎사귀를 떨구는 것 처럼, 필요없는 코드를 삭제하는 과정)

  // Enum은 트리 세이킹이 적용되지 않는다..! 번들링으로 파일 크기가 줄어들지 않음
  // 그러나, as const를 사용한 방법으로 구현하면, Success 속성을 사용중이라면,
  // 사용하지 않는 Pending, Fail을 제거하는 선에서 트리 세이킹이 적용되게 된다!

  // 따라서 일반 enum과 const enum의 장점을 모두 가져온!
}
