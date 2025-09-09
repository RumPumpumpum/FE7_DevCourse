{
  // 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법

  // type은 type 식별자 = 할당
  // interface는 식별자 {}  >> 객체를 위한 형식이라 중괄호로만
  interface Person {
    name: string;
    age: number;
    greet(message: string): void;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    greet(message) {
      console.log(`${message}, ${this.name}`);
    },
  };
}

{
  // 인터페이스 - 자동병합
  // 같은 이름으로 지정하는게 가능

  interface Person {
    name: string;
  }
  interface Person {
    age: number;
  }

  // Person은 name과 age를 가지고 있게 됨
  const person: Person = {
    name: "kim",
    age: 20,
  };
}

{
  // 인터페이스 - 상속
  // 타입 별칭에는 없는 개념

  // 1. 기본적인 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    // Person의 name과 age를 상속
    skill: string;
  }

  const developer: Developer = {
    name: "jiho",
    age: 20,
    skill: "js",
  };
}

{
  // 2. 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }
  interface Swimmer {
    swim?(): void;
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const duck: Bird = {
    fly() {},
    sound() {},
  };
}

{
  // 국내에서는 대부분 객체는 인터페이스로 정의함
  // 그 외에는 타입 별칭
}
