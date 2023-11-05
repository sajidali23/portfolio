import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
