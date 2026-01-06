import Navbar from "../Components/Navbar";
import Events from "../Events/Events"
import Annual from "../Events/Annual";
import Footer from "../Components/Footer";

function Event(){
    return(
        <>
        <Navbar />
        <Events />
        <Annual />
        <Footer />
        </>
    );
}
export default Event;