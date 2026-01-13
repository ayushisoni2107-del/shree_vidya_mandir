import Navbar from "../about/Navbar";
import History from "../about/History";
import Pillar from "../about/Pillar";
import Truste from "../about/Truste";
import Team from "../about/Team";
import Board from "../about/Board"
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ borderBottom: "5px solid #e0e0e0" }}></div>
      <History />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Pillar />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Truste />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Team />
      <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
      <Board />
      <div style={{height: "60px", borderBottom: "8px solid #e0e0e0" }}></div>
      <Footer />
      </>
      );
    }
export default About;