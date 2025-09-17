export default function App() {
  const isLogin = true;
  // if (isLogin) return <h1>로그인 되었습니다.</h1>;
  // return <h1>로그인 되지 않았습니다.</h1>;

  // return <h1>{isLogin ? "로그인 되었습니다" : "로그인 되지 않았습니다."}</h1>;
  return (
    <>
      {isLogin && <h1>로그인 되었습니다.</h1>}
      {!isLogin && <h1>로그인 되지 않았습니다.</h1>}
    </>
  );
}
