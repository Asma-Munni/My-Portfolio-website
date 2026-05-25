import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contact/page";
import Footer from "./components/Footer";
import Projects from "./projects/page";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
   </div>
  );
}
