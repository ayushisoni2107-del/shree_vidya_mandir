import Nav from "../Institutes/Nav";
import Achive from "../achive/Achive";

import Footer from "../Components/Footer";

function achives(){
    return(
        <>
            <Nav />
            <Achive />
            <div style={{height: "60px", borderBottom: "5px solid #e0e0e0" }}></div>
            <Footer />
        </>
    );
}
export default achives;