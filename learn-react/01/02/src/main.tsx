import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

function InnerFunc() {
  return <h1>inner function</h1>;
}
function App2() {
  return <InnerFunc />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <h1> hihi</h1>
    <App2 />
  </StrictMode>
);
