// 라우트 Route
// 라우트들의 집합 Routes

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Setting from "./pages/Setting";
import DafaultLayout from "./layouts/DafaultLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트 */}
        <Route element={<DafaultLayout />}>
          {/* index 는 path="/" 와 같다. 기본이 되는 경로 */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* 동적 세그먼트 */}
          <Route path="team/:id" element={<Team />} />
          {/* <Route path="team/:id/group/:groupId" element={<Team />} /> */}

          {/* 라우트 프리픽스 */}
          <Route path="v1">
            {/* 동적 세그먼트 + 라우트 프리픽스 */}
            {/* <Route path=":id" element={<Team /> />} */}
            {/* 중첩 라우트 */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="summary" element={<Summary />}></Route>
              <Route path="setting" element={<Setting />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
