import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <ContactMe></ContactMe>
    <Footer></Footer>
   </div>
  );
}
