import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Legal from "../Components/Legal";
import Community from "../Components/Community";
import Diff from "../Components/Diff";
import Events from "../Components/Events";
import News from "../Components/News";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Legal />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Community />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Diff />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Events />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <News />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Footer />
      
      </>
  )
}
export default Home;