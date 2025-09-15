import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Header /> {/*빈태그, 셀프 클로징*/}
      <Nav />
      <Article />
      <Section />
      <Aside />
      <Footer />
    </>
  );
}
