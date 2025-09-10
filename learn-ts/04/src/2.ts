//ENUM

{
  function moveX(direction: string): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
  }

  moveX("left");
  moveX("right");

  // 타입적으로 에러는 아니니 에러는 안뜨지만, 실행 되지는 않는다
  // left와 right만 넘어갈 수 있게 하려면 어떻게 할까?
  moveX("up");
  moveX("down");
}

{
  // 해결 방법?
  // 리터럴, 유니온, 타입 별칭을 이용한다!
  // 특정 함수에는 이것만 전달 할 수 있다. 라는 의도를 구현
  type MoveX = "left" | "right";
  function moveX(direction: MoveX): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
  }

  // 오류
  //   moveX("up");
  //   moveX("down");
}

{
  // 좀 더 효율적으로 사용할 수 없을까?
  // ENUM
  // - 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입

  enum CharacterMoveX { // 이동과 관련있는 LEFT, RIGHT
    LEFT,
    RIGHT,
  }

  enum RotationMoveX { // 회전과 관련있는 LEFT, RIGHT
    LEFT,
    RIGHT,
  }

  function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log("왼쪽으로 이동");
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log("오른쪽으로 이동");
    }
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);

  // 같은 LEFT RIGHT지만, Enum을 이용해서 매개변수를 구분 가능하다!
  // enum이 아니었다면, 왼쪽이동은 left, 왼쪽회전은 rleft 이런식으로 구분해야 했을 것
  characterMoveX(RotationMoveX.LEFT);
  characterMoveX(RotationMoveX.RIGHT);

  // 결국 ENUM으로 인해 가독성을 챙길 수 있게 되었다!
}

{
  // 역방향 매핑 (숫자형 이넘에서만 지원)
  enum CharacterMoveX { // 이동과 관련있는 LEFT, RIGHT
    LEFT, // 0
    RIGHT, // 1
  }
  console.log(CharacterMoveX);
  // { '0': 'LEFT', '1': 'RIGHT', LEFT: 0, RIGHT: 1 }
  // 열거형의 숫자 값(키)으로도 접근할 수 있다.
}

{
  // 숫자형 enum
  enum Direction {
    UP, // 0
    DOWN = 100, // 100
    LEFT = 300, // 300
    RIGHT, // 301
  }
  console.log(Direction.UP); // 명시적인 값 할당이 없었기 때문에 기본값인 0
  console.log(Direction.DOWN); // 100을 할당해서 100
  console.log(Direction.LEFT); // 300을 할당해서 300
  console.log(Direction.RIGHT); // 명시적인 값 할당이 없었지만, 앞 멤버의 값이 있기에 (앞멤버 값 + 1)

  //////// 아래와 같이 사용 가능 ///////////
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode): string {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }

  handleResponse(StatusCode.BadRequest);
}

{
  // 문자 num (열거형)
  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }

  console.log(Direction.UP); // Up
  console.log(Direction.DOWN); // Down
}

{
  // 혼합 enum (열거형)
  // 모든 값에 값을 할당해야한다!, 사용 할 경우가 거의 없긴 함
  enum Direction {
    UP = 100,
    DOWN = "Down",
    LEFT = 200,
    RIGHT = "Right",
  }
}

{
  // enum은 자바스크립트로 변환될 떄, 즉시 실행 함수로 복잡하게 변한다. (코드가 굉장히 길어짐)
  enum Direction {
    Up,
    Down,
  }
  console.log(Direction.Up);
  /*
  (컴파일 후 자바스크립트 코드)
  var Direction;
  (function (Direction) {
    Direction[(Direction["Up"] = 0)] = "Up";
    Direction[(Direction["Down"] = 1)] = "Down";
  })(Direction || (Direction = {}));
  console.log(Direction.Up);
  */

  /*
    이를 개선하고자 나온 const enum
        ㄴ 컴파일 단계에서 enum타입이 inline화 된다!
            ㄴ 인라인화란, 열거형 멤버를 사용한 부분이 실제 값으로 직접 대체되는 것을 의미합니다.
  */
  const enum DirectionConst {
    Up,
    Down,
  }
  console.log(DirectionConst.Up);
  // 컴파일 후 자바스크립트 코드
  // console.log(0 /* Up */);

  /*
    Q. 그럼 단점은 없나?
    A. 구현부가 흔적도 없이 사라진다.
    따라서, 역방향 매핑이 안됨
    DirectionConst[0]

    그렇지만 전체적인 파일의 사이즈를 줄여주어, 일반 enum보다 선호되는 경향이 있음
  */
}

{
  /*
        정리!!!
        객체 - interface (혹은 type)
        리터럴 타입 - enum (const enum)
        타입 별칭 - 유니온타입, 인터섹션
    */
  const enum Role {
    ADMIN = "admin",
    GUEST = "guest",
  }

  interface Account {
    id: number;
    role: Role;
  }

  type AuthAccount = Account & { token?: string };
}
