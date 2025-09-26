import { Link, NavLink, Outlet } from "react-router";

export default function DafaultLayout() {
  return (
    <>
      <header>
        <h1>header</h1>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {({ isActive }) => <span>about{isActive && "(선택됨)"}</span>}
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}
