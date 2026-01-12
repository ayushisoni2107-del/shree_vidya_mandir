import Navbar from "../about/Navbar";
import Alumni from "../alumni/Alumni";
import Footer from "../Components/Footer";

function Alumni1(){
    return(
        <>
        <Navbar />
        <Alumni />
        <main
        style={{
          minHeight: "70vh",     // keeps footer at bottom
          paddingBottom: "80px"  // space between content & footer
        }}></main>
        <Footer />
        </>
    );
}
export default Alumni1;