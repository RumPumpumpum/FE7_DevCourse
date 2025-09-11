// 제네릭
{
  // 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
  // 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.

  function getFirstElement(arr: number[]): number {
    return arr[0];
  }

  function getFirstElementString(arr: string[]): string {
    return arr[0];
  }

  function getFirstElementBool(arr: boolean[]): boolean {
    return arr[0];
  }

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElementString(["A", "B", "C"])); // "A"
  //   console.log(getFirstElement([true, false])); // true
  // 이렇게 하나하나 넣다보면 감당 불가능해진다.
}

{
  // 함수의 제네릭
  // <> 사이에 변수의 타입이 들어가는데, T (Type) 으로 적는 관례가 있음
  // 혹은 K(Key):객체의 키, V(Value):객체의 값, E(Element):배열의 요소나 이벤트
  // U(another Type) : T 이외에 만만하면 U
  function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  console.log(getFirstElement<number>([1, 2, 3])); // T가 number로 치환이 된다
  const a = getFirstElement([1, 2, 3]);
  // const a: number 추론에 치환된 자료형만 나타남
  // const a = getFirstElement<number>([1,2,3]) 으로 쓸 수도 있지만?
  // 타입명시가 꼭 필요하지 않다면, 가독성을 위해 타입 추론을 활용하는걸 권장(꺾쇠 없이 사용)

  // 제네릭 안쓰면?
  function getFirstElementNotGeneric(
    arr: number[] | string[] | boolean[]
  ): number | string | boolean {
    return arr[0];
  }
  const b = getFirstElementNotGeneric([1, 2, 3]);
  // const b: string | number | boolean 추론에 모두 다 등장함
}

{
  // null 아님 보장 연산자
  // 이건 null이나 undefined가 아닐거야!
  function getFirstElement<T>(arr: T[]): T | undefined {
    // T | undefined -> null아님을 개발자가 보장한다
    return arr[0]!; // ! -> null아님을 개발자가 보장한다
  }

  // 1.반환값에 undefined를 유니온으로 포함하기 (: T | undefined)
  // 2.반환값 뒤에 !를 붙여서 Null 아님 보증하기 (arr[0]!;)
}

{
  // 제네릭 안쓸때
  function mergeObj(
    obj1: { name: string; age?: number },
    obj2: { age: number; genmder?: string }
  ): { name: string; age?: number } & { age: number; genmder?: string } {
    return { ...obj1, ...obj2 };
  }

  // 제네릭 쓰면?
  function mergeObjGeneric<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  // 꺾쇠안에 타입 명시 한다면..? 가독성 급하락
  const mer0 = mergeObjGeneric<{ name: string }, { age: number }>(
    { name: "kim" },
    { age: 20 }
  );

  // 타입 명시 생략!
  const mer1 = mergeObjGeneric({ name: "kim" }, { age: 20 });
  const mer2 = mergeObjGeneric({ name: "kim", age: 20 }, { gender: "male" });
}

{
  function MakeTuple<T, K, V>(a: T, b: K, c: V): [T, K, V] {
    return [a, b, c];
  }
  const mixTuple = MakeTuple(1, "a", true);
  console.log(mixTuple);
}

{
  // 타입제약
  // 제네릭의 타입을 제한하는 문법
  // T extends U
  // function sumArray<T>(arr:T[]):T{
  //     return arr.reduce((a, c) => a + c, 0)
  //              ㄴ 제네릭은 다양한 타입인데 이건 num만 가능.. 이라는 경고가 나옴
  // }

  function sumArray<T extends number>(arr: T[]): number {
    return arr.reduce((a, c) => a + c, 0);
  }
  // T로 치환될떄는 number일 때만 치환 될 수 있는 조건이다!
  sumArray([1, 2, 3]);
  //   sumArray(["a","b"]); 에러!! number 아님

  // 위 코드는 제네릭의 장점이 사라져서 의미있는 코드는 아니지만,
  // 타입제약은 이런것이다! 라는 설명을 위한 코드
}

{
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  //   returnLength([1, 2, 3]); number는 length 속성이 없음
  //      ㄴ 숫자형 배열에는 length가 있지만, T를 뜻하는 숫자 그 자체에는 length가 없다!
  //        ㄴ 즉, extends는 T에 적용되는 것

  returnLength(["a", "b", "c"]); // string은 length 속성이 있음
  // length 라는 속성이 있는것만 넘어오게 할 수 있다!
}

{
  function logKey<T extends { name: string; age: number }>(obj: T): void {
    console.log(`${obj.name}, ${obj.age}`);
  }

  logKey({ name: "kim", age: 20 }); // logkey를 호출할 때, name과 age를 포함해야만 들어옴!
  // 자바스크립트의 특징인 구조적 타이핑으로 인해 gender도 들어갈 수 있음! name과 age만 보장되면 됨.
  /*
    구조적 타이핑 = 덕 타이핑(Duck Typing)
    오리처럼 걷고 오리처럼 꽥꽥거리는 것은 오리다
    = name과 age를 가지고 있는건 logKey다!
  */
  logKey({ name: "kim", age: 20, gender: "male" });
}

{
  // 인터페이스의 제네릭
  /*
        interface Box {
        value: string | number
        getValue(): string | number;
        }
        
        아으 보기싫어
        제네릭으로 바꾸자
    */

  type Box<T> = {
    value: T;
    getValue(): T;
  };

  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };

  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}

{
  // 클래스의 제네릭
  class Box<T> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box<string>();
  stringBox.add("A");
  stringBox.add("B");
  stringBox.add("C");
  console.log(stringBox.getAll());
}
