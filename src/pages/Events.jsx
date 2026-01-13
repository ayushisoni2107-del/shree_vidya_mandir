import Nav from "../Institutes/Nav";
import Events from "../Events/Events"
import Annual from "../Events/Annual";
import Footer from "../Components/Footer";

function Event(){
    return(
        <>
        <Nav />
        <div></div>
        <Events />
        <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
        <Annual />
        <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
        <Footer />
        </>
    );
}
export default Event;